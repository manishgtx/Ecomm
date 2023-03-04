import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";
import Nav from '../components/Nav'
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address,setAddress] = useState('');

  const navigate = useNavigate()

  const [errorMsg,setErrorMsg] = useState('');
  const [successMsg,setSuccessMsg] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      addDoc(collection(db,"users"),{
        name,email,mobile,cart:0,address,uid:user.uid
      }).then(() => {
        setSuccessMsg('New User added successfully, you will now be automatically redirected to login page.')
        setTimeout(() => {
          navigate('/login')
        },4000)
      })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorMessage === 'Firebase: Error (auth/email-already-in-use).')
        setErrorMsg('Email already in use.')
      // ..
    });
  
    // Handle form submission here
  }
  return (
    <div>
      <Nav/>
      <div className="signup-container">
      <h2>Sign up</h2>
      {successMsg && <h4>{successMsg}</h4>}
      {errorMsg && <h4>{errorMsg}</h4>}
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" value={mobile} onChange={handleMobileChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={handleAddressChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
    <div>
      <span>Already have an account?</span>
      <Link to='/login'>Signin</Link>
    </div>
    </div>
  )
}

export default SignUp