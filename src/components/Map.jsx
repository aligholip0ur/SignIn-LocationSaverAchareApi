import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = ({ userData, setUserData, handleFinalSubmit }) => {
  const [position, setPosition] = useState([35.6892, 51.3890]); // پیش‌فرض: تهران
  const [coords, setCoords] = useState("منتظر انتخاب...");
  const [loading, setLoading] = useState(false); // ✅ متغیر برای نمایش لودینگ

  // دریافت مختصات هنگام کلیک روی نقشه
  function LocationMarker() {
    useMapEvents({
      click(e) {
        const newPosition = [e.latlng.lat, e.latlng.lng];
        setPosition(newPosition);
        setCoords(`Lat: ${e.latlng.lat.toFixed(6)}, Lng: ${e.latlng.lng.toFixed(6)}`);
        setUserData((prev) => ({ ...prev, lat: e.latlng.lat, lng: e.latlng.lng })); // ذخیره مختصات در state مرکزی
      },
    });
    return <Marker position={position} />;
  }

  // دکمه مکان‌یابی
  const findMyLocation = () => {
    if (!navigator.geolocation) {
      alert("موقعیت‌یابی توسط مرورگر شما پشتیبانی نمی‌شود.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setPosition([lat, lng]);
        setCoords(`Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`);
        setUserData((prev) => ({ ...prev, lat, lng })); // به‌روزرسانی state مرکزی
      },
      (error) => {
        alert("خطا در دریافت موقعیت: " + error.message);
      }
    );
  };

  // ارسال نهایی اطلاعات
  const handleSaveAndSubmit = async () => {
    setLoading(true); // ✅ نمایش لودینگ
    await handleFinalSubmit(); // ✅ ارسال اطلاعات به سرور
    setLoading(false); // ✅ حذف لودینگ بعد از دریافت پاسخ
  };

  return (
    <div className="container-fluid bg-light d-flex flex-column align-items-center justify-content-center mt-5 p-3" style={{ direction: "rtl" }}>
      <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
        <div className="d-flex flex-row justify-content-between mb-2">
          <h2 className="text-primary">آدرس خود را انتخاب کنید</h2>
          <button className="btn btn-success mt-2" onClick={findMyLocation}>
            📍 مکان من
          </button>
        </div>
        <MapContainer center={position} zoom={13} style={{ height: "250px", width: "100%", borderRadius: "10px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker />
        </MapContainer>
        
        {/* ✅ دکمه ارسال با اسپینر بوت‌استرپ */}
        <button type="button" className="btn btn-success w-100 mt-3" onClick={handleSaveAndSubmit} disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span> در حال ارسال...
            </>
          ) : (
            "ثبت و ارسال"
          )}
        </button>

        <p className="mt-2 bg-light p-2 rounded float-lg-start">{coords}</p>
      </div>
    </div>
  );
};

export default MapComponent;
