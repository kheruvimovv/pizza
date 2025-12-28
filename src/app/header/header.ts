import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalBreakpointObserver } from '../utils/global-breakpoint-observer';

@Component({
    selector: 'pizza-header',
    imports: [
        RouterLink,
        AsyncPipe,
    ],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    protected items = [
        { text: 'Пицца', link: '' },
        { text: 'Напитки', link: '' },
        { text: 'Доставка и оплата', link: '' },
        { text: 'Контакты', link: '' },
    ] as const;

    private readonly _breakpointsObserver = inject(GlobalBreakpointObserver);

    protected get $isWideScreen(): Observable<boolean> {
        return this._breakpointsObserver
            .$isWidescreen;
    }
}
