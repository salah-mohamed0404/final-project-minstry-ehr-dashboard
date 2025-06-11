import { TableCell, TableRow } from "@/components/ui/table";
import ActionsMenu from "./ActionsMenu";
import IsActiveBadge from "@/components/IsActiveBadge";
import dayjs from "dayjs";

type HospitalRowProps = {
   hospital: Hospital;
   rowNumber: number;
};

function HospitalRow({ hospital, rowNumber }: HospitalRowProps) {
   return (
      <TableRow>
         <TableCell>{rowNumber}</TableCell>
         <TableCell>{hospital.hospitalCode}</TableCell>
         <TableCell>{hospital.name}</TableCell>
         <TableCell>{hospital.directorName}</TableCell>
         <TableCell>{hospital.licencesNumber}</TableCell>
         <TableCell>{hospital.address}</TableCell>
         <TableCell>{hospital.type}</TableCell>
         <TableCell>
            {hospital.createdAt
               ? dayjs(hospital.createdAt).format("YYYY-MM-DD")
               : ""}
         </TableCell>
         <TableCell>
            <IsActiveBadge isActive={Boolean(hospital.isActive)} />
         </TableCell>
         <TableCell className="flex items-center justify-end gap-2">
            <ActionsMenu id={hospital.id} />
         </TableCell>
      </TableRow>
   );
}

export default HospitalRow;
