import Filter from "@/assets/icons/Filter";
import MainHeader from "@/components/MainHeader";
import { Button } from "@/components/ui/button";
import SearchInput from "@/features/common/SearchInput";
import { FiPlus } from "react-icons/fi";
import AddEditHospitalsDialog from "./AddEditHospitalsDialog";

function Header() {
   return (
      <MainHeader>
         <MainHeader.TopSection>
            <MainHeader.Title
               title="Hospitals"
               description="Manage hospitals and their details"
            />
            <MainHeader.Actions>
               <AddEditHospitalsDialog
                  triggerButton={
                     <Button className="flex items-center gap-2">
                        <FiPlus className="text-2xl" />
                        Add Hospital
                     </Button>
                  }
               />
            </MainHeader.Actions>
         </MainHeader.TopSection>

         <MainHeader.Filters>
            <SearchInput searchKey="search" />
            {/* <Button
               variant="ghost"
               className="flex w-full gap-4 border-gray-400 max-sm:w-full sm:max-w-[143px]"
            >
               <Filter /> {t("global:filter")}
            </Button> */}
         </MainHeader.Filters>
      </MainHeader>
   );
}

export default Header;
