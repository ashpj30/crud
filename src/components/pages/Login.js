import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login1.css';
import axios from 'axios';

const Login =()=> {
  const [userid,useridupdate] = useState('');
  const [password,passwordupdate] = useState(''); //str d  vod  user's input 

  const History=useHistory();
 
  useEffect(()=>{
    sessionStorage.clear();
// it is used to clear data when we add value into dom
  },[]);

  const ProceedLogin = (e) =>{
    e.preventDefault();

    //1 call validate to check userid n pass are not empty
    if(validate()){
     //if validate filled with data

      axios.get("http://localhost:4000/user/"+userid)
      .then((resp) =>{
        if (Object.keys(resp.data).length===0){ //data property len
          toast.error('please enter valid userid');
        }else{
          if(resp.data.password === password){
            toast.success('Sucess');
            sessionStorage.setItem('userid',userid);//set user id in ss
          History.push("/home")
          }else{
            toast.error('please enter valid password');
          }
        }
      }).catch((err)=>{
        toast.error('login failed due to :' +err.message);
      }) ;
    
    }
    }
     const validate=()=>{ //check the i/p filled empty or not
    let result=true;
    if(userid === '' || userid ===null){
      result=false;
      toast.warning('Please Enter username');
    }
    if(password === '' || password ===null){
      result=false;
      toast.warning('Please Enter password');
    }
    return result;
  }

  return (
    <div className="login-box">
      <form onSubmit={ProceedLogin}>
        <div>
          <h1 class="login-header"> User Login</h1>
          <div className='user-box'>
          
          <input  type="text" name="" required="" value={userid} onChange={e=>useridupdate(e.target.value)}></input>
          <label >User id</label>
          </div>
          <div className='user-box'>
         
          <input  type="password" name="" required=""  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={e=>passwordupdate(e.target.value)}></input>
          <label> Password</label></div>
          
          <div className='butt'>
            <button className='butt1' type='submit'>Login</button>
            </div>
            <div className='butt'>
            <Link className='link1' to={'/register'}>New User</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;