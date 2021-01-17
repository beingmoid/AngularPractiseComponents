import { assertPlatform, Component, OnInit } from '@angular/core';
import { Employee } from "../Model/emp";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp: Employee[];



  constructor() { }

  ngOnInit(): void {
    this.emp = [
      {
        EmpId: 1,
        EmpName: "aslam",
        DateOfHiring: new Date('10/12/2020'),
        Rate: 100,
        EmpWork: [{
          WorkName: "designing",
          WorkHours: 8,
          WorkStatus: true
        },
        {
          WorkName: "developing",
          WorkHours: 4,
          WorkStatus: true
        },
        {
          WorkName: "RND",
          WorkHours: 10,
          WorkStatus: true
        }
        ]


      },
      {
        EmpId: 2,
        EmpName: "SHAFIQUE",
        DateOfHiring: new Date('10/12/2020'),
        Rate: 100,
        EmpWork: [{
          WorkName: "designing",
          WorkHours: 8,
          WorkStatus: true
        },
        {
          WorkName: "developing",
          WorkHours: 4,
          WorkStatus: true
        },
        {
          WorkName: "RND",
          WorkHours: 10,
          WorkStatus: true
        }
        ]

      },
      {
        EmpId: 3,
        EmpName: "BHADUR",
        DateOfHiring: new Date('10/12/2020'),
        Rate: 100,
        EmpWork: [{
          WorkName: "designing",
          WorkHours: 8,
          WorkStatus: true
        },
        {
          WorkName: "developing",
          WorkHours: 4,
          WorkStatus: true
        },
        {
          WorkName: "RND",
          WorkHours: 10,
          WorkStatus: true
        }
        ]


      }
    ]
this.emp.forEach(value =>{
  console.log(value);
  let totalexperiance = value.EmpWork.reduce((acc,currentval)=>{
    return (acc+currentval.WorkHours);
  },0)
value.TotalHours=totalexperiance;

})

  }

}
