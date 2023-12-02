import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import display from "./display";
import ClearScreen from "./ClearScreen";
import IsEqual from "./IsEqual";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="rounded-3"
        style={{
          backgroundColor: "#f0f0f0",
          color: "black",
          paddingTop: "2%",
          paddingLeft: "2%",
          paddingRight: "2%",
          paddingBottom: "2%",
          marginTop: "2%",
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: "2%",
        }}
      >
        <div className="row p-0 m-0 mb-3 d-flex">
          <div className="col-12" style={{ textAlign: "center" }}>
            <h3>Calculator</h3>
          </div>
        </div>
        <div>
          <input type="text" className="mb-3 w-100" id="result" disabled />
        </div>
        <table className="w-100">
          <tbody>
            <tr className="text-center">
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  id="Clear"
                  value="AC"
                  onClick={() => ClearScreen()}
                />
              </td>
              <td className="td">
                <input type="button" className="btn" value="BS" />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="%"
                  onClick={() => display("%")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="/"
                  onClick={() => display("/")}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="7"
                  onClick={() => display("7")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="8"
                  onClick={() => display("8")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="9"
                  onClick={() => display("9")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="x"
                  onClick={() => display("*")}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="4"
                  onClick={() => display("4")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="5"
                  onClick={() => display("5")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="6"
                  onClick={() => display("6")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="-"
                  onClick={() => display("-")}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="1"
                  onClick={() => display("1")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="2"
                  onClick={() => display("2")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="3"
                  onClick={() => display("3")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="+"
                  onClick={() => display("+")}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td className="td">
                <button className="btn"></button>
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="0"
                  onClick={() => display("0")}
                />
              </td>
              <td className="td">
                <input
                  type="button"
                  className="btn"
                  value="."
                  onClick={() => display(".")}
                />
              </td>
              <td className="td">
                <input type="button" className="btn" value="=" onClick={() => IsEqual()}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
