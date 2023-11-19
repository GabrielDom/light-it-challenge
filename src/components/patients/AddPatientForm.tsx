import { useContext } from "react";
import { PatientContext } from "../../context/PatientDataContext";
import GenericImage from "../../assets/react.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const AddPatientForm = () => {
  const { addPatient, handleAddModal } = useContext(PatientContext);
  const { toast } = useToast();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    description: Yup.string()
      .min(3, "Description must be at least 3 characters")
      .required("Description is required"),
    website: Yup.string()
      .min(3, "Website must be at least 3 characters")
      .required("Website is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      website: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      addPatient({
        ...values,
        id: "100",
        avatar: GenericImage,
      });

      resetForm();
      handleAddModal();
      toast({
        title: "New patient added 👨‍⚕️",
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4 w-full sm:mr-4 flex flex-col">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </div>
        <div className="my-4 w-full h-32 sm:mr-4 flex flex-col">
          <Textarea
            name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-600">{formik.errors.description}</p>
          )}
        </div>
        <div className="my-4 w-full sm:mr-4 flex flex-col">
          <Input
            name="website"
            placeholder="Website"
            type="text"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.website && formik.errors.website && (
            <p className="text-red-600">{formik.errors.website}</p>
          )}
        </div>
        <DialogFooter>
          <Button type="submit" disabled={!formik.isValid} className="w-full">
            Submit
          </Button>
        </DialogFooter>
      </form>
    </div>
  );
};

export default AddPatientForm;
