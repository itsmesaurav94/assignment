import CustomNavbar from "@/components/navbar/page"
import Link from "next/link"




const Login = () => {
  return (
    <div>
        <CustomNavbar/>
        <input placeholder='enter password' type='password'/> <br/>
        <input placeholder='enter email'/> <br/>
        <button className="bg-black text-white m-4">Login</button> 
        <br/>
        Don't have an account yet? <Link href="/register"> Sign up</Link> instead....
    </div>
  )
}

export default Login