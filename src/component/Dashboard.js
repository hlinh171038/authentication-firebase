import React, { useState } from 'react'
import {Card, Button, Alert} from 'reactstrap'
import {useAuth} from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {
  const [error, setError] = useState();
  const {currentUser,logout} = useAuth();
  const history = useHistory()

 async function handleLogOut(){
      setError('');
      try{
        await logout()
        history.push('/login')
      } catch {
        setError('Failed to log out')
      }
  }
  return (
    <div>
     <Card>
      <h2 className="text-center mb-4">Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <strong>Email</strong> {currentUser.email}
      <Link to="/uppdate">Uppdate profile</Link>
     </Card>
    <Button variant="link" onClick={handleLogOut}>
       Log out 
    </Button>
    </div>
  )
}
