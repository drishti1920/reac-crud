
import './App.css';
import { useState } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {

  const [users,setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
 
 
  const addUser = (user) =>{
   setUsers([...users, {...user,id:Date.now()}])
  }
 
 const deleteUser = (id)=>{
   setUsers(users.filter((user)=>user.id !== id))
 }
 
 const updateUser = (updatedUser) =>{
   setUsers(users.map((user)=>(user.id === updatedUser.id ? updatedUser:user)))
   setEditingUser(null);
 }
 
 
   return (
    <div className="App">
       <h1>React</h1>
       <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
       <UserTable users={users} deleteUser={deleteUser} setEditingUser={setEditingUser} />
     </div>
   );
}

export default App;
