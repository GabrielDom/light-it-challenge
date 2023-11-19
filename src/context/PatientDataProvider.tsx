import React, { ReactNode, useState, useEffect } from "react";
import { PatientContext } from "./PatientDataContext";
import useFetchPatients from "../hooks/useFetchPatients";
import { Patient } from "../services/types";

interface PatientProviderProps {
  children: ReactNode;
}

const PatientProvider: React.FC<PatientProviderProps> = ({ children }) => {
  const { data, loading, error } = useFetchPatients(
    "https://63bedcf7f5cfc0949b634fc8.mockapi.io/users"
  );
  const [patientData, setPatientData] = useState<Patient[]>(data);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editItemId, setEditItemId] = useState<number | null>(null);

  useEffect(() => {
    if (data) {
      setPatientData(data);
    }
  }, [data]);

  const addPatient = (patient: Patient) => {
    const updatedData = [patient, ...patientData];

    setPatientData(updatedData);
  };

  const updatePatient = (updatedPatient: Patient) => {
    const updatedData = patientData.map((patient) => {
      if (patient.id === updatedPatient.id) {
        return updatedPatient;
      }
      return patient;
    });

    setPatientData(updatedData);
  };

  const handleAddModal = () => {
    setShowModal(!showModal);
  };

  const handleEditModal = () => {
    setEditModal(!editModal);
  };

  return (
    <PatientContext.Provider
      value={{
        data: patientData,
        loading,
        error,
        addPatient,
        showModal,
        editModal,
        handleAddModal,
        updatePatient,
        handleEditModal,
        editItemId,
        setEditItemId,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
