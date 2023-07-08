import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import apiClient from "../../services/apiClient"
import "./LoginPage.css"

const LoginPage = ({signedIn, setSignedIn}) => { 
  const navigate = useNavigate()
  const [appState, setAppState] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    setSignedIn(true)
    e.preventDefault()
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))
    setIsLoading(false)

    try {
      const { data, error, message } = await apiClient.login({email: form.email, password: form.password})
      if (error) {
        setErrors((e) => ({ ...e, form: error }))
        setIsLoading(false)
        return
      }

      if (data) {
        setAppState((s) => ({ ...s, user: data.user, isAuthenticated: true }))
        localStorage.setItem("lifetracker_token", data.token)
        navigate("/activity")
        setIsLoading(false)
      } else {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  }
  return (
    <div className="Login">
      <div className="media">
      </div>

      <div className="card">
        <h2>Login to the Portal</h2>

        {Boolean(errors.form) && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            Don't have an account? Sign up <Link to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
