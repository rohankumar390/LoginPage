import React from 'react'

const RegisterAndLogin = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.email.value)
    }


    return (
        <div className='App'>
            <form action="
        un" onSubmit={(e)=>handleSubmit(e)}>
            <h1>SignIn</h1>
                <input name="email" placeholder='Email' />
                <br />
                <input name="password" type="password" placeholder='Password' />
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default RegisterAndLogin 