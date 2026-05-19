# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginvalidcred.spec.js >> User login with valid credentials
- Location: tests\loginvalidcred.spec.js:4:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | export class Loginvalid{      
  2  | constructor(page){     
  3  | this.page=page     
  4  | this.loginuser=page.locator('#login2')
  5  | this.username=page.locator('#loginusername')
  6  | this.password=page.locator('#loginpassword')
  7  | this.logbutton=page.locator("//button[@onclick='logIn()']")
  8  | }
  9  | 
  10 | async loginurl()        
  11 | {
> 12 |     await this.page.goto('https://www.demoblaze.com/')
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  13 | }
  14 | 
  15 | async loginbutton()
  16 | {
  17 |     await this.loginuser.click()
  18 | }
  19 | 
  20 | async validlogincred(username,password)
  21 | {
  22 | 
  23 | 
  24 |     await this.username.fill(username)
  25 |     await this.password.fill(password)
  26 | }
  27 | 
  28 | 
  29 | async loginconfirm()
  30 | {
  31 |     await this.logbutton.click()
  32 | 
  33 | }
  34 | }
  35 | 
```