import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
// import PatientsList from "./components/patients/PatientsList.tsx";
import Modal from "react-modal";
import PatientsContainers from "./components/patients/PatientsContainer.tsx";
import PatientProvider from "./context/PatientDataProvider.tsx";
import Header from "./components/header/Header.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

Modal.setAppElement("#root");

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <PatientProvider>
          <Header />
          <PatientsContainers />
          <Toaster />
        </PatientProvider>
        {/* <App /> */}
        {/* <PatientsList /> */}
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
