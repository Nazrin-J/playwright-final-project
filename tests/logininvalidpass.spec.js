import{test,expect} from '@playwright/test'
import{Invalidpass}from '../pages/Login-invalidpass'


test('User login with invalid password',async({page})=>{
const logininvalidpass=new Invalidpass(page)  //constructor invoking
await logininvalidpass.loginurl()
await logininvalidpass.loginbutton()
await logininvalidpass.invaliduserpass('testdemoproj','testdemoproj@1235474')
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('Wrong password.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
    })
await logininvalidpass.logfailed()
})