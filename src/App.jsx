import { useForm } from "react-hook-form";
import './App.css';


function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const  onSubmit = async (data) =>{
    //API call ko simulate karte h
     await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("submitting the form", data);
  }

  return (
  
     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input 
        className={errors.firstName ? 'input-error' : ""}
        {...register('firstName', { 
          required: true,
           minLength:{value:3, message: 'Min length atleast 3'}
           })} />
           {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
        <br />
      <div>
        <label>Middle Name</label>
        <input {...register('middleName')} />
      </div>
        <br />
      <div>
        <label>Last Name</label>
        <input {...register('lastName')} />
      </div>
        <br />
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting..." : "Submit"}/>
     </form>
  )
}

export default App
