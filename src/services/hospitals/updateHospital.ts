import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateHospitalParams = {
   id: string;
   newData: Partial<HospitalRequest>;
};

export const updateHospital = async ({ id, newData }: UpdateHospitalParams) => {
   const res = await apiCall<HospitalApiResponse<Hospital>>(
      `${BACKEND_SERVICES_BASE_ROUTES.EHR}/Hospital/${id}`,
      {
         method: "PATCH",
         body: JSON.stringify(newData),
      },
   );

   return res;
};
