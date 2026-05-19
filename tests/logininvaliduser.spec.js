import{test,expect} from '@playwright/test'
import{Invaliduser}from '../pages/Login-invaliduser'


test('User login with invalid username',async({page})=>{
const logininvaliduser=new Invaliduser(page)  //constructor invoking
await logininvaliduser.loginurl()
await expect(page).toHaveURL('https://www.demoblaze.com/')
await expect(page).toHaveTitle('STORE')
await logininvaliduser.loginbutton()
await expect(page.locator('#login2')).toBeVisible()
await expect(logininvaliduser.username).toBeVisible() //username field should be visible
await expect(logininvaliduser.password).toBeVisible() //password field should be visible
await logininvaliduser.invalidloguser('testdemoproj32523525','testdemoproj@123')    
await expect(logininvaliduser.username).toHaveValue('testdemoproj32523525')  //to check whether the username fields contains the value or not
await expect(logininvaliduser.password).toHaveValue('testdemoproj@123') //to check whether the password fields contains the value or not
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('User does not exist.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
    })
await logininvaliduser.loginfailed()
})