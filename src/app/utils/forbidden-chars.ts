import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[forbiddenChars]'
})
export class ForbiddenCharsDirective {
    @Input('forbiddenChars') forbiddenChars: string[] = [];

    private _isForbidden(char: string): boolean {
        return this.forbiddenChars.includes(char);
    }

    @HostListener('keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent): void {
        if (this._isForbidden(event.key)) {
            event.preventDefault();
        }
    }

    @HostListener('paste', ['$event'])
    public onPaste(event: ClipboardEvent): void {
        const text = event.clipboardData?.getData('text') ?? '';

        if ([...text].some(char => this._isForbidden(char))) {
            event.preventDefault();
        }
    }
}
