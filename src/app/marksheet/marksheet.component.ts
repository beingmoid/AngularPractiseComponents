import { Component, OnInit } from '@angular/core';
import { MarkSheet } from '../Model/marksheet';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {
markshhet:MarkSheet[];
  constructor() { }

  ngOnInit(): void {
    this.markshhet = [{
StId:1,
StName:"karim",
stdImg:"https://scontent.fkhi20-1.fna.fbcdn.net/v/t1.0-9/17630096_1160423504081156_1313510426269503782_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHIH2a5jLn67eQvx1jJaPL6JF2uCkYFLM8kXa4KRgUsz5uJgJQ9z9hYf5oJbjXTm_IuspCaG5N7kmTKa3AKuOmC&_nc_ohc=NYc2s_1yCJoAX8CZMij&_nc_ht=scontent.fkhi20-1.fna&oh=a076c3933068fbdbea03d4dee6c18be3&oe=60257EF7",
subject:[
  {
    SubId:1,
    SubName:"English",
    MarksObtained:90,
    TotalMarks:100
  },
  {
    SubId:2,
    SubName:"Maths",
    MarksObtained:90,
    TotalMarks:100
  },
  {
    SubId:3,
    SubName:"Urdu",
    MarksObtained:95,
    TotalMarks:100
  },
  {
    SubId:4,
    SubName:"Computer",
    MarksObtained:95,
    TotalMarks:100
  }

]
    },
    {
      StId:2,
      StName:"Moid",
      stdImg:"https://scontent.fkhi20-1.fna.fbcdn.net/v/t1.0-9/93973013_3825292114210527_7536060444897705984_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFgyJUnluaMUtukQnMHorackxKHYBlFZJSTEodgGUVklGDHqPpgc1xo5--zBdDt16Y2JzewqLoeVnSoDm2h5Dmb&_nc_ohc=D-VmHB7Gy1cAX9cE8d7&_nc_ht=scontent.fkhi20-1.fna&oh=b02f955195f04c6eca50862ff07035cf&oe=602662BD",
      subject:[
        {
          SubId:1,
          SubName:"English",
          MarksObtained:100,
          TotalMarks:100
        },
        {
          SubId:2,
          SubName:"Maths",
          MarksObtained:90,
          TotalMarks:100
        },
        {
          SubId:3,
          SubName:"Urdu",
          MarksObtained:95,
          TotalMarks:100
        },
        {
          SubId:4,
          SubName:"Computer",
          MarksObtained:95,
          TotalMarks:100
        }
      
      ]
          },
          {
            StId:3,
            StName:"Umar",
            stdImg:"https://scontent.fkhi20-1.fna.fbcdn.net/v/t1.0-9/124854172_1925574360915814_4867259240351091250_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFjVDL_OLZj5utvZ0XTU6bWuJpJZxvZQqe4mklnG9lCpyoQG9MpMRLcg1B0u28JNwBN1btI5DGtd3XIA_3PyNnA&_nc_ohc=QG3uHl7b70UAX-MABGm&_nc_ht=scontent.fkhi20-1.fna&oh=6f394852251ac99d358d6877eb3cc916&oe=60258182",
            subject:[
              {
                SubId:1,
                SubName:"English",
                MarksObtained:90,
                TotalMarks:100
              },
              {
                SubId:2,
                SubName:"Maths",
                MarksObtained:92,
                TotalMarks:100
              },
              {
                SubId:3,
                SubName:"Urdu",
                MarksObtained:95,
                TotalMarks:100
              },
              {
                SubId:4,
                SubName:"Computer",
                MarksObtained:95,
                TotalMarks:100
              },
            
            
            ],
                }
  ];
  this.markshhet.forEach((value,index,arr)=>{
    console.log(value.StName);
    let totalObtainedMarks =value.subject.reduce((acc,currentValue)=>{
      return (acc+currentValue.MarksObtained);
    },0);
    let totalMarks= value.subject.reduce((acc,currentValue)=>{
      return acc+currentValue.TotalMarks;
    },0);
    value.Percentage=(totalObtainedMarks/totalMarks)*100
    console.log('Total Marks',totalObtainedMarks)
  });

    

  }

}
