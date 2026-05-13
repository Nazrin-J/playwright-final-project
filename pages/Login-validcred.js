export class Loginvalid{      
constructor(page){     
this.page=page     
this.loginuser=page.locator('#login2')
this.username=page.locator('#loginusername')
this.password=page.locator('#loginpassword')
this.logbutton=page.locator("//button[@onclick='logIn()']")
}

async loginurl()        
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
}
