import{test,expect} from '@playwright/test'
import {Signup} from '../pages/Signupstore'  
import {Signupclose} from '../pages/Signupstore-close'  
import { sign } from 'node:crypto'

test('User signup close',async({page})=>{
const signupclose=new Signupclose(page)  //constructor invoking
await signupclose.register()
await expect(page).toHaveURL('https://www.demoblaze.com/')
await signupclose.signinguser()
await expect(page.locator('#signin2')).toBeVisible()
await expect(signupclose.username).toBeVisible()
await expect(signupclose.password).toBeVisible()
await signupclose.usersignupcredentials('testdemo224','testdemopass235')
await expect(signupclose.username).toHaveValue('testdemo224')
await expect(signupclose.password).toHaveValue('testdemopass235')
await signupclose.closeregister()
await expect(page).toHaveURL('https://www.demoblaze.com/')
})