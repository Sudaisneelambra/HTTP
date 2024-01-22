import { Component } from '@angular/core';
import { HttpService } from '../httpservice.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {


  constructor(private sin:HttpService){}

user!:UserData[]
  gettingData(){
    this.sin.getdata().subscribe({
      next:(res)=>{
        console.log(res);
        this.user=res
      }
    })
    
    
  
    
    
  }

  clicking(userId:number,id:number,updata:any){

    this.sin.putData(userId,id,updata).subscribe({
      next:(res)=>{
        const index=this.user.findIndex((item)=>{
          return item.id===id
        })

        if(index !== -1)
        {
          this.user[index]=res
        }
        // this.user=res
        console.log(res);
        
      }
    })
  }
  posting(){
    this.sin.postData().subscribe({
      next:(sin)=>{
        console.log(sin);
        this.sin.getdata().subscribe({
          next:(el)=>{
            this.user=el
          }
        })
      }
      
    })

  }


  deleting(num:number){
    this.sin.Deletee(num).subscribe({
      next:(res)=>{
        console.log("user deleted",res);
        this.gettingData()
        
      }
    })
  }


}

interface UserData {
  id: number;
  title: string;
  body: string;
  userId: number;
}