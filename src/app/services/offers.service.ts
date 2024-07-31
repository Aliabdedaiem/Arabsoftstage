import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Ioffer } from '../interfaces/offers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  // Ensure this URL points to your backend server
  apiurl = 'http://localhost:3000/offers';

  constructor(private http: HttpClient) {}

  getAllOffer(): Observable<ApiResponse<Ioffer[]>> {
    return this.http.get<ApiResponse<Ioffer[]>>(this.apiurl);
  }

  getOffer(id: string): Observable<ApiResponse<Ioffer>> {
    return this.http.get<ApiResponse<Ioffer>>(`${this.apiurl}/${id}`);
  }

  createOffer(offer: Ioffer): Observable<ApiResponse<Ioffer>> {
    return this.http.post<ApiResponse<Ioffer>>(this.apiurl, offer);
  }

  updateOffer(id: string, offer: Ioffer): Observable<ApiResponse<Ioffer>> {
    return this.http.put<ApiResponse<Ioffer>>(`${this.apiurl}/${id}`, offer);
  }

  deleteOffer(id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.apiurl}/${id}`);
  }
}
