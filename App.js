import React,{useState} from 'react'


function App() {
  const [values ,setValues] = useState({
    firstName : "",
    lastName : "" ,
    email : "",
  });
  const [submitted , setSubmitted] = useState(false)
  const [valid ,setValid] =useState(false);

  const handlefirstNameInputChange = (event) => {
    setValues({ ...values, firstName:event.target.value})
  }
  
  const handlelastNameInputChange = (event) => {
    setValues({ ...values, lastName:event.target.value})
  }
  
  const handleEmailInputChange = (event) => {
    setValues({ ...values , email: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email)
    {
      setValid (true);
    }
    setSubmitted(true);
  }

  return (
    <div className="App">
      <form className = "register-form" onSubmit = {handleSubmit}>
     {submitted && valid ? <div className = "Success-message" >Success! Thank you for registration </div> : null }
        <input
        onChange= {handlefirstNameInputChange}
        values={values.firstName}
        className ="form-field "
        placeholder = "First Name "
        name = "firstName" />
       {submitted && !values.firstName ? <span >Please Enter your first name</span> : null }
        <input
        onChange ={handlelastNameInputChange}
        values = {values.lastName}
        className = "form-field"
        placeholder = "Last Name"
        name = "lastName"/>
       {submitted && !values.lastName ? <span>Please enter your last name </span> : null }
        <input 
        onChange = {handleEmailInputChange}
        values = {values.email}
        className ="form-field"
        placeholder = "Email"
        name="email "/>
       {submitted && !values.email ? <span>Please enter your Email Id </span> : null } 
         <button
        className = " form-field "
        type= " submit"> Register</button>
      </form>
    </div>
  );
}

export default App;
