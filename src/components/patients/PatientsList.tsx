import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getPatients } from "../../services/api";
import usePatients from "@/hooks/usePatients";
// import { PATIENTS } from "../../services/QueryKeys";
import PatientCard from "./PatientCard";
import { Patient } from "../../services/types";
import { ModeToggle } from "../mode-toggle";
import Pagination from "../pagination/Pagination";
import { Button } from "../ui/button";
import Modal from "react-modal";
import EditPatientForm from "./EditPatientForm";

const PatientsList: React.FC = () => {
  //   const {
  //     data: patientData,
  //     isLoading,
  //   } = usePatients();
  const {
    data: patients,
    isLoading,
    currentPage,
    patientsPerPage,
    setCurrentPage,
    // handleUpdatePatient,
    // addOrUpdatePatient,
    // refetchPatients,
    localPatients,
    // setLocalPatients,
  } = usePatients();
  //   const [patients, setPatients] = useState<Patient[]>([]);
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients
    ? patients.slice(indexOfFirstPatient, indexOfLastPatient)
    : [];

  //   const handleUpdatePatient = (updatedPatient: Patient) => {
  //     // add a new patient
  //     if (!updatedPatient.id) {
  //       setLocalPatients((patients) => [...patients, updatedPatient]);
  //       console.log("Datos agregados:", updatedPatient);
  //       return;
  //     }
  //     setLocalPatients((prevPatients) =>
  //       prevPatients.map((patient) =>
  //         patient.id === updatedPatient.id ? updatedPatient : patient
  //       )
  //     );
  //   };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | undefined>(
    undefined
  );

  const openModal = (patient?: Patient) => {
    // setSelectedPatient(patient || undefined);
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPatient(undefined);
    setIsModalOpen(false);
  };

  //   const handleEdit = (editedPatient: Patient) => {
  //     // if (!editedPatient.id) {
  //     //   setLocalPatients((patients) => [...patients, editedPatient]);
  //     //   console.log("Datos agregados:", editedPatient);
  //     //   return;
  //     // }
  //     setLocalPatients((prevPatients) =>
  //       prevPatients.map((patient) =>
  //         patient.id === editedPatient.id ? editedPatient : patient
  //       )
  //     );
  //     closeModal();
  //   };

  const handleEdit = () => {};

  return (
    <div>
      <ModeToggle />
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Patient Data Management
      </h2>
      <Button onClick={() => openModal()}>Agregar Paciente</Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Paciente"
        className="modal bg-white p-4 rounded-md max-w-md mx-auto h-fit-content"
        overlayClassName="modal-overlay fixed inset-0 bg-black opacity-80 flex justify-center items-center"
      >
        <EditPatientForm
          patient={selectedPatient}
          onClose={closeModal}
          onSubmit={handleEdit}
          localPatients={localPatients}
        />
      </Modal>
      {/* <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {patientData
          ? patientData.map((patient: Patient) => (
              <PatientCard
                key={patient?.id}
                patient={patient}
                // onUpdate={handleUpdatePatient}
              />
            ))
          : "No patients"}
      </div> */}
      <div>
        {isLoading ? (
          <p>Loading patients...</p>
        ) : (
          <>
            <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {currentPatients.map((patient: Patient) => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>
            <Pagination
              patientsPerPage={patientsPerPage}
              totalPatients={patients.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PatientsList;
