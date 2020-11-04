import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  setId(): string {
    return new Date().getTime().toString();
  }
}
