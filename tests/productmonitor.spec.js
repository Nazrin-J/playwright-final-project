import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'
import {Productundermonitors} from '../pages/Product-monitor'

test('User adding product under monitors',async({page})=>{
const addmonitor=new Productundermonitors(page)  //constructor invoking
await addmonitor.loginlink()
await expect(page).toHaveURL('https://www.demoblaze.com/')  
await addmonitor.loginbutton()
await expect(page.locator('#login2')).toBeVisible() //to check whether the locator is visible or not
await expect(addmonitor.username).toBeVisible() //username field should be visible
await expect(addmonitor.password).toBeVisible() //password field should be visible  
await addmonitor.validlogincred('testdemoproj','testdemoproj@123')
await expect(addmonitor.username).toHaveValue('testdemoproj')  //to check whether the username fields contains the value or not
await expect(addmonitor.password).toHaveValue('testdemoproj@123') //to check whether the password fields contains the value or not
await addmonitor.loginconfirm()
await expect(page).toHaveTitle('STORE')
await addmonitor.productundermonitors()
await addmonitor.selectmonitor()
await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=14')  //to check whether the url is correct or not after clicking monitors
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('Product added.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
})
await addmonitor.additemcart()
await addmonitor.cart()
await expect(page).toHaveURL('https://www.demoblaze.com/cart.html') //to check whether the url is correct or not after clicking add to cart button
await addmonitor.placetheorder()
await addmonitor.details('test user','india','trivandrum','12345','october','2006')
await addmonitor.purchaseitem()
await addmonitor.purchaseconfirmation()
await expect(page).toHaveURL('https://www.demoblaze.com/index.html') //to check whether the url is correct or not after placing the order
})