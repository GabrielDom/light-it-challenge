import { useContext } from "react";
import { PatientContext } from "../../context/PatientDataContext";
import GenericImage from "../../assets/react.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

// const AddUserForm = () => {
//   const { addPatient, data, handleAddModal, setNotification } =
//     useContext(PatientContext);
//   const [isFormReady, setIsFormReady] = useState<boolean>(false);
//   const [nameError, setNameError] = useState<string | null>(null);
//   const [descriptionError, setDescriptionError] = useState<string | null>(null);
//   const [websiteError, setWebsiteError] = useState<string | null>(null);

//   const btnDisabled = isFormReady ? "bg-green-400" : "bg-gray-300";

//   const [newPatient, setNewPatient] = useState({
//     avatar: GenericImage,
//     name: "",
//     description: "",
//     website: "",
//     id: data.length + 1,
//   });

//   const checkForm = () => {
//     if (
//       newPatient.name.length >= 2 &&
//       newPatient.description.length >= 2 &&
//       newPatient.website.length >= 2
//     ) {
//       setIsFormReady(true);
//     } else {
//       setIsFormReady(false);
//     }
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setNewPatient((prevItem) => ({
//       ...prevItem,
//       [name]: value,
//     }));

//     if (name === "name") {
//       if (value.length >= 3) {
//         setNameError(null);
//       } else {
//         setNameError("Name must be at least 3 characters");
//       }
//     } else if (name === "description") {
//       if (value.length >= 3) {
//         setDescriptionError(null);
//       } else {
//         setDescriptionError("Description must be at least 3 characters");
//       }
//     } else if (name === "website") {
//       if (value.length >= 3) {
//         setWebsiteError(null);
//       } else {
//         setWebsiteError("Website must be at least 3 characters");
//       }
//     }
//     checkForm();
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (isFormReady) {
//       addPatient({
//         ...newPatient,
//         id: newPatient.id.toString(),
//       });
//       setNewPatient({
//         name: "",
//         description: "",
//         website: "",
//         id: 0,
//         avatar: "",
//       });
//       handleAddModal();
//       setNotification(true);
//       setTimeout(() => setNotification(false), 3000);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="my-4 w-full sm:mr-4 flex flex-col">
//           <div
//             className={`flex flex-row border rounded-lg py-2 px-4 appearance-none leading-normal ${
//               nameError === null ? "border-gray-300 " : "border-red-500"
//             }`}
//           >
//             {/* <Person className="m-auto pr-2" /> */}
//             <input
//               className={`bg-white w-full text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-outline`}
//               type="text"
//               data-testid="name-id"
//               name="name"
//               placeholder="Name"
//               value={newPatient.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <p className="text-red-600">{nameError}</p>
//         </div>
//         <div className="my-4 w-full h-32 sm:mr-4 flex flex-col">
//           <div
//             className={` h-full flex flex-row border rounded-lg py-2 px-4 appearance-none leading-normal ${
//               descriptionError === null ? "border-gray-300 " : "border-red-500"
//             }`}
//           >
//             {/* <Description className="pr-2" /> */}
//             <textarea
//               className={`bg-white w-full text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-outline`}
//               name="description"
//               placeholder="Description"
//               data-testid="desc-id"
//               value={newPatient.description}
//               onChange={handleInputChange}
//             />
//           </div>
//           <p className="text-red-600">{descriptionError}</p>
//         </div>
//         <div className="my-4 w-full sm:mr-4 flex flex-col">
//           <div
//             className={`flex flex-row border rounded-lg py-2 px-4 appearance-none leading-normal ${
//               websiteError === null ? "border-gray-300 " : "border-red-500"
//             }`}
//           >
//             {/* <Http className="m-auto pr-2" /> */}
//             <input
//               name="website"
//               className={`bg-white w-full text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-outline`}
//               placeholder="Website"
//               data-testid="website-id"
//               type="text"
//               value={newPatient.website}
//               onChange={handleInputChange}
//             />
//           </div>
//           <p className="text-red-600">{websiteError}</p>
//         </div>
//         <div
//           className={`my-4 w-1/2 sm:mr-4 flex justify-center border rounded-lg py-2 px-4 appearance-none leading-normal ${btnDisabled} `}
//         >
//           <button
//             type="submit"
//             disabled={isFormReady ? false : true}
//             data-testid="submit-id"
//             className="w-full"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddUserForm;

const AddPatientForm = () => {
  const { addPatient, handleAddModal, setNotification } =
    useContext(PatientContext);

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
        id: new Date().getTime().toString(),
        avatar: GenericImage,
      });

      resetForm();
      handleAddModal();
      setNotification(true);
      setTimeout(() => setNotification(false), 3000);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4 w-full sm:mr-4 flex flex-col">
          <div className="flex flex-row border rounded-lg py-2 px-4 appearance-none leading-normal">
            <input
              className={`bg-white w-full text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-outline`}
              type="text"
              name="name"
              placeholder="Name"
              data-testid="name-id"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </div>
        <div className="my-4 w-full h-32 sm:mr-4 flex flex-col">
          <div className="h-full flex flex-row border rounded-lg py-2 px-4 appearance-none leading-normal">
            <textarea
              className={`bg-white w-full text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-outline`}
              name="description"
              placeholder="Description"
              data-testid="desc-id"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-600">{formik.errors.description}</p>
          )}
        </div>
        <div className="my-4 w-full sm:mr-4 flex flex-col">
          <div className="flex flex-row border rounded-lg py-2 px-4 appearance-none leading-normal">
            <input
              name="website"
              className={`bg-white w-full text-gray-700 focus:outline-none focus:shadow-outline focus:shadow-outline`}
              placeholder="Website"
              data-testid="website-id"
              type="text"
              value={formik.values.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.website && formik.errors.website && (
            <p className="text-red-600">{formik.errors.website}</p>
          )}
        </div>
        <div
          className={`my-4 w-1/2 sm:mr-4 flex justify-center border rounded-lg py-2 px-4 appearance-none leading-normal ${
            formik.isValid ? "bg-green-400" : "bg-gray-300"
          }`}
        >
          <button
            type="submit"
            disabled={!formik.isValid}
            data-testid="submit-id"
            className="w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientForm;
