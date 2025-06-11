import PageLayout from "@/components/layouts/PageLayout";
import Header from "@/features/Hospitals/Header";
import HospitalsList from "@/features/Hospitals/HospitalsList";

function Hospitals() {
   return (
      <PageLayout
         pageName="hospitals"
         className="flex animate-fade-in flex-col gap-7"
      >
         <Header />
         <HospitalsList />
      </PageLayout>
   );
}

export default Hospitals;
