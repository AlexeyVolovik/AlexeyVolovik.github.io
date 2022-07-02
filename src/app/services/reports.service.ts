import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface ReportsData {
  date: string;
  title: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  public data: ReportsData[] | undefined;

  constructor(private http: HttpClient) {
    this.http.get<ReportsData[]>("assets/reports.json").subscribe(data => {
      this.data = data;
    })
  }
}
