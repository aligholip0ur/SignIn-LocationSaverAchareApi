import { BrowserRouter as Router, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const imgsrc =
    "https://img.icons8.com/?size=100&id=pIPl8tqh3igN&format=png&color=000000";
  const hanedlclick = () => {
    navigate("/AllAddresses");
  };
  return (
    <>
      <div class="card text-center">
        <div class="card-body">
          <div className="card-title">
            <img src={imgsrc} alt="checkmark" />
            <h4>اطلاعات شما با موفقیت ثبت شد</h4>
          </div>
          <div className="card-text mt-5">
            <button className="btn btn-outline-success" onClick={hanedlclick}>
              مشاهده اطلاعات
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
