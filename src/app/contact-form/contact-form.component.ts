import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  contactForm = this.fb.group({
	reasonForContacting: [''],
	contactName: [''],
	businessName: [''],
	phoneNumber: [''],
	email: [''],
	details: ['']
  });

  reasons: ContactReason[] = [
		new ContactReason("General", "General Inquiry"),
		new ContactReason("Products", "CBD Wholesale Products"),
		new ContactReason("Services", "CBD Extraction Services")
  ];
  constructor( private fb: FormBuilder, private _contact: ContactService) { }

  ngOnInit(): void {
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
