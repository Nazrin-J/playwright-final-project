import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'
import {Productundermonitors} from '../pages/Product-monitor'

test('User adding product under monitors',async({page})=>{
const addmonitor=new Productundermonitors(page)  //constructor invoking
await addmonitor.loginlink()
await addmonitor.loginbutton()
await addmonitor.validlogincred('testdemoproj','testdemoproj@123')
await addmonitor.loginconfirm()
await addmonitor.productundermonitors()
await addmonitor.selectmonitor()
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('Product added.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
})
await addmonitor.additemcart()
await addmonitor.cart()
await addmonitor.placetheorder()
await addmonitor.details('test user','india','trivandrum','12345','october','2006')
await addmonitor.purchaseitem()
await addmonitor.purchaseconfirmation()

})