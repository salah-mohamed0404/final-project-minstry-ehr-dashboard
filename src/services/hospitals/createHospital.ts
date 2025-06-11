import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createHospital = async (data: HospitalRequest) => {
   const res = await apiCall<HospitalApiResponse<Hospital[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.EHR}/Hospital`,
      {
         method: "POST",
         body: JSON.stringify(data),
      },
   );

   return res;
};
