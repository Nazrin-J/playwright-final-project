import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'  
import {Logoutuser} from '../pages/Loginandlogout'  


test('User logout',async({page})=>{
const logout=new Logoutuser(page)  //constructor invoking
await logout.loginurl()
await logout.loginbutton()
await logout.validlogincred('testdemoproj','testdemoproj@123')
await logout.loginconfirm()
await logout.logoutuser()

})