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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.first_name || formData.first_name.length < 3) {
      newErrors.first_name = "نام باید حداقل ۳ کاراکتر باشد.";
    }

    if (!formData.last_name || formData.last_name.length < 3) {
      newErrors.last_name = "نام خانوادگی باید حداقل ۳ کاراکتر باشد.";
    }

    const phoneRegex = /^09[0-9]{9}$/;
    if (!phoneRegex.test(formData.coordinate_mobile)) {
      newErrors.coordinate_mobile =
        "شماره موبایل باید با 09 شروع شده و 11 رقم باشد.";
    }

    if (!formData.address || formData.address.length < 10) {
      newErrors.address = "آدرس باید حداقل ۱۰ کاراکتر باشد.";
    }

    if (!formData.gender) {
      newErrors.gender = "لطفاً جنسیت را انتخاب کنید.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData(formData);
      navigate("/map");
    }
  };

  return (
    <div className="container-fluid  d-flex flex-column align-items-center mt-4 justify-content-center py-4" style={{ direction: "rtl" }}>
      <div
        className="bg-white p-4 rounded shadow-lg w-100"
        style={{ maxWidth: "800px" }}
      >
        <h5 className="mb-2 text-center">
          لطفا مشخصات و آدرس خود را وارد کنید
        </h5>
        <form onSubmit={submitHandler}>
          <div className="row g-2 mb-3">
            <div className="col-12 col-md-6">
              <label className="form-label">نام</label>
              <input
                type="text"
                name="first_name"
                className="form-control"
                value={formData.first_name}
                onChange={handleChange}
              />
              {errors.first_name && (
                <div className="text-danger small">{errors.first_name}</div>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">نام خانوادگی</label>
              <input
                type="text"
                name="last_name"
                className="form-control"
                value={formData.last_name}
                onChange={handleChange}
              />
              {errors.last_name && (
                <div className="text-danger small">{errors.last_name}</div>
              )}
            </div>
          </div>

          <div className="row g-2 mb-3">
            <div className="col-12 col-md-6">
            <label className="form-label">شماره تلفن همراه</label>
            <input
              type="text"
              name="coordinate_mobile"
              className="form-control"
              value={formData.coordinate_mobile}
              onChange={handleChange}
            />
            {errors.coordinate_mobile && (
              <div className="text-danger small">
                {errors.coordinate_mobile}
              </div>
            )}
            </div>
                <div className="col-md-6 col-12">
              <label className="form-label">شماره تلفن ثابت (اختیاری)</label>
              <input
                type="text"
                name="coordinate_phone_number"
                className="form-control"
                value={formData.coordinate_phone_number}
                onChange={handleChange}
              />
              {errors.coordinate_phone_number && <div className="text-danger">{errors.coordinate_phone_number}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">آدرس</label>
            <textarea
              name="address"
              className="form-control"
              rows="1"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
            {errors.address && (
              <div className="text-danger small">{errors.address}</div>
            )}
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
            {errors.gender && (
              <div className="text-danger small">{errors.gender}</div>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 py-2 fs-5">
            ثبت و ادامه
          </button>
        </form>
      </div>
    </div>
  );
}
