import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

function Contact() {
  
    const { register, 
      handleSubmit, 
      formState:{ errors , reset} 
    } = useForm();

    
    const onSubmit=(data)=>{
      console.log(data);
        reset();
    }
    console.log(errors)
   
  return (
    <div className="container">  
      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <label for="">E-mail : </label>
          <input type="text" 
            class="form-control"
            name="e-mail" 
            placeholder="Your e-mail" 
            {...register ('email',{required: "E-mail is required", 
            pattern:{
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ }})} 
          />
            {errors.email && <span>E-mail is required!</span>}<br />
        <label for="">Message</label>
          <textarea type="text" 
          name="textarea" 
          class="form-control"
          rows="5" 
          column="20" 
          placeholder="your message..." 
          {...register('message', {required: "true",maxLength: 50  })} 
        />
          {errors.message && <span>Message is required!</span>}
          {errors.message && errors.message.type === "maxLength" && <span>Max length exceeded</span> }<br />
        <label for="">Message for</label>
          <select {...register('select',{required: "Select one"})}>
            <option value="">Select...</option>
            <option value="A">Koya</option>
            <option value="B">Mentor</option>
            <option value="c">Public</option>
          </select>
          {errors.select && <span>You have to select one</span>}
          <br />
        <div className="inline_checkbox">
          <input type="checkbox" class="form-control" className="checkbox" {...register("checkbox",{ required: true })}/>
          <label htmlFor="acceptTerms">Accept Terms & Conditions</label>
          
          {errors.checkbox && <p className="checkbox_error"> You must agree to term & condition to proceed.</p>}
        </div>
          <Button type="submit" onclick={handleSubmit}/>
      </form>
    </div>
  );
}

export default Contact;