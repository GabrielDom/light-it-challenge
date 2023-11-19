import React, { useContext, useState } from "react";
import { PatientContext } from "../../context/PatientDataContext";
import EditPatientForm from "./EditPatientForm";
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
import { Skeleton } from "../ui/skeleton";

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
        <Card className="flex items-center justify-center">
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </Card>
      ) : (
        currentPatients.map((data: Patient) => (
          <Card key={data?.id} className="shadow-2xl">
            <CardHeader>
              <h3 className="mt-4 mb-4 scroll-m-20 text-2xl font-bold tracking-tight">
                {" "}
                {data?.name}
              </h3>
              <img
                src={data?.avatar}
                alt={data?.name}
                loading="lazy"
                className="rounded-lg shadow-lg w-2/4 my-0 mx-auto"
              />
              <CardDescription>
                <span className="font-bold tracking-tight mt-2">Website:</span>{" "}
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
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>{data?.description}</CardContent>
              </CollapsibleContent>
            </Collapsible>
            <CardFooter>
              <Button
                onClick={() => openEditModal(Number(data?.id))}
                className="h-1/2 m-auto mt-2"
                variant="outline"
              >
                Edit patient 🖋️
              </Button>
              {editModal && itemId === Number(data?.id) && (
                <Modal
                  isOpen={editModal}
                  onClose={closeModal}
                  title={"Edit patient data"}
                >
                  <EditPatientForm item={data} onSave={handlePatientUpdate} />
                </Modal>
              )}
            </CardFooter>
          </Card>
        ))
      )}
      <div
        className="sm:block md:relative md:top-full md:right-2/4 md:mb-0 md:mt-4 md:h-10"
        // style={{
        //   position: "relative",
        //   top: "100%",
        //   right: "50%",
        //   marginBottom: "0",
        //   marginTop: "10%",
        //   height: "15%",
        // }}
      >
        <Pagination
          patientsPerPage={patientsPerPage}
          totalPatients={patients?.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default CardPatient;
