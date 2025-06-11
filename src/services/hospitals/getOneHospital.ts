import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneHospitalParams = {
   id?: number | string;
};

export const getOneHospital =
   ({ id }: GetOneHospitalParams) =>
   async () => {
      if (!id) {
         throw new Error("Hospital ID is required");
      }

      const res = await apiCall<HospitalApiResponse<Hospital>>(
         `${BACKEND_SERVICES_BASE_ROUTES.EHR}/Hospital/${id}`,
      );

      return res;
   };
