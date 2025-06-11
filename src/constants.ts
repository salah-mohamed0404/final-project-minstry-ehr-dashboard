export const supportedLanguages = ["ar", "en"];

export const API_URL = import.meta.env.VITE_API_URL;
export const LIMIT = 20;
export const DEFAULT_LOCALE = "en";

export const BACKEND_SERVICES_BASE_ROUTES = {
   EHR: "api",
} as const;

export const QUERY_KEYS = {
   PATIENT: "patient",
   PATIENTS: "patients",
   MEDICAL_RECORD: "medicalRecord",
   MEDICAL_RECORDS: "medicalRecords",
   SAFF_ANALYTICS: "staffAnalytics",
   PATIENTS_ANALYTICS: "patientsAnalytics",
   HOSPITALS: "hospitals",
   HOSPITAL: "hospital",
} as const;
