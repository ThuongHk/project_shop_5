import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DispatchType } from '../../redux/store'
import { callApilogin } from '../../redux/userLoginSlice'

type Props = {}
export type TypeLoginModel ={
  email: string,
  password: string
}
function Login({}: Props) {
 const dispatch: DispatchType = useDispatch()
  const userForm = useFormik<TypeLoginModel>({
initialValues: {
  email: '',
  password: ''
},
onSubmit: (values: TypeLoginModel) =>{
  console.log(values)
  const actionThunk = callApilogin(values)
  dispatch(actionThunk)
}})
  return (
   <form className="w-25 m-auto" onSubmit={userForm.handleSubmit}>
    <h4 className="text-center">Login</h4>
    <div className="form-group">
      <p><b>Email</b></p>
      <input className="form-control" type='email' name='email' value={userForm.values.email} onChange={userForm.handleChange} />
    </div>
    <div className="form-group">
      <p><b>password</b></p>
      <input className="form-control" type='password' name='password' value={userForm.values.password} onChange={userForm.handleChange} />
    </div>
    <button type='submit' className="btn btn-primary mt-2">Submit</button>
    
   </form>
  )
}

export default Login