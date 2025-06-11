import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type DeleteHospitalParams = {
   id: string;
};

export const deleteHospital = async ({ id }: DeleteHospitalParams) => {
   const res = await apiCall<HospitalApiResponse<Hospital>>(
      `${BACKEND_SERVICES_BASE_ROUTES.EHR}/Hospital/${id}`,
      {
         method: "DELETE",
      },
   );

   return res;
};
