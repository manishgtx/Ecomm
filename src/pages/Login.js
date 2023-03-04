import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      setTimeout(() => {
        navigate('/home')
      },4000)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
  }
  return (
    <div>
      <Nav/>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-gray-700" htmlFor="email">Email</label>
          <input className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gmail.com" value={email} onChange={handleEmailChange} required/>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-gray-700" htmlFor="password">Password</label>
          <input className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="example@gmail.com" value={password} onChange={handlePasswordChange} required/>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
         Login
        </button>
      </form>
      

    </div>
  )
}

export default Login