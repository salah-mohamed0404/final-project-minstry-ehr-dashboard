interface Hospital {
   id: string;
   name: string;
   directorName: string;
   hospitalCode: string;
   licencesNumber: string;
   address: string;
   isActive: boolean;
   type: HospitalType;
   createdAt: string;
}

type HospitalType = "Public" | "Private" | "University" | "Charity";
