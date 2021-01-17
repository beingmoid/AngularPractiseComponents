import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() BWidth;
  @Input() BHeight;
  @Input() BClass;
  @Input () BText;
  constructor() { } 

  ngOnInit(): void {
    if(this.BClass){
      console.log(true);
    }

  }
  getMystyle(){
    const mystyle = {
      'width.px' : this.BWidth ? this.BWidth : '178px',
      'height.px' : this.BHeight ? this.BHeight : '48px',
    };
    return mystyle;
  }
  
}
