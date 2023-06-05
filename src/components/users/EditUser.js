import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useHistory,useParams } from 'react-router-dom';
import './EditUser.css'
import { toast } from 'react-toastify';


 const EditUser = () => {
    const History = useHistory();
    const {id}= useParams();//useParams hook to access the URL parameters. we are accessing the 'id' parameter.
    
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
});

const {name,username,email}=user; // Destructuring the 'user

const onInputChange =e=>{
    setUser({...user,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
      //synchronous fun that sends  request to the server using the axios library to fetch the list of users .
        loadUser()
    },[]);


    const onSubmit = async e =>{
        e.preventDefault();
await axios.put(`http://localhost:4000/users/${id}`,user);
History.push("/home");
toast.success('Data Updated successfully');
};

const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/users/${id}`);
    setUser(result.data);
  };

    return (
    <div className="edit-box">
        <div>
            <form onSubmit={e => onSubmit(e)}>
            <div className='user-box'>
            <input  name="name" value={name} onChange={e => onInputChange(e)}></input>
            <label>name</label></div>
            <div className='user-box'>
            <input name="username"
              value={username} onChange={e => onInputChange(e)}></input>
              <label>User name</label></div>
            <div className='user-box'>
            <input type={email} name="email"
              value={email} onChange={e => onInputChange(e)}></input>
            <label >email</label></div>
            <button className='editbutton'> edit user</button></form>
        </div>
    </div>
  );
}
export default EditUser;
