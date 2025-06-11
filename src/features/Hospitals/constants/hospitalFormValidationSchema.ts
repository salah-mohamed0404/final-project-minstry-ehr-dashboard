import * as Yup from "yup";
import { getNameValidationSchema } from "@/utils/validationSchemas/getNameValidationSchema";
import { getIsActiveValidationSchema } from "@/utils/validationSchemas/getIsActiveValidationSchema";

export const hospitalFormValidationSchema = Yup.object().shape({
   name: getNameValidationSchema(), // Required, min 2 characters
   hospitalCode: Yup.string()
      .required("Hospital code is required")
      .min(2, "Hospital code must be at least 2 characters")
      .max(50, "Hospital code must not exceed 50 characters"),
   address: Yup.string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters")
      .max(200, "Address must not exceed 200 characters"),
   directorName: getNameValidationSchema(), // Required, min 2 characters
   licencesNumber: Yup.string()
      .required("Licences number is required")
      .min(2, "Licences number must be at least 2 characters")
      .max(50, "Licences number must not exceed 50 characters"),
   type: Yup.string().required("Hospital type is required"),
   is_active: getIsActiveValidationSchema(), // Default to true if not provided
});
