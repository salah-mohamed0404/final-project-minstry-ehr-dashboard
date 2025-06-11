import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllHospitalsParams = {
   page?: string;
   search?: string;
};

export const getAllHospitals =
   ({ page, search }: GetAllHospitalsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<HospitalApiResponseWithPagination<Hospital[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.EHR}/Hospital/get-all-hospitals?${params}`,
      );

      return res;
   };
