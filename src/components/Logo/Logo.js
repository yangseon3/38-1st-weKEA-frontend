import { useNavigate } from "react-router-dom";
import "./Logo.scss";

function Logo() {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/");
  };
  return (
    <div className="logo" onClick={moveToMain}>
      <img alt="weKea logo" src="/images/weKealogo.png" />
    </div>
  );
}
export default Logo;
