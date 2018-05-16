import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogDataExampleComponent} from './dialog/app.dialog.example';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'My App';
    animal: string;
    name: string;
    checked = false;
    indeterminate = false;
    labelPosition = 'after';
    disabled = false;
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());

    toppings = new FormControl();
    toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    myControl: FormControl = new FormControl();
    options = [
        'One',
        'Two',
        'Three'
    ];
    typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();

    constructor(public dialog: MatDialog) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogDataExampleComponent, {
            width: '250px',
            data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

}
