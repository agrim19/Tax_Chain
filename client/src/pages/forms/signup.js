import React from "react";
import './form.css'

function SignUp() {
  return (
    <div className="black-bg">
	<div className="form-container">
		<h1>Sign Up</h1>

		<form action="/signup" method="POST">
		<div className="input-field">
			<input type="text" name="FirstName" id="FirstName" placeholder="FirstName" />
			<input type="text" className="ml-3" name="LastName" id="LastName" placeholder="LastName" />
		</div>
		<div className="input-field">
			{/* <i className="bx bxs-user"></i> */}
			<input type="email" name="email" id="email" placeholder="Email" />
		</div>
		<div className="input-field">
			{/* <i className="bx bxs-user"></i> */}
			<input type="text" name="AadharNo" id="AadharNo" placeholder="AadharNo" />
		</div>
		<div className="input-field">
			{/* <i className="bx bxs-user"></i> */}
			<input type="text" name="PanNo" id="PanNo" placeholder="PanNo" />
		</div>
		<div className="input-field">
			{/* <i className="bx bxs-user"></i> */}
			<input type="text" name="contact" id="Contact" placeholder="Contact" />
		</div>

		<div className="input-field">
			<select name="Designation" id="Designation">
				<option value="" hidden>Designation</option>
				<option value="taxPayer">Tax Payer</option>
				<option value="constituency">Constituency</option>
				<option value="contractor">Contractor</option>
				<option value="government">Government</option>
			</select>
		</div>

		<div className="input-field">
			{/* <i className="bx bxs-key"></i> */}
			<input
			type="password"
			name="password"
			id="password"
			placeholder="password"
			/>
		</div>
		<button className="btn-submit">SignUp!</button>
		</form>
	</div>
    </div>
  );
}

export default SignUp;
