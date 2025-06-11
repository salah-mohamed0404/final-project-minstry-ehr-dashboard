import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { PageDetailsProvider } from "./context/PageDetailsProvider";
import Unauthorized from "@/pages/Unauthorized";
import AppLayout from "./components/layouts/AppLayout";
// import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./components/layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
// import Doctors from "./pages/staff-management/doctors";
// import Clinics from "./pages/staff-management/clinics";
// import Specializations from "./pages/staff-management/specializations";
// import Nurses from "./pages/staff-management/nurses";
// import Receptionists from "./pages/staff-management/receptionists";
import AllPatients from "./pages/patients/all-patients";
// import AllBookings from "./pages/bookings/all-bookings";
import Login from "./pages/auth/login";
// import AddBooking from "./pages/bookings/add-booking";
import SinglePatient from "./pages/patients/single-patient";
import Hospitals from "./pages/hospitals/hospitals";

function App() {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 0,
            refetchOnWindowFocus: false,
            retry: 0,
         },
      },
   });

   return (
      <>
         <I18nextProvider i18n={i18n}>
            <PageDetailsProvider>
               {/* <DarkModeProvider> */}
               <QueryClientProvider client={queryClient}>
                  <ReactQueryDevtools initialIsOpen={false} />
                  <Routes>
                     <Route path="/" element={<Navigate to={"/dashboard"} />} />
                     <Route
                        element={
                           // <LanguageWrapper>
                           <AppLayout />
                           // </LanguageWrapper>
                        }
                     >
                        <Route element={<AuthLayout />}>
                           <Route path="/login" element={<Login />} />
                        </Route>
                        <Route element={<DashboardLayout />}>
                           <Route path="/dashboard">
                              <Route
                                 index
                                 element={
                                    // <ProtectedRoute allowedRoles={["admin"]}>
                                    <Dashboard />
                                    // </ProtectedRoute>
                                 }
                              />
                           </Route>
                           <Route path="/patients">
                              <Route
                                 index
                                 element={
                                    // <ProtectedRoute
                                    //    allowedRoles={["admin", "doctor"]}
                                    // >
                                    <AllPatients />
                                    // </ProtectedRoute>
                                 }
                              />
                              <Route
                                 path=":patientId"
                                 element={
                                    // <ProtectedRoute
                                    //    allowedRoles={["admin", "doctor"]}
                                    // >
                                    <SinglePatient />
                                    // </ProtectedRoute>
                                 }
                              />
                           </Route>
                           <Route
                              path="/hospitals"
                              element={
                                 // <ProtectedRoute
                                 //    allowedRoles={["admin", "doctor"]}
                                 // >
                                 <Hospitals />
                                 // </ProtectedRoute>
                              }
                           />
                        </Route>

                        <Route
                           path="/unauthorized"
                           element={<Unauthorized />}
                        />
                        {/* <Route path="*" element={<NotFound />} /> */}
                     </Route>
                  </Routes>

                  <ToastContainer theme="colored" />
               </QueryClientProvider>
               {/* </DarkModeProvider> */}
            </PageDetailsProvider>
         </I18nextProvider>
      </>
   );
}

export default App;
