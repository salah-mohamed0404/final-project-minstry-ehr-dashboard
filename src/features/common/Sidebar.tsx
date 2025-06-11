import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
   // LuCalendarRange,
   LuLayoutDashboard,
} from "react-icons/lu";
import {
   MdLogout,
   // MdOutlineAddBox,
   // MdOutlineTypeSpecimen,
} from "react-icons/md";
import {
   // FaClinicMedical,
   FaHospitalAlt,
} from "react-icons/fa";

// import {
//    Accordion,
//    AccordionContent,
//    AccordionItem,
//    AccordionTrigger,
// } from "@/components/ui/accordion";

import FullPageLoading from "@/components/FullPageLoading";
import { useLogout } from "../Auth/useLogout";
import { cn } from "@/lib/utils";
// import { LucideUsersRound } from "lucide-react";
import { BsFillPersonVcardFill } from "react-icons/bs";
// import { useQueryClient } from "@tanstack/react-query";
// import { UserResponse } from "@/types/auth";

interface SidebarLink {
   name: string;
   icon: React.ReactNode;
   to: string;
   type: "single";
}

const Sidebar = ({ className }: { className?: string }) => {
   // const queryClient = useQueryClient();
   // const data = queryClient.getQueryData<{ data: UserResponse }>([
   //    "current-user",
   // ]);
   // const user = data?.data;
   // const currentUserRole = user?.role.toLocaleLowerCase() || "doctor";
   const { logout, isPending } = useLogout();
   const links: SidebarLink[] = [
      {
         name: "Dashboard",
         icon: <LuLayoutDashboard />,
         to: `/dashboard`,
         type: "single",
      },
      {
         name: "Patients",
         icon: <BsFillPersonVcardFill />,
         to: `/patients`,
         type: "single",
      },
      {
         name: "Hospitals",
         icon: <FaHospitalAlt />,
         to: `/hospitals`,
         type: "single",
      },
   ];
   // const { pathname } = useLocation();

   // const filteredLinks = React.useMemo(() => {
   //    return links;
   // }, [links]);

   return (
      <div
         className={cn(
            "removeScrollBars mx-auto flex w-full max-w-[80rem] flex-row items-center justify-between overflow-auto bg-gradient-to-b from-primary-500 to-secondary-500 capitalize lg:row-span-full lg:flex-col",
            className,
         )}
      >
         {isPending && <FullPageLoading />}
         <div className="w-full">
            <Link
               to={"/dashboard"}
               className="flex w-full items-center gap-4 px-5 py-5 text-white"
            >
               <span className="">
                  <img src="/images/logo.svg" alt="logo" />
               </span>
               <p className="text-xl font-bold">
                  LIFE <span className="text-tertiary-500">R</span>
                  ECORD
               </p>
            </Link>
         </div>
         <div className="h-full w-full flex-1">
            <div className="flex flex-col">
               {links.map((link, index) => (
                  <NavLink
                     key={index}
                     to={link.to}
                     className={`px-6 py-5 text-sm text-white transition-all item-active-circle hover:opacity-60 2xl:text-base [&.active]:bg-primary-700 [&.active]:text-white`}
                  >
                     <div className="flex items-center gap-2">
                        <span className="text-[1.5em] text-tertiary-500">
                           {link.icon}
                        </span>
                        {link.name}
                     </div>
                  </NavLink>
               ))}
            </div>
         </div>

         <div className="w-full py-8">
            <button
               className="mt-8 flex w-full items-center gap-4 px-6 py-5 text-base font-bold text-white transition-all hover:bg-primary-700"
               onClick={() => {
                  logout({});
               }}
            >
               <span className="text-[1.4em] text-tertiary-500">
                  <MdLogout />
               </span>
               Logout
            </button>
         </div>
      </div>
   );
};

export default Sidebar;
