import TableWrapper from "@/components/TableWrapper";
import {
   Table,
   TableBody,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import { useTranslation } from "react-i18next";
import { useGetAllHospitals } from "./hooks/useGetAllHospitals";
import HospitalRow from "./HospitalRow";

function HospitalsList() {
   const { t } = useTranslation("staff");
   const { data, isLoading, isError } = useGetAllHospitals();
   const hospitals = data?.data.items || [];

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError || hospitals.length === 0}
         errorText="No hospitals found"
      >
         <TableWrapper totalPages={data?.data.meta.lastPage}>
            <Table className="min-w-[70rem]">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[50px]">#</TableHead>
                     <TableHead>Hospital Code</TableHead>
                     <TableHead>Name</TableHead>
                     <TableHead>Director Name</TableHead>
                     <TableHead>Licenses Number</TableHead>
                     <TableHead>address</TableHead>
                     <TableHead>Type</TableHead>
                     <TableHead>createdAt</TableHead>
                     <TableHead>Is Active</TableHead>
                     <TableHead className="w-[55px]">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {hospitals.map((hospital, index) => (
                     <HospitalRow
                        hospital={hospital}
                        key={hospital.id}
                        rowNumber={index + 1}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </WithLoadingAndError>
   );
}

export default HospitalsList;
