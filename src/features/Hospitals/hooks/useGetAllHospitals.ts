import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllHospitals } from "@/services/hospitals/getAllHospitals";
import { useSearchParams } from "react-router-dom";

export const useGetAllHospitals = () => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";
   const queryResult = useCustomQuery(
      [QUERY_KEYS.HOSPITALS, page, search],
      getAllHospitals({ page, search }),
   );

   return queryResult;
};
