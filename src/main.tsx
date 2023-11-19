import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import PatientsContainers from "./components/patients/PatientsContainer.tsx";
import PatientProvider from "./context/PatientDataProvider.tsx";
import Header from "./components/header/Header.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <PatientProvider>
        <Header />
        <PatientsContainers />
        <Toaster />
      </PatientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
