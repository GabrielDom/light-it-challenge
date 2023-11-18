import { useQuery } from "react-query";
import { getPatients } from "../services/api";
import { PATIENTS } from "../services/QueryKeys";
// import { useEffect, useState } from "react";
// import { Patient } from "../services/types";

export const usePatients = () => {
  //   const { data, isLoading } = useQuery<Patient[]>(
  //     [PATIENTS],
  //     () => getPatients(),
  //     {}
  //   );
  const { data, isLoading } = useQuery([PATIENTS], () => getPatients(), {});

  return {
    data,
    isLoading,
  };
};

export default usePatients;

// const PATIENTS_QUERY_KEY = "patients";

// export const usePatients = () => {
//   const { data, isLoading, refetch } = useQuery(
//     [PATIENTS_QUERY_KEY],
//     () => getPatients(),
//     {}
//   );

//   const [localPatients, setLocalPatients] = useState<Patient[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const patientsPerPage = 10;

//   useEffect(() => {
//     if (data) {
//       setLocalPatients(data);
//     }
//   }, [data]);

//   const addOrUpdatePatient = (updatedPatient: Patient) => {
//     setLocalPatients((prevPatients) => {
//       const updatedPatients = prevPatients.map((patient) =>
//         patient.id === updatedPatient.id ? updatedPatient : patient
//       );

//       if (!prevPatients.find((patient) => patient.id === updatedPatient.id)) {
//         updatedPatients.push(updatedPatient);
//       }

//       setLocalPatients(updatedPatients);
//       return updatedPatients;
//     });
//   };

//   //   const storePatientsLocally = (patients: Patient[]) => {
//   //     localStorage.setItem("patients", JSON.stringify(patients));
//   //   };

//   return {
//     data: localPatients.length > 0 ? localPatients : data,
//     isLoading,
//     // handleUpdatePatient,
//     addOrUpdatePatient,
//     refetchPatients: refetch,
//     currentPage,
//     patientsPerPage,
//     setCurrentPage,
//     setLocalPatients,
//     localPatients,
//   };
// };

// export default usePatients;

// export const usePatients = () => {
//   const query = useQuery("patients", getPatients);
//   // const [localPatients, setLocalPatients] = useState<Patient[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const patientsPerPage = 10;

//   const updatePatient = async (editedPatient: Patient) => {
//     await updatePatientMutation.mutateAsync(editedPatient);
//   };

//   const updatePatientMutation = useMutation(updatePatient, {
//     onSuccess: () => {
//       query.refetch(); // Refresca automáticamente los datos
//     },
//   });

//   return {
//     data: query.data ?? [],
//     isLoading: query.isLoading,
//     updatePatient,
//     currentPage,
//     patientsPerPage,
//     setCurrentPage,
//   };
// };

// export default usePatients;
