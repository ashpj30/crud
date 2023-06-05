import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AddUsers from './components/users/AddUsers';
import EditUser  from './components/users/EditUser';
import  User  from './components/users/User';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
       <ToastContainer></ToastContainer>
     <Router>
      <Switch>
     <Route exact path='/' component={Login}></Route>
      <Route exact path='/register' component={Register}></Route></Switch>
     <Switch>
      <Route exact path='/home' component={Home}/>
     <Route  exact path='/users/add' component={AddUsers}></Route>
      <Route exact path='/users/edit/:id' component={EditUser}/>
      <Route eaxact path='/users/:id' component={User}></Route>
     </Switch>
    
     </Router>
    </div>
  );
}

export default App;
