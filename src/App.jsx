import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import AppRouts from "./routers";
import Header from "./components/Header";

function MainAppContent() {
  const [userData, setUserData] = useState({});
  const [serverResponse, setServerResponse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, "", "/");
  }, []);

  const handleFinalSubmit = async () => {
    console.log("📦 داده‌های ارسالی:", userData);

    try {
      const response = await fetch(
        "https://stage.achareh.ir/api/karfarmas/address",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
          },
          body: JSON.stringify(userData),
        }
      );
      const responseText = await response.text();
      if (!response.ok) {
        console.error("❌ خطای سرور:", response.status);
        console.error("❌ پاسخ سرور:", responseText);
        throw new Error(`Server Error: ${response.status}`);
      }
      const result = JSON.parse(responseText);
      if (result) {
        setServerResponse((prev) => [...prev, result]);
        console.log("✅ آدرس با موفقیت ثبت شد:", result);
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
