import { Dispatch, SetStateAction, createContext } from "react";
import { Patient } from "../services/types";

export type DataContextProps = {
  data: Patient[];
  error: boolean;
  loading: boolean;
  addPatient: (user: Patient) => void;
  updatePatient: (item: Patient) => void;
  showModal: boolean;
  editModal: boolean;
  handleAddModal: () => void;
  handleEditModal: () => void;
  editItemId: number | null;
  setEditItemId: Dispatch<SetStateAction<number | null>>;
};

export const PatientContext = createContext<DataContextProps>(
  {} as DataContextProps
);
