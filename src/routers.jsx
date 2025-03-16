import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MapComponent from "./components/map";
import AddressForm from "./components/AddressForm";
import AllAddress from "./components/AllAddresses";
import SuccessPage from "./components/SuccessPage";
export default function AppRouts({
  userData,
  setUserData,
  handleFinalSubmit,
  serverResponse,
}) {
  return (
    <Routes>
      <Route path="/" element={<AddressForm setUserData={setUserData} />} />

      <Route
        path="/map"
        element={
          <MapComponent
            userData={userData}
            setUserData={setUserData}
            handleFinalSubmit={handleFinalSubmit}
          />
        }
      />
      <Route
        path="/AllAddresses"
        element={<AllAddress serverResponse={serverResponse} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/SuccessPage" element={<SuccessPage />} />
    </Routes>
  );
}
