import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall, ApiResponse } from "@/services/apiCall";

export const getPatientsAnalytics = () => async () => {
   const res = await apiCall<ApiResponse<PatientsAnalytics[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.EHR}/analytics `,
   );

   return res;
};
