import React, { useEffect, useRef, useState } from "react";
import { logoPath } from "@/constants/LogoPath";
import "./Logo.scss";


interface LogoProps {
  onAnimationComplete?: () => void;
  duration?: number;
  exitDelay?: number;
}

const Logo: React.FC<LogoProps> = ({
  onAnimationComplete,
  duration = 2000,
  exitDelay = 1000,
}) => {
  const strokeRef = useRef<SVGPathElement | null>(null);

  const [filled, setFilled] = useState(false);
  const [toHeader, setToHeader] = useState(false);
  const [hideLogoContainer, setHideLogoContainer] = useState(false);

  const setTimedState = (
    callback: () => void,
    delay: number
  ): number => window.setTimeout(callback, delay);

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
      setTimedState(() => onAnimationComplete?.(), duration + 120 + exitDelay + 800)
    );
    timeouts.push(
      setTimedState(() => setHideLogoContainer(true), duration + 120 + exitDelay + 1400)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [duration, exitDelay, onAnimationComplete]);

    

  const containerClasses = `logo-container ${hideLogoContainer ? "hide-logo-contianer" : ""}`;
  const svgClasses = `logo-svg ${filled ? "is-filled" : ""} ${toHeader ? "logo-to-header" : ""}`;

  return (
    <div className={containerClasses}>
      <svg
        className={svgClasses}
        viewBox="0 0 112 73"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo animation"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        <path
          ref={strokeRef}
          className="logo-stroke"
          d={logoPath}
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path className="logo-fill" d={logoPath} fill="url(#logoGradient)" />
      </svg>
    </div>
  );
};

export default Logo;
