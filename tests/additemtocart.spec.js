import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'
import {Addtocart} from '../pages/Additemtocart'

test('User adding product to cart',async({page})=>{
const addcart=new Addtocart(page)  //constructor invoking
await addcart.loginlink()
await expect(page).toHaveURL('https://www.demoblaze.com/')
await addcart.loginbutton()
await expect(page.locator('#login2')).toBeVisible() //to check whether the locator is visible or not
await expect(addcart.username).toBeVisible() //username field should be visible
await expect(addcart.password).toBeVisible() //password field should be visible 
await addcart.validlogincred('testdemoproj','testdemoproj@123')
await expect(addcart.username).toHaveValue('testdemoproj')  //to check whether the username fields contains the value or not
await expect(addcart.password).toHaveValue('testdemoproj@123')  //to check whether the password fields contains the value or not
await addcart.loginconfirm()
await expect(page).toHaveTitle('STORE')
await addcart.selectproduct()
await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1')  //to check whether the url is correct or not after clicking phones
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('Product added.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
})
await addcart.additemcart()
await expect(addcart.addcartbutton).toBeVisible() //to check whether the url is correct or not after clicking add to cart button
})