(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-students-inbox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/final/final.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/final/final.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui vertical stripe segment\">\n    <div class=\"ui text container\">\n\n        <div class=\"ui raised very padded text container segment\">\n            <h2 class=\"ui header\">Thank you for your Submission.</h2>\n            <p>Your account is now under review. Await our email, then you can take the next steps.</p>\n            <p></p>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/steps/steps.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/steps/steps.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui vertical stripe segment\">\n    <div class=\"ui text container\">\n\n        <h2 class=\"ui header center aligned\">Here are the steps for Enrolling as a Teacher.</h2>\n\n        <div class=\"ui raised very padded text container segment\">\n            <p>1. Fill out a form for a background check <br>(You will need to pay 3500 for the completion of this process.)</p>\n            <p>2. Await approval after background Check</p>\n            <p>3. Fill out your profile. Write out your skills and specializations</p>\n            <p>4. Highlight your work hours</p>\n            <p>5. Create Lectures on Teams to conduct your classes and update the link to the class.</p>\n        </div>\n\n        <span class=\"center aligned\">\n            <a class=\"ui header submit button primary\" routerLink=\"/inbox\">Start Process</a>\n        </span>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/teacherHome/teacher-home.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/teacherHome/teacher-home.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui vertical stripe segment\">\n    <div class=\"ui text container\">\n\n\n        <h2 class=\"ui header\">\n\n            <img class=\"ui image\" src=\"/assets/images/book.png\">\n            <div class=\"content\">\n                <u>Students Landing Page.</u>\n            </div>\n\n            <h4 class=\"ui dividing header\">We are glad to have you with us.</h4>\n            <br>\n        </h2>\n\n<!--        Click here to download code of conduct. <a href=\"/assets/documents/Mwalimu Wetu - Code of Coduct Document.pdf\" target=\"_blank\">Code of Conduct</a>-->\n\n        <p></p>\n\n        <br>\n        <br>\n\n        <span class=\"center aligned\">\n            <a class=\"ui header submit button primary\" routerLink=\"/student/signup\">Sign Up</a>\n        </span>\n\n       <span class=\"center aligned\">\n            <a class=\"ui header submit button primary\" routerLink=\"/student/signin\">Sign In</a>\n        </span>\n\n        <br>\n\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/home/students/background.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/students/background.service.ts ***!
  \*****************************************************/
/*! exports provided: BackgroundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundService", function() { return BackgroundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let BackgroundService = class BackgroundService {
    constructor(http) {
        this.http = http;
        this.rootUrl = 'http://localhost:8080/api';
    }
    submitDocs(value) {
        return this.http.post(`${this.rootUrl}/teachers/background/sendDetailsAsEmail`, value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((result) => {
            // this.setSession(value);
            // this.signedin$.next(true);
            console.log(result);
        }));
    }
};
BackgroundService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BackgroundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BackgroundService);



/***/ }),

/***/ "./src/app/home/students/final/final.component.css":
/*!*********************************************************!*\
  !*** ./src/app/home/students/final/final.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3R1ZGVudHMvZmluYWwvZmluYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home/students/final/final.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/students/final/final.component.ts ***!
  \********************************************************/
/*! exports provided: FinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalComponent", function() { return FinalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinalComponent = class FinalComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-final',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./final.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/final/final.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./final.component.css */ "./src/app/home/students/final/final.component.css")).default]
    })
], FinalComponent);



/***/ }),

/***/ "./src/app/home/students/inbox-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/students/inbox-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxRoutingModule", function() { return InboxRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _teacherHome_teacher_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teacherHome/teacher-home.component */ "./src/app/home/students/teacherHome/teacher-home.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./final/final.component */ "./src/app/home/students/final/final.component.ts");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steps/steps.component */ "./src/app/home/students/steps/steps.component.ts");






const routes = [
    { path: '', component: _teacherHome_teacher_home_component__WEBPACK_IMPORTED_MODULE_3__["TeacherHomeComponent"] },
    { path: 'final', component: _final_final_component__WEBPACK_IMPORTED_MODULE_4__["FinalComponent"] },
    { path: 'steps', component: _steps_steps_component__WEBPACK_IMPORTED_MODULE_5__["StepsComponent"] }
];
let InboxRoutingModule = class InboxRoutingModule {
};
InboxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InboxRoutingModule);



/***/ }),

/***/ "./src/app/home/students/inbox.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home/students/inbox.module.ts ***!
  \***********************************************/
/*! exports provided: InboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxModule", function() { return InboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox-routing.module */ "./src/app/home/students/inbox-routing.module.ts");
/* harmony import */ var _teacherHome_teacher_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teacherHome/teacher-home.component */ "./src/app/home/students/teacherHome/teacher-home.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./final/final.component */ "./src/app/home/students/final/final.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps/steps.component */ "./src/app/home/students/steps/steps.component.ts");









