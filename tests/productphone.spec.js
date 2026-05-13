import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'
import {Productunderphones} from '../pages/Product-phones'

test('User adding product under phones',async({page})=>{
const addphone=new Productunderphones(page)  //constructor invoking
await addphone.loginlink()
await addphone.loginbutton()
await addphone.validlogincred('testdemoproj','testdemoproj@123')
await addphone.loginconfirm()
await addphone.productunderphones()
await addphone.selectphone()
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('Product added.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
})
await addphone.additemcart()
await addphone.cart()
await addphone.placetheorder()
await addphone.details('test user','india','trivandrum','12345','october','2006')
await addphone.purchaseitem()
await addphone.purchaseconfirmation()

})