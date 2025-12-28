import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from './user-data';

@Injectable({
    providedIn: 'root',
})
export class UserDataManager {
    private _httpClient = inject(HttpClient);

    public sendUserData(userData: IUserData): Observable<Object> {
        return this._httpClient.post('api', userData);
    }
}
