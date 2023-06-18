import React, { useState } from "react";
import { Link } from "react-router-dom";
import select from "react-select";
import "./style.css";
const Place = ({ province, setProvince, district, setDistrict }) => {
  const [isActpro, setIsActpro] = useState(false);
  const [isActdis, setIsActdis] = useState(false);
  const provinces = ["An Giang", "Đồng Tháp"];
  const districts = ["Thoại Sơn", "Châu Thành"];
  return (
    <>
      <section className="place">
        <div className="container d_flex">
          <div className="place-order">
            <form className="form">
              <h2>Địa chỉ giao hàng</h2>
              <div className="province">
                <div className="dropdown">
                  <div
                    className="dropdown-btn"
                    onClick={(e) => setIsActpro(!isActpro)}
                  >
                    Tỉnh {province}
                    <span className="fas fa-caret-down"></span>
                  </div>
                  {isActpro && (
                    <div className="dropdown-content">
                      {provinces.map((option) => (
                        <div
                          onClick={(e) => {
                            setProvince(option);
                            setIsActpro(false);
                          }}
                          className="dropdown-item"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="district">
                <div className="dropdown">
                  <div
                    className="dropdown-btn"
                    onClick={(e) => setIsActdis(!isActdis)}
                  >
                    Huyện {district}
                    <span className="fas fa-caret-down"></span>
                  </div>
                  {isActdis && (
                    <div className="dropdown-content">
                      {districts.map((option2) => (
                        <div
                          onClick={(e) => {
                            setDistrict(option2);
                            setIsActdis(false);
                          }}
                          className="dropdown-item"
                        >
                          {option2}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <input type="text" placeholder="Số nhà, tên đường"></input>

              {/* <div className="btn-cart">
        <div className="d_flex">
        <Link to='/'>
        <button>Đặt hàng</button>
        </Link>
        </div>
        
    </div>         */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Place;
