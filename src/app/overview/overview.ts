import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalBreakpointObserver } from '../utils/global-breakpoint-observer';

@Component({
    selector: 'pizza-overview',
    imports: [
        UpperCasePipe,
        AsyncPipe,
    ],
    templateUrl: './overview.html',
    styleUrl: './overview.scss',
})
export class Overview {
    protected items = [
        {
            header: 'Лучшее тесто',
            description: `
                Мы создаем тесто только из
                отборной итальянской муки
                наивысшего качества
            `,
            img: 'hop.png',
        },
        {
            header: 'Лучшие повара',
            description: `
                Пиццы готовят самые
                профессиональные
                итальянские повара
            `,
            img: 'kitchen-pack.png',
        },
        {
            header: 'Гарантия качества',
            description: `
                Наша пиццерия получила
                множество наград и
                признаний по всему миру
            `,
            img: 'seo-and-web.png',
        },
        {
            header: 'Отборные рецепты',
            description: `
                Мы используем рецепты
                от мировых лидеров
                в изготовлении пиццы
            `,
            img: 'holidays.png',
        },
    ] as const;

    private readonly _breakpointsObserver = inject(GlobalBreakpointObserver);

    protected get $isWideScreen(): Observable<boolean> {
        return this._breakpointsObserver
            .$isWidescreen;
    }
}
