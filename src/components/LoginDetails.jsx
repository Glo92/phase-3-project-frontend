import { useForm, Controller } from 'react-hook-form'
import {z} from "zod"
import {zodResolver} from '@hookform/resolvers/zod'
import { createRef } from 'react';



const schema = z.object({
  name: z.string({
    required_error: 'Name is required'
  }),
  phone: z.string({
    required_error: 'Phone number is required'
  }),
  email: z.string({
    required_error: 'email address is required'
  }),
  password: z.string({
    required_error: 'password is required'
  })
})

function LoginDetails() {
  const formRef = createRef();

  const {control, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email:'',
      password: ''
    }
  })

  console.log(formState.errors)

  const onSubmit = (values) => {
    fetch("http://localhost:8000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...values})
    })
    formRef.current.reset();
    
  
  }
  
  return (
    <div className='flex justify-center w-full bg-white'>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-pink-200 rounded-lg border-double border-4 border-pink-300 mt-5 mb-5'>
          <Controller
          name='name' 
          control={control}
          render={({field}) => (
            <input 
            className="bg-white pb-3 pt-6 my-8 border-b-2 border-gray-600 focus:border-pink-500 outline-none w-full"
            type="text" 
            placeholder='Enter your name...' 
            required
            {...field}
      
            />
          )}
          />
          <Controller
          name='phone' 
          control={control}
          render={({field}) => (
            <input 
            className="bg-white pb-3 pt-6 my-8 border-b-2 border-gray-600 focus:border-pink-500 outline-none w-full"
            type="text" 
            placeholder='Enter your phone number...' 
            required
            {...field}
            
            />
          )}
          />

         <Controller
          name='email' 
          control={control}
          render={({field}) => (
            <input 
            className="bg-white pb-3 pt-6 my-8 border-b-2 border-gray-600 focus:border-pink-500 outline-none w-full"
            type="email" 
            placeholder='Enter your email adrress...' 
            required
            {...field}
            />
          )}
          />
          

          <Controller
          name='password' 
          control={control}
          render={({field}) => (
            <input 
            className="bg-white pb-3 pt-6 my-8 border-b-2 border-gray-600 focus:border-pink-500 outline-none w-full"
            type="password" 
            placeholder='Enter your password...' 
            required
            {...field}
            />
          )}
          />
         
          
              <button className="bg-black my-3 px-7 ml-3  text-white font-semibold pb-2 pt-2" type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginDetails;