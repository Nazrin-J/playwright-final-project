import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'  

test('User login with valid credentials',async({page})=>{
const login=new Loginvalid(page)  //constructor invoking
await login.loginurl()
await expect(page).toHaveURL('https://www.demoblaze.com/') //to check whether the page url is correct or not
await login.loginbutton()
await expect(page.locator('#login2')).toHaveText('Log in') //to check whether the login pop up is displayed or not
await expect(login.username).toBeVisible() //username field should be visible
await expect(login.password).toBeVisible() //password field should be visible
await login.validlogincred('testdemoproj','testdemoproj@123')
await expect(login.username).toHaveValue('testdemoproj')  //to check whether the username fields contains the value or not
await expect(login.password).toHaveValue('testdemoproj@123') //to check whether the password fields contains the value or not
await login.loginconfirm()
await expect(page.locator('#nameofuser')).toHaveText('Welcome testdemoproj') //to check whether the user is logged in or not by verifying the welcome message
})