import logo from "../assets/pics/achareh-type-logo-v2.c68d84f.png";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if(location.pathname === "/SuccessPage"){
      setIsActive(true);
    }
  }, [location.pathname]);
  return (
    <>
      <section>
        <header>
          <div className="d-flex flex-row justify-content-between  p-4 shadow-lg rounded-bottom-4 ">
            <div className="">
              <button
                id="btn1"
                onClick={() => {setIsActive(false);navigate("/")}}
                className={
                  !isActive ? "btn mx-2 btn-primary active" : "btn mx-2"
                }
              >
                ثبت آدرس
              </button>
              <button
                id="btn2"
                onClick={() => {setIsActive(true);navigate("/AllAddresses")}}
                className={isActive ? "btn btn-primary active" : "btn "}
              >
                مشاهده همه آدرس ها
              </button>
            </div>
            <img src={logo} alt="" />
          </div>
        </header>
      </section>
    </>
  );
}
