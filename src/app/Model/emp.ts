import { Work } from "./work";

export  class Employee{
EmpId:number;
EmpName:string;
DateOfHiring:Date;
Rate:number;
EmpWork:Work[];
TotalHours?:number;
EmpImage?:string;
totalEarning?:number;
}