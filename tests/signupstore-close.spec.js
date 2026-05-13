import{test,expect} from '@playwright/test'
import {Signup} from '../pages/Signupstore'  
import {Signupclose} from '../pages/Signupstore-close'  

test('User signup close',async({page})=>{
const signupclose=new Signupclose(page)  //constructor invoking
await signupclose.register()
await signupclose.signinguser()
await signupclose.usersignupcredentials('testdemo224','testdemopass235')
await signupclose.closeregister()
})