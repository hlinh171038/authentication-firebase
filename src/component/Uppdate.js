import React, { useRef , useState} from 'react'
import {Card, Button, Form, FormGroup, Label, Input, Alert  } from 'reactstrap';
import {useAuth} from '../context/AuthContext' 
import styled from 'styled-components'
import {Link,useHistory} from 'react-router-dom'

function Uppdate() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {currentUser, updateEmail,updatePassword } = useAuth();
  const [ error , setError] = useState();
  const [loading, setLoading] = useState(false);
  const history =useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Password do not match')
    }

    const promise =[];
    if(emailRef.current.value !== currentUser.email){
        promise.push(updateEmail(emailRef.current.value))
    }
    if(passwordRef.current.value){
        promise.push(updatePassword (passwordRef.current.value))
    }
    Promise.all(promise).then(() =>{
        history.push('/')
    }).catch(()=>{
        setError('failed to uppdate account')
    }).finally(()=>{
        setLoading(false)
    })

//     try {
//       console.log('try ok')
//       setLoading(true)
//       setError('')
//     //  let sign = await signup(emailRef.current.value,passwordRef.current.value)
//     //  return sign
//     }catch {
//       setError("Failed to create an account")
//     }
//    setLoading(false)
  }
  return (
    <div>
       <Card className="w-50 mx-auto p-3">
         <div className="text-center">
          <h2>Uppdate</h2>
         </div>
         {error && <Alert variant="danger">{error}</Alert>}
         <Form className="" onSubmit={handleSubmit}>
          <FormGroup id="email">
                <Label>Email</Label>
                <InputSignUp type="email" ref={emailRef} className=" " required defaultValue={currentUser.email}/>
            </FormGroup>
            <FormGroup id="password">
                <Label>Password</Label>
                <InputSignUp  type="password" ref={passwordRef}  required placeholder="leave blank to keep the same"/>
            </FormGroup>
            <FormGroup id="password-confirm">
                <Label>password Confirm</Label>
                <InputSignUp type="password-confirm" ref={passwordConfirmRef}  required placeholder="leave blank to keep the same"/>
            </FormGroup>
           <div className="text-center">
            <Button type="Submit" color="primary" disabled={loading}>Uppdate</Button>
           </div>
         </Form>
         <div className="w-100 text-center mb-3">
           <Link to ='/' >Cancal</Link>
         </div>
       </Card>
       <div className="text-center text-muted mt-3">Allready have to account ? <Link to ="/signup">Sign Up</Link></div>
    </div>
  )
}
export default Uppdate

const InputSignUp = styled.input`
  maxWidth:100%;
  width:100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  transition: 1s all
  &:focus{
   
  }
`