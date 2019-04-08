import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterServices {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:9090//show';

  public getUsers() {
      return this.http.get<User[]>(this.url);
  }
}
