import { useContext } from "react";
import { PatientContext } from "../../context/PatientDataContext";
import AddPatientForm from "../../components/patients/AddPatientForm";
import Modal from "../../components/patients/Modal";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const Header = () => {
  const { addModal, handleAddModal } = useContext(PatientContext);

  const openModal = () => {
    handleAddModal();
  };

  const closeModal = () => {
    handleAddModal();
  };

  return (
    <header className="bg-slate-700 p-6">
      <nav className="flex flex-row justify-between">
        <ModeToggle />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
          Patient Data Management
        </h1>
        <Button onClick={openModal}>
          <span>Add new patient</span>
        </Button>
        <Modal isOpen={addModal} onClose={closeModal} title="Add patient">
          <AddPatientForm />
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
