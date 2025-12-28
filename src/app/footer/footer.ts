import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { NgxMaskDirective } from 'ngx-mask';
import { Observable } from 'rxjs';
import { ForbiddenCharsDirective } from '../utils/forbidden-chars';
import { GlobalBreakpointObserver } from '../utils/global-breakpoint-observer';
import { UserDataManager } from './user-data-manager';

@Component({
    selector: 'pizza-footer',
    imports: [
        ReactiveFormsModule,
        NgxMaskDirective,
        ForbiddenCharsDirective,
        MatIcon,
        MatDialogClose,
        AsyncPipe,
    ],
    templateUrl: './footer.html',
    styleUrl: './footer.scss',
})
export class Footer implements OnInit {
    @ViewChild('thanksTemplate') private _thanksTemplate: TemplateRef<any> | null = null;

    protected form!: FormGroup;

    private readonly _dialog = inject(MatDialog);
    private readonly _fB = inject(FormBuilder);
    private readonly _userDataManager = inject(UserDataManager);
    private readonly _breakpointsObserver = inject(GlobalBreakpointObserver);

    protected get $isWideScreen(): Observable<boolean> {
        return this._breakpointsObserver
            .$isWidescreen;
    }

    public ngOnInit(): void {
        this.form = this._fB.group({
            name: ['', [Validators.required, Validators.pattern(/^[^.]+$/)]],
            address: ['', [Validators.required]],
            phone: ['', [Validators.required]],
        });
    }

    protected submitForm(): void {
        if (!this.form.valid) {
            return;
        }

        const value = this.form.getRawValue();

        this._userDataManager.sendUserData(value)
            .subscribe();

        this.form.reset();

        if (this._thanksTemplate) {
            this._dialog.open(this._thanksTemplate, {
                disableClose: false,
                width: '20rem',
            });
        }
    }
}
