import React from "react";
import {
  //   ErrorMessage,
  //   Field,
  //   Form,
  //   Formik,
  useFormik,
} from "formik";
import { Patient, PatientUpdate } from "../../services/types";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
import { Button } from "@/components/ui/button";
// import usePatients from "@/hooks/usePatients";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

interface EditPatientFormProps {
  patient?: Patient | undefined;
  onClose: () => void;
  onSubmit: (editedPatient: Patient) => void;
  localPatients: Patient[];
}

const EditPatientForm: React.FC<EditPatientFormProps> = ({
  patient,
  onClose,
  onSubmit,
}) => {
  const initialValues: PatientUpdate = patient || {
    name: "",
    description: "",
    website: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const updatedPatient = {
        createdAt: values.createdAt || patient?.createdAt || new Date(),
        name: values.name || patient?.name || "",
        avatar: values.avatar || patient?.avatar || "",
        description: values.description || patient?.description || "",
        website: values.website || patient?.website || "",
        id: values.id || patient?.id || "",
      };
      onSubmit(updatedPatient);
      onClose();
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight text-center text-zinc-500">
        Edit patient
      </h3>
      <div className="flex flex-col mb-4 text-zinc-500">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={handleChange}
            className="block w-full border rounded-md p-2"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="block w-full border rounded-md p-2"
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            className="block w-full border rounded-md p-2"
          />
        </label>
      </div>
      <Button type="button" onClick={onClose} className="bg-destructive">
        Cancel
      </Button>
      <Button type="submit" className="bg-primary">
        Submit
      </Button>
    </form>
  );
};

export default EditPatientForm;
