import LoginForm from '@/components/adminConnect/LoginForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';


const login = () => {
    
  
  return (
    <LoginForm />
  )
}

export default login