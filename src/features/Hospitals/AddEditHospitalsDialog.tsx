import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { QUERY_KEYS } from "@/constants";
import { Form, Formik, FormikHelpers } from "formik";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import InputField from "@/components/form/InputField";
import { useTranslation } from "react-i18next";
import { Switch } from "@/components/ui/switch";
import { toast } from "react-toastify";
import { hospitalFormValidationSchema } from "./constants/hospitalFormValidationSchema";
import { getOneHospital } from "@/services/hospitals/getOneHospital";
import { createHospital } from "@/services/hospitals/createHospital";
import { updateHospital } from "@/services/hospitals/updateHospital";
import SideBySideInputsContainer from "@/components/SideBySideInputsContainer";
import SelectField from "@/components/fields/SelectField";

const DEFAULT_INITIAL_VALUES: HospitalRequest = {
   name: "",
   hospitalCode: "",
   address: "",
   directorName: "",
   licencesNumber: "",
   type: "",
   isActive: true,
};

const hospitalTypeOptions: { label: string; value: HospitalType }[] = [
   { label: "Public", value: "Public" },
   { label: "Private", value: "Private" },
   { label: "University", value: "University" },
   { label: "Charity", value: "Charity" },
];

type AddEditHospitalsProps = {
   id?: string;
   triggerButton: ReactNode;
};

function AddEditHospitalsDialog({ id, triggerButton }: AddEditHospitalsProps) {
   const [open, setOpen] = useState(false);
   const { t } = useTranslation("staff");
   const { data: receptionist, isLoading: isGettingReceptionist } =
      useCustomQuery([QUERY_KEYS.HOSPITAL, id], getOneHospital({ id }), {
         enabled: !!id,
      });

   const { mutate: createHospitalMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createHospital,
         queryKey: [QUERY_KEYS.HOSPITALS],
         mutationType: "add",
      });
   const { mutate: updateHospitalMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateHospital,
         queryKey: [QUERY_KEYS.HOSPITALS],
         mutationType: "edit",
      });
   const isPending =
      isCreatePending || isUpdatePending || isGettingReceptionist;

   const handleSubmit = (
      values: HospitalRequest,
      { resetForm }: FormikHelpers<HospitalRequest>,
   ) => {
      if (id) {
         updateHospitalMutate(
            { id, newData: values },
            {
               onSuccess: () => {
                  setOpen(false);
                  resetForm();
               },
               onError: (error) => {
                  console.error("Error updating receptionists:", error);
               },
            },
         );
      } else {
         createHospitalMutate(values, {
            onSuccess: () => {
               setOpen(false);
               resetForm();
            },
            onError: (error) => {
               console.error("Error updating receptionists:", error);
            },
         });
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            initialValues={
               id
                  ? {
                       name:
                          receptionist?.data.name ||
                          DEFAULT_INITIAL_VALUES.name,
                       hospitalCode:
                          receptionist?.data.hospitalCode ||
                          DEFAULT_INITIAL_VALUES.hospitalCode,
                       address:
                          receptionist?.data.address ||
                          DEFAULT_INITIAL_VALUES.address,
                       directorName:
                          receptionist?.data.directorName ||
                          DEFAULT_INITIAL_VALUES.directorName,
                       licencesNumber:
                          receptionist?.data.licencesNumber ||
                          DEFAULT_INITIAL_VALUES.licencesNumber,
                       type:
                          receptionist?.data.type ||
                          DEFAULT_INITIAL_VALUES.type,
                       isActive:
                          receptionist?.data.isActive ??
                          DEFAULT_INITIAL_VALUES.isActive,
                    }
                  : DEFAULT_INITIAL_VALUES
            }
            onSubmit={handleSubmit}
            enableReinitialize
            validationSchema={hospitalFormValidationSchema}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                     <DialogTitle>{id ? "Edit" : "Add"} Hospitals</DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the hospital."
                           : "Add a new hospital to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form>
                     <SideBySideInputsContainer>
                        <InputField
                           id="name"
                           name="name"
                           label="Name"
                           placeholder="Enter Hospital Name"
                           disabled={isPending}
                           className="min-w-24"
                        />
                        <InputField
                           id="hospitalCode"
                           name="hospitalCode"
                           label="Hospital Code"
                           placeholder="Enter Hospital Code"
                           disabled={isPending}
                           className="min-w-24"
                        />
                     </SideBySideInputsContainer>

                     <InputField
                        id="address"
                        name="address"
                        label="Address"
                        placeholder="Enter Address"
                        disabled={isPending}
                     />

                     <SideBySideInputsContainer>
                        <InputField
                           id="directorName"
                           name="directorName"
                           label="Director Name"
                           placeholder="Enter Director Name"
                           disabled={isPending}
                        />
                        <InputField
                           id="licencesNumber"
                           name="licencesNumber"
                           label="Licences Number"
                           placeholder="Enter national id number"
                           disabled={isPending}
                        />
                     </SideBySideInputsContainer>

                     <SelectField
                        name="type"
                        isUseSearchParam={false}
                        label="Hospital Type"
                        placeholder="Select Hospital Type"
                        value={values.type}
                        options={hospitalTypeOptions}
                        onChange={(value) => setFieldValue("type", value)}
                        disabled={isPending}
                        containerClassName="mb-6 grow"
                     />

                     <div className="ms-1 flex items-center gap-2">
                        <h3>Is active?</h3>
                        <Switch
                           checked={values.isActive}
                           onCheckedChange={(checked) =>
                              setFieldValue("is_active", checked)
                           }
                        />
                     </div>
                  </Form>

                  <DialogFooter>
                     <Button type="submit" onClick={submitForm}>
                        {id ? "Edit" : "Add"}
                     </Button>
                  </DialogFooter>
               </DialogContent>
            )}
         </Formik>
      </Dialog>
   );
}

export default AddEditHospitalsDialog;
