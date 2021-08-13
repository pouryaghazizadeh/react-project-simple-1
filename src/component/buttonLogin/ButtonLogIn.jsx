import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./buttonLogIn.css";

function ButtonLogIn() {
  const r = () => {
    toast("hhhhh")}
  return (
    <div>
      <button className="buton-login" onClick={r}>
        Login
      </button>
      <ToastContainer />
    </div>
  );
}

export default ButtonLogIn;
