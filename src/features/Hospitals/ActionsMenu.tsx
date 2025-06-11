import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddEditHospitalsDialog from "./AddEditHospitalsDialog";
import ActionBtn from "@/components/ActionBtn";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteHospital } from "./hooks/useDeleteHospital";

type ActionsMenuProps = {
   id: string;
};

function ActionsMenu({ id }: ActionsMenuProps) {
   const { mutate } = useDeleteHospital();

   const handleDeleteHospital = () => {
      mutate({ id });
   };

   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="w-full outline-none">
            <ActionBtn />
         </DropdownMenuTrigger>
         <DropdownMenuContent className="flex min-w-fit flex-col gap-2">
            <AddEditHospitalsDialog
               id={id}
               triggerButton={
                  <Button
                     variant="ghost"
                     className="h-auto justify-between gap-2 rounded-sm !px-2 py-2 text-sm font-normal"
                  >
                     Edit
                     <FaRegEdit />
                  </Button>
               }
            />

            <DropdownMenuItem
               className="text-red-500"
               onClick={handleDeleteHospital}
            >
               Delete
               <FaRegTrashCan />
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

export default ActionsMenu;
