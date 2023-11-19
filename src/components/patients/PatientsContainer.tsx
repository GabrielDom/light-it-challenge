import { useContext } from "react";
import CardPatient from "./CardPatient";
import { PatientContext } from "../../context/PatientDataContext";

const PatientsContainers = () => {
  const { data } = useContext(PatientContext);

  return (
    <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center my-4">
      <CardPatient patients={data} />
    </div>
  );
};

export default PatientsContainers;
