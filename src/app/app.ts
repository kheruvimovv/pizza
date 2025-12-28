import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Overview } from './overview/overview';
import { GlobalBreakpointObserver } from './utils/global-breakpoint-observer';

@Component({
    selector: 'app-root',
    imports: [
        Header,
        Overview,
        Menu,
        Footer,
        AsyncPipe,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    private readonly _breakpointsObserver = inject(GlobalBreakpointObserver);

    protected get $isWideScreen(): Observable<boolean> {
        return this._breakpointsObserver
            .$isWidescreen;
    }
}
