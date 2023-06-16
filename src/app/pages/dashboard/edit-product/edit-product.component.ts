import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  public pid
  public product
  constructor(public route:ActivatedRoute, public apiService:ApiService,public router:Router){
    this.route.params.subscribe((params)=>{
      this.pid = params['id']
      this.apiService.getProduct(this.pid).then((product)=>{
        this.product = product
        console.log(this.product)
      })
    })
  }
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
  public async submit(){
    if(this.form.invalid) return
    this.apiService.updateProduct(this.form.value,this.pid).then(()=>{
      alert("Data updated Successfully")
      console.log(this.form.value)
      this.router.navigate(['']);
    }).catch((err)=>{
      alert(""+err)
    })
  }
}
