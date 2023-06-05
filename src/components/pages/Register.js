import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';//display toast notifications for the user.
import './Register.css';
import axios from 'axios';

// variables will hold the user's registration information as they enter it into the form.
 const Register = () => {
    const[id,idchange]=useState(""); //update the var name using usestate
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phoneno,phonenochange]=useState("");
    const [password,passwordchange]=useState("");
   
    const History=useHistory();
//navigate to another route in the application.

    const handleSubmit= async (e)=>{ 
        e.preventDefault();
        
        let rejobj={id,name,email,phoneno,password};
        console.log(rejobj);
       
        try{   //make the HTTP request and waits for the response
            const response = await axios.post("http://localhost:4000/user",rejobj);
            console.log(response.data);
            toast.success('Registered successfully');
            History.push('/');
            } 
            catch (err) { //If the request fails
            toast.error('Failed :' +err.message);
            }
    }

  return (
    <div className='reg-box'>
        <form onSubmit={handleSubmit}>
            <div className='form'></div>
                <h1 class="login-header">User Registration</h1>
            <div className='user-box'>
             <input type="text" name="" required="" value={id} onChange={e=>idchange(e.target.value)}></input>
          <label>User id</label>  </div>

           <div className='user-box'>
            <input type="text" name="" required="" value={name} onChange={e=>namechange(e.target.value)}></input>
            <label >User Name</label></div>

            <div className='user-box'>
           <input type="email" name="" required="" value={email} onChange={e=>emailchange(e.target.value)}></input>
            <label>Email</label></div>

            <div className='user-box'>
            <input type="tel" name="" required="" value={phoneno} onChange={e=>phonenochange(e.target.value)}></input>
            <label >phone no</label></div>

            <div className='user-box'>
           <input type="password" name="" required="" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={e=>passwordchange(e.target.value)}></input>
            <label >Password</label></div>
           <div className='butt'> <button className='butt1' >Submit</button> </div>               
           <div className='butt'>   <button className='butt1'>back</button></div>
          </form>


    </div>
  )
}
 export default Register;