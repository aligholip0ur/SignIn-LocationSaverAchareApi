import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddressForm({ setUserData }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    coordinate_mobile: "",
    coordinate_phone_number: "",
    address: "",
    region: 1,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData(formData);
    navigate("/map");
  };

  return (
    <div
      className="container-fluid bg-light d-flex flex-column align-items-center justify-content-center mt-5 p-3"
      style={{ direction: "rtl" }}
    >
      <div
        className="bg-white p-4 rounded shadow-lg"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <h5 className="mb-3">لطفا مشخصات و آدرس خود را وارد کنید</h5>
        <form onSubmit={submitHandler}>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">نام</label>
              <input
                type="text"
                name="first_name"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">نام خانوادگی</label>
              <input
                type="text"
                name="last_name"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">شماره تلفن همراه</label>
              <input
                type="text"
                name="coordinate_mobile"
                className="form-control"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3">
              <label className="form-label">شماره تلفن ثابت (اختیاری)</label>
              <input
                type="text"
                name="coordinate_phone_number"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-9 mb-3">
              <label className="form-label">آدرس</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">جنسیت</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label className="form-check-label">آقا</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <label className="form-check-label">خانم</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">
            ثبت و ادامه
          </button>
        </form>
      </div>
    </div>
  );
}
