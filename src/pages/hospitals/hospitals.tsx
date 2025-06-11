import PageLayout from "@/components/layouts/PageLayout";
import Header from "@/features/Receptionists/Header";
import ReceptionistsList from "@/features/Receptionists/ReceptionistsList";

function Hospitals() {
   return (
      <PageLayout
         pageName="hospitals"
         className="flex animate-fade-in flex-col gap-7"
      >
         <Header />
         <ReceptionistsList />
      </PageLayout>
   );
}

export default Hospitals;
