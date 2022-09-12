import React, {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login ({changeUser}) {
    const [userLogin, setUserLogin] = useState("")
    const navigate = useNavigate()

    async function findCurrentUser(username) {
        const response = await fetch(`http://localhost:9292/users/${username}`)
        const user = await response.json()
        changeUser(user)
        navigate.push(`/users/${user.id}/materials`)
        }

    const handleSubmit = (event) => {
        event.preventDefault()
        findCurrentUser(userLogin)
    }
     const handleChange = event => {
        setUserLogin(event.target.value)
     }
     return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="login">
              <label htmlFor="login" value="Username">Username:   </label><br/>
              <input type="text" id="login" name="login" value={userLogin} onChange={handleChange} autoFocus={true}/><br/><br/>

              <label htmlFor="email">Email:   </label><br/>
              <input type="text" id=" email" name="login" value={userLogin} onChange={handleChange} autoFocus={true}/><br/><br/>
              <input type="submit" value="Login"/>
            </div>
          </form>
        </div>
     )
}
export default Login