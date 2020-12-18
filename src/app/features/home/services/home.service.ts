import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectI } from 'src/app/interfaces/select';

import { SubscriptionI } from 'src/app/interfaces/subscription';
import { VisualI } from 'src/app/interfaces/visual';
import { server } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {
    console.log('servicio login funcionando');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Se definen los tipos de suscripciones
  private subscriptionType: SelectI[] = [
    {
      id: 1,
      value: 'BASIC',
      name: 'Basic',
    },
    {
      id: 2,
      value: 'PREMIUM',
      name: 'Premium',
    },
  ];

  getSubscriptionType(): SelectI[] {
    return this.subscriptionType;
  }

  getIdActiveUserData(): Observable<any> {
    // const endpoint = 'http://localhost:8080/netflix/customer';
    const endpoint = `${server.ip}/netflix/customer`;

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  }

  getBasicProducts(): Observable<any> {
    // const endpoint = 'http://localhost:8080/netflix/products/basic/';
    const endpoint = `${server.ip}/netflix/products/basic/`;

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  }

  getPremiumProducts(): Observable<any> {
    // const endpoint = 'http://localhost:8080/netflix/products/premium/';
    const endpoint = `${server.ip}/netflix/products/premium/`;

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  }

  createSubscription(
    idCustomer: number,
    subscription: SubscriptionI
  ): Observable<any> {
    // const endpoint = `http://localhost:8080/netflix/subscription/c${idCustomer}`;
    const endpoint = `${server.ip}/netflix/subscription/c${idCustomer}`;

    return this.http.post<SubscriptionI>(
      endpoint,
      subscription,
      this.httpOptions
    );
  }

  createVisual(
    idCustomer: number,
    idProduct: number,
    visual: VisualI
  ): Observable<any> {
    // const endpoint = `http://localhost:8080/netflix/visual/c${idCustomer}/p${idProduct}`;
    const endpoint = `${server.ip}/netflix/visual/c${idCustomer}/p${idProduct}`;

    return this.http.post<SubscriptionI>(endpoint, visual, this.httpOptions);
  }

  getVisuals(idCustomer: number): Observable<any> {
    // const endpoint = `http://localhost:8080/netflix/visual/c${idCustomer}`;
    const endpoint = `${server.ip}/netflix/visual/c${idCustomer}`;

    return this.http.get(endpoint).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
