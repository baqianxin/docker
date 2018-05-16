webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n    margin: 10px;\n}\n\n.example-section {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 60px;\n}\n\n.example-margin {\n    margin: 0 10px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar>\n    <button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n\n    <mat-menu #animals=\"matMenu\">\n        <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n        <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n    </mat-menu>\n\n    <mat-menu #vertebrates=\"matMenu\">\n        <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n        <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n        <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n        <button mat-menu-item>Birds</button>\n        <button mat-menu-item>Mammals</button>\n    </mat-menu>\n\n    <mat-menu #invertebrates=\"matMenu\">\n        <button mat-menu-item>Insects</button>\n        <button mat-menu-item>Molluscs</button>\n        <button mat-menu-item>Crustaceans</button>\n        <button mat-menu-item>Corals</button>\n        <button mat-menu-item>Arachnids</button>\n        <button mat-menu-item>Velvet worms</button>\n        <button mat-menu-item>Horseshoe crabs</button>\n    </mat-menu>\n\n    <mat-menu #fish=\"matMenu\">\n        <button mat-menu-item>Baikal oilfish</button>\n        <button mat-menu-item>Bala shark</button>\n        <button mat-menu-item>Ballan wrasse</button>\n        <button mat-menu-item>Bamboo shark</button>\n        <button mat-menu-item>Banded killifish</button>\n    </mat-menu>\n\n    <mat-menu #amphibians=\"matMenu\">\n        <button mat-menu-item>Sonoran desert toad</button>\n        <button mat-menu-item>Western toad</button>\n        <button mat-menu-item>Arroyo toad</button>\n        <button mat-menu-item>Yosemite toad</button>\n    </mat-menu>\n\n    <mat-menu #reptiles=\"matMenu\">\n        <button mat-menu-item>Banded Day Gecko</button>\n        <button mat-menu-item>Banded Gila Monster</button>\n        <button mat-menu-item>Black Tree Monitor</button>\n        <button mat-menu-item>Blue Spiny Lizard</button>\n        <button mat-menu-item disabled>Velociraptor</button>\n    </mat-menu>\n</mat-toolbar>\n<mat-drawer-container class=\"example-container\">\n    <mat-drawer mode=\"side\" opened=\"true\">\n        <mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n        Drawer content\n        <!--<mat-spinner></mat-spinner>-->\n    </mat-drawer>\n    <mat-drawer-content>\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        Main content\n        <div style=\"text-align:center\">\n            <h1>\n                Welcome to {{ title }}!\n                <mat-progress-bar mode=\"query\"></mat-progress-bar>\n            </h1>\n        </div>\n        <mat-card>\n            <mat-list role=\"list\">\n                <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n                <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n                <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n            </mat-list>\n        </mat-card>\n        <mat-card class=\"button-list\">\n            <mat-list-item>\n                <button mat-button>Click me!</button>\n                <button mat-raised-button>CK1</button>\n                <button color=\"primary\" mat-icon-button>CK2</button>\n                <button mat-fab>CK3</button>\n                <button color=\"primary\" mat-mini-fab>CK4</button>\n                <mat-icon>home</mat-icon>\n\n            </mat-list-item>\n            <mat-list-item>\n                <p>\n                    <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n                        <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n                        <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n                        <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n                    </mat-button-toggle-group>\n                </p>\n                <p>\n                    <mat-chip-list>\n                        <mat-chip>One fish</mat-chip>\n                        <mat-chip>Two fish</mat-chip>\n                        <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n                        <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\n                    </mat-chip-list>\n                </p>\n            </mat-list-item>\n        </mat-card>\n        <mat-card class=\"dialog\">\n            <ol>\n                <li>\n                    <mat-form-field>\n                        <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n                        <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\"\n                                (click)=\"value=''\">\n                            <mat-icon>close</mat-icon>\n                        </button>\n                    </mat-form-field>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n                               [errorStateMatcher]=\"matcher\">\n                        <mat-hint>Errors appear instantly!</mat-hint>\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                            Please enter a valid email address\n                        </mat-error>\n                        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                            Email is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                </li>\n                <li>\n                    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n                </li>\n                <li *ngIf=\"animal\">\n                    You chose: <i>{{animal}}</i>\n                </li>\n            </ol>\n        </mat-card>\n        <mat-card class=\"input\">\n            <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                    <span matPrefix>+1 &nbsp;</span>\n                    <input type=\"tel\" matInput placeholder=\"Telephone\">\n                    <mat-icon matSuffix>mode_edit</mat-icon>\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n                    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong></mat-hint>\n                    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n                </mat-form-field>\n                <table class=\"example-full-width\" cellspacing=\"0\">\n                    <tr>\n                        <td>\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"First name\">\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n                            </mat-form-field>\n                        </td>\n                    </tr>\n                </table>\n\n                <p>\n                    <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n                    </mat-form-field>\n                    <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Address 2\"></textarea>\n                    </mat-form-field>\n                </p>\n\n                <table class=\"example-full-width\" cellspacing=\"0\">\n                    <tr>\n                        <td>\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"City\">\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"State\">\n                            </mat-form-field>\n                        </td>\n                        <td>\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n                                <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                            </mat-form-field>\n                        </td>\n                    </tr>\n                </table>\n                <mat-form-field class=\"example-full-width\">\n                    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\"\n                           [matAutocomplete]=\"auto\">\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                            {{ option }}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </form>\n        </mat-card>\n        <div class=\"checkbox\">\n            <mat-card>\n                <mat-card-content>\n                    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n                    <section class=\"example-section\">\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n                    </section>\n\n                    <section class=\"example-section\">\n                        <label class=\"example-margin\">Align:</label>\n                        <mat-radio-group [(ngModel)]=\"labelPosition\">\n                            <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n                            <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n                        </mat-radio-group>\n                    </section>\n\n                    <section class=\"example-section\">\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n                    </section>\n                </mat-card-content>\n            </mat-card>\n\n            <mat-card class=\"result\">\n                <mat-card-content>\n                    <h2 class=\"example-h2\">Result</h2>\n\n                    <section class=\"example-section\">\n                        <mat-checkbox\n                                class=\"example-margin\"\n                                [(ngModel)]=\"checked\"\n                                [(indeterminate)]=\"indeterminate\"\n                                [labelPosition]=\"labelPosition\"\n                                [disabled]=\"disabled\">\n                            I'm a checkbox\n                        </mat-checkbox>\n                    </section>\n                </mat-card-content>\n            </mat-card>\n        </div>\n        <div class=\"datepicker\">\n            <mat-card>\n\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n                           [formControl]=\"serializedDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker2></mat-datepicker>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker3></mat-datepicker>\n                </mat-form-field>\n                <p>\n                    <mat-form-field>\n                        <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\n                        <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n                        <mat-datepicker #dp1></mat-datepicker>\n                    </mat-form-field>\n                </p>\n\n                <p>\n                    <mat-form-field>\n                        <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\n                        <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n                        <mat-datepicker #dp2></mat-datepicker>\n                    </mat-form-field>\n                </p>\n\n                <p>\n                    <mat-form-field>\n                        <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\n                        <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n                        <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n                    </mat-form-field>\n                </p>\n                <p>\n                    <mat-form-field>\n                        <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n                            <mat-select-trigger>\n                                {{toppings.value ? toppings.value[0] : ''}}\n                                <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n        (+{{toppings.value.length - 1}} others)\n      </span>\n                            </mat-select-trigger>\n                            <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </p>\n            </mat-card>\n            <mat-card>\n                <mat-selection-list #shoes>\n                    <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n                        {{shoe}}\n                    </mat-list-option>\n                </mat-selection-list>\n\n                <p>\n                    Options selected: {{shoes.selectedOptions.selected.length}}\n                </p>\n                <mat-paginator [length]=\"100\"\n                               [pageSize]=\"10\"\n                               [pageSizeOptions]=\"[5, 10, 25, 100]\">\n                </mat-paginator>\n            </mat-card>\n        </div>\n    </mat-drawer-content>\n</mat-drawer-container>\n<mat-divider></mat-divider>\n<mat-spinner></mat-spinner>\n\n<div class=\"mat-app-background basic-container\">\n    <app-dialog-data-example>loading</app-dialog-data-example>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_app_dialog_example__ = __webpack_require__("./src/app/dialog/app.dialog.example.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

/** @title Input with a custom ErrorStateMatcher */
var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.title = 'My App';
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.date = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](new Date());
        this.serializedDate = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]((new Date()).toISOString());
        this.toppings = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.myControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialog_app_dialog_example__["b" /* DialogDataExampleComponent */], {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_app_dialog_example__ = __webpack_require__("./src/app/dialog/app.dialog.example.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__dialog_app_dialog_example__["a" /* DialogDataExample */], __WEBPACK_IMPORTED_MODULE_6__dialog_app_dialog_example__["b" /* DialogDataExampleComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__dialog_app_dialog_example__["b" /* DialogDataExampleComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog/app.dialog.example.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogDataExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogDataExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * @title Injecting data when opening a dialog
 */
var DialogDataExample = /** @class */ (function () {
    function DialogDataExample(dialog) {
        this.dialog = dialog;
    }
    DialogDataExample.prototype.openDialog = function () {
        this.dialog.open(DialogDataExampleComponent, {
            data: {
                animal: 'panda'
            }
        });
    };
    DialogDataExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dialog-data-example',
            template: __webpack_require__("./src/app/dialog/dialog-data-example.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-data-example.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], DialogDataExample);
    return DialogDataExample;
}());

var DialogDataExampleComponent = /** @class */ (function () {
    function DialogDataExampleComponent(data) {
        this.data = data;
    }
    DialogDataExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dialog-example',
            template: __webpack_require__("./src/app/dialog/dialog-data-example-dialog.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DialogDataExampleComponent);
    return DialogDataExampleComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-data-example-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n    My favorite animal is:\n    <ul>\n        <li>\n            <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n        </li>\n        <li>\n            <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n        </li>\n        <li>\n            <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n        </li>\n    </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dialog/dialog-data-example.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-data-example.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Open dialog</button>"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");


// import 'hammerjs ';


if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map