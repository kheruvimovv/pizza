import { AsyncPipe } from '@angular/common';
import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Spinner } from '../spinner/spinner';
import { MenuManager } from './menu-manager';

@Component({
    selector: 'pizza-menu',
    imports: [
        AsyncPipe,
        Spinner,
        MatIcon,
        MatDialogClose,
    ],
    templateUrl: './menu.html',
    styleUrl: './menu.scss',
})
export class Menu {
    @ViewChild('imageZoomInTemplate') private _imageZoomInTemplate: TemplateRef<any> | null = null;

    protected $menuItems = inject(MenuManager).loadMenuItems();

    private readonly _dialog = inject(MatDialog);

    protected zoomInImage(img: string): void {
        if (this._imageZoomInTemplate) {
            this._dialog.open(this._imageZoomInTemplate, {
                data: { src: 'menu/' + img },
                disableClose: false,
                height: '100vh',
                width: '100vw',
                maxWidth: '100vw',
                maxHeight: '100vh',
            });
        }
    }
}
