import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'  

test('User login with valid credentials',async({page})=>{
const login=new Loginvalid(page)  //constructor invoking
await login.loginurl()
await login.loginbutton()
await login.validlogincred('testdemoproj','testdemoproj@123')
await login.loginconfirm()
})