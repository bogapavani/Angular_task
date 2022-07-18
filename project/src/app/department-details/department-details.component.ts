import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId: any;
  // id!: number;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paras: ParamMap) => {
      let id = Number(paras.get('id'));
      this.departmentId = id;
      console.log(this.departmentId);
    });
  }

  goPrevious() {
    let periousId = this.departmentId - 1;
    this.router.navigate(['/department', periousId])
  }

  goBack() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId])
  }
}


