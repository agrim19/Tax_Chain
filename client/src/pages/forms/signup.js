import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { db } from "../../firebase";
import NavigationBar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import "./form.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const blockChainAddressRef = useRef();
  const designationRef = useRef();
  const history = useHistory();

  const { signup } = useAuth();
  // console.log(signup)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      emailRef.current.value === "" ||
      passwordRef.current.value == ""
    ) {
      return setError("Please fill all fields");
    }

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      // Add a new document in collection "cities"
      db.collection("users")
        .doc(emailRef.current.value)
        .set({
          name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
          designation: designationRef.current.value,
          blockChainAddress: blockChainAddressRef.current.value,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
          setError("Error writing document:");
        });

      console.log("Account created");
      history.push("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }

    setLoading(false);
  }

  return (
    <div className="auth-black-bg">
      <NavigationBar></NavigationBar>
      <div className="form-container form-container-signup">
        <h1>Sign Up</h1>
        {error ? (
          <Alert variant="success" className="mb-5">
            {error}
          </Alert>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="FirstName"
              ref={firstNameRef}
            />
            <input
              type="text"
              className="ml-3"
              name="LastName"
              id="LastName"
              placeholder="LastName"
              ref={lastNameRef}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="BlockchainAddress"
              id="BlockchainAddress"
              placeholder="Blockchain Address"
              ref={blockChainAddressRef}
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              className=""
              name="email"
              id="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          {/* <div className="input-field">
			<input type="text" name="PanNo" id="PanNo" placeholder="PanNo" />
		</div> */}
          {/* <div className="input-field">
            <input
              type="text"
              name="contact"
              id="Contact"
              placeholder="Contact"
            />
          </div> */}

          {/* <div className="input-field">
            <select name="Designation" id="Designation" ref={designationRef}>
              <option value="" hidden>
                Designation
              </option>
              <option value="government">Government</option>
              <option value="citizen">Citizen</option>
              <option value="constituency">Constituency</option>
              <option value="contractor">Contractor</option>
            </select>
          </div> */}

          <div className="input-field">
            {/* <i className="bx bxs-key"></i> */}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              minLength="6"
              ref={passwordRef}
            />
          </div>
          <button className="btn-submit">SignUp!</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SignUp;
