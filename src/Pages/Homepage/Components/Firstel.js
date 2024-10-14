import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FirstStyle from "./Firstel.module.css";

function Firstel() {
  const [name, changeName] = useState("");
  const [lastname, changeLastname] = useState("");
  const [id, changeId] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMsg = "Please Fill The ";
    if (id === null || id === "") {
      isProceed = false;
      errorMsg += " Id";
    }
    if (email === null || email === "") {
      isProceed = false;
      errorMsg += " Email";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMsg += " Password";
    }
    if (!isProceed) {
      toast.warning(errorMsg);
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let elementObj = { name, lastname, id, email, password };
    if (isValidate()) {
      console.log(elementObj);
      fetch("http://localhost:8000/user ", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(elementObj),
      })
        .then((res) => {
          toast.success("Signed Up Successfully");
          // navigate("/login");
          changeName("");
          changeLastname("");
          changeId("");
          changeEmail("");
          changePassword("");
        })
        .catch((err) => {
          toast.error("faild:" + err.message);
        });
    }
  };
  return (
    <div className={FirstStyle.mainCont}>
      <div className={FirstStyle.greenCont}>
        <form className={FirstStyle.formCont} onSubmit={handleSubmit}>
          <h1 className={FirstStyle.formTitle}>
            Sign <span>UP</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={FirstStyle.formLogo}
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </h1>
          <div className={FirstStyle.fillCont}>
            <label>Name</label>
            <input
              className={FirstStyle.inputDesign}
              value={name}
              onChange={(e) => changeName(e.target.value)}
            ></input>
          </div>
          <div className={FirstStyle.fillCont}>
            <label>LastName</label>
            <input
              className={FirstStyle.inputDesign}
              value={lastname}
              onChange={(e) => changeLastname(e.target.value)}
            ></input>
          </div>
          <div className={FirstStyle.fillCont}>
            <label>
              Account name <span  className={FirstStyle.redStar}>*</span>
            </label>
            <input
              className={FirstStyle.inputDesign}
              value={id}
              onChange={(e) => changeId(e.target.value)}
            ></input>
          </div>
          <div className={FirstStyle.fillCont}>
            <label>
              Password <span className={FirstStyle.redStar}>*</span>
            </label>
            <input
              type="password"
              className={FirstStyle.inputDesign}
              value={password}
              onChange={(e) => changePassword(e.target.value)}
            ></input>
          </div>
          <div className={FirstStyle.fillCont}>
            <label>
              Email <span className={FirstStyle.redStar}>*</span>
            </label>
            <input
              className={FirstStyle.inputDesign}
              value={email}
              onChange={(e) => changeEmail(e.target.value)}
            ></input>
          </div>
          <div className={FirstStyle.buttonContainer}>
            <button type="submit">Submit</button>
            <Link to={"/login"}>Already Have An Account</Link>
          </div>
        </form>
      </div>
      <div className={FirstStyle.blackCont}>
        <div className={FirstStyle.blackSpan}>
          <span>Our Mission</span>
        </div>
        <p>
          "To empower individuals and businesses by providing innovative,
          reliable, and accessible online solutions that enhance digital
          experiences."
        </p>
      </div>
    </div>
  );
}

export default Firstel;
