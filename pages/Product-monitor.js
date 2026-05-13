export class Productundermonitors{      
constructor(page){     
this.page=page     
this.loginuser=page.locator('#login2')
this.username=page.locator('#loginusername')
this.password=page.locator('#loginpassword')
this.loginbutn=page.locator("//button[@onclick='logIn()']")
this.monitors=page.locator('.list-group-item',{hasText:'Monitors'})
this.asus=page.locator('.card-title a',{hasText:'ASUS Full HD'})
this.addcartbutton = page.locator('.btn.btn-success.btn-lg')
//this.addcartbutton = page.getByRole('button', {name:'Add to cart'})
this.cartbuttonclick=page.locator('#cartur')
this.placeorder = page.getByRole('button', {name:'Place Order'})
//this.placeorder = page.locator('.btn.btn-success')
this.name=page.locator('#name')
this.country=page.locator('#country')
this.city=page.locator('#city')
this.creditcard=page.locator('#card')
this.month=page.locator('#month')
this.year=page.locator('#year')
this.purchase=page.getByRole('button', {name:'Purchase'})
this.okbutton=page.locator('.confirm.btn.btn-lg.btn-primary')

}

async loginlink()        
{
    await this.page.goto('https://www.demoblaze.com/')
}

async loginbutton()
{
    await this.loginuser.click()
}

async validlogincred(username,password)
{


    await this.username.fill(username)
    await this.password.fill(password)
}


async loginconfirm()
{
    await this.loginbutn.click()
    // wait until login successful
    await this.page.locator('#nameofuser').waitFor()

}

async productundermonitors()
{
    await this.monitors.click()
     // wait for monitor products to load
    await this.asus.waitFor({ state: 'visible' })

} 

async selectmonitor()
{
    await this.asus.click()
      // wait for Add to cart button
      await this.addcartbutton.waitFor({ state: 'visible' })

}
async additemcart()
{
    await this.addcartbutton.click()
}

async cart()
{
    await this.cartbuttonclick.click()
  

}

async placetheorder()
{
    await this.placeorder.click()
}
async details(name,country,city,creditcard,month,year)
{


    await this.name.fill(name)
    await this.country.fill(country)
    await this.city.fill(city)
    await this.creditcard.fill(creditcard)
    await this.month.fill(month)
    await this.year.fill(year)

}
async purchaseitem()
{
    await this.purchase.click()
}
async purchaseconfirmation()
{
    await this.okbutton.click()
}
}
