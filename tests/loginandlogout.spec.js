import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'  
import {Logoutuser} from '../pages/Loginandlogout'  


test('User logout',async({page})=>{
const logout=new Logoutuser(page)  //constructor invoking
await logout.loginurl()
await expect(page).toHaveURL('https://www.demoblaze.com/')  
await logout.loginbutton() 
await expect(page.locator('#login2')).toBeVisible()
await expect(logout.username).toBeVisible() //username field should be visible
await expect(logout.password).toBeVisible() //password field should be visible
await logout.validlogincred('testdemoproj','testdemoproj@123')      
await expect(logout.username).toHaveValue('testdemoproj')  //to check whether the username fields contains the value or not
await expect(logout.password).toHaveValue('testdemoproj@123') //to check whether the password fields contains the value or not
await logout.loginconfirm()
await expect(page).toHaveTitle('STORE')
await expect(logout.logoutbutton).toBeVisible() //logout button should be visible after login
await logout.logoutuser()
await expect(logout.loginuser).toBeVisible() //login button should be visible after logout
})