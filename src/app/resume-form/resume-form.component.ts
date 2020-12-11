import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
	
	pattNumOnly = /^[0-9]*$/;
	pattTenDigit = /^.{10}$/;
	pattPhoneForm = /(^\d{10}$)|(^\d{3}-\d{3}-\d{4}$)/;
	pattNotStart0or1 = /^[^0-1].*/;
	
	resumeForm = this._fb.group({
		name: ["", Validators.required],
		position: ["", Validators.required],
		phoneNumber: ["", [Validators.required, Validators.pattern(this.pattPhoneForm), Validators.pattern(this.pattNotStart0or1)]],
		email: [, [Validators.required, Validators.email]],
		coverLetter: [undefined],
		resume: [ undefined, [Validators.required]]
	});
	
	inputs: InputField[] = [
		{
			value: "name",
			viewValue: "Full Name",
			type: "text"
		},
		{
			value: "position",
			viewValue: "Interested Position",
			type: "text"
		},
		{
			value: "phoneNumber",
			viewValue: "Phone Number",
			type: "tel"
		},
		{
			value: "email",
			viewValue: "Email",
			type: "email"
		}
	];
	
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

	getErrorMessage( formControlName:string=""): string {
		let message = "";
		let formControl: AbstractControl;
		
		if( !(formControlName === "") ){
			formControl = this.resumeForm.controls[formControlName];
		} else {
			return "Must enter a value";
		}
		
		
		if(formControl.hasError("required")) {
			
			message = "Must enter a value";
			
		} else if(formControl.hasError("email")) {
			
			message = "Invalid Email";
			
		} else if(formControl.hasError("pattern")) {
			
			if(formControl.errors.pattern.requiredPattern == String(this.pattNumOnly)) {
				message = "Must enter only numbers";
			} else if(formControl.errors.pattern.requiredPattern == String(this.pattTenDigit)) {
				message = "Must be 10 digits long";
			} else if(formControl.errors.pattern.requiredPattern == String(this.pattPhoneForm)) {
				message = "Must be 10 digit number or ###-###-####";
			} else if(formControl.errors.pattern.requiredPattern == String(this.pattNotStart0or1)) {
				message = "Cannot start with 0 or 1";
			}
		} else {
			console.log(formControl.errors);
		}
		
		return message;
	}
	
	onSubmit(resumeData: any) {
		console.log(resumeData);
	}
}

interface InputField {
	value: string;
	viewValue: string;
	type: string;
}