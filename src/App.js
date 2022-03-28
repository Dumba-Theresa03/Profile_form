import React, { useState } from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'
import useLocalStorage from './Hooks/useLocalStorage'

function App() {
 const[profiles, setProfiles ]= useLocalStorage("profiles",[])

const updateProfiles =(profile)=>{
let arr =profiles;
arr.push(profile);
setProfiles([...arr]);
};

  return (
    <div className='app'>
    <h1>My Best Moment</h1>
    <div>
    <ProfileForm submit={updateProfiles}/>
    <hr/>
    <div className='list'>
    {profiles.map((person,index)=>(
<ProfileCard key={index} card={person}/>
    ))}
    
    </div>
    </div>
    </div>
  )
}

export default App