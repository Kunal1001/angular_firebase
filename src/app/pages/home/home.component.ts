import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public data:any

  constructor(public apiService:ApiService, public router:Router){
    this.getData().then((products)=>{
      console.log(products);
    }) 
  }
  public async getData(){
    this.data = await this.apiService.getAllData()
    return this.data
  }
  public async delData(pid){
    this.apiService.delProduct(pid).then(()=>{
      alert("product Deleted")
      this.getData()
      this.router.navigate([''])
    }).catch((err)=>{
      alert(""+err)
    })
  }
}
