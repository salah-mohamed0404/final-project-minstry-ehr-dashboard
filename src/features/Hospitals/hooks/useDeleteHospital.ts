import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { deleteHospital } from "@/services/hospitals/deleteHospital";

export const useDeleteHospital = () => {
   const mutationResult = useOptimisticMutation({
      mutationFn: deleteHospital,
      queryKey: [QUERY_KEYS.HOSPITALS],
      dataPath: ["data", "items"],
      options: {
         successMessageKey: "Hospital deleted successfully",
         errorMessageKey: "Hospital deletion failed",
      },
   });

   return mutationResult;
};
