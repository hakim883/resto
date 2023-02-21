import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  sForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.sForm = this.formBuilder.group({

      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      poste: ["", [Validators.minLength(7), Validators.required]],
      image: ["", [Validators.required,Validators.minLength(10)]],
      
      

    });

  }


  Add() {
    console.log("here object", this.sForm.value);
  }
  // Upload() {
  //   console.log("here object", this.sForm.value);
  // }



}
