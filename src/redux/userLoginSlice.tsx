import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeLoginModel } from '../pages/login/Login'
import { ACCESS_TOKEN, history, http, settings, USER_LOGIN } from '../util/settings/config'

export type TypeLogin = {
    email: string,
    accessToken: string
}

export type StateLogin = {
    useLogin: TypeLogin | null
}
const initialState: StateLogin = {
   useLogin: settings.getStorageJson(USER_LOGIN) ? settings.getStorageJson(USER_LOGIN) : null
}

const userLoginSlice = createSlice({
  name: 'userLoginSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>{
    builder 
    .addCase(callApilogin.fulfilled, (state: StateLogin, action: PayloadAction<TypeLogin>)=>{
          state.useLogin = action.payload
          settings.setStorageJson(USER_LOGIN,action.payload)
          settings.setStorage(ACCESS_TOKEN, action.payload.accessToken)
          settings.setCookieJson(USER_LOGIN, action.payload,30)
          settings.setCookie(ACCESS_TOKEN, action.payload.accessToken,30)
          history.push('/profile')
    })
  },
});

export const {} = userLoginSlice.actions

export default userLoginSlice.reducer

export const callApilogin = createAsyncThunk('userLoginSlice/callApilogin', async (userLogin: TypeLoginModel)=>{
  const result = await http.post('/api/Users/signin', userLogin)
  return result.data.content
})