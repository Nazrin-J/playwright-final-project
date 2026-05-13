export class Invalidpass{      
constructor(page){     
this.page=page     
this.loguser=page.locator('#login2')
this.username=page.locator('#loginusername')
this.password=page.locator('#loginpassword')
this.loginbutn=page.locator("//button[@onclick='logIn()']")
}

async loginurl()        
{
    await this.page.goto('https://www.demoblaze.com/')
}

async loginbutton()
{
    await this.loguser.click()
}

async invaliduserpass(username,password)
{


    await this.username.fill(username)
    await this.password.fill(password)
}


async logfailed()
{
    await this.loginbutn.click()

}
}