let InboxModule = class InboxModule {
};
InboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_teacherHome_teacher_home_component__WEBPACK_IMPORTED_MODULE_4__["TeacherHomeComponent"], _final_final_component__WEBPACK_IMPORTED_MODULE_5__["FinalComponent"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_8__["StepsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["InboxRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]
    })
], InboxModule);



/***/ }),

/***/ "./src/app/home/students/steps/steps.component.css":
/*!*********************************************************!*\
  !*** ./src/app/home/students/steps/steps.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3R1ZGVudHMvc3RlcHMvc3RlcHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home/students/steps/steps.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/students/steps/steps.component.ts ***!
  \********************************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _background_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../background.service */ "./src/app/home/students/background.service.ts");





let StepsComponent = class StepsComponent {
    constructor(router, fb, backgroundService) {
        this.router = router;
        this.fb = fb;
        this.backgroundService = backgroundService;
        this.loading = false;
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ]],
            phoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(.+)@(.+)$/)
                ]],
            codeOfConductFile: null,
            idBack: null,
            idFront: null,
            certificateOne: null,
            certificateTwo: null,
        });
    }
    onFileChange(event) {
        console.log(event);
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    this.form.get(event.target.id).setValue({
                        filename: file.name,
                        filetype: file.type,
                        value: reader.result.split(',')[1]
                    });
                }
            };
        }
    }
    onSubmit() {
        const formModel = this.form.value;
        this.loading = true;
        // In a real-world app you'd have a http request / service call here like
        // this.http.post('apiUrl', formModel)
        console.log(this.form.value);
        this.backgroundService.submitDocs(this.form.value).subscribe({
            next: response => {
                // Navigate to some other route
                this.router.navigateByUrl('/teacher/final');
            },
            error: err => {
                if (!err.status) {
                    this.form.setErrors({ noConnection: true });
                }
                else {
                    this.form.setErrors({ unknownError: true });
                }
            }
        });
    }
};
StepsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _background_service__WEBPACK_IMPORTED_MODULE_4__["BackgroundService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeOfConductFile', { static: true })
], StepsComponent.prototype, "codeOfConductFile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idBack', { static: true })
], StepsComponent.prototype, "idBack", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idFront', { static: true })
], StepsComponent.prototype, "idFront", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateOne', { static: true })
], StepsComponent.prototype, "certificateOne", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateTwo', { static: true })
], StepsComponent.prototype, "certificateTwo", void 0);
StepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-majaribu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./steps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/steps/steps.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./steps.component.css */ "./src/app/home/students/steps/steps.component.css")).default]
    })
], StepsComponent);



/***/ }),

/***/ "./src/app/home/students/teacherHome/teacher-home.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/students/teacherHome/teacher-home.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3R1ZGVudHMvdGVhY2hlckhvbWUvdGVhY2hlci1ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/home/students/teacherHome/teacher-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/students/teacherHome/teacher-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: TeacherHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherHomeComponent", function() { return TeacherHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _background_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../background.service */ "./src/app/home/students/background.service.ts");





let TeacherHomeComponent = class TeacherHomeComponent {
    constructor(router, fb, backgroundService) {
        this.router = router;
        this.fb = fb;
        this.backgroundService = backgroundService;
        this.loading = false;
        this.createForm();
    }
    createForm() {
        this.form = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ]],
            phoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(.+)@(.+)$/)
                ]],
            codeOfConductFile: null,
            idBack: null,
            idFront: null,
            certificateOne: null,
            certificateTwo: null,
        });
    }
    onFileChange(event) {
        console.log(event);
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    this.form.get(event.target.id).setValue({
                        filename: file.name,
                        filetype: file.type,
                        value: reader.result.split(',')[1]
                    });
                }
            };
        }
    }
    onSubmit() {
        const formModel = this.form.value;
        this.loading = true;
        // In a real-world app you'd have a http request / service call here like
        // this.http.post('apiUrl', formModel)
        console.log(this.form.value);
        this.backgroundService.submitDocs(this.form.value).subscribe({
            next: response => {
                // Navigate to some other route
                this.router.navigateByUrl('/teacher/final');
            },
            error: err => {
                if (!err.status) {
                    this.form.setErrors({ noConnection: true });
                }
                else {
                    this.form.setErrors({ unknownError: true });
                }
            }
        });
    }
};
TeacherHomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _background_service__WEBPACK_IMPORTED_MODULE_4__["BackgroundService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeOfConductFile', { static: true })
], TeacherHomeComponent.prototype, "codeOfConductFile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idBack', { static: true })
], TeacherHomeComponent.prototype, "idBack", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idFront', { static: true })
], TeacherHomeComponent.prototype, "idFront", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateOne', { static: true })
], TeacherHomeComponent.prototype, "certificateOne", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateTwo', { static: true })
], TeacherHomeComponent.prototype, "certificateTwo", void 0);
TeacherHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teacher-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/students/teacherHome/teacher-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teacher-home.component.css */ "./src/app/home/students/teacherHome/teacher-home.component.css")).default]
    })
], TeacherHomeComponent);



/***/ })

}]);
//# sourceMappingURL=home-students-inbox-module-es2015.js.map