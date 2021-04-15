import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  

  constructor(private formBuilder:FormBuilder) { }


ngOnInit() {
  this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword:['',Validators.required]
})

}
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

     
    if (this.registerForm.invalid) {
        return;
    }


alert( JSON.stringify(this.registerForm.value))
 }
// // onClick():void{
// //   this._router.navigate(['/login']);
// // }
}
