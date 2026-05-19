# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logininvalidpass.spec.js >> User login with invalid password
- Location: tests\logininvalidpass.spec.js:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Wrong password."
Received: "User does not exist."
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import{Invalidpass}from '../pages/Login-invalidpass'
  3  | 
  4  | 
  5  | test('User login with invalid password',async({page})=>{
  6  | const logininvalidpass=new Invalidpass(page)  //constructor invoking
  7  | await logininvalidpass.loginurl()
  8  | await logininvalidpass.loginbutton()
  9  | await logininvalidpass.invaliduserpass('testdemoproj32523525','testdemoproj@123')
  10 | page.on('dialog',async dialog=>{             //listener creation -it listens for any pop up like alerts/popups,this step should create first if any pop up/alert appears-to handle the alerts/popups listeners are created first
> 11 | expect(dialog.message()).toBe('Wrong password.') //dialog.message()-actual text,we're checking the actual alert text with our expected text in toBe.verification-expectation-if any alerts come it will verifies our given message and compare it with our given message and alert message-and checks if both are same
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  12 | await dialog.accept()  //to click OK button on an alert we use accept()
  13 |     })
  14 | await logininvalidpass.logfailed()
  15 | })
```