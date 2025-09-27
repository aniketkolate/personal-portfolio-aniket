import React, { useEffect, useRef, useState } from "react";
import { logoPath } from "@/constants/logoPath";
import "./Logo.scss";

interface LogoProps {
  onAnimationComplete?: () => void;
  duration?: number;
  exitDelay?: number;
}

const Logo: React.FC<LogoProps> = ({
  onAnimationComplete,
  duration = 1500,
  exitDelay = 500,
}) => {
  const strokeRef = useRef<SVGPathElement | null>(null);

  const [filled, setFilled] = useState(false);
  const [toHeader, setToHeader] = useState(false);
  const [fadeBackground, setFadeBackground] = useState(false);
  const [resetContainer, setResetContainer] = useState(false);

  const setTimedState = (callback: () => void, delay: number): number =>
    window.setTimeout(callback, delay);

  useEffect(() => {
    const stroke = strokeRef.current;
    if (!stroke) return;

    const length = stroke.getTotalLength();
    stroke.style.transition = "none";
    stroke.style.strokeDasharray = `${length}`;
    stroke.style.strokeDashoffset = `${length}`;
    void stroke.getBoundingClientRect();

    requestAnimationFrame(() => {
      stroke.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(.22,.9,.12,1)`;
      stroke.style.strokeDashoffset = "0";
    });

    const timeouts: number[] = [];

    timeouts.push(setTimedState(() => setFilled(true), duration + 120));

    timeouts.push(setTimedState(() => setToHeader(true), duration + 120 + exitDelay));

    timeouts.push(
      setTimedState(() => setFadeBackground(true), duration + 120 + exitDelay + 400)
    );

    timeouts.push(
      setTimedState(() => {
        setResetContainer(true);
        onAnimationComplete?.();
      }, duration + 120 + exitDelay + 1600)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [duration, exitDelay, onAnimationComplete]);

  const containerClasses = [
    "logo-container",
    fadeBackground ? "fade-background" : "",
    resetContainer ? "reset-styles" : "",
  ].join(" ");

  const svgClasses = [
    "logo-svg",
    filled ? "is-filled" : "",
    toHeader ? "logo-to-header" : "",
  ].join(" ");

  return (
    <div className={containerClasses}>
      <svg
        className={svgClasses}
        viewBox="0 0 112 73"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo animation"
      >
        <path
          ref={strokeRef}
          className="logo-stroke"
          d={logoPath}
          fill="none"
          strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path className="logo-fill" d={logoPath} fill="var(--logo-fill-color)" />
      </svg>
    </div>
  );
};

export default Logo;
