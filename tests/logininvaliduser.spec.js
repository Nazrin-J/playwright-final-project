import{test,expect} from '@playwright/test'
import{Invaliduser}from '../pages/Login-invaliduser'


test('User login with invalid username',async({page})=>{
const logininvaliduser=new Invaliduser(page)  //constructor invoking
await logininvaliduser.loginurl()
await logininvaliduser.loginbutton()
await logininvaliduser.invalidloguser('testdemoproj32523525','testdemoproj@123')
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('User does not exist.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
    })
await logininvaliduser.loginfailed()
})