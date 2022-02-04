import React, { useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { auth } from "firebase";
// import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(res => {
            history.push('/main');
            //do something with the response
        }).catch(err => {
            //do something with the error
        })
    }

//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { signup } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useNavigate()

//   async function handleSubmit(e) {
//     e.preventDefault()

//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }

//     try {
//       setError("")
//       setLoading(true)
//       await signup(emailRef.current.value, passwordRef.current.value)
//       history.push("/")
//     } catch {
//       setError("Failed to create an account")
//     }

//     setLoading(false)
//   }

  return (
    <>
      <Card className="w-50 m-auto mt-5">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)}required />
            </Form.Group>
            <Button onClick={signUp} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}