import React, { Component } from "react";
import tesla from "./../../../assets/image 1.png";
import "./home.css";
import "boxicons";
import interior from "./../../../assets/inter.png";
import milk from "./../../../assets/milk.png";
import white from "./../../../assets/white.png";

export default class Home extends Component {
  state = {
    speed: 60,
    tem: 20,
    disk: 19,
    oldimage: interior,
    display: "none",
    newdisplay: "block",
  };

  up = (name) => {
    let son = this.state[name];
    son++;
    this.setState({ [name]: son });
  };

  down = (name) => {
    let son = this.state[name];
    son--;
    this.setState({ [name]: son });
  };

  Milk = () => {
    this.setState({ oldimage: milk });
  };
  White = () => {
    this.setState({ oldimage: white });
  };
  Black = () => {
    this.setState({ oldimage: interior });
  };

  Change = () => {
    if (this.state.oldimage === milk || interior || white) {
      this.setState({ oldimage: tesla });
    }
    if (this.state.oldimage === tesla) {
      this.setState({ oldimage: interior });
    }
    const newdisplay = this.state.display === "none" ? "flex" : "none";
    this.setState({ display: newdisplay });
    const olddisplay = this.state.newdisplay === "block" ? "none" : "block";
    this.setState({ newdisplay: olddisplay });
  };
  render() {
    return (
      <div>
        <div className="container-xl">
          <img
            src={this.state.oldimage}
            alt="car_image"
            style={{ width: "1240px", height: "697px" }}
          />
          <div
            className="detail"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "117px",
              marginTop: "50px",
            }}
          >
            <div className="range">
              <p>Запас хода</p>
              <strong>750км</strong>
            </div>
            <div className="price">
              <p>Цена</p>
              <strong>$89, 990</strong>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "51px",
              gap: "54px",
              justifyContent: "center",
              marginBottom:"50px"
            }}
          >
            <div style={{ display: this.state.display, gap: "54px" }}>
              <div className="speed" style={{ display: "flex" }}>
                <div className="text">
                  <p style={{ fontSize: "14px", marginBottom: "0" }}>
                    Скорость автомобиля
                  </p>
                  <strong style={{ fontSize: "48px" }}>
                    <span>{this.state.speed}</span> км/ч
                  </strong>
                </div>
                <div
                  className="btn"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    marginTop: "14px",
                  }}
                >
                  <button
                    onClick={() => {
                      this.up("speed");
                    }}
                  >
                    <i class="bx bx-up-arrow-alt"></i>
                  </button>
                  <button
                    onClick={() => {
                      this.down("speed");
                    }}
                  >
                    <i class="bx bx-down-arrow-alt"></i>
                  </button>
                </div>
              </div>
              <div className="temperature" style={{ display: "flex" }}>
                <div className="text">
                  <p style={{ fontSize: "14px", marginBottom: "0" }}>
                    Температура за окнами
                  </p>
                  <strong style={{ fontSize: "48px" }}>
                    <span>{this.state.tem}</span>°
                  </strong>
                </div>
                <div
                  className="btn"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    marginTop: "14px",
                  }}
                >
                  <button
                    onClick={() => {
                      this.up("tem");
                    }}
                  >
                    <i class="bx bx-up-arrow-alt"></i>
                  </button>
                  <button
                    onClick={() => {
                      this.down("tem");
                    }}
                  >
                    <i class="bx bx-down-arrow-alt"></i>
                  </button>
                </div>
              </div>
              <div className="disk" style={{ display: "flex" }}>
                <div className="text">
                  <p style={{ fontSize: "14px", marginBottom: "0" }}>Диски</p>
                  <strong style={{ fontSize: "48px" }}>
                    {this.state.disk}
                  </strong>
                </div>
                <div
                  className="btn"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    marginTop: "14px",
                  }}
                >
                  <button
                    onClick={() => {
                      this.up("disk");
                    }}
                  >
                    <i class="bx bx-up-arrow-alt"></i>
                  </button>
                  <button
                    onClick={() => {
                      this.down("disk");
                    }}
                  >
                    <i class="bx bx-down-arrow-alt"></i>
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", gap: "54px" }}>
                <div>
                  <p style={{ fontSize: "14px" }}>Кондиционер</p>
                  <div class="wrapper">
                    <input type="checkbox" id="check" />
                    <label for="check" chec>
                      <div class="circle"></div>
                    </label>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: "14px" }}>Версия Long Range</p>
                  <div class="wrapper">
                    <input type="checkbox" id="check2" name="check2" />
                    <label for="check2">
                      <div class="circle"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: this.state.newdisplay }}>
              <p>Цвет салона</p>
              <div style={{ display: "flex", gap: "15px" }}>
                <button
                  onClick={this.Black}
                  style={{
                    height: "36px",
                    width: "36px",
                    border: "none",
                    borderRadius: "50%",
                    background: "black",
                  }}
                ></button>
                <button
                  onClick={this.White}
                  style={{
                    height: "36px",
                    width: "36px",
                    border: "none",
                    borderRadius: "50%",
                    background: "silver",
                  }}
                ></button>
                <button
                  onClick={this.Milk}
                  style={{
                    height: "36px",
                    width: "36px",
                    border: "none",
                    borderRadius: "50%",
                    background: "antiquewhite",
                  }}
                ></button>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "14px" }}>Вид автомобиля</p>
              <div class="wrapper">
                <input type="checkbox" id="check3" name="check3" />
                <label for="check3" onClick={this.Change}>
                  <div class="circle"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
