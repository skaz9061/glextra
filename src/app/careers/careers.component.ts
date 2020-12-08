import { Component, OnInit } from '@angular/core';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {


  public positions: string[] = ["Product Tester", "Lab Technician", "Accounting Specialist", "HR Specialist"];

  constructor() { }

  ngOnInit(): void {
  }

}
