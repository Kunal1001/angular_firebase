import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public form = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(2)]),
    description:new FormControl("",[Validators.required,Validators.minLength(10)]),
    price:new FormControl(null,[Validators.required,Validators.minLength(1)])
  })
  public get name():AbstractControl {
    return this.form.controls['name']
  }
  public get description():AbstractControl {
    return this.form.controls['description']
  }
  public get price():AbstractControl {
    return this.form.controls['price']
  }
  public submit(){
    if(this.form.invalid) return
    console.log(this.form)
  }
}
