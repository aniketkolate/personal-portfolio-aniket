import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const AboutPage = lazy(() => import("../../pages/About/About"));
const SkillsPage = lazy(() => import("../../pages/Skills/Skills"));
const ProjectsPage = lazy(() => import("../../pages/Projects/Projects"));
const ContactPage = lazy(() => import("../../pages/Contact/Contact"));

export const appRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/home" replace />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/skills",
        element: <SkillsPage />,
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    }
];
