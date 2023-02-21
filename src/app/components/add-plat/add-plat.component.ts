import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  sForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.sForm = this.formBuilder.group({

      name: ["", [Validators.required, Validators.minLength(3)]],
      contenu: ["", [Validators.required, Validators.minLength(5)]],
      prix: ["", [Validators.minLength(2), Validators.required]],
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
