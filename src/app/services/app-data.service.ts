import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface ApplicationData {
  ambulances: string;
  support_vehicles: string;
  fire_trucks: string;
  tonnes_of_medical_aid: string;
  volunteers: string;
  countries: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  public data: ApplicationData | undefined;

  constructor(private http: HttpClient) {
    this.http.get<ApplicationData>("assets/data.json").subscribe(data => {
      this.data = data;
    })
  }
}
