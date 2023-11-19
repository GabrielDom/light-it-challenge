import React from "react";
import { useContext } from "react";
import { PatientContext } from "../../context/PatientDataContext";
import { Patient } from "../../services/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { DialogFooter } from "../ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface EditPatientProps {
  item: Patient;
  onSave: (item: Patient) => void;
}

const EditPatient: React.FC<EditPatientProps> = ({ item, onSave }) => {
  const { handleEditModal, setNotification } = useContext(PatientContext);
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
      name: item.name || "",
      description: item.description || "",
      website: item.website || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSave({
        ...item,
        ...values,
      });
      handleEditModal();
      // setNotification(true);
      toast({
        title: "Patient updated successfully 🎉",
      });
      setTimeout(() => setNotification(false), 3000);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4 w-full sm:mr-4 flex flex-col">
          <div
            className={`grid grid-cols-4 items-center gap-4 ${
              formik.touched.name && formik.errors.name
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="col-span-3"
              placeholder="Name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <p className="text-red-600">
            {formik.touched.name && formik.errors.name}
          </p>
        </div>
        <div className="my-4 h-32 w-full sm:mr-4 flex flex-col">
          <div
            className={`grid w-full gap-1.5 ${
              formik.touched.description && formik.errors.description
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Description"
              className="resize-none"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <p className="text-red-600">
            {formik.touched.description && formik.errors.description}
          </p>
        </div>
        <div className="my-4 w-full sm:mr-4 flex flex-col">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            className="col-span-3"
            placeholder="Website"
            type="text"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="text-red-600">
            {formik.touched.website && formik.errors.website}
          </p>
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

export default EditPatient;
