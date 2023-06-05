import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import './AddUser.css';
import { toast } from 'react-toastify';

 const AddUsers = () => {
    const History = useHistory();
    //initial state for user obj set as empty string
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
});

const {name,username,email}=user;

const onInputChange =e=>{ //fun will update the user object
    setUser({...user,[e.target.name]:e.target.value})
    };

  const onSubmit = async e =>{// when we click on add button called onsubmit
        e.preventDefault();

await axios.post("http://localhost:4000/users",user);
History.push("/home");
toast.success('Data added successfully');

    }
    return (
    <div className="add-box">
        <div className='user-box'>
            <form onSubmit={e => onSubmit(e)}>
           <div className='user-box'>
            <input name="name" value={name} onChange={e => onInputChange(e)}></input>
            <label>name</label></div>
            
            <div className='user-box'> 
            <input name="username"
              value={username} onChange={e => onInputChange(e)}></input>
              <label>User name</label></div>

            <div className='user-box'>
            <input type={email} name="email"
              value={email} onChange={e => onInputChange(e)}></input>
              <label >email</label>
            </div>
            <button className='addbutt1'>Add user</button></form>
        </div>
    </div>
  );
}
export default AddUsers;
