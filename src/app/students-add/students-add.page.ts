import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { studentDB } from 'src/model/student';


@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.page.html',
  styleUrls: ['./students-add.page.scss'],
})
export class StudentsAddPage implements OnInit {
  public studentPg = StudentsAddPage
  private studentDbList = this.db.list<studentDB>('student');
  public student = {
      name:"",
      lastname:"",
      std_type:""
  }
  constructor(private nav:NavController,private router:Router, private route:ActivatedRoute, private db:AngularFireDatabase ) {

    
   }

 
  ngOnInit() {
  }


  addStudent(){
    console.log("studen = "+this.student)
    console.log("from route = "+this.route.snapshot.paramMap.get('student'))
    this.studentDbList.push(JSON.parse(JSON.stringify(this.student)));
    this.student.name = ""
    this.student.lastname = ""
    this.student.std_type = ""
  }

}
