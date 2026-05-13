export class Signupclose{      
constructor(page){     
this.page=page     
this.signupuser=page.locator('#signin2')
this.username=page.locator('#sign-username')
this.password=page.locator('#sign-password')
this.closebutton=page.getByRole('button', {name:'Close',exact: true}).nth(1)

}

async register()        
{
    await this.page.goto('https://www.demoblaze.com/')
}

async signinguser()
{
    await this.signupuser.click()
}

async usersignupcredentials(user1,pass1)
{


    await this.username.fill(user1)
    await this.password.fill(pass1)
}


async closeregister()
{
    await this.closebutton.click()

}
}
