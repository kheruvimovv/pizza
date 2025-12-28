import { Injectable } from '@angular/core';
import { delay, Observable, of, shareReplay } from 'rxjs';
import { IMenuItem } from './menu-item';

@Injectable({
    providedIn: 'root',
})
export class MenuManager {
    private _menuItems: IMenuItem[] = [
        {
            title: 'Мясная Делюкс',
            description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
            img: '1.png',
        },
        {
            title: 'Морская Премиум',
            description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
            img: '2.png',
        },
        {
            title: 'Бекон и сосиски',
            description: 'Бекон, сыр, сосиски, ананас, томатная паста',
            img: '3.png',
        },
        {
            title: 'Куриная Делюкс',
            description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
            img: '4.png',
        },
        {
            title: 'Барбекю Премиум',
            description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
            img: '5.png',
        },
        {
            title: 'Пепперони Дабл',
            description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
            img: '6.png',
        },
        {
            title: 'Куриное трио',
            description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
            img: '7.png',
        },
        {
            title: 'Сырная',
            description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
            img: '8.png',
        },
    ];

    public loadMenuItems(): Observable<typeof this._menuItems> {
        return of(this._menuItems)
            .pipe(
                shareReplay(1),
                delay(2000),
            );
    }
}
