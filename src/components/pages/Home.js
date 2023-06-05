import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './Home.css';
import Navbar from '../layout/Navbar';
import { toast } from 'react-toastify';

const Home = () => {
  const [ user,setUser] = useState([]);
  
const History= useHistory();
  useEffect(() =>{//fetch the list of users from the server when the component is mounted for the first time
    loadUsers();
   
    let userid=sessionStorage.getItem('userid');//stored in the browser session storage
          if(userid==='' || userid===null){
            History('/'); }
  },[])


//synchronous fun that sends GET request to the server using the axios library to fetch the list of users . 
const loadUsers = async () =>{
  const result = await axios.get ("http://localhost:4000/users");
  setUser(result.data.reverse()); //with the help of setuser fun we can set data 
}

const deleteUser = async id => {
  await axios.delete(`http://localhost:4000/users/${id}`);//delete a user with the given id.
  loadUsers();// use to call update the user list after a user is deleted.
  toast.success('Data Deleted successfully');
};
return(
    <div>
      <header>
        <Navbar/>
      </header>
        <h1>Home Page</h1>
        <table id="customers">
          <tr>
            <th>#</th>
            <th>name</th>
            <th>User name</th>
            <th>Email id</th>
            <th>Actions</th>
          </tr>
          <tbody>
            { user.map((user,index)=> ( //user list we render using map fun on the user state 
                   //display the data
                <tr>
                <th>{index +1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className='button'>
                  <Link className='link1' to={`/users/${user.id}`}>view</Link></td>
               <td className='button12' ><Link className='link2' to={`/users/edit/${user.id}`}>Edit</Link></td>
                 <td className='button2'> <Link className='link3' onClick={() =>deleteUser(user.id)}>Delete</Link></td>
                
                </tr>
                
              )) }
          </tbody>
        </table>
    </div>
  )
}

export default Home;