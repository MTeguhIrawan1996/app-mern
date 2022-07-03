import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placholder="Email" />
        <Gap height={18} />
        <Input label="Password" placholder="Password" type="password" />
        <Gap height={50} />
        <Button title="Login" className="button btn btn-success" />
        <Gap height={30} />
        <Link title="Register Akun" onClick={() => history.push("/register")} />
      </div>
    </div>
  );
};

export default Login;
