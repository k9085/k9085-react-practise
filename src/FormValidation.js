import React, { useState, useEffect } from "react";
//form Validation example without inbuilt libraries
//comments
/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre>  it stringify 
 the formvalues and shows in browser whatever values you type in input fields */
/*e.preventDefault(); //it handles the page not to refresh */
/* setFormErrors(validate(formValues)); 
passing formvalues to validate function and the outcome of this validate function
will be the value to the setFormErrors .the setFormErrors will update the formerrors
*/
//<p>{formErrors.username}</p> this syntax is used to display the error message near the label

/*  signin successful or not logic
 {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

*/

 FormValidation = ()=> {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //it handles the page not to refresh
    setFormErrors(validate(formValues));
    setIsSubmit(true); // onclick of submit button we are making this is true
  };

  /*As soon as the form fields satisfied with the validation need to submit the form so that 
  we are using useEfffect and it will get change based on the formErrors */
  useEffect(() => {
    console.log(formErrors);
    /* chcking formErrors keys length and issubmit value true */
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues); // these values will be correct form values with proper validation
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}; // this error object contains the errors and it will be set into the formerrors
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormValidation;
