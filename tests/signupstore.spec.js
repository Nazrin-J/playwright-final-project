import{test,expect} from '@playwright/test'
import {Signup} from '../pages/Signupstore'  

test('User signup',async({page})=>{
const signup=new Signup(page)  //constructor invoking
await signup.register()
await expect(page).toHaveURL('https://www.demoblaze.com/') //to check whether the page url is correct or not
await signup.signinguser()
await expect (page.locator('#signin2')).toBeVisible()  //verification step to check whether the username field is visible or not
await expect(signup.username).toBeVisible()  //verification step to check whether the username field is visible or not
await expect(signup.password).toBeVisible()  //verification step to check whether the password field is visible or not
await signup.usersignupcredentials('testdemo2738','testdemopass2695')
await expect(signup.username).toHaveValue('testdemo2738')  //verification step to check whether the username field is filled with correct value or not
await expect(signup.password).toHaveValue('testdemopass2695')  //verification step to check whether the password field is filled with correct value or not
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('Sign up successful.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
    })
await signup.signupconfirm()
await expect(page).toHaveURL('https://www.demoblaze.com/') //to check whether the page url is correct or not
})