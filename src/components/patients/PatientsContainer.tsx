import { useContext } from "react";
import CardPatient from "./CardPatient";
import { PatientContext } from "../../context/PatientDataContext";
// import Pagination from "../pagination/Pagination";
// import { Patient } from "@/services/types";
// import Pagination from "../pagination/Pagination";

const PatientsContainers = () => {
  const { data, notification } = useContext(PatientContext);

  return (
    <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center">
      <CardPatient patients={data} />
      {notification && (
        <div
          className="fixed p-auto w-1/2 h-1/4 border-solid border-2 border-gray-500 p-4 rounded-lg shadow-lg transition duration-150 z-50 text-white bg-slate-700"
          aria-live="assertive"
          role="alert"
        >
          <p>New card!</p>
        </div>
      )}
    </div>
  );
};

export default PatientsContainers;

// const PatientsContainers = () => {
//   const { data, notification, handleEditModal, updatePatient, loading } =
//     useContext(PatientContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const patientsPerPage = 10;
//   const indexOfLastPatient = currentPage * patientsPerPage;
//   const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
//   const currentPatients = data
//     ? data.slice(indexOfFirstPatient, indexOfLastPatient)
//     : [];

//   //   const handlePatientUpdate = (updatedPatient: Patient) => {
//   //     updatePatient(updatedPatient);
//   //     handleEditModal();
//   //   };

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center">
//           {currentPatients.map((patient) => (
//             <CardPatient
//               key={patient.id}
//               patients={data}
//               // handleEditModal={handleEditModal}
//               // updatePatient={handlePatientUpdate}
//               loading={loading}
//               currentPage={currentPage}
//               setCurrentPage={handlePageChange}
//             />
//           ))}
//         </div>
//       )}
//       <Pagination
//         patientsPerPage={patientsPerPage}
//         totalPatients={currentPatients?.length}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//       {/* <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center"> */}
//       {/* <CardPatient
//         patients={currentPatients}
//         handleEditModal={handleEditModal}
//         updatePatient={handlePatientUpdate}
//         loading={loading}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       /> */}
//       {/* {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center">
//           {currentPatients.map((patient) => (
//             <CardPatient
//               key={patient.id}
//               patient={patient}
//               handleEditModal={handleEditModal}
//               updatePatient={handlePatientUpdate}
//               loading={loading}
//               currentPage={currentPage}
//               setCurrentPage={setCurrentPage}
//             />
//           ))}
//         </div>
//       )}
//       {notification && (
//         <div
//           className="fixed p-auto w-1/2 h-1/4 border-solid border-2 border-gray-500 p-4 rounded-lg shadow-lg transition duration-150 z-50 text-white bg-slate-700"
//           aria-live="assertive"
//           role="alert"
//         >
//           <p>New card!</p>
//         </div>
//       )}
//       <Pagination
//         patientsPerPage={patientsPerPage}
//         totalPatients={data?.length}
//         currentPage={currentPage}
//         setCurrentPage={handlePageChange}
//       /> */}
//     </>
//   );
// };

// export default PatientsContainers;

// const PatientsContainers = () => {
//   const { data, notification } = useContext(PatientContext);

//   return (
//     <div
//       //   className="mx-auto px-4 flex max-[920px]:flex-col flex-row flex-wrap justify-center gap-4 mt-4 text-center"
//       className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center"
//     >
//       {data.map((patient) => (
//         <CardPatient key={patient.id} patients={data} />
//       ))}

//       {notification && (
//         <div
//           className="fixed p-auto w-1/2 h-1/4 border-solid border-2 border-gray-500 p-4 rounded-lg shadow-lg transition duration-150 z-50 text-white bg-slate-700"
//           aria-live="assertive"
//           role="alert"
//         >
//           <p>New card!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientsContainers;
