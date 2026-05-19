# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginandlogout.spec.js >> User logout
- Location: tests\loginandlogout.spec.js:6:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | export class Logoutuser{      
  2  | constructor(page){     
  3  | this.page=page     
  4  | this.loginuser=page.locator('#login2')
  5  | this.username=page.locator('#loginusername')
  6  | this.password=page.locator('#loginpassword')
  7  | this.loginbton=page.locator("//button[@onclick='logIn()']")
  8  | this.logoutbutton=page.locator('#logout2')
  9  | }
  10 | 
  11 | async loginurl()        
  12 | {
> 13 |     await this.page.goto('https://www.demoblaze.com/')
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  14 | }
  15 | 
  16 | async loginbutton()
  17 | {
  18 |     await this.loginuser.click()
  19 | }
  20 | 
  21 | async validlogincred(username,password)
  22 | {
  23 | 
  24 | 
  25 |     await this.username.fill(username)
  26 |     await this.password.fill(password)
  27 | }
  28 | 
  29 | 
  30 | async loginconfirm()
  31 | {
  32 |     await this.loginbton.click()
  33 | 
  34 | }
  35 | 
  36 | async logoutuser()
  37 | {
  38 |     await this.logoutbutton.click()
  39 | 
  40 | }
  41 | }
  42 | 
```