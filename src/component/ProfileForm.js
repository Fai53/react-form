import React from 'react'

function ProfileForm() {
    cosnt [profiles, setprofiles] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    });

    const handler =() => {
        setProfile((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    const handleForm = (e) => {
        e.preventDefault(),
        submit(profile)
    }


  return (
    <div className='formContainer'>
    <h3>profile Form</h3>
    <form>

    <fieldset>
    <legend>Bio data</legend>
    <div className='names'>
    <label>
    </label>"lastname"
    <input name='lastname' value={frofile. firstname}type="text" onChange={handler}/>
    <label>
    </label>"lastname"
    <input name='lastname' value={frofile. firstname}type="text" onChange={handler}/>
    </div>

    
    <div className='names'>
    <label>
    </label>"lastname"
    <input name='lastname' value={frofile. firstname}type="text" onChange={handler}/>
    <label>
    </label>"lastname"
    <input name='lastname' value={frofile. firstname}type="text" onChange={handler}/>
    </div>
    

    </fieldset>

    
    </form>

    </div>
  )
}

export default ProfileForm