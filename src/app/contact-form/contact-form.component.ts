import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  //regex patterns
  pattNumOnly = /^[0-9]*$/;
  pattTenDigit = /^.{10}$/;
  pattPhoneForm = /(^\d{10}$)|(^\d{3}-\d{3}-\d{4}$)/;
  pattNotStart0or1 = /^[^0-1].*/;

  contactForm = this.fb.group({
	reasonForContacting: ['', Validators.required],
	contactName: ['', Validators.required],
	businessName: ['', Validators.required],
	phoneNumber: ['', [Validators.required, Validators.pattern(this.pattPhoneForm), Validators.pattern(this.pattNotStart0or1)]],
	email: ['', [Validators.required, Validators.email]],
	details: ['', Validators.required]
  });

  reasons: ContactReason[] = [
		new ContactReason("General", "General Inquiry"),
		new ContactReason("Products", "CBD Wholesale Products"),
		new ContactReason("Services", "CBD Extraction Services")
  ];
  constructor( private fb: FormBuilder, private _contact: ContactService) { }

  ngOnInit(): void {
	//console.log(this.contactForm);
  }

  getErrorMessage( formControlName:string=""): string {
	let message = "";
	let formControl: AbstractControl;
	
	if( !(formControlName === "") ){
		formControl = this.contactForm.controls[formControlName];
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

  onSubmit(contactData: any) {
    this._contact.postContactForm(contactData)
		.subscribe( 
			(res) => {
				console.log("Status ", res.status);
				console.log(res.message);
				this.contactForm.reset();
			},
			(err) => {
				console.log("Error: ", err);
			}
		)
    
  }

}

class ContactReason {
	private _value: string;
	private _viewValue: string
	
	constructor( v: string, vV:string) {
		this._value = v;
		this._viewValue = vV;
	}
	
	get value() {
		return this._value;
	}
	
	get viewValue() {
		return this._viewValue;
	}
}
