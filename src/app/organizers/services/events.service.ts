import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private endpoint='events'
  private domain: string|undefined;
  constructor(private http: HttpClient) { 
      this.domain = environment.domain;
  }

  getEvents(): Observable<any> {
    return this.http.get(`${this.domain}${this.endpoint}`);
  }
  
  createEvent(event: any): Observable<any> {
    return this.http.post(`${this.domain}${this.endpoint}/create`,event);
  }

  deleteEvent(event: any): Observable<any> { 
    return this.http.delete(`${this.domain}${this.endpoint}/delete`,event);
  }
}
