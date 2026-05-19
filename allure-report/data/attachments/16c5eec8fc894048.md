# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: additemtocart.spec.js >> User adding product to cart
- Location: tests\additemtocart.spec.js:5:5

# Error details

```
TypeError: page.locator(...).toContainText is not a function
```

# Test source

```ts
  1  | export class Addtocart{      
  2  | constructor(page){     
  3  | this.page=page     
  4  | this.loginuser=page.locator('#login2')
  5  | this.username=page.locator('#loginusername')
  6  | this.password=page.locator('#loginpassword')
  7  | this.signupbutton=page.locator("//button[@onclick='logIn()']")
  8  | //this.samsusungproduct=page.locator('#tbodyid a[href="prod.html?idp_=1"]')
> 9  | this.samsusungproduct=page.locator("a[href='prod.html?idp_=1']").toContainText('Samsung galaxy s6')
     |                                                                  ^ TypeError: page.locator(...).toContainText is not a function
  10 | this.addcartbutton=page.locator("//a[onclick='addToCart(1)']")
  11 | }
  12 | 
  13 | async loginurl()        
  14 | {
  15 |     await this.page.goto('https://www.demoblaze.com/')
  16 | }
  17 | 
  18 | async loginbutton()
  19 | {
  20 |     await this.loginuser.click()
  21 | }
  22 | 
  23 | async validlogincred(username,password)
  24 | {
  25 | 
  26 | 
  27 |     await this.username.fill(username)
  28 |     await this.password.fill(password)
  29 | }
  30 | 
  31 | 
  32 | async loginconfirm()
  33 | {
  34 |     await this.signupbutton.click()
  35 | 
  36 | }
  37 | 
  38 | async selectproduct()
  39 | {
  40 |     await this.samsusungproduct.click()
  41 | 
  42 | } 
  43 | 
  44 | async additemcart()
  45 | {
  46 |     await this.addcartbutton.click()
  47 | 
  48 | }
  49 | }
  50 | 
```