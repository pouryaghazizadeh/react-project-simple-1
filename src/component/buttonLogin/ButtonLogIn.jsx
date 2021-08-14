
import "./buttonLogIn.css";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ButtonLogIn() {
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      <button className="buton-login" onClick ={notify}>
        Login
      </button>
    
    </div>
  );
}

export default ButtonLogIn;
