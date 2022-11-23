import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  constructor(private http: HttpClient) {}

  getTags() {
    return this.http.get<{ tags: string[] }>(`assets/tags.json`);
  }
}
