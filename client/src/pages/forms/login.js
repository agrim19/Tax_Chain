import React from "react";
import "./form.css";

function Login() {
  return (
	<div className="black-bg">
	<div className="form-container">
		<h1>Login Up</h1>

		<form action="/login" method="POST">
		<div className="input-field">
			<i className="bx bxs-user"></i>
			<input type="email" name="email" id="email" placeholder="Email" />
		</div>

		<div className="input-field">
			<i className="bx bxs-key"></i>
			<input
			type="password"
			name="password"
			id="password"
			placeholder="password"
			/>
		</div>
		<button className="btn-submit">Login!</button>
		</form>
	</div>
	</div>
  );
}

export default Login;
