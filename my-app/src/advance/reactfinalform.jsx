import React from 'react';
import { Form, Field } from 'react-final-form'


export default function MyForm(){
    function onSubm(values){
        window.alert(JSON.stringify(values,0,2));
    }

    const required=(value)=>value?undefined:"Required";
    const minAge=(age)=>!age?undefined:`age must be greater${age}`;
    return (
      
        <Form
        onSubmit={onSubm}
        // validate={values=>{
        //     const errors={}
        //     console.log("Error Render");
        //     if(!values.username){
        //         errors.username="Required"
        //     }
        //     if(!values.password){
        //         errors.password="Required"
        //     }
        //     if(!values.confirm){
        //         errors.confirm="Required"
        //     }
        //     else if(values.confirm!=values.password){
        //         errors.confirm="Must Match"
        //     }
        //     return errors;
        // }}
        render={({handleSubmit,values,form})=>(
          
        <form onSubmit={handleSubmit}>
            {console.log("render")}
           
            <div >
            <Field name="username" validate={required}>
                {({input,meta})=>(
                    <div>User name
                        <input {...input}/>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
            </div>
            <div>
            <Field name="password"  validate={required}>
               {({input, meta})=>(
                   <div>Password
                   <input {...input}/>
               {meta.error && meta.touched && <span>{meta.error}</span>}
                   </div>
               )}
            </Field>
            </div>
                <div>
                    <Field name="confirm"  validate={required}>
                    {({input,meta})=>(
                       <div>
                           confirm Password 
                           <input {...input}/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                       </div>
                    )}
                    </Field>
                </div>
                <div>
            
            <Field name="work" validate={required}>
            {({input,meta})=>(
                <div>Work
                    <input {...input}/>
                    {console.log(meta.touched)}
            {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
            )}    
            </Field> 
          
            </div>

            {/* <div>blue 
            <Field name="dj" component="input" type="checkbox"/>
            </div>
            <div>Gender   </div>
            <Field name="Gender" component="input" value="Male" type="radio" />Male
            <Field name="Gender" component="input" value="FeMale" type="radio" />Female
           <br/> */}

            <button type="submit">submit</button>
            <button onClick={form.reset}>reset</button>
            <pre>{JSON.stringify(values,0,2)}</pre>
            {/* {values.dj}
            {values.username}
            {values.password}
            {values.Gender} */}
            </form>
         )}
        
        />
      
    );
};

