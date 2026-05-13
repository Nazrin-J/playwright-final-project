export class Invaliduser{      
constructor(page){     
this.page=page     
this.loginuser=page.locator('#login2')
this.username=page.locator('#loginusername')
this.password=page.locator('#loginpassword')
this.loginbtn=page.locator("//button[@onclick='logIn()']")
}

async loginurl()        
{
    await this.page.goto('https://www.demoblaze.com/')
}

async loginbutton()
{
    await this.loginuser.click()
}

async invalidloguser(username,password)
{


    await this.username.fill(username)
    await this.password.fill(password)
}


async loginfailed()
{
    await this.loginbtn.click()

}
}
