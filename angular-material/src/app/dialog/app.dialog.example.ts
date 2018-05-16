import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
    selector: 'app-dialog-data-example',
    templateUrl: 'dialog-data-example.html',
    styleUrls: ['dialog-data-example.css']
})
export class DialogDataExample {
    constructor(public dialog: MatDialog) {
    }

    openDialog() {
        this.dialog.open(DialogDataExampleComponent, {
            data: {
                animal: 'panda'
            }
        });
    }
}

@Component({
    selector: 'app-dialog-example',
    templateUrl: 'dialog-data-example-dialog.html',
})

export class DialogDataExampleComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    }
}
