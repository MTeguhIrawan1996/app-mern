import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placholder="Email" />
        <Gap height={18} />
        <Input label="Password" placholder="Password" type="password" />
        <Gap height={50} />
        <Button title="Register" className="button btn btn-success" />
        <Gap height={30} />
        <Link title="Kembali ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
