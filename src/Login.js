import React, {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login ({changeUser}) {
    const [userLogin, setUserLogin] = useState("")
    const navigate = useNavigate()

    async function findCurrentUser(username) {
        const response = await fetch(`https://study-material-tracer-backend.herokuapp.com/users/${username}`)
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
          <form className="form" onSubmit={handleSubmit}>
            <div className="login">
              <label id="label" htmlFor="login" value="Username">Username:   </label><br/>
              <input type="text" id="login" name="login" value={userLogin} onChange={handleChange} autoFocus={true}/><br/><br/>

              <label id="label" htmlFor="email">Email:   </label><br/>
              <input type="text" id=" email" name="login" value={userLogin} onChange={handleChange} autoFocus={true}/><br/><br/>
              <input type="submit" className="button" value="Login"/>
            </div>
          </form>
        </div>
     )
}
export default Login