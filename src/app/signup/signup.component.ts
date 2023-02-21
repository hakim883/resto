import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.sForm = this.formBuilder.group({

      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.email, Validators.required]],
      phone: ["", [Validators.required, Validators.minLength(8)]],
      password: ["", [Validators.required, Validators.minLength(10),]],
      confirmPassword: ["", [Validators.required, Validators.minLength(10),]],

      

    });




  }

  signup() {
    console.log("here object", this.sForm.value);
  }



}
