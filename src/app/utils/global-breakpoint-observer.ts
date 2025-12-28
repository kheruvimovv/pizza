import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GlobalBreakpointObserver {
    public readonly $isWidescreen: Observable<boolean>;

    private readonly _breakpointObserver = inject(BreakpointObserver);

    public constructor() {
        this.$isWidescreen = this._breakpointObserver.observe('(min-width: 1200px)')
            .pipe(
                map(result => result.matches),
            );
    }
}
