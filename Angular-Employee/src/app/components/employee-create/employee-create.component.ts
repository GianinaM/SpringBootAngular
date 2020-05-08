import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/entities/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  addEmployeeForm: FormGroup;

  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;
  emailIdCtrl: FormControl;

  input: FormData;

  employee: Employee;
  submitted = false;

  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {

    this.firstNameCtrl = new FormControl('', [Validators.required]);
    this.lastNameCtrl = new FormControl('', [Validators.required]);
    this.emailIdCtrl = new FormControl('', [Validators.required, Validators.email]);


    this.addEmployeeForm = this.fb.group({
        firstNameCtrl: this.firstNameCtrl,
        lastNameCtrl: this.lastNameCtrl,
        emailIdCtrl: this.emailIdCtrl});

    this.employee = new Employee();
    this.employee.firstName = '';
    this.employee.lastName = '';
    this.employee.emailId = '';


  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    if (this.emailIdCtrl.hasError('email')) {
      return;
  }

    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
