export class Logoutuser{      
constructor(page){     
this.page=page     
this.loginuser=page.locator('#login2')
this.username=page.locator('#loginusername')
this.password=page.locator('#loginpassword')
this.loginbton=page.locator("//button[@onclick='logIn()']")
this.logoutbutton=page.locator('#logout2')
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
    await this.loginbton.click()

}

async logoutuser()
{
    await this.logoutbutton.click()

}
}
