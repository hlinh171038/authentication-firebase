import React, { useRef , useState} from 'react'
import {Card, Button, Form, FormGroup, Label, Input, Alert  } from 'reactstrap';
import {useAuth} from '../context/AuthContext' 
import styled from 'styled-components'
import {Link,useHistory} from 'react-router-dom'

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {login} = useAuth();
  const [ error , setError] = useState();
  const [loading, setLoading] = useState(false);
  const history =useHistory()

 async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true)
      setError('')
      await login(emailRef.current.value,passwordRef.current.value);
      history.push('/')
    }catch {
      setError("Failed to login an account")
    }
   setLoading(false)
  }
  return (
    <div>
       <Card className="w-50 mx-auto p-3">
         <div className="text-center">
          <h2>Login</h2>
         </div>
         {error && <Alert variant="danger">{error}</Alert>}
         <Form className="" onSubmit={handleSubmit}>
          <FormGroup id="email">
                <Label>Email</Label>
                <InputSignUp type="email" ref={emailRef} className=" " required/>
            </FormGroup>
            <FormGroup id="password">
                <Label>Password</Label>
                <InputSignUp  type="password" ref={passwordRef}  required/>
            </FormGroup>
           <div className="text-center">
            <Button type="Submit" color="primary" disabled={loading}>Login</Button>
           </div>
         </Form>
         <div className="w-100 text-center mb-3">
           <Link to ='/forgerPassword' >Forget password</Link>
         </div>
       </Card>
       <div className="text-center text-muted mt-3">Allready have to account ? <Link to ="/signup">Sign Up</Link></div>
    </div>
  )
}
export default Login

const InputSignUp = styled.input`
  maxWidth:100%;
  width:100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  transition: 1s all
  &:focus{
   
  }
`