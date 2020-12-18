import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerI } from 'src/app/interfaces/customer';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {
    console.log('servicio login funcionando');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Obtener nombres de usuario
  saveRegisteredUsers(): Observable<any> {
    // const endpoint = 'http://localhost:8080/netflix/customer/username';
    const endpoint = `${server.ip}/netflix/customer/username`;

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  }

  // Método para crear producto, realizando POST
  createCustomer(customer: CustomerI): Observable<CustomerI> {
    // const endpoint = 'http://localhost:8080/netflix/customer';
    const endpoint = `${server.ip}/netflix/customer`;

    return this.http.post<CustomerI>(endpoint, customer, this.httpOptions);
  }
}
