import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

	baseUrl = "http://127.0.0.1:8080";
  constructor(private http: HttpClient) { }

	postContactForm(formData: any): Observable<any> {
		return this.http.post( `${ this.baseUrl }/form-to-email.php`, { data: formData } );
	}
}

class HttpResponse {
	private _status: number;
	private _message: string;
	private _error: string;
	
	constructor( obj: HttpResponse ) {
		this._status = obj.status;
		this._message = obj.message;
		this._error = obj.error;
	}
	
	get status() {
		return this._status;
	}
	
	get message() {
		return this._message;
	}
	
	get error() {
		return this._error
	}
}
