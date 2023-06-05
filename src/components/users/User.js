import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import './User.css';

const User = () => {
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
});

const { id } = useParams();
  useEffect(() => {
    //synchronous fun that sends GET request to the server using the axios library to fetch the list of users.
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:4000/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="view-box">

        <h1>User Id :{id}</h1>
        <ul>
            <li>name: {user.name}</li>
            <li> user name: {user.username}</li>
            <li>email: {user.email}</li>
        </ul>
        <Link className='viewbutton' to ="/home"> Back to home</Link>
    </div>
  )
}
export default User;