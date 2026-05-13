export class Addtocart{      
constructor(page){     
this.page=page     
this.loginuser=page.locator('#login2')
this.username=page.locator('#loginusername')
this.password=page.locator('#loginpassword')
this.logbutton=page.locator("//button[@onclick='logIn()']")
this.samsusungproduct=page.locator('.card-title a',{hasText:'Samsung galaxy s6'})
this.addcartbutton = page.locator('.btn.btn-success.btn-lg')
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
    await this.logbutton.click()

}

async selectproduct()
{
    await this.samsusungproduct.click()

} 

async additemcart()
{
    await this.addcartbutton.click()
}
}
