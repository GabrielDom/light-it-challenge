import { Dispatch, SetStateAction, createContext } from "react";
import { Patient } from "../services/types";

export type DataContextProps = {
  data: Patient[];
  loading: boolean;
  error: boolean;
  addPatient: (user: Patient) => void;
  addModal: boolean;
  editModal: boolean;
  handleAddModal: () => void;
  handleEditModal: () => void;
  editItemId: number | null;
  setEditItemId: Dispatch<SetStateAction<number | null>>;
  updatePatient: (item: Patient) => void;
  notification: boolean;
  setNotification: Dispatch<SetStateAction<boolean>>;
};

export const PatientContext = createContext<DataContextProps>(
  {} as DataContextProps
);
