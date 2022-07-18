import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  department = [{
    "id": 1,
    "name": "Angular"
  },
  {
    "id": 2,
    "name": "Nodejs"
  },
  {
    "id": 3,
    "name": "MongoDB"
  },
  {
    "id": 4,
    "name": "Ruby"
  }]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(departments: any) {
    this.router.navigate(['/department', departments.id])
  }

}
