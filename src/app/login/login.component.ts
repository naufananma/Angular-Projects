import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Loginuser } from '../loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
isSubmitted=false;
loginuser:Loginuser;
  registerForm: any;

  constructor(private authService:AuthService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit() {
    //this.loginForm=this.formbuilder.group(
    //   {
    //    email:['',Validators.required],
    //   password:['',Validators.required]
    // });
    
      this.loginForm = this.formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.required]
      //confirmEmail: ['',Validators.required, Validators.pattern('^[a-zA-Z]+$')],
      //password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      // confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
       });
      }
       
      get formControls(){return this.loginForm.controls;}
      login(){
        console.log(this.loginForm.value)
         //console.log(this.loginform.controls.email.value)
         //console.log(this.loginform.controls.password.value)
        this.isSubmitted=true;
        if(this.loginForm.invalid){
          alert("User Form is not valid!!!")
          return;
        }
        else{
         // alert("User form is valid!!!")
          this.authService.login(this.loginForm.value).subscribe(
            data=>{
              this.loginuser=data;
              console.log(data);
              console.log(data.email);
            //Role based authentication

            if (data.email !=null){
              this.isSubmitted=true;
              this.router.navigateByUrl('/admin');
            }
            else
            {
              window.alert("Wrong username or password");
            }
           });   
    }
}
}


