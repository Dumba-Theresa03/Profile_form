import React, { useState } from 'react'

function ProfileForm({submit}) {
const [profile, setProfile]=useState({
firstName:"",
lastName:"",
phone:"",
    });

const handler =(event) =>{
setProfile((prev)=>({
    ...prev,
    [event.target.name]: event.target.value
}));
}

const handleForm =(e)=>{
    e.preventDefault();
    submit(profile)
};

  return (
<div className='formContainer'>
<h3>My Dream</h3>
<form>
<fieldset>
<legend>Bio Made</legend> 
<div className='names'>


 <label> 
First name
<input name='firstName' value={profile.firstName} onChange={handler} type="text"/>
</label>

 <label> 
Last name 
<input name='lastName' value={profile.lastName} onChange={handler} type="text" />
</label>
</div>

<div className='names'>
 <label> 
Email
<input name='email' value={profile.email} onChange={handler} type="email" />
</label>

 <label> 
Phone
<input name='phone' value={profile.phone} onChange={handler} type="tel" />
</label> 



</div>
</fieldset>
 <button className='form' onClick={handleForm}>Add Profile</button>   
</form>


</div>


  )
}

export default ProfileForm