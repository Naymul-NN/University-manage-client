import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

interface LoginFormInputs {
     id: string;
     password: string;
   }

const Login = () => { 
     const {register,handleSubmit} = useForm<LoginFormInputs>();

      const [login , {data , error}] = useLoginMutation()
      console.log(data);
      console.log(error);


     const onSubmit = (data:LoginFormInputs) => {
          const userInfo = {
               id: data.id,
               password: data.password,
          }
          login(userInfo)
     }
return ( 
     <form onSubmit={handleSubmit(onSubmit)}>
          <div>
               <label htmlFor="id"> id:</label>
               <input type=" text" id='id' {...register('id')}/>
          </div>
          <div>
               <label htmlFor="password"> password</label>
               <input type="text" id='password' {...register('password')} />
          </div>
          <Button htmlType="submit">Login</Button>
     </form>
);
};

export default Login;