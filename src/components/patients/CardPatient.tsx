import React, { useContext, useState } from "react";
import { PatientContext } from "../../context/PatientDataContext";
import EditPatient from "./EditPatient";
import { Patient } from "../../services/types";
import Modal from "./Modal";
import Pagination from "../pagination/Pagination";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "../ui/button";
import { ChevronsUpDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface CardPatientProps {
  patients: Patient[];
}

const CardPatient: React.FC<CardPatientProps> = ({ patients }) => {
  const { editModal, handleEditModal, updatePatient, loading } =
    useContext(PatientContext);
  const [itemId, setItemId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients
    ? patients.slice(indexOfFirstPatient, indexOfLastPatient)
    : [];

  const openEditModal = (itemId: number) => {
    setItemId(itemId);
    handleEditModal();
  };

  const handlePatientUpdate = (updatedPatient: Patient) => {
    updatePatient(updatedPatient);
    handleEditModal();
  };

  const closeModal = () => {
    handleEditModal();
  };

  const formatCreatedAt = (createdAt: Date) => {
    const date = new Date(createdAt);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        currentPatients.map((data: Patient) => (
          <Card key={data?.id}>
            <CardHeader>
              <h3 className="mt-4 scroll-m-20 text-2xl font-bold tracking-tight">
                {" "}
                {data?.name}
              </h3>
              <img
                src={data?.avatar}
                alt={data?.name}
                loading="lazy"
                style={{
                  width: "50%",
                  margin: "0 auto",
                  objectFit: "none",
                }}
              />
              <CardDescription>
                <span className="font-bold tracking-tight">Website:</span>{" "}
                {data?.website}
                <br />
                <span className="font-bold tracking-tight">
                  Creation date:
                </span>{" "}
                {data && data.createdAt
                  ? formatCreatedAt(data.createdAt)
                  : "No creation date"}
              </CardDescription>
            </CardHeader>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>{data?.description}</CardContent>
              </CollapsibleContent>
            </Collapsible>
            <CardFooter>
              <Button
                onClick={() => openEditModal(Number(data?.id))}
                className="h-1/2 m-auto"
              >
                Edit patient
              </Button>
              {editModal && itemId === Number(data?.id) && (
                <Modal
                  isOpen={editModal}
                  onClose={closeModal}
                  title={"Edit user data"}
                >
                  <EditPatient item={data} onSave={handlePatientUpdate} />{" "}
                </Modal>
              )}
            </CardFooter>
          </Card>
        ))
      )}
      <Pagination
        patientsPerPage={patientsPerPage}
        totalPatients={patients?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CardPatient;
