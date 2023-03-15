import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSnackbar } from '@mui/base';
import { useFormInputValidation } from 'react-form-input-validation';

const Login = () => {
    // var[input,setinput]=useState();
    // const cap_input=(e)=>{
    // setinput(input=(e.target.value))
    // console.log(input)

    // }
    const[fields,errors,form]=useFormInputValidation({
       email_address:"",
       password:"" 
    },{
        email_address:"required|email",
        password:"required"
    })
  return (
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        value={fields.email_address}
        onBlur={form.handleBlurEvent}
        onChange={form.handleChangeEvent}
        name='email_address'
        label="Email"
        helperText={errors.email_address?errors.email_address:""}
          id="outlined-error"
        /><br></br>
        <TextField
         value={fields.password}
         onBlur={form.handleBlurEvent}
         onChange={form.handleChangeEvent}
        name='password'
        label="password"
        helperText={errors.password?errors.password:""}
          id="outlined-error-helper-text"
        //   helperText="Incorrect entry."
        />
      </div>
    </Box>

  )
}

export default Login
