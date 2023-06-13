import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public apiService:ApiService){
    this.getData().then((products)=>{
      console.log(products);
    }) 
  }
  public async getData(){
    let data = await this.apiService.getAllData()
    return data
  }
}
