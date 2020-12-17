import React, { useRef , useState} from 'react'
import {Card, Button, Form, FormGroup, Label, Input, Alert  } from 'reactstrap';
import {useAuth} from '../context/AuthContext' 
import styled from 'styled-components'

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} = useAuth();
  const [ error , setError] = useState();
  const [loading, setLoading] = useState(false);

 async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Password do not match')
    }

    try {
      console.log('try ok')
      setLoading(true)
      setError('')
     let sign = await signup(emailRef.current.value,passwordRef.current.value)
     return sign
    }catch {
      setError("Failed to create an account")
    }
   setLoading(false)
  }
  return (
    <div>
       <Card className="w-50 mx-auto p-3">
         <div className="text-center">
          <h2>Sign Up</h2>
         </div>
         {error && <Alert variant="danger">{error}</Alert>}
         <Form className="" onSubmit={handleSubmit}>
          <FormGroup id="email">
                <Label>Email</Label>
                <InputSignUp type="email" ref={emailRef}  required/>
            </FormGroup>
            <FormGroup id="password">
                <Label>Password</Label>
                <InputSignUp  type="password" ref={passwordRef}  required/>
            </FormGroup>
            <FormGroup id="password-confirm">
                <Label>password Confirm</Label>
                <InputSignUp type="password-confirm" ref={passwordConfirmRef}  required/>
            </FormGroup>
           <div className="text-center">
            <Button type="Submit" color="primary" disabled={loading}>sign up</Button>
           </div>
         </Form>
       </Card>
       <div className="text-center text-muted mt-3">Allready have to account ? Loggin</div>
    </div>
  )
}
export default SignUp

const InputSignUp = styled.input`
  maxWidth:100%;
  width:100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  transition: 1s all
  &:focus{
   
  }
`