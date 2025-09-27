import './App.css'
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { appRoutes } from "@/components/routes/routes";
import Header from './components/layout/Header/Header';

function App() {
  return (
    <Suspense>
      <Header></Header>
      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App
