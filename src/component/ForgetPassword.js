import React, { useRef , useState} from 'react'
import {Card, Button, Form, FormGroup, Label, Input, Alert  } from 'reactstrap';
import {useAuth} from '../context/AuthContext' 
import styled from 'styled-components'
import {Link,} from 'react-router-dom'

function ForgetPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {restPassword} = useAuth();
  const [ error , setError] = useState();
  const [ message , setMessage] = useState();
  const [loading, setLoading] = useState(false);


 async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true)
      setError('')
      setMessage('')
      await restPassword(emailRef.current.value);
      setMessage('check your inbox further instructions')
    }catch {
      setError("Failed to reset password")
    }
   setLoading(false)
  }
  return (
    <div>
       <Card className="w-50 mx-auto p-3">
         <div className="text-center">
          <h2>Reset password</h2>
         </div>
         {error && <Alert variant="danger">{error}</Alert>}
         {message && <Alert variant="success">{message}</Alert>}
         <Form className="" onSubmit={handleSubmit}>
          <FormGroup id="email">
                <Label>Email</Label>
                <InputSignUp type="email" ref={emailRef} className=" " required/>
            </FormGroup>
           <div className="text-center">
            <Button type="Submit" color="primary" disabled={loading}>Reset Password</Button>
           </div>
         </Form>
         <div className="w-100 text-center mb-3">
           <Link to ='/login' >Login</Link>
           <Link to ='/uppdate' >Uppdate</Link>
         </div>
       </Card>
       <div className="text-center text-muted mt-3">Allready have to account ? <Link to ="/signup">Sign Up</Link></div>
    </div>
  )
}
export default ForgetPassword

const InputSignUp = styled.input`
  maxWidth:100%;
  width:100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  transition: 1s all
  &:focus{
   
  }
`