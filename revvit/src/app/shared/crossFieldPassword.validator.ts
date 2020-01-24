import { AbstractControl } from '@angular/forms';

export function crossFieldPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confrimPassword = control.get('confirmPassword');
    if (password.pristine || confrimPassword.pristine) {
        return null;
    }
    return password && confrimPassword && password.value !== confrimPassword.value ? { 'mismatch': true } : null;
};

