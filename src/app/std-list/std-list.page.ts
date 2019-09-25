import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { studentDB } from 'src/model/student';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.page.html',
  styleUrls: ['./std-list.page.scss'],
})
export class StdListPage implements OnInit {
  private studentDbList = this.db.list<studentDB>('student');
  public student = {
    name:"",
    lastname:"",
    std_type:""
  }
  public studentList = [];
  constructor(public nav: NavController, private router:Router, private route:ActivatedRoute, private db:AngularFireDatabase,private af:AngularFireDatabase) {
     
    this.getStdDb();
   }

  ngOnInit() {
    
  }
  getStdDb(){
      return this.studentDbList.snapshotChanges().forEach(snapshot => {
        this.studentList = []
        snapshot.forEach(keys =>{
          let student =keys.payload.toJSON();
          student['key'] = keys['key'];
        
          this.studentList.push(student)

        }) })
     
    }
    editStudent(student){
      this.router.navigate(['/student-edit',student]);
    }
  
}
