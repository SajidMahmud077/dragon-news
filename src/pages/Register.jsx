import { Link,useNavigate } from "react-router-dom";
import { useContext,useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createUser,setuser,updateUserProfile}=useContext(AuthContext)
  const navigate=useNavigate()
  const [error,setError]=useState({})
  const handleSubmit=(e)=>{
    e.preventDefault()
    //get form data
    const form=new FormData(e.target);
    const name=form.get('name')
    if(name.length < 5){
      setError({...error, name: 'name should be more than 5 character'})
    }



    const photo=form.get('photo')
    const email=form.get('email')
    const password=form.get('password')
    console.log(name, photo,email,password)

    createUser(email,password)
    .then(result =>{
      const user=result.user
      setuser(user)
      updateUserProfile({displayName: name, photoURL: photo })
      .then(()=>{
      
        navigate('/')

      }).catch((err)=>{
        console.log(err)

      })
    })
    .catch(error => {
      console.log('ERROR', error.message)
    })

    };
  
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <h2 className='text-2xl font-poppins text-center'>Register Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="name" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password'  className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover"></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className='text-center font-semibold'>
      Already Have An Account ? <Link  to='/auth/login'  className='text-red-500'>Login</Link>
      </p>
    </div>
    </div>
  );
};

export default Register;