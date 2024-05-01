import { navbar } from "@nextui-org/react"



const Login = () => {
  return (
    <div>
        <navbar/>
        <input placeholder='enter password' type='password'/> <br/>
        <input placeholder='enter email'/> <br/>
        <button className="bg-black text-white m-4">Submit</button>
    </div>
  )
}

export default Login