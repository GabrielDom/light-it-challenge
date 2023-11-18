import React, { useState } from "react";
// import usePatients from "@/hooks/usePatients";
// import { Patient } from "@/hooks/usePatients";
// import { Patient } from "./PatientsList";
import { Patient } from "../../services/types";
import Modal from "react-modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  //   CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "../ui/button";
import EditPatientForm from "./EditPatientForm";
import usePatients from "@/hooks/usePatients";
// import { useQueryClient } from "react-query";

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  const {
    localPatients,
    setLocalPatients,
    //   updatePatient
  } = usePatients();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedPatient, setEditedPatient] = useState<Patient | null>(null);

  //   const handleEditSubmit = async (editedPatient: Patient) => {
  //     await updatePatient(editedPatient);
  //   };

  const openModal = () => {
    setIsModalOpen(true);
    setEditedPatient(patient);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditedPatient(null);
  };

  const handleEditSubmit = async (editedPatient: Patient) => {
    console.log("Datos editados/agregados:", editedPatient);
    // setLocalPatients((prevPatient) => ({ ...prevPatient, ...editedPatient }));
    setLocalPatients((prevPatients) => [...prevPatients, editedPatient]);

    setIsModalOpen(false);
  };

  return (
    <>
      <Card>
        <CardHeader>
          {/* <CardTitle> */}
          <h3 className="mt-4 scroll-m-20 text-2xl font-bold tracking-tight">
            {" "}
            {patient?.name}
          </h3>
          {/* </CardTitle> */}
          <CardDescription>
            <img src={patient?.avatar} alt={patient?.name} loading="lazy" />
          </CardDescription>
        </CardHeader>
        <Collapsible>
          <CollapsibleTrigger>See more...</CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p>{patient?.description}</p>

              <p>{patient?.website}</p>
              <br />
              <p>{patient?.createdAt?.toLocaleString()}</p>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
        <CardFooter>
          <Button onClick={openModal}>Edit</Button>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Editar Paciente"
        className="modal bg-white p-4 rounded-md max-w-md mx-auto h-fit-content"
        overlayClassName="modal-overlay fixed inset-0 bg-black opacity-80 flex justify-center items-center"
      >
        <EditPatientForm
          patient={editedPatient ? editedPatient : patient}
          onClose={closeModal}
          onSubmit={handleEditSubmit}
          localPatients={localPatients}
        />
      </Modal>
    </>
  );
};

export default PatientCard;
