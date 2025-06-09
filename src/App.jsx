import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import AppRouts from "./routers";
import Header from "./components/Header";
import { useGetAddressesMutation } from "./Api/Api";

function MainAppContent() {
  const [userData, setUserData] = useState({});
  const [serverResponse, setServerResponse] = useState([]);
  const navigate = useNavigate();
  const [getAddresses] = useGetAddressesMutation();

  useEffect(() => {
    window.history.pushState(null, "", "/");
  }, []);

  const handleFinalSubmit = async () => {
    console.log("📦 داده‌های ارسالی:", userData);
    try {
      const response = await getAddresses(userData);
      if (response.data) {
        setServerResponse((prev) => [...prev, response.data]);
        navigate("/SuccessPage");
      }
    } catch (error) {
      console.error("❌ خطا در ارسال داده‌ها:", error.message);
      alert("خطای سرور، دوباره تلاش کنید")
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <AppRouts
        serverResponse={serverResponse}
        userData={userData}
        setUserData={setUserData}
        handleFinalSubmit={handleFinalSubmit}
      />
    </>
  );
}

export default function MainApp() {
  return (
    <Router>
      <MainAppContent />
    </Router>
  );
}
