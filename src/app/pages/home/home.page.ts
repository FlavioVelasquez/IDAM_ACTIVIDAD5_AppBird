import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  recordings: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadRecordings();
  }

  loadRecordings() {
    const url = 'https://xeno-canto.org/api/2/recordings?query=cnt:guatemala';
    this.http.get(url).subscribe((response: any) => {
      this.recordings = response.recordings || [];
    });
  }

  getThumbnailUrl(recording: any): string {
    if (recording?.sono?.small) {
      return 'https:' + recording.sono.small; 
    }
    return 'assets/no-image.png'; 
  }
}