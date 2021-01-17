import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  constructor() { }

status:boolean =false;
loaded :boolean = false;
  ngOnInit(): void {

    setInterval(()=>{
      this.loaded=true;
      

    },3000);




    
  }
  triggerChange(e)
  {
   // e.target.classList.add('active');
   var acc = document.getElementsByClassName("accordion");
    var i;


    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
}

triggerSecondChange(e)
{
  this.status= !this.status;

}


}


