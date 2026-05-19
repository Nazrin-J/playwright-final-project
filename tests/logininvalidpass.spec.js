import{test,expect} from '@playwright/test'
import{Invalidpass}from '../pages/Login-invalidpass'


test('User login with invalid password',async({page})=>{
const logininvalidpass=new Invalidpass(page)  //constructor invoking 
await logininvalidpass.loginurl()
await expect(page).toHaveURL('https://www.demoblaze.com/') //to check whether the page url is correct or not
await expect(page).toHaveTitle('STORE') //to check whether the page title is correct or not
await logininvalidpass.loginbutton()
await expect(page.locator('#login2')).toBeVisible()
await expect(logininvalidpass.username).toBeVisible() //username field should be visible
await expect(logininvalidpass.password).toBeVisible() //password field should be visible
await logininvalidpass.invaliduserpass('testdemoproj','testdemoproj@1235474')
await expect(logininvalidpass.username).toHaveValue('testdemoproj')  //to check whether the username fields contains the value or not
await expect(logininvalidpass.password).toHaveValue('testdemoproj@1235474') //to check whether the password fields contains the value or not
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('Wrong password.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
    })
await logininvalidpass.logfailed()
})