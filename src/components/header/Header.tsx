import { useContext } from "react";
import { PatientContext } from "../../context/PatientDataContext";
import AddPatientForm from "../../components/patients/AddPatientForm";
import Modal from "../../components/patients/Modal";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const Header = () => {
  const { showModal, handleAddModal } = useContext(PatientContext);

  const openModal = () => {
    handleAddModal();
  };

  const closeModal = () => {
    handleAddModal();
  };

  return (
    <header className="bg-blue-400 dark:bg-slate-700 p-6">
      <nav className="flex flex-col md:flex-row text-center justify-between items-center">
        <ModeToggle />
        <h1 className="scroll-m-20 md:text-4xl text-3xl font-extrabold tracking-tight md:m-0 mb-4 text-stone-800 dark:text-white">
          Patient Data Management
        </h1>
        <Button onClick={openModal}>
          <span>Add new patient</span>
        </Button>
        <Modal isOpen={showModal} onClose={closeModal} title="Add patient">
          <AddPatientForm />
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
