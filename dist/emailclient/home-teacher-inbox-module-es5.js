function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-teacher-inbox-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/background/teacher-background.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/background/teacher-background.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeTeacherBackgroundTeacherBackgroundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui vertical stripe segment\">\n    <div class=\"ui text container\">\n\n\n        <h2 class=\"ui header\">\n            <p>Step 1</p>\n            <img class=\"ui image\" src=\"/assets/images/book.png\">\n            <div class=\"content\">\n                <u>Background Check.</u>\n            </div>\n\n            <h4 class=\"ui dividing header\">Fill out this form to complete the first step.</h4>\n            <br>\n        </h2>\n\n        Click here to download code of conduct. <a href=\"/assets/documents/Mwalimu Wetu - Code of Coduct Document.pdf\" target=\"_blank\">Code of Conduct</a>\n\n\n\n        <br>\n\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" class=\"ui form\">\n            <h4>  </h4>\n            <h4 class=\"ui dividing header\">Personal Information</h4>\n            <div class=\"field\">\n\n                <div class=\"two fields\">\n                    <div class=\"field form-group\">\n                        <label for=\"firstName\"></label>\n                        <input class=\"form-control\" formControlName=\"firstName\" id=\"firstName\" placeholder=\"First Name\" type=\"text\">\n                    </div>\n                    <div class=\"field form-group\">\n                        <label for=\"lastName\"></label>\n                        <input class=\"form-control\" formControlName=\"lastName\" id=\"lastName\" placeholder=\"Last Name\" type=\"text\">\n                    </div>\n                </div>\n            </div>\n\n            <h4 class=\"ui dividing header\">Contact Information</h4>\n            <div class=\"field\">\n\n                <div class=\"two fields\">\n                    <div class=\"field form-group\">\n                        <label for=\"phoneNumber\"></label>\n                        <input class=\"form-control\" formControlName=\"phoneNumber\" id=\"phoneNumber\" placeholder=\"Phone Number\" type=\"text\">\n                    </div>\n                    <div class=\"field form-group\">\n                        <label for=\"email\"></label>\n                        <input class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Email\" type=\"text\">\n                    </div>\n                </div>\n            </div>\n\n\n            <h4 class=\"ui dividing header\">Uploads</h4>\n\n            <div class=\"field\">\n\n\n                <div class=\"one field\">\n                    <div class=\"field form-group\">\n                        <label for=\"codeOfConductFile\">Code of Conduct</label>\n                        Upload a signed copy of the Code of conduct that you downloaded above.\n                        <input #codeOfConductFile (change)=\"onFileChange($event)\" id=\"codeOfConductFile\" type=\"file\">\n                    </div>\n                </div>\n\n\n\n                <div class=\"two fields\">\n                    <div class=\"field form-group\">\n                        <label for=\"idBack\">Id Back</label>\n                        <input #idBack (change)=\"onFileChange($event)\" id=\"idBack\" type=\"file\">\n                    </div>\n\n                    <div class=\"field form-group\">\n                        <label for=\"idFront\">Id Front</label>\n                        <input #idFront (change)=\"onFileChange($event)\" id=\"idFront\" type=\"file\">\n                    </div>\n                </div>\n\n                <div class=\"two fields\">\n                    <div class=\"field form-group\">\n                        <label for=\"certificateOne\">Certificate One</label>\n                        <input #certificateOne (change)=\"onFileChange($event)\" id=\"certificateOne\" type=\"file\">\n                    </div>\n\n                    <div class=\"field form-group\">\n                        <label for=\"certificateTwo\">Certificate Two</label>\n                        <input #certificateTwo (change)=\"onFileChange($event)\" id=\"certificateTwo\" type=\"file\">\n                    </div>\n                </div>\n            </div>\n\n\n\n            <button [disabled]=\"form.invalid || loading\" class=\"ui submit button primary\" type=\"submit\">Submit <i\n                    *ngIf=\"loading\" class=\"fa fa-spinner fa-spin fa-fw\"></i></button>\n        </form>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/final/final.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/final/final.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeTeacherFinalFinalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui vertical stripe segment\">\n    <div class=\"ui text container\">\n\n        <div class=\"ui raised very padded text container segment\">\n            <h2 class=\"ui header\">Thank you for your Submission.</h2>\n            <p>Your account is now under review. Await our email, then you can take the next steps.</p>\n            <p></p>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/steps/steps.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/steps/steps.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeTeacherStepsStepsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui vertical stripe segment\">\n    <div class=\"ui text container\">\n\n        <h2 class=\"ui header center aligned\">Here are the steps for Enrolling as a Teacher.</h2>\n\n        <div class=\"ui raised very padded text container segment\">\n            <p>1. Fill out a form for a background check <br>(You will need to pay 3500 for the completion of this process.)</p>\n            <p>2. Await approval after background Check</p>\n            <p>3. Fill out your profile. Write out your skills and specializations</p>\n            <p>4. Highlight your work hours</p>\n            <p>5. Create Lectures on Teams to conduct your classes and update the link to the class.</p>\n        </div>\n\n        <span class=\"center aligned\">\n            <a class=\"ui header submit button primary\" routerLink=\"/teacher/background\">Start Process</a>\n        </span>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/teacherHome/teacher-home.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/teacherHome/teacher-home.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeTeacherTeacherHomeTeacherHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<div class=\"ui vertical stripe segment\">-->\n<!--    <div class=\"ui text container\">-->\n\n\n<!--        <h2 class=\"ui header\">-->\n<!--            <p>Step 1</p>-->\n<!--            <img class=\"ui image\" src=\"/assets/images/book.png\">-->\n<!--            <div class=\"content\">-->\n<!--                <u>Background Check.</u>-->\n<!--            </div>-->\n\n<!--            <h4 class=\"ui dividing header\">Fill out this form to complete the first step.</h4>-->\n<!--            <br>-->\n<!--        </h2>-->\n\n<!--        Click here to download code of conduct. <a href=\"/assets/documents/Mwalimu Wetu - Code of Coduct Document.pdf\" target=\"_blank\">Code of Conduct</a>-->\n\n\n\n<!--        <br>-->\n\n<!--        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" class=\"ui form\">-->\n<!--            <h4>  </h4>-->\n<!--            <h4 class=\"ui dividing header\">Personal Information</h4>-->\n<!--            <div class=\"field\">-->\n\n<!--                <div class=\"two fields\">-->\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"firstName\"></label>-->\n<!--                        <input class=\"form-control\" formControlName=\"firstName\" id=\"firstName\" placeholder=\"First Name\" type=\"text\">-->\n<!--                    </div>-->\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"lastName\"></label>-->\n<!--                        <input class=\"form-control\" formControlName=\"lastName\" id=\"lastName\" placeholder=\"Last Name\" type=\"text\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n\n<!--            <h4 class=\"ui dividing header\">Contact Information</h4>-->\n<!--            <div class=\"field\">-->\n\n<!--                <div class=\"two fields\">-->\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"phoneNumber\"></label>-->\n<!--                        <input class=\"form-control\" formControlName=\"phoneNumber\" id=\"phoneNumber\" placeholder=\"Phone Number\" type=\"text\">-->\n<!--                    </div>-->\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"email\"></label>-->\n<!--                        <input class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Email\" type=\"text\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n\n\n<!--            <h4 class=\"ui dividing header\">Uploads</h4>-->\n\n<!--            <div class=\"field\">-->\n\n\n<!--                <div class=\"one field\">-->\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"codeOfConductFile\">Code of Conduct</label>-->\n<!--                        Upload a signed copy of the Code of conduct that you downloaded above.-->\n<!--                        <input #codeOfConductFile (change)=\"onFileChange($event)\" id=\"codeOfConductFile\" type=\"file\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n\n\n<!--                <div class=\"two fields\">-->\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"idBack\">Id Back</label>-->\n<!--                        <input #idBack (change)=\"onFileChange($event)\" id=\"idBack\" type=\"file\">-->\n<!--                    </div>-->\n\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"idFront\">Id Front</label>-->\n<!--                        <input #idFront (change)=\"onFileChange($event)\" id=\"idFront\" type=\"file\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"two fields\">-->\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"certificateOne\">Certificate One</label>-->\n<!--                        <input #certificateOne (change)=\"onFileChange($event)\" id=\"certificateOne\" type=\"file\">-->\n<!--                    </div>-->\n\n<!--                    <div class=\"field form-group\">-->\n<!--                        <label for=\"certificateTwo\">Certificate Two</label>-->\n<!--                        <input #certificateTwo (change)=\"onFileChange($event)\" id=\"certificateTwo\" type=\"file\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--            </div>-->\n\n\n\n<!--            <button [disabled]=\"form.invalid || loading\" class=\"ui submit button primary\" type=\"submit\">Submit <i-->\n<!--                    *ngIf=\"loading\" class=\"fa fa-spinner fa-spin fa-fw\"></i></button>-->\n<!--        </form>-->\n<!--    </div>-->\n<!--</div>-->\n\n\n\n<div class=\"ui vertical stripe segment\">\n    <div class=\"ui text container\">\n\n\n        <h2 class=\"ui header\">\n\n            <img class=\"ui image\" src=\"/assets/images/pen.png\">\n            <div class=\"content\">\n                <u>Teachers Landing Page.</u>\n            </div>\n\n            <h4 class=\"ui dividing header\">We are glad to have you with us.</h4>\n            <br>\n        </h2>\n\n        Click here to download code of conduct. <a href=\"/assets/documents/Mwalimu Wetu - Code of Coduct Document.pdf\" target=\"_blank\">Code of Conduct</a>\n\n        <p></p>\n\n        <br>\n        <br>\n\n        <span class=\"center aligned\">\n            <a class=\"ui header submit button primary\" routerLink=\"/signup\">Sign Up</a>\n        </span>\n\n        <span class=\"center aligned\">\n            <a class=\"ui header submit button primary\" routerLink=\"/signin\">Sign In</a>\n        </span>\n\n        <br>\n\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/home/teacher/background.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/home/teacher/background.service.ts ***!
    \****************************************************/

  /*! exports provided: BackgroundService */

  /***/
  function srcAppHomeTeacherBackgroundServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundService", function () {
      return BackgroundService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var BackgroundService =
    /*#__PURE__*/
    function () {
      function BackgroundService(http) {
        _classCallCheck(this, BackgroundService);

        this.http = http;
        this.rootUrl = 'http://localhost:8080/api';
      }

      _createClass(BackgroundService, [{
        key: "submitDocs",
        value: function submitDocs(value) {
          return this.http.post("".concat(this.rootUrl, "/teachers/background/sendDetailsAsEmail"), value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (result) {
            // this.setSession(value);
            // this.signedin$.next(true);
            console.log(result);
          }));
        }
      }]);

      return BackgroundService;
    }();

    BackgroundService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    BackgroundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BackgroundService);
    /***/
  },

  /***/
  "./src/app/home/teacher/background/teacher-background.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/home/teacher/background/teacher-background.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeTeacherBackgroundTeacherBackgroundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVhY2hlci9iYWNrZ3JvdW5kL3RlYWNoZXItYmFja2dyb3VuZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/teacher/background/teacher-background.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/home/teacher/background/teacher-background.component.ts ***!
    \*************************************************************************/

  /*! exports provided: TeacherBackgroundComponent */

  /***/
  function srcAppHomeTeacherBackgroundTeacherBackgroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherBackgroundComponent", function () {
      return TeacherBackgroundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _background_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../background.service */
    "./src/app/home/teacher/background.service.ts");

    var TeacherBackgroundComponent =
    /*#__PURE__*/
    function () {
      function TeacherBackgroundComponent(router, fb, backgroundService) {
        _classCallCheck(this, TeacherBackgroundComponent);

        this.router = router;
        this.fb = fb;
        this.backgroundService = backgroundService;
        this.loading = false;
        this.createForm();
      }

      _createClass(TeacherBackgroundComponent, [{
        key: "createForm",
        value: function createForm() {
          this.form = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(.+)@(.+)$/)]],
            codeOfConductFile: null,
            idBack: null,
            idFront: null,
            certificateOne: null,
            certificateTwo: null
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          var _this = this;

          console.log(event);
          var reader = new FileReader();

          if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);

            reader.onload = function () {
              if (typeof reader.result === 'string') {
                _this.form.get(event.target.id).setValue({
                  filename: file.name,
                  filetype: file.type,
                  value: reader.result.split(',')[1]
                });
              }
            };
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          var formModel = this.form.value;
          this.loading = true; // In a real-world app you'd have a http request / service call here like
          // this.http.post('apiUrl', formModel)

          console.log(this.form.value);
          this.backgroundService.submitDocs(this.form.value).subscribe({
            next: function next(response) {
              // Navigate to some other route
              _this2.router.navigateByUrl('/teacher/final');
            },
            error: function error(err) {
              if (!err.status) {
                _this2.form.setErrors({
                  noConnection: true
                });
              } else {
                _this2.form.setErrors({
                  unknownError: true
                });
              }
            }
          });
        }
      }]);

      return TeacherBackgroundComponent;
    }();

    TeacherBackgroundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _background_service__WEBPACK_IMPORTED_MODULE_4__["BackgroundService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeOfConductFile', {
      static: true
    })], TeacherBackgroundComponent.prototype, "codeOfConductFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idBack', {
      static: true
    })], TeacherBackgroundComponent.prototype, "idBack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idFront', {
      static: true
    })], TeacherBackgroundComponent.prototype, "idFront", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateOne', {
      static: true
    })], TeacherBackgroundComponent.prototype, "certificateOne", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateTwo', {
      static: true
    })], TeacherBackgroundComponent.prototype, "certificateTwo", void 0);
    TeacherBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-background.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/background/teacher-background.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-background.component.css */
      "./src/app/home/teacher/background/teacher-background.component.css")).default]
    })], TeacherBackgroundComponent);
    /***/
  },

  /***/
  "./src/app/home/teacher/final/final.component.css":
  /*!********************************************************!*\
    !*** ./src/app/home/teacher/final/final.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeTeacherFinalFinalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVhY2hlci9maW5hbC9maW5hbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/teacher/final/final.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/teacher/final/final.component.ts ***!
    \*******************************************************/

  /*! exports provided: FinalComponent */

  /***/
  function srcAppHomeTeacherFinalFinalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalComponent", function () {
      return FinalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FinalComponent =
    /*#__PURE__*/
    function () {
      function FinalComponent() {
        _classCallCheck(this, FinalComponent);
      }

      _createClass(FinalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FinalComponent;
    }();

    FinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-final',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./final.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/final/final.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./final.component.css */
      "./src/app/home/teacher/final/final.component.css")).default]
    })], FinalComponent);
    /***/
  },

  /***/
  "./src/app/home/teacher/inbox-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/home/teacher/inbox-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: InboxRoutingModule */

  /***/
  function srcAppHomeTeacherInboxRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxRoutingModule", function () {
      return InboxRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _teacherHome_teacher_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./teacherHome/teacher-home.component */
    "./src/app/home/teacher/teacherHome/teacher-home.component.ts");
    /* harmony import */


    var _final_final_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./final/final.component */
    "./src/app/home/teacher/final/final.component.ts");
    /* harmony import */


    var _steps_steps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./steps/steps.component */
    "./src/app/home/teacher/steps/steps.component.ts");
    /* harmony import */


    var _background_teacher_background_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./background/teacher-background.component */
    "./src/app/home/teacher/background/teacher-background.component.ts");

    var routes = [{
      path: '',
      component: _teacherHome_teacher_home_component__WEBPACK_IMPORTED_MODULE_3__["TeacherHomeComponent"]
    }, {
      path: 'background',
      component: _background_teacher_background_component__WEBPACK_IMPORTED_MODULE_6__["TeacherBackgroundComponent"]
    }, {
      path: 'final',
      component: _final_final_component__WEBPACK_IMPORTED_MODULE_4__["FinalComponent"]
    }, {
      path: 'steps',
      component: _steps_steps_component__WEBPACK_IMPORTED_MODULE_5__["StepsComponent"]
    }];

    var InboxRoutingModule = function InboxRoutingModule() {
      _classCallCheck(this, InboxRoutingModule);
    };

    InboxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InboxRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/teacher/inbox.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/home/teacher/inbox.module.ts ***!
    \**********************************************/

  /*! exports provided: InboxModule */

  /***/
  function srcAppHomeTeacherInboxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxModule", function () {
      return InboxModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inbox-routing.module */
    "./src/app/home/teacher/inbox-routing.module.ts");
    /* harmony import */


    var _teacherHome_teacher_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./teacherHome/teacher-home.component */
    "./src/app/home/teacher/teacherHome/teacher-home.component.ts");
    /* harmony import */


    var _background_teacher_background_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./background/teacher-background.component */
    "./src/app/home/teacher/background/teacher-background.component.ts");
    /* harmony import */


    var _final_final_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./final/final.component */
    "./src/app/home/teacher/final/final.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _steps_steps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./steps/steps.component */
    "./src/app/home/teacher/steps/steps.component.ts");

    var InboxModule = function InboxModule() {
      _classCallCheck(this, InboxModule);
    };

    InboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_teacherHome_teacher_home_component__WEBPACK_IMPORTED_MODULE_4__["TeacherHomeComponent"], _background_teacher_background_component__WEBPACK_IMPORTED_MODULE_5__["TeacherBackgroundComponent"], _final_final_component__WEBPACK_IMPORTED_MODULE_6__["FinalComponent"], _steps_steps_component__WEBPACK_IMPORTED_MODULE_9__["StepsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["InboxRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
    })], InboxModule);
    /***/
  },

  /***/
  "./src/app/home/teacher/steps/steps.component.css":
  /*!********************************************************!*\
    !*** ./src/app/home/teacher/steps/steps.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeTeacherStepsStepsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVhY2hlci9zdGVwcy9zdGVwcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/teacher/steps/steps.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/teacher/steps/steps.component.ts ***!
    \*******************************************************/

  /*! exports provided: StepsComponent */

  /***/
  function srcAppHomeTeacherStepsStepsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepsComponent", function () {
      return StepsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _background_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../background.service */
    "./src/app/home/teacher/background.service.ts");

    var StepsComponent =
    /*#__PURE__*/
    function () {
      function StepsComponent(router, fb, backgroundService) {
        _classCallCheck(this, StepsComponent);

        this.router = router;
        this.fb = fb;
        this.backgroundService = backgroundService;
        this.loading = false;
        this.createForm();
      }

      _createClass(StepsComponent, [{
        key: "createForm",
        value: function createForm() {
          this.form = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(.+)@(.+)$/)]],
            codeOfConductFile: null,
            idBack: null,
            idFront: null,
            certificateOne: null,
            certificateTwo: null
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          var _this3 = this;

          console.log(event);
          var reader = new FileReader();

          if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);

            reader.onload = function () {
              if (typeof reader.result === 'string') {
                _this3.form.get(event.target.id).setValue({
                  filename: file.name,
                  filetype: file.type,
                  value: reader.result.split(',')[1]
                });
              }
            };
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          var formModel = this.form.value;
          this.loading = true; // In a real-world app you'd have a http request / service call here like
          // this.http.post('apiUrl', formModel)

          console.log(this.form.value);
          this.backgroundService.submitDocs(this.form.value).subscribe({
            next: function next(response) {
              // Navigate to some other route
              _this4.router.navigateByUrl('/teacher/final');
            },
            error: function error(err) {
              if (!err.status) {
                _this4.form.setErrors({
                  noConnection: true
                });
              } else {
                _this4.form.setErrors({
                  unknownError: true
                });
              }
            }
          });
        }
      }]);

      return StepsComponent;
    }();

    StepsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _background_service__WEBPACK_IMPORTED_MODULE_4__["BackgroundService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeOfConductFile', {
      static: true
    })], StepsComponent.prototype, "codeOfConductFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idBack', {
      static: true
    })], StepsComponent.prototype, "idBack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idFront', {
      static: true
    })], StepsComponent.prototype, "idFront", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateOne', {
      static: true
    })], StepsComponent.prototype, "certificateOne", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateTwo', {
      static: true
    })], StepsComponent.prototype, "certificateTwo", void 0);
    StepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-majaribu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./steps.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/steps/steps.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./steps.component.css */
      "./src/app/home/teacher/steps/steps.component.css")).default]
    })], StepsComponent);
    /***/
  },

  /***/
  "./src/app/home/teacher/teacherHome/teacher-home.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/home/teacher/teacherHome/teacher-home.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeTeacherTeacherHomeTeacherHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body > .ui.container {\n    margin-top: 3em;\n}\n\n.ui.container > h1 {\n    font-size: 3em;\n    text-align: center;\n    font-weight: normal;\n}\n\n.ui.container > h2.dividing.header {\n    font-size: 2em;\n    font-weight: normal;\n    margin: 4em 0em 3em;\n}\n\n.ui.table {\n    table-layout: fixed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90ZWFjaGVyL3RlYWNoZXJIb21lL3RlYWNoZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RlYWNoZXIvdGVhY2hlckhvbWUvdGVhY2hlci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5ID4gLnVpLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogM2VtO1xufVxuXG4udWkuY29udGFpbmVyID4gaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnVpLmNvbnRhaW5lciA+IGgyLmRpdmlkaW5nLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDRlbSAwZW0gM2VtO1xufVxuXG5cbi51aS50YWJsZSB7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/teacher/teacherHome/teacher-home.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/teacher/teacherHome/teacher-home.component.ts ***!
    \********************************************************************/

  /*! exports provided: TeacherHomeComponent */

  /***/
  function srcAppHomeTeacherTeacherHomeTeacherHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherHomeComponent", function () {
      return TeacherHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _background_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../background.service */
    "./src/app/home/teacher/background.service.ts");

    var TeacherHomeComponent =
    /*#__PURE__*/
    function () {
      function TeacherHomeComponent(router, fb, backgroundService) {
        _classCallCheck(this, TeacherHomeComponent);

        this.router = router;
        this.fb = fb;
        this.backgroundService = backgroundService;
        this.loading = false;
        this.createForm();
      }

      _createClass(TeacherHomeComponent, [{
        key: "createForm",
        value: function createForm() {
          this.form = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(.+)@(.+)$/)]],
            codeOfConductFile: null,
            idBack: null,
            idFront: null,
            certificateOne: null,
            certificateTwo: null
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          var _this5 = this;

          console.log(event);
          var reader = new FileReader();

          if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);

            reader.onload = function () {
              if (typeof reader.result === 'string') {
                _this5.form.get(event.target.id).setValue({
                  filename: file.name,
                  filetype: file.type,
                  value: reader.result.split(',')[1]
                });
              }
            };
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          var formModel = this.form.value;
          this.loading = true; // In a real-world app you'd have a http request / service call here like
          // this.http.post('apiUrl', formModel)

          console.log(this.form.value);
          this.backgroundService.submitDocs(this.form.value).subscribe({
            next: function next(response) {
              // Navigate to some other route
              _this6.router.navigateByUrl('/teacher/final');
            },
            error: function error(err) {
              if (!err.status) {
                _this6.form.setErrors({
                  noConnection: true
                });
              } else {
                _this6.form.setErrors({
                  unknownError: true
                });
              }
            }
          });
        }
      }]);

      return TeacherHomeComponent;
    }();

    TeacherHomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _background_service__WEBPACK_IMPORTED_MODULE_4__["BackgroundService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeOfConductFile', {
      static: true
    })], TeacherHomeComponent.prototype, "codeOfConductFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idBack', {
      static: true
    })], TeacherHomeComponent.prototype, "idBack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('idFront', {
      static: true
    })], TeacherHomeComponent.prototype, "idFront", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateOne', {
      static: true
    })], TeacherHomeComponent.prototype, "certificateOne", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('certificateTwo', {
      static: true
    })], TeacherHomeComponent.prototype, "certificateTwo", void 0);
    TeacherHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teacher-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/teacher/teacherHome/teacher-home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teacher-home.component.css */
      "./src/app/home/teacher/teacherHome/teacher-home.component.css")).default]
    })], TeacherHomeComponent);
    /***/
  }
}]);
//# sourceMappingURL=home-teacher-inbox-module-es5.js.map