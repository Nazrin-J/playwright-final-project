import{test,expect} from '@playwright/test'
import {Loginvalid} from '../pages/Login-validcred'
import {Addtocart} from '../pages/Additemtocart'

test('User adding product to cart',async({page})=>{
const addcart=new Addtocart(page)  //constructor invoking
await addcart.loginlink()
await addcart.loginbutton()
await addcart.validlogincred('testdemoproj','testdemoproj@123')
await addcart.loginconfirm()
await addcart.selectproduct()
page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
expect(dialog.message()).toBe('Product added.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
await dialog.accept()  //to click OK button on an alert we use accept()
})
await addcart.additemcart()
})