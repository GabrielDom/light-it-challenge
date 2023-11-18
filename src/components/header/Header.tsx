import { useContext } from "react";
import { PatientContext } from "../../context/PatientDataContext";
import AddPatientForm from "../../components/patients/AddPatientForm";
import Modal from "../../components/patients/Modal";
import { ModeToggle } from "../mode-toggle";

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
        <h1 className="text-white text-2xl">Patient Data Management</h1>
        <button
          className="text-white p-2 flex align-center gap-2 border rounded-lg border-white"
          onClick={openModal}
        >
          <span>Add New User</span>+
        </button>
        <Modal isOpen={addModal} onClose={closeModal} title="Add new user">
          <AddPatientForm />
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
