import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  logout() {
    throw new Error('Method not implemented.');
  }

  SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // register api call for user
  registerApi = (user: any) => {
    return this.http.post(`${this.SERVER_URL}/user/register`, user);
  };

  // login api call for user
  loginApi = (user: any) => {
    return this.http.post(`${this.SERVER_URL}/user/login`, user);
  };

  // login api call for admin
  loginUrl = (admin: any) => {
    return this.http.post(`${this.SERVER_URL}/admin/login`, admin);
  };

  // api call to get all user
  getAlluser = () => {
    return this.http.get(`${this.SERVER_URL}/user/view`);
  };

  // api call to get a user using _id
  // get_idSingleuser=(userid:any)=>{
  //   return this.http.get(`${this.SERVER_URL}/user/single/${userid}`)
  // }

  // api call to get all event
  getAllEvent = () => {
    return this.http.get(`${this.SERVER_URL}/events/getall`);
  };

  // api call to get a single event
  getSingleEvent = (id: any) => {
    return this.http.get(`${this.SERVER_URL}/event/view/${id}`);
  };

  //api call to add a event
  addEvent = (admin: any) => {
    return this.http.post(`${this.SERVER_URL}/event/add`, admin);
  };

  // api call to edit a event
  editEvent(id: any, data: any) {
    return this.http.put(`${this.SERVER_URL}/event/edit/${id}`, data);
  }

  // api call to delete a event
  deleteEvent = (_id: any) => {
    return this.http.delete(`${this.SERVER_URL}/deleteEvent/${_id}`);
  };

  //api call to book a event
  bookEvent = (reqBody: any) => {
    return this.http.post(`${this.SERVER_URL}/event/book`, reqBody);
  };

  // api call to get all bookings
  allbookings = () => {
    return this.http.get(`${this.SERVER_URL}/bookings`);
  };

  // api call to delete bookings
  deletebooking = (_id: any) => {
    return this.http.delete(`${this.SERVER_URL}/delete/${_id}`);
  };
}
