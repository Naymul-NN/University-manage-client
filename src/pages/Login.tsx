import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser, Tuser } from "../redux/features/auth/authSlice";
import { varifytoken } from "../utils/varifytoken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface LoginFormInputs {
     id: string;
     password: string;
   }

const Login = () => { 
     const navigate = useNavigate();
     const dispatch = useAppDispatch();

     const {register,handleSubmit} = useForm<LoginFormInputs>();
      const [login ] = useLoginMutation()
      
     const onSubmit = async (data:LoginFormInputs) => {
         const toastId = toast.loading('loging in')
          try{

               const userInfo = {
                    id: data.id,
                    password: data.password,
               }
               const res =await login(userInfo).unwrap();
               
               const user = varifytoken(res.data.accessToken) as Tuser;
               dispatch(setUser({user: user, token: res.data.accessToken}))
               toast.success('Logged in' , {id: toastId , duration: 2000})
               navigate(`/${user.role}/dashboard`);
          }catch(err){
               toast.error('somthin want wrong',{id: toastId, duration: 2000})
          }
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