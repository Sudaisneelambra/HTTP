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
        console.log(index);
        

        if(index !== -1)
        {
          console.log(this.user[index]);
          
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
       this.gettingData()
       
        setTimeout(() => {
          console.log(this.user);
          console.log(this.user.length);
          const length=this.user.length
          this.user[length]=sin
          
        }, 3000);
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

  patching(id:number){
    this.sin.patch(id).subscribe({
      next:(res)=>{
        console.log(res);
        
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