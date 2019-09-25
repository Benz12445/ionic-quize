import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { students } from '../../model/students';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.page.html',
  styleUrls: ['./student-edit.page.scss'],
})
export class StudentEditPage implements OnInit {
  public  key;
  public student = {
      name:"",
      lastname:"",
      std_type:""
  }


  
  constructor(public nav: NavController, private router:Router, private route:ActivatedRoute, private db:AngularFireDatabase,private af:AngularFireDatabase) {

    let key = this.route.snapshot.paramMap.get('key');
    this.key =  key;
    console.log(this.af.object('/student/'+this.key))
    this.af.object('/student/'+this.key).snapshotChanges().forEach(snapshot => {
        this.student = JSON.parse((JSON.stringify(snapshot.payload.toJSON())))
    })
   }
     
  UpdateReview(){
    this.af.object('/student/'+this.key).update(this.student).then(()=>{this.router.navigate(['/edit'])});
 }

 DeleteReview(){
  this.af.object('/student/'+this.key).remove().then(()=>{this.router.navigate(['/edit'])});
 }

  ngOnInit() {
  }

}
