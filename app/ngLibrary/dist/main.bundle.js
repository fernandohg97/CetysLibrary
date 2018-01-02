webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"grid-container content\">\n    <a class=\"button\" routerLink=\"/admin-site/careers\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Modificar carrera</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"careerName\" placeholder=\"Ingrese el nombre de la carrera\" [ngModel]=\"currentCareer?.careerName\" (ngModelChange)=\"currentCareer.careerName = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Clave\n            <input type=\"text\" name=\"careerCode\" placeholder=\"Ingrese la clave de la carrera\" [ngModel]=\"currentCareer?.careerCode\" (ngModelChange)=\"currentCareer.careerCode = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Division\n            <input type=\"text\" name=\"division\" placeholder=\"Ingrese la clave de la carrera\" [ngModel]=\"currentCareer?.division\" (ngModelChange)=\"currentCareer.division = $event\">\n          </label>\n        </div>\n      </div>\n      <!-- <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Area\n            <select class=\"form-control\" name=\"selectedDivision\" [(ngModel)]=\"divisionSelected\" (change)=\"selectChangeHandler($event)\" required>\n              <option *ngFor=\"let division of divisions\" [value]=\"division\">{{division.division}}</option>\n            </select>\n          </label>\n        </div>\n      </div> -->\n      <div class=\"grid-x grid-padding-x\">\n        <fieldset class=\"large-6 cell\">\n          <legend>Activo</legend>\n          <input type=\"radio\" name=\"active\" value=\"true\" (change)=\"isActiveCareer($event)\" id=isActive required><label for=\"isActive\">SI</label>\n          <input type=\"radio\" name=\"active\" value=\"false\" (change)=\"isNotActiveCareer($event)\" id=\"isNotActive\"><label for=\"isNotActive\">NO</label>\n        </fieldset>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"update()\">Actualizar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCareersUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminCareersUpdateComponent = (function () {
    function AdminCareersUpdateComponent(careersService, router, route, settingService) {
        this.careersService = careersService;
        this.router = router;
        this.route = route;
        this.settingService = settingService;
    }
    AdminCareersUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.loadSchoolSettings().subscribe(function (res) {
            _this.divisions = res;
            console.log(_this.divisions);
        });
        this.route.params.subscribe(function (params) {
            var careerId = params['id']; //
            console.log("Id de la carrera: " + careerId);
            if (careerId) {
                _this.careersService.getById(careerId).then(function (career) {
                    console.log(career);
                    _this.currentCareer = career;
                    _this.divisionSelected = career.area;
                    console.log(_this.currentCareer.active);
                });
            }
        });
    };
    AdminCareersUpdateComponent.prototype.isActiveCareer = function (event) {
        console.log(event.target.value);
        this.currentCareer.active = event.target.value;
    };
    AdminCareersUpdateComponent.prototype.isNotActiveCareer = function (event) {
        console.log(event.target.value);
        this.currentCareer.active = event.target.value;
    };
    // selectChangeHandler(event: any) {
    //   this.divisionSelected = event.target.value
    //   console.log(this.divisionSelected)
    // }
    AdminCareersUpdateComponent.prototype.update = function () {
        var _this = this;
        this.careersService.update(this.currentCareer._id, this.currentCareer).then(function (response) {
            console.log(response);
            if (response.status == 200 || response.status == 204) {
                _this.router.navigateByUrl('/admin-site');
            }
        }).catch(function (err) { return console.log("Error " + err); });
    };
    return AdminCareersUpdateComponent;
}());
AdminCareersUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-careers-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_settings_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_1__services_careers_careers_service__["a" /* CareersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_careers_careers_service__["a" /* CareersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_careers_careers_service__["a" /* CareersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _d || Object])
], AdminCareersUpdateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-careers-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-careers/admin-careers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-careers/admin-careers.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createCareer()\">Nueva carrera</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese la clave o nombre de la carrera\" [(ngModel)]=\"searchCareerName\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Clave</th>\n          <th>Nombre</th>\n          <th>Division</th>\n          <th>Activo</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let career of careers | paginate: { itemsPerPage: 50, currentPage: page } | searchCareer: searchCareerName\" data-closable>\n          <td>{{career.careerCode}}</td>\n          <td>{{career.careerName}}</td>\n          <td>{{career.division}}</td>\n          <td *ngIf=\"career.active; else elseBlock\">Si</td>\n          <ng-template #elseBlock>No</ng-template>\n          <td class=\"text-center\"><a routerLink=\"/admin-site/careers/{{career._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(career._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n<!-- Create Form -->\n<form *ngIf=\"called\" #careerForm=\"ngForm\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nueva carrera</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"careerName\" placeholder=\"Ingrese el nombre de la carrera\" [(ngModel)]=\"newCareer.careerName\" required>\n            <p *ngIf=\"anyErrors?.errors?.careerName\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.careerName.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Clave\n            <input type=\"text\" name=\"shortName\" placeholder=\"Ingrese la clave de la carrera\" [(ngModel)]=\"newCareer.careerCode\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.careerCode\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.careerCode.message}}</p>\n              <p *ngIf=\"anyErrors?.existCareer && !anyErrors?.existCareers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existCareer}}</p>\n            </div>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Division\n            <input type=\"text\" name=\"division\" placeholder=\"Ingrese la division de la carrera\" [(ngModel)]=\"newCareer.division\" required>\n            <p *ngIf=\"anyErrors?.errors?.division\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.division.message}}</p>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Area\n            <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"areaSelected\" (ngModelChange)=\"areaChange($event)\" required>\n              <!-- <option [value]=\"''\"></option> -->\n              <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n            </select>\n            <p *ngIf=\"anyErrors?.errors?.area\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.area.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label><strong>Adjuntar archivo</strong></label>\n          <label for=\"exampleFileUpload\" class=\"button\">Upload File</label>\n          <input #inputFile type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" name=\"fileUpload\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existCareers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existCareers}}</p>\n\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remove file</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-careers/admin-careers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCareersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_career_model__ = __webpack_require__("../../../../../src/app/models/career.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminCareersComponent = (function () {
    function AdminCareersComponent(settingsService, careersService, router) {
        this.settingsService = settingsService;
        this.careersService = careersService;
        this.router = router;
        this.newCareer = new __WEBPACK_IMPORTED_MODULE_2__models_career_model__["a" /* CareerModel */]();
        this.page = 1;
        this.called = false;
    }
    AdminCareersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.loadSchoolSettings().subscribe(function (res) {
            _this.divisions = res;
            console.log(_this.divisions);
        });
        this.careersService.getAll().then(function (data) {
            console.log(data);
            _this.careers = data;
        });
    };
    AdminCareersComponent.prototype.createCareer = function () {
        this.called = true;
    };
    AdminCareersComponent.prototype.removeFile = function () {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        console.log(this.myInputVariable.nativeElement.files);
        this.nameFile = '';
        this.textFile = undefined;
    };
    AdminCareersComponent.prototype.fileChange = function (event) {
        var _this = this;
        var input = event.target;
        this.nameFile = input.files[0].name;
        var _loop_1 = function () {
            var reader = new FileReader();
            reader.onload = function () {
                // this 'text' is the content of the file
                _this.textFile = reader.result;
            };
            reader.readAsText(input.files[index]);
        };
        for (var index = 0; index < input.files.length; index++) {
            _loop_1();
        }
    };
    AdminCareersComponent.prototype.areaChange = function (event) {
        console.log(event.division);
        this.newCareer.area = event.division;
    };
    AdminCareersComponent.prototype.save = function () {
        var _this = this;
        console.log(this.newCareer);
        if (this.textFile) {
            console.log(this.textFile);
            var jsonFiles = JSON.parse(this.textFile);
            this.careersService.createFile(jsonFiles)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) { return _this.anyErrors = JSON.parse(err._body); }));
        }
        else {
            this.careersService.create(this.newCareer)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) {
                _this.anyErrors = JSON.parse(err._body);
                console.log(_this.anyErrors.exist);
            }));
        }
    };
    AdminCareersComponent.prototype.delete = function (id) {
        this.careersService.remove(id).then(function (response) {
            console.log(response);
        }).catch(function (err) { return console.log("Hubo un error " + err); });
    };
    return AdminCareersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile'),
    __metadata("design:type", Object)
], AdminCareersComponent.prototype, "myInputVariable", void 0);
AdminCareersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-careers',
        template: __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_careers_careers_service__["a" /* CareersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_careers_careers_service__["a" /* CareersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AdminCareersComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-careers.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"grid-container content\">\n    <a class=\"button\" routerLink=\"/admin-site/cubicles\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Modificar cubiculo</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Numero\n            <input type=\"number\" name=\"cubicleNumber\" placeholder=\"Ingrese el numero del cubiculo\" [ngModel]=\"currentCubicle?.cubicleNumber\" (ngModelChange)=\"currentCubicle.cubicleNumber = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"update()\">Actualizar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCubiclesUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cubicles_cubicles_service__ = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminCubiclesUpdateComponent = (function () {
    function AdminCubiclesUpdateComponent(cubiclesService, router, route) {
        this.cubiclesService = cubiclesService;
        this.router = router;
        this.route = route;
    }
    AdminCubiclesUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var cubicleId = params['id']; //
            console.log("Id del cubiculo: " + cubicleId);
            if (cubicleId) {
                _this.cubiclesService.getById(cubicleId).then(function (cubicle) {
                    console.log(cubicle);
                    _this.currentCubicle = cubicle;
                });
            }
        });
    };
    AdminCubiclesUpdateComponent.prototype.update = function () {
        var _this = this;
        this.cubiclesService.update(this.currentCubicle._id, this.currentCubicle).then(function (response) {
            console.log(response);
            if (response.status == 200 || response.status == 204) {
                _this.router.navigateByUrl('/admin-site');
            }
        }).catch(function (err) { return console.log("Error " + err); });
    };
    return AdminCubiclesUpdateComponent;
}());
AdminCubiclesUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-cubicles-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_cubicles_cubicles_service__["a" /* CubiclesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cubicles_cubicles_service__["a" /* CubiclesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cubicles_cubicles_service__["a" /* CubiclesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AdminCubiclesUpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-cubicles-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.file-btn {\n  margin-top: 30px;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createCubicle()\">Nuevo cubiculo</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese el numero de cubiculo\" [(ngModel)]=\"searchCubicle\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Cubiculo</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let cubicle of cubicles | searchCubicle: searchCubicle\" data-closable>\n          <td>{{cubicle.cubicleNumber}}</td>\n          <td><a routerLink=\"/admin-site/cubicles/{{cubicle._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(cubicle._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n<form *ngIf=\"called\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nuevo cubiculo</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Numero\n            <input type=\"number\" name=\"cubicleNumber\" placeholder=\"Ingrese el numero del cubiculo\" [(ngModel)]=\"newCubicle.cubicleNumber\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.cubicleNumber\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.cubicleNumber.message}}</p>\n              <p *ngIf=\"anyErrors?.existCubicle && !anyErrors?.existCubicles\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existCubicle}}</p>\n            </div>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label><strong>Adjuntar archivo</strong></label>\n          <label for=\"exampleFileUpload\" class=\"button\">Upload File</label>\n          <input #inputFile type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existCubicles\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existCubicles}}</p>\n\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remove file</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCubiclesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cubicles_cubicles_service__ = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cubicle_model__ = __webpack_require__("../../../../../src/app/models/cubicle.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminCubiclesComponent = (function () {
    function AdminCubiclesComponent(cubiclesService, router, route) {
        this.cubiclesService = cubiclesService;
        this.router = router;
        this.route = route;
        this.newCubicle = new __WEBPACK_IMPORTED_MODULE_3__models_cubicle_model__["a" /* CubicleModel */]();
        this.called = false;
    }
    AdminCubiclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cubiclesService.getAll().then(function (data) {
            console.log(data);
            _this.cubicles = data;
        });
    };
    AdminCubiclesComponent.prototype.createCubicle = function () {
        this.called = true;
    };
    AdminCubiclesComponent.prototype.removeFile = function () {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        console.log(this.myInputVariable.nativeElement.files);
        this.nameFile = '';
        this.textFile = undefined;
    };
    AdminCubiclesComponent.prototype.fileChange = function (event) {
        var _this = this;
        var input = event.target;
        this.nameFile = input.files[0].name;
        console.log(event.target.value);
        var _loop_1 = function () {
            var reader = new FileReader();
            reader.onload = function () {
                // this 'text' is the content of the file
                _this.textFile = reader.result;
            };
            reader.readAsText(input.files[index]);
        };
        for (var index = 0; index < input.files.length; index++) {
            _loop_1();
        }
        ;
    };
    AdminCubiclesComponent.prototype.save = function () {
        var _this = this;
        if (this.textFile) {
            console.log(this.textFile);
            var jsonFiles = JSON.parse(this.textFile);
            this.cubiclesService.createFile(jsonFiles)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) { return _this.anyErrors = JSON.parse(err._body); }));
        }
        else {
            this.cubiclesService.create(this.newCubicle)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) { return _this.anyErrors = JSON.parse(err._body); }));
        }
    };
    AdminCubiclesComponent.prototype.delete = function (id) {
        this.cubiclesService.remove(id).then(function (response) {
            console.log(response);
            console.log(response.status);
        }).catch(function (err) { return console.log("hubo un error " + err); });
    };
    return AdminCubiclesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile'),
    __metadata("design:type", Object)
], AdminCubiclesComponent.prototype, "myInputVariable", void 0);
AdminCubiclesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-cubicles',
        template: __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_cubicles_cubicles_service__["a" /* CubiclesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cubicles_cubicles_service__["a" /* CubiclesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AdminCubiclesComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-cubicles.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"grid-container content\">\n    <a class=\"button\" routerLink=\"/admin-site/departments\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Modificar departamento</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Numero\n            <input type=\"number\" name=\"departmentNumber\" placeholder=\"Ingrese numero del departamento\" [ngModel]=\"currentDepartment?.departmentCode\" (ngModelChange)=\"currentDepartment.departmentCode = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"departmentName\" placeholder=\"Ingrese nombre del departamento\" [ngModel]=\"currentDepartment?.departmentName\" (ngModelChange)=\"currentDepartment.departmentName = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"update()\">Actualizar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDepartmentsUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_departments_departments_service__ = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDepartmentsUpdateComponent = (function () {
    function AdminDepartmentsUpdateComponent(departmentsService, router, route) {
        this.departmentsService = departmentsService;
        this.router = router;
        this.route = route;
    }
    AdminDepartmentsUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var departmentId = params['id']; //
            console.log("Id del departamento: " + departmentId);
            if (departmentId) {
                _this.departmentsService.getById(departmentId).then(function (department) {
                    console.log(department);
                    _this.currentDepartment = department;
                });
            }
        });
    };
    AdminDepartmentsUpdateComponent.prototype.update = function () {
        var _this = this;
        this.departmentsService.update(this.currentDepartment._id, this.currentDepartment).then(function (response) {
            console.log(response);
            if (response.status == 200 || response.status == 204) {
                _this.router.navigateByUrl('/admin-site');
            }
        }).catch(function (err) { return console.log("Error " + err); });
    };
    return AdminDepartmentsUpdateComponent;
}());
AdminDepartmentsUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-departments-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_departments_departments_service__["a" /* DepartmentsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_departments_departments_service__["a" /* DepartmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_departments_departments_service__["a" /* DepartmentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AdminDepartmentsUpdateComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-departments-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createDepartment()\">Nuevo departmento</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese el numero o nombre del departamento\" [(ngModel)]=\"searchDepartment\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Numero</th>\n          <th>Departamento</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let department of departments | paginate: { itemsPerPage: 50, currentPage: page } | searchDepartment: searchDepartment\" data-closable>\n          <td>{{department.departmentCode}}</td>\n          <td>{{department.departmentName}}</td>\n          <td><a routerLink=\"/admin-site/departments/{{department._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(department._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n<form *ngIf=\"called\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nuevo departamento</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Numero\n            <input type=\"number\" name=\"departmentNumber\" placeholder=\"Ingrese numero del departamento\" [(ngModel)]=\"newDepartment.departmentCode\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.departmentCode\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departmentCode.message}}</p>\n              <p *ngIf=\"anyErrors?.existDepartment && !anyErrors?.existDepartments\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existDepartment}}</p>\n            </div>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"departmentName\" placeholder=\"Ingrese nombre del departamento\" [(ngModel)]=\"newDepartment.departmentName\" required>\n            <p *ngIf=\"anyErrors?.errors?.departmentName\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departmentName.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label><strong>Adjuntar archivo</strong></label>\n          <label for=\"exampleFileUpload\" class=\"button\">Upload File</label>\n          <input type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span #inputFile class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existDepartments\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existDepartments}}</p>\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remove file</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDepartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_departments_departments_service__ = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_department_model__ = __webpack_require__("../../../../../src/app/models/department.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminDepartmentsComponent = (function () {
    function AdminDepartmentsComponent(departmentsService, router) {
        this.departmentsService = departmentsService;
        this.router = router;
        this.newDepartment = new __WEBPACK_IMPORTED_MODULE_2__models_department_model__["a" /* DepartmentModel */]();
        this.page = 1;
        this.called = false;
    }
    AdminDepartmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.departmentsService.getAll().then(function (data) {
            console.log(data);
            _this.departments = data;
        });
    };
    AdminDepartmentsComponent.prototype.createDepartment = function () {
        this.called = true;
    };
    AdminDepartmentsComponent.prototype.removeFile = function () {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        console.log(this.myInputVariable.nativeElement.files);
        this.nameFile = '';
        this.textFile = undefined;
    };
    AdminDepartmentsComponent.prototype.fileChange = function (event) {
        var _this = this;
        var input = event.target;
        this.nameFile = input.files[0].name;
        var _loop_1 = function () {
            var reader = new FileReader();
            reader.onload = function () {
                // this 'text' is the content of the file
                _this.textFile = reader.result;
            };
            reader.readAsText(input.files[index]);
        };
        for (var index = 0; index < input.files.length; index++) {
            _loop_1();
        }
        ;
    };
    AdminDepartmentsComponent.prototype.save = function () {
        var _this = this;
        if (this.textFile) {
            console.log(this.textFile);
            var jsonFiles = JSON.parse(this.textFile);
            this.departmentsService.createFile(jsonFiles)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) { return _this.anyErrors = JSON.parse(err._body); }));
        }
        else {
            this.departmentsService.create(this.newDepartment)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) {
                _this.anyErrors = JSON.parse(err._body);
                console.log(err);
            }));
        }
    };
    AdminDepartmentsComponent.prototype.delete = function (id) {
        this.departmentsService.remove(id).then(function (response) {
            console.log(response);
        }).catch(function (err) { return console.log("Hubo un error " + err); });
    };
    return AdminDepartmentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile'),
    __metadata("design:type", Object)
], AdminDepartmentsComponent.prototype, "myInputVariable", void 0);
AdminDepartmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-departments',
        template: __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_departments_departments_service__["a" /* DepartmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_departments_departments_service__["a" /* DepartmentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminDepartmentsComponent);

var _a, _b;
//# sourceMappingURL=admin-departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-home/admin-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.title {\n  z-index: 100;\n}\nh3 {\n  display: block;\n  z-index: 10;\n  color: rgba(180, 180, 180, 0.81);\n}*/\n.blocks {\n  text-align: center;\n  margin-top: 50px;\n}\n.blocks div {\n  margin-bottom: 50px;\n}\nhr {\n  border-width: 2px;\n}\n.admin-home {\n  margin-top: 20px;\n}\n.admin-home h2, .admin-home h4 {\n  display: inline;\n}\nh2 {\n  padding-right: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-home/admin-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container admin-home\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <h2 class=\"admin-title\">Administrador</h2><h4>Bienvenido</h4>\n      <hr>\n    </div>\n  </div>\n\n  <div class=\"grid-x grid-margin-x small-up-1 medium-up-2 large-up-2 blocks\">\n    <a routerLink=\"users\" class=\"cell callout secondary button\">\n      <h6 class=\"font-bold\">Usuarios</h6>\n      <span>{{totalUsers}} Elementos</span>\n    </a>\n    <a routerLink=\"cubicles\" class=\"cell callout secondary button\">\n      <h6 class=\"font-bold\">Cubiculos</h6>\n      <span>{{totalCubicles}} Elementos</span>\n    </a>\n    <a routerLink=\"departments\" class=\"cell callout secondary button\">\n      <h6 class=\"font-bold\">Departamentos</h6>\n      <span>{{totalDepartments}} Elementos</span>\n    </a>\n    <a routerLink=\"careers\" class=\"cell callout secondary button\">\n      <h6 class=\"font-bold\">Carreras</h6>\n      <span>{{totalCareers}} Elementos</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-home/admin-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cubicles_cubicles_service__ = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_departments_departments_service__ = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminHomeComponent = (function () {
    function AdminHomeComponent(usersService, cubiclesService, careersService, departmentsService) {
        this.usersService = usersService;
        this.cubiclesService = cubiclesService;
        this.careersService = careersService;
        this.departmentsService = departmentsService;
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getAll().then(function (data) {
            console.log(data.length);
            _this.totalUsers = data.length;
        });
        this.cubiclesService.getAll().then(function (data) {
            _this.totalCubicles = data.length;
        });
        this.careersService.getAll().then(function (data) {
            _this.totalCareers = data.length;
        });
        this.departmentsService.getAll().then(function (data) {
            _this.totalDepartments = data.length;
        });
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-home',
        template: __webpack_require__("../../../../../src/app/admin/admin-home/admin-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-home/admin-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cubicles_cubicles_service__["a" /* CubiclesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cubicles_cubicles_service__["a" /* CubiclesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_careers_careers_service__["a" /* CareersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_careers_careers_service__["a" /* CareersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_departments_departments_service__["a" /* DepartmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_departments_departments_service__["a" /* DepartmentsService */]) === "function" && _d || Object])
], AdminHomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-reports/admin-reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reports-content {\n  margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-reports/admin-reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container reports-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <h2 class=\"text-center\">Reporte estadistico</h2>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-6 cell\">\n        <label>Fecha Inicio\n          <input type=\"date\" name=\"startDate\" [(ngModel)]=\"startDate\" placeholder=\"Fecha\" required>\n        </label>\n    </div>\n    <div class=\"small-6 cell\">\n      <label>Fecha Fin\n        <input type=\"date\" name=\"endDate\" [(ngModel)]=\"endDate\" placeholder=\"Fecha\" required>\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <button type=\"button\" class=\"button\" name=\"button\" (click)=\"searchReports()\">Buscar</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingresos por cubiculo</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Cubiculo</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsCubicle\">\n          <td>{{report._id}}</td>\n          <td>{{report.ingresos}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div style=\"display: block; margin: 0 auto;\">\n      <canvas  width=\"300\" height=\"300\" *ngIf=\"pieChartLabelsCubicles && pieChartDataCubicles\" baseChart\n              [data]=\"pieChartDataCubicles\"\n              [labels]=\"pieChartLabelsCubicles\"\n              [chartType]=\"pieChartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\">\n      </canvas>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingresos por division</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Division</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsDivision\">\n          <td>{{report._id}}</td>\n          <td>{{report.ingresos}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div style=\"display: block; margin: 0 auto;\">\n      <canvas width=\"300\" height=\"300\" *ngIf=\"pieChartLabelsDivision && pieChartDataDivision\" baseChart\n              [data]=\"pieChartDataDivision\"\n              [labels]=\"pieChartLabelsDivision\"\n              [chartType]=\"pieChartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\">\n      </canvas>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingresos por carrera</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Carrera</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsCareer\">\n          <td>{{report._id}}</td>\n          <td>{{report.ingresos}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div style=\"display: block; margin: 0 auto;\">\n      <canvas width=\"300\" height=\"300\" *ngIf=\"pieChartLabelsCareers && pieChartDataCareers\" baseChart\n              [data]=\"pieChartDataCareers\"\n              [labels]=\"pieChartLabelsCareers\"\n              [chartType]=\"pieChartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\">\n      </canvas>\n    </div>\n  </div>\n  <!-- <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingresos por departmento</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Departamento</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let department of allDepartments\">\n          <td>{{department.departmentName}}</td>\n          <td>s</td>\n        </tr>\n      </tbody>\n    </table>\n  </div> -->\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingreso total por dia</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Fecha</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsDay\">\n          <td>{{report._id | date: 'shortDate'}}</td>\n          <td>{{report.ingresos}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div style=\"display: block; margin: 0 auto;\">\n    <canvas *ngIf=\"pieChartLabelsDays && pieChartDataDays\" baseChart\n            [data]=\"pieChartDataDays\"\n            [labels]=\"pieChartLabelsDays\"\n            [chartType]=\"pieChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"\n            [legend]=\"pieChartLegend\">\n    </canvas>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      Total de reservaciones: {{totalReservations}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-reports/admin-reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_reports_service__ = __webpack_require__("../../../../../src/app/services/reports/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminReportsComponent = (function () {
    function AdminReportsComponent(reportsService) {
        this.reportsService = reportsService;
        this.totalReservations = 0;
        this.currentDate = new Date();
        this.pieChartType = 'pie';
        this.pieChartLegend = false;
    }
    AdminReportsComponent.prototype.ngOnInit = function () {
        console.log(this.currentDate);
        var day = this.currentDate.getDate().toString();
        var month = this.currentDate.getMonth() + 1;
        var year = this.currentDate.getFullYear();
        var month2 = this.currentDate.getMonth() + 2;
        if (parseInt(day) >= 1 && parseInt(day) <= 9) {
            day = '0' + day;
            console.log(day);
        }
        if (month >= 1 && month <= 9) {
            this.startDate = year + "-0" + month + "-" + day;
        }
        else {
            this.startDate = year + "-" + month + "-" + day;
        }
        if (month2 >= 13) {
            month2 = 1;
            year = year + 1;
        }
        if (month2 >= 1 && month2 <= 9) {
            this.endDate = year + "-0" + month2 + "-" + day;
        }
        else {
            this.endDate = year + "-" + month2 + "-" + day;
        }
        console.log(this.startDate);
        console.log(this.endDate);
    };
    AdminReportsComponent.prototype.insertChartItems = function (object, labels, data) {
        object.forEach(function (element) {
            labels.push(element._id);
            data.push(element.ingresos);
        });
    };
    AdminReportsComponent.prototype.ngOnDestroy = function () {
    };
    AdminReportsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        console.log('After content init loaded');
        if (this.startDate && this.endDate) {
            this.reportsService.getByDivision(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    console.log('Reportes por division: ');
                    console.log(data);
                    _this.reportsDivision = data;
                    _this.pieChartLabelsDivision = [];
                    _this.pieChartDataDivision = [];
                    _this.insertChartItems(_this.reportsDivision, _this.pieChartLabelsDivision, _this.pieChartDataDivision);
                    // data.forEach(element => {
                    //   this.pieChartLabelsDivision.push(element._id)
                    //   this.pieChartDataDivision.push(element.ingresos)
                    // })
                    _this.sumReservations(_this.reportsDivision);
                }
            });
            this.reportsService.getByCubicle(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    console.log('Reportes por cubiculo: ');
                    console.log(data);
                    _this.reportsCubicle = data;
                    _this.pieChartLabelsCubicles = [];
                    _this.pieChartDataCubicles = [];
                    data.forEach(function (element) {
                        _this.pieChartLabelsCubicles.push("Cubiculo " + element._id);
                        _this.pieChartDataCubicles.push(element.ingresos);
                    });
                    _this.sumReservations(_this.reportsCubicle);
                }
            });
            this.reportsService.getByCareer(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    console.log('Reportes por carrera: ');
                    console.log(data);
                    _this.reportsCareer = data;
                    _this.pieChartLabelsCareers = [];
                    _this.pieChartDataCareers = [];
                    _this.insertChartItems(_this.reportsCareer, _this.pieChartLabelsCareers, _this.pieChartDataCareers);
                    // data.forEach(element => {
                    //     this.pieChartLabelsCareers.push(element._id)
                    //     this.pieChartDataCareers.push(element.ingresos)
                    // });
                    _this.sumReservations(_this.reportsCareer);
                }
            });
            this.reportsService.getByDay(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    console.log('Reportes por dia: ');
                    console.log(data);
                    _this.reportsDay = data;
                    _this.pieChartLabelsDays = [];
                    _this.pieChartDataDays = [];
                    data.forEach(function (element) {
                        var shortDate = element._id.split('T');
                        _this.pieChartLabelsDays.push(shortDate[0]);
                        _this.pieChartDataDays.push(element.ingresos);
                    });
                    // this.insertChartItems(this.reportsDay, this.pieChartLabelsDays, this.pieChartDataDays)
                    // data.forEach(element => {
                    //     this.pieChartLabelsDays.push(element._id)
                    //     this.pieChartDataDays.push(element.ingresos)
                    // });
                    _this.sumReservations(_this.reportsDay);
                }
            });
        }
        // console.log(this.pieChartLabelsCubicles)
        // console.log(this.pieChartDataCubicles)
    };
    AdminReportsComponent.prototype.sumReservations = function (reservations) {
        var _this = this;
        reservations.forEach(function (element) {
            _this.totalReservations += element.ingresos;
        });
    };
    AdminReportsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AdminReportsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    AdminReportsComponent.prototype.searchReports = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            this.reportsService.getByDivision(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    // this.pieChartLabelsDivision = new Array
                    // this.pieChartDataDivision = new Array
                    console.log('Reportes por division: ');
                    console.log(data);
                    _this.reportsDivision = data;
                    _this.pieChartLabelsDivision = new Array();
                    _this.pieChartDataDivision = new Array();
                    // this.pieChartLabelsDivision = []
                    // this.pieChartDataDivision = []
                    _this.insertChartItems(_this.reportsDivision, _this.pieChartLabelsDivision, _this.pieChartDataDivision);
                }
            });
            this.reportsService.getByCubicle(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    // this.pieChartLabelsCubicles = new Array
                    // this.pieChartDataCubicles = new Array
                    console.log('Reportes por cubiculo: ');
                    console.log(data);
                    _this.reportsCubicle = data;
                    _this.pieChartLabelsCubicles = new Array();
                    _this.pieChartDataCubicles = new Array();
                    // this.pieChartLabelsCubicles = []
                    // this.pieChartDataCubicles = []
                    data.forEach(function (element) {
                        _this.pieChartLabelsCubicles.push("Cubiculo " + element._id);
                        _this.pieChartDataCubicles.push(element.ingresos);
                    });
                    // console.log(this.pieChartLabelsCubicles)
                }
            });
            this.reportsService.getByCareer(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.pieChartLabelsCareers = new Array();
                    _this.pieChartDataCareers = new Array();
                    console.log('Reportes por carrera: ');
                    console.log(data);
                    _this.reportsCareer = data;
                    // this.pieChartLabelsCareers = []
                    // this.pieChartDataCareers = []
                    _this.insertChartItems(_this.reportsCareer, _this.pieChartLabelsCareers, _this.pieChartDataCareers);
                }
            });
            this.reportsService.getByDay(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.pieChartLabelsDays = new Array;
                    _this.pieChartDataDays = new Array;
                    console.log(_this.pieChartLabelsDays);
                    console.log('Reportes por dia: ');
                    console.log(data);
                    _this.reportsDay = data;
                    // this.pieChartLabelsDays = []
                    // this.pieChartDataDays = []
                    data.forEach(function (element) {
                        // console.log(element._id)
                        var shortDate = element._id.split('T');
                        _this.pieChartLabelsDays.push(shortDate[0]);
                        _this.pieChartDataDays.push(element.ingresos);
                    });
                }
            });
        }
        console.log(this.pieChartLabelsDays);
    };
    return AdminReportsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_chart_js__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_chart_js__["BaseChartDirective"]) === "function" && _a || Object)
], AdminReportsComponent.prototype, "chart", void 0);
AdminReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-reports',
        template: __webpack_require__("../../../../../src/app/admin/admin-reports/admin-reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-reports/admin-reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_reports_reports_service__["a" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reports_reports_service__["a" /* ReportsService */]) === "function" && _b || Object])
], AdminReportsComponent);

var _a, _b;
//# sourceMappingURL=admin-reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing/admin.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_home_admin_home_component__ = __webpack_require__("../../../../../src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_users_admin_users_component__ = __webpack_require__("../../../../../src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_cubicles_admin_cubicles_component__ = __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_careers_admin_careers_component__ = __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_departments_admin_departments_component__ = __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_users_admin_users_update_admin_users_update_component__ = __webpack_require__("../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_cubicles_admin_cubicles_update_admin_cubicles_update_component__ = __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_careers_admin_careers_update_admin_careers_update_component__ = __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_departments_admin_departments_update_admin_departments_update_component__ = __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_reports_admin_reports_component__ = __webpack_require__("../../../../../src/app/admin/admin-reports/admin-reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var adminRoutes = [{
        path: 'admin-site',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__admin_home_admin_home_component__["a" /* AdminHomeComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_4__admin_users_admin_users_component__["a" /* AdminUsersComponent */] },
            { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_8__admin_users_admin_users_update_admin_users_update_component__["a" /* AdminUsersUpdateComponent */] },
            { path: 'cubicles', component: __WEBPACK_IMPORTED_MODULE_5__admin_cubicles_admin_cubicles_component__["a" /* AdminCubiclesComponent */] },
            { path: 'cubicles/:id', component: __WEBPACK_IMPORTED_MODULE_9__admin_cubicles_admin_cubicles_update_admin_cubicles_update_component__["a" /* AdminCubiclesUpdateComponent */] },
            { path: 'careers', component: __WEBPACK_IMPORTED_MODULE_6__admin_careers_admin_careers_component__["a" /* AdminCareersComponent */] },
            { path: 'careers/:id', component: __WEBPACK_IMPORTED_MODULE_10__admin_careers_admin_careers_update_admin_careers_update_component__["a" /* AdminCareersUpdateComponent */] },
            { path: 'departments', component: __WEBPACK_IMPORTED_MODULE_7__admin_departments_admin_departments_component__["a" /* AdminDepartmentsComponent */] },
            { path: 'departments/:id', component: __WEBPACK_IMPORTED_MODULE_11__admin_departments_admin_departments_update_admin_departments_update_component__["a" /* AdminDepartmentsUpdateComponent */] },
            { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_12__admin_reports_admin_reports_component__["a" /* AdminReportsComponent */] },
            { path: '**', redirectTo: '', pathMatch: 'full' } // Route in case page is not found
            // {path: '', redirectTo: 'home', pathMatch: 'full'}
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
        declarations: []
    })
], AdminRoutingModule);

//# sourceMappingURL=admin.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"grid-container content\">\n    <a class=\"button\" routerLink=\"/admin-site/users\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Modificar usuario</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"name\" placeholder=\"Ingrese nombre del estudiante\" [ngModel]=\"currentUser?.name\" (ngModelChange)=\"currentUser.name = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Matricula\n            <input type=\"number\" name=\"registrationNumber\" placeholder=\"Ingrese la matricula del estudiante\" [ngModel]=\"currentUser?.registrationNumber\" (ngModelChange)=\"currentUser.registrationNumber = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Division\n            <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"divisionSelected\" (ngModelChange)=\"divisionChange($event)\" required>\n              <!-- <option [value]=\"''\"></option> -->\n              <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n            </select>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Carrera\n            <select class=\"form-control\" name=\"selectedCareer\" [ngModel]=\"currentUser?.career\" (ngModelChange)=\"currentUser.career = $event\" required>\n              <!-- <option [selected]=\"selectedDivision == 'Choose an option'\">Choose an option</option> -->\n              <!-- <option [value]=\"''\"></option> -->\n              <option *ngFor=\"let career of careers\" [value]=\"career\">{{career}}</option>\n            </select>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"update()\">Actualizar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsersUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUsersUpdateComponent = (function () {
    function AdminUsersUpdateComponent(settingService, usersService, router, route, careersService) {
        this.settingService = settingService;
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.careersService = careersService;
    }
    AdminUsersUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.loadSchoolSettings().subscribe(function (res) {
            _this.divisions = res;
            console.log(_this.divisions);
        });
        this.route.params.subscribe(function (params) {
            var userId = params['id']; //
            console.log("Id del usuario: " + userId);
            if (userId) {
                _this.usersService.getById(userId).then(function (user) {
                    if (user) {
                        console.log(user);
                        _this.currentUser = user;
                        _this.divisionSelected = user.division;
                    }
                });
            }
        });
    };
    AdminUsersUpdateComponent.prototype.divisionChange = function (event) {
        var _this = this;
        console.log(event);
        this.careers = new Array;
        this.careersService.getByDivision(event.division).then(function (data) {
            data.forEach(function (career) {
                _this.careers.push(career.careerCode);
            });
        }).catch(function (err) { return console.log("Error " + err); });
        switch (event.division) {
            case 'Preparatoria':
                this.currentUser.division = 'PREP';
                break;
            case 'Ingenieria':
                this.currentUser.division = 'PROF';
                break;
            case 'Administracion y Negocios':
                this.currentUser.division = 'PROF';
                break;
            case 'Posgrado':
                this.currentUser.division = 'POST';
                break;
            case 'Doctorado':
                this.currentUser.division = 'DOCT';
                break;
        }
    };
    AdminUsersUpdateComponent.prototype.update = function () {
        var _this = this;
        console.log(this.currentUser);
        this.usersService.update(this.currentUser._id, this.currentUser).then(function (response) {
            console.log(response);
            if (response.status == 200 || response.status == 204) {
                _this.router.navigateByUrl('/admin-site');
            }
        }).catch(function (err) { return console.log("Error " + err); });
    };
    return AdminUsersUpdateComponent;
}());
AdminUsersUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-users-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_careers_careers_service__["a" /* CareersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_careers_careers_service__["a" /* CareersService */]) === "function" && _e || Object])
], AdminUsersUpdateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-users-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createUser()\">Nuevo usuario</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese la matricula o nombre del usuario\" [(ngModel)]=\"searchUserNumber\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Matricula</th>\n          <th>Nombre</th>\n          <th>Division</th>\n          <th>Carrera</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users | paginate: { itemsPerPage: 50, currentPage: page } | searchUser: searchUserNumber\" data-closable>\n          <td>{{user.registrationNumber}}</td>\n          <td>{{user.name}}</td>\n          <td>{{user.division}}</td>\n          <td>{{user.career}}</td>\n          <td class=\"text-center\"><a routerLink=\"/admin-site/users/{{user._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(user._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <!-- <ul>\n    <li *ngFor=\"let item of users | paginate: { itemsPerPage: 10, currentPage: page }\"> {{item.name}} </li>\n  </ul> -->\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n\n</div>\n\n<!-- Create User Form -->\n<form *ngIf=\"called\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nuevo usuario</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"name\" placeholder=\"Ingrese nombre del estudiante\" [(ngModel)]=\"newUser.name\" required>\n            <p *ngIf=\"anyErrors?.errors?.name\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.name.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Matricula\n            <input type=\"number\" name=\"registrationNumber\" placeholder=\"Ingrese la matricula del estudiante\" [(ngModel)]=\"newUser.registrationNumber\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.registrationNumber\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.registrationNumber.message}}</p>\n              <p *ngIf=\"anyErrors?.existUser && !anyErrors?.existUsers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existUser}}</p>\n            </div>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Division\n            <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"divisionSelected\" (ngModelChange)=\"divisionChange($event)\" required>\n              <!-- <option [value]=\"''\"></option> -->\n              <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n            </select>\n            <p *ngIf=\"anyErrors?.errors?.division\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.division.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Carrera\n            <select class=\"form-control\" name=\"selectedCareer\" [ngModel]=\"newUser?.career\" (ngModelChange)=\"newUser.career = $event\" required>\n              <!-- <option [selected]=\"selectedDivision == 'Choose an option'\">Choose an option</option> -->\n              <!-- <option [value]=\"''\"></option> -->\n              <option *ngFor=\"let career of careers\" [value]=\"career\">{{career}}</option>\n            </select>\n            <p *ngIf=\"anyErrors?.errors?.career\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.career.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label><strong>Adjuntar archivo</strong></label>\n          <label for=\"exampleFileUpload\" class=\"button\">Upload File</label>\n          <input #inputFile type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existUsers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existUsers}}</p>\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remove file</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminUsersComponent = (function () {
    function AdminUsersComponent(usersService, settingService, router, route, careersService) {
        this.usersService = usersService;
        this.settingService = settingService;
        this.router = router;
        this.route = route;
        this.careersService = careersService;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* UserModel */]();
        this.page = 1;
        this.called = false;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.loadSchoolSettings().subscribe(function (res) {
            _this.divisions = res;
            console.log(_this.divisions);
        });
        this.usersService.getAll().then(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    AdminUsersComponent.prototype.createUser = function () {
        this.called = true;
    };
    AdminUsersComponent.prototype.removeFile = function () {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        console.log(this.myInputVariable.nativeElement.files);
        this.nameFile = '';
        this.textFile = undefined;
    };
    AdminUsersComponent.prototype.fileChange = function (event) {
        var _this = this;
        var input = event.target;
        this.nameFile = input.files[0].name;
        var _loop_1 = function () {
            var reader = new FileReader();
            reader.onload = function () {
                // this 'text' is the content of the file
                _this.textFile = reader.result;
            };
            reader.readAsText(input.files[index]);
        };
        for (var index = 0; index < input.files.length; index++) {
            _loop_1();
        }
        ;
    };
    AdminUsersComponent.prototype.save = function () {
        var _this = this;
        if (this.textFile) {
            console.log(this.textFile);
            var jsonFiles = JSON.parse(this.textFile);
            this.usersService.createFile(jsonFiles)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) { return _this.anyErrors = JSON.parse(err._body); }));
        }
        else {
            this.usersService.create(this.newUser)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) { return _this.anyErrors = JSON.parse(err._body); }));
        }
    };
    AdminUsersComponent.prototype.delete = function (id) {
        this.usersService.remove(id).then(function (response) {
            console.log(response);
        }).catch(function (err) { return console.log("Hubo un error " + err); });
    };
    AdminUsersComponent.prototype.divisionChange = function (event) {
        var _this = this;
        console.log(event.division);
        this.careers = new Array;
        this.careersService.getByDivision(event.division).then(function (data) {
            data.forEach(function (career) {
                _this.careers.push(career.careerCode);
            });
        }).catch(function (err) { return console.log("Error " + err); });
        this.newUser.division = event.division;
    };
    return AdminUsersComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile'),
    __metadata("design:type", Object)
], AdminUsersComponent.prototype, "myInputVariable", void 0);
AdminUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-users',
        template: __webpack_require__("../../../../../src/app/admin/admin-users/admin-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-users/admin-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_careers_careers_service__["a" /* CareersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_careers_careers_service__["a" /* CareersService */]) === "function" && _e || Object])
], AdminUsersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".admin-bar {\n  background: #4a8ab9 !important;\n}\n.title-admin {\n  font-size: 20px;\n}\n.admin-menu a {\n  color: #ffffff;\n}\n.top-bar-right ul {\n  background: inherit;\n}\n.top-bar-left a {\n  /*color: #ffffff;*/\n  margin: 0 0 0 20px;\n  padding: 0;\n  font-size: 20px;\n}\n/*.top-bar-right a {\n  color: #ffffff;\n}*/\n.top-bar-right a i {\n  margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar admin-bar\">\n    <div class=\"top-bar-left\">\n      <a class=\"clear secondary button\"routerLink=\"/\">Cetys Universidad</a>\n    </div>\n  <div class=\"top-bar-right\">\n    <ul class=\"menu\">\n      <li><a class=\"clear secondary button\" routerLink=\"users\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>Usuarios</a></li>\n      <li><a class=\"clear secondary button\" routerLink=\"cubicles\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>Cubiculos</a></li>\n      <li><a class=\"clear secondary button\" routerLink=\"careers\"><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>Carreras</a></li>\n      <li><a class=\"clear secondary button\" routerLink=\"departments\"><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>Departamentos</a></li>\n      <li><a class=\"clear secondary button\" routerLink=\"reports\"><strong>Reportes</strong></a></li>\n    </ul>\n  </div>\n</div>\n</header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(route, router) {
        this.route = route;
        this.router = router;
        // this.route.navigateByUrl('/admin/home')
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_home_admin_home_component__ = __webpack_require__("../../../../../src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_users_admin_users_component__ = __webpack_require__("../../../../../src/app/admin/admin-users/admin-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_careers_admin_careers_component__ = __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_cubicles_admin_cubicles_component__ = __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_cubicles_cubicles_service__ = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_departments_departments_service__ = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_departments_admin_departments_component__ = __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_searchCubicle_search_cubicle_pipe__ = __webpack_require__("../../../../../src/app/pipes/searchCubicle/search-cubicle.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_searchCareer_search_career_pipe__ = __webpack_require__("../../../../../src/app/pipes/searchCareer/search-career.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_searchUser_search_user_pipe__ = __webpack_require__("../../../../../src/app/pipes/searchUser/search-user.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_searchDepartment_search_department_pipe__ = __webpack_require__("../../../../../src/app/pipes/searchDepartment/search-department.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_cubicles_admin_cubicles_update_admin_cubicles_update_component__ = __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_careers_admin_careers_update_admin_careers_update_component__ = __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_departments_admin_departments_update_admin_departments_update_component__ = __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_users_admin_users_update_admin_users_update_component__ = __webpack_require__("../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_routing_admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing/admin.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_reports_admin_reports_component__ = __webpack_require__("../../../../../src/app/admin/admin-reports/admin-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_reports_reports_service__ = __webpack_require__("../../../../../src/app/services/reports/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























 // <-- import the module



var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_22__admin_routing_admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_27_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_5__admin_home_admin_home_component__["a" /* AdminHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__admin_users_admin_users_component__["a" /* AdminUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_7__admin_careers_admin_careers_component__["a" /* AdminCareersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__admin_cubicles_admin_cubicles_component__["a" /* AdminCubiclesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__admin_departments_admin_departments_component__["a" /* AdminDepartmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_searchCubicle_search_cubicle_pipe__["a" /* SearchCubiclePipe */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_searchCareer_search_career_pipe__["a" /* SearchCareerPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_searchDepartment_search_department_pipe__["a" /* SearchDepartmentPipe */],
            __WEBPACK_IMPORTED_MODULE_18__admin_cubicles_admin_cubicles_update_admin_cubicles_update_component__["a" /* AdminCubiclesUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_19__admin_careers_admin_careers_update_admin_careers_update_component__["a" /* AdminCareersUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__admin_departments_admin_departments_update_admin_departments_update_component__["a" /* AdminDepartmentsUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_21__admin_users_admin_users_update_admin_users_update_component__["a" /* AdminUsersUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_23__admin_reports_admin_reports_component__["a" /* AdminReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_searchUser_search_user_pipe__["a" /* SearchUserPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_10__services_cubicles_cubicles_service__["a" /* CubiclesService */],
            __WEBPACK_IMPORTED_MODULE_11__services_careers_careers_service__["a" /* CareersService */],
            __WEBPACK_IMPORTED_MODULE_25__services_reports_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_departments_departments_service__["a" /* DepartmentsService */],
            __WEBPACK_IMPORTED_MODULE_26__services_settings_settings_service__["a" /* SettingsService */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        // All components
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        // All modules
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_2__admin_admin_module__["a" /* AdminModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ReservationCreateComponent } from './home/reservation/reservation-create/reservation-create.component'
// import { ReservationUpdateComponent } from './home/reservation/reservation-update/reservation-update.component'
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
    // { path: 'reports', component: ReportsComponent },
    // { path: 'reservations-create', component: ReservationCreateComponent },
    // { path: 'reservations-update', component: ReservationUpdateComponent }
    // { path: '**', component: PageNotFoundComponent } Route in case page is not found
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing/home.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_reports_component__ = __webpack_require__("../../../../../src/app/home/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reservation_reservation_create_reservation_create_component__ = __webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reservation_reservation_update_reservation_update_component__ = __webpack_require__("../../../../../src/app/home/reservation/reservation-update/reservation-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_edit_reservation_edit_component__ = __webpack_require__("../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { HomeComponent } from '../home.component'





var homeRoutes = [
    { path: 'reservations', component: __WEBPACK_IMPORTED_MODULE_2__reports_reports_component__["a" /* ReportsComponent */] },
    // { path: 'home', component: HomeComponent },
    { path: 'reservations-create/:id', component: __WEBPACK_IMPORTED_MODULE_3__reservation_reservation_create_reservation_create_component__["a" /* ReservationCreateComponent */] },
    { path: 'reservations-update/:id', component: __WEBPACK_IMPORTED_MODULE_4__reservation_reservation_update_reservation_update_component__["a" /* ReservationUpdateComponent */] },
    { path: 'reservations-edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_edit_reservation_edit_component__["a" /* ReservationEditComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */] }
    // { path: '**', component: PageNotFoundComponent } Route in case page is not found
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(homeRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin-top: 80px;\n}\n.matrix {\n  background-color: #FFFFFF;\n  margin-top: 80px;\n}\n.matrix-content {\n\n}\n.matrix-content .cubicle-option {\n  padding: 35px;\n  border-color: #171A21;\n  border-width: thin;\n  border-radius: inherit;\n  /*border-style: solid;*/\n  border-collapse: collapse;\n  margin: 0;\n  background-color: transparent;\n  color: black;\n}\n.matrix-content a, .matrix-content button, .matrix-content i, .matrix-content p {\n  display: inline-block;\n}\n.cubicle-number {\n  margin: 0 20px;\n  padding: 0;\n  font-size: 16px;\n  font-weight: bold;\n}\n.boton {\n  margin-top: 30px;\n}\n.boton div{\n  /*border: solid green;*/\n  margin: 0;\n  padding: 0;\n}\n.boton-edit {\n  /*border: solid blue;*/\n  padding: 0;\n  margin: 0;\n}\n.check-icon {\n  color: green;\n}\n.times-icon {\n  color: red;\n}\n.reports-button {\n  margin: 0;\n}\n\nfooter {\n  margin-top: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Sistema de reservacion de cubiculos</h1>\n<!-- <app-reservation-edit></app-reservation-edit> -->\n\n<div class=\"grid-container matrix\">\n  <div class=\"grid-x grid-padding-x small-up-1 medium-up-3 large-up-4 text-center matrix-content\">\n    <a *ngFor=\"let cubicle of cubicles\" routerLink=\"/reservations-create/{{cubicle._id}}\" class=\"cell button cubicle-option\">\n      <a routerLink=\"/reservations-edit/{{cubicle._id}}\" class=\"boton-edit\">\n        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n      </a>\n      <p class=\"cubicle-number\">{{cubicle.cubicleNumber}}</p>\n      <ng-container *ngIf=\"cubicle.availability; else elseBlock\">\n        <i class=\"fa fa-check-circle check-icon\" aria-hidden=\"true\"></i>\n      </ng-container>\n      <ng-template #elseBlock><i class=\"fa fa-times-circle times-icon\" aria-hidden=\"true\"></i></ng-template>\n    </a>\n  </div>\n</div>\n\n<div class=\"grid-container boton\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <a class=\"button radius shadow float-right reports-button\" routerLink=\"reservations\" name=\"button\">Reservaciones</a>\n    </div>\n  </div>\n</div>\n\n\n\n<footer class=\"text-center font-bold\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      Cetys Universidad <br> <a routerLink=\"admin-site\" style=\"font-size: 15px;\">Administrador</a>\n\n    </div>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cubicles_cubicles_service__ = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__ = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(cubiclesService, reservationsService) {
        this.cubiclesService = cubiclesService;
        this.reservationsService = reservationsService;
        this.currentDate = new Date();
        this.iconElement = 'fa fa-check-circle';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cubiclesService.getAll()
            .then(function (data) {
            if (data) {
                _this.cubicles = data;
                console.log('Cubiculos:');
                console.log(data);
                _this.reservationsService.getAll().then(function (data) {
                    if (data) {
                        _this.reservations = data;
                        _this.reservations.forEach(function (reservation) {
                            var initialDate = new Date(reservation.reservationDate);
                            var finishTime = new Date(reservation.departureTime);
                            if (_this.currentDate >= initialDate && _this.currentDate <= finishTime) {
                                _this.cubicles.forEach(function (cubicle) {
                                    if (cubicle.cubicleNumber == reservation.cubicle) {
                                        cubicle.availability = false;
                                    }
                                });
                            }
                            else if (_this.currentDate > finishTime) {
                                if (reservation.enable) {
                                    reservation.enable = false;
                                    _this.updateReservation(reservation);
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    HomeComponent.prototype.updateReservation = function (reservation) {
        this.reservationsService.update(reservation._id, reservation)
            .subscribe(function (data) {
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cubicles_cubicles_service__["a" /* CubiclesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cubicles_cubicles_service__["a" /* CubiclesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__["a" /* ReservationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__["a" /* ReservationsService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing/home.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_module__ = __webpack_require__("../../../../../src/app/home/reservation/reservation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reports_reports_module__ = __webpack_require__("../../../../../src/app/home/reports/reports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reservation_reservation_create_reservation_create_component__ = __webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reservation_reservation_update_reservation_update_component__ = __webpack_require__("../../../../../src/app/home/reservation/reservation-update/reservation-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reservation_reservation_edit_reservation_edit_component__ = __webpack_require__("../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_searchReservation_search_reservation_pipe__ = __webpack_require__("../../../../../src/app/pipes/searchReservation/search-reservation.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_cubicles_cubicles_service__ = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_departments_departments_service__ = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_reservations_reservations_service__ = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_usersQuantity_users_quantity_service__ = __webpack_require__("../../../../../src/app/services/usersQuantity/users.quantity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_module__["a" /* ReservationModule */],
            __WEBPACK_IMPORTED_MODULE_6__reports_reports_module__["a" /* ReportsModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_routing_home_routing_module__["a" /* HomeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__reservation_reservation_create_reservation_create_component__["a" /* ReservationCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_9__reservation_reservation_update_reservation_update_component__["a" /* ReservationUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_10__reservation_reservation_edit_reservation_edit_component__["a" /* ReservationEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_searchReservation_search_reservation_pipe__["a" /* SearchReservationPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_cubicles_cubicles_service__["a" /* CubiclesService */],
            __WEBPACK_IMPORTED_MODULE_15__services_users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_13__services_careers_careers_service__["a" /* CareersService */],
            __WEBPACK_IMPORTED_MODULE_14__services_departments_departments_service__["a" /* DepartmentsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_17__services_reservations_reservations_service__["a" /* ReservationsService */],
            __WEBPACK_IMPORTED_MODULE_18__services_usersQuantity_users_quantity_service__["a" /* UsersQuantityService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__reservation_reservation_module__["a" /* ReservationModule */],
            __WEBPACK_IMPORTED_MODULE_6__reports_reports_module__["a" /* ReportsModule */],
            __WEBPACK_IMPORTED_MODULE_10__reservation_reservation_edit_reservation_edit_component__["a" /* ReservationEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_searchReservation_search_reservation_pipe__["a" /* SearchReservationPipe */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  reports-user-details works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsUserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsUserDetailsComponent = (function () {
    function ReportsUserDetailsComponent() {
    }
    ReportsUserDetailsComponent.prototype.ngOnInit = function () {
    };
    return ReportsUserDetailsComponent;
}());
ReportsUserDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports-user-details',
        template: __webpack_require__("../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReportsUserDetailsComponent);

//# sourceMappingURL=reports-user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.reports-content {\n  margin: 0 auto;\n}*/\n.title {\n  margin-top: 30px;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"title cell\">\n      <h2 class=\"text-center\">Reservaciones</h2>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese matricula del usuario\" [(ngModel)]=\"searchReservationNumber\">\n      </label>\n    </div>\n\n    <table class=\"unstriped\">\n      <thead>\n        <tr>\n          <th>Usuario</th>\n          <th>Cubiculo</th>\n          <th>Entrada</th>\n          <th>Salida</th>\n          <th>Fecha</th>\n          <th>Personas</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let reservation of reservations | paginate: { itemsPerPage: 30, currentPage: page }\"  class=\"text-center\">\n            <td>{{reservation.user.registrationNumber}}</td>\n            <td>{{reservation.cubicle}}</td>\n            <td>{{reservation.entryTime | date: 'shortTime'}}</td>\n            <td>{{reservation.departureTime | date: 'shortTime'}}</td>\n            <td>{{reservation.reservationDate | date: 'mediumDate'}}</td>\n            <td class=\"clear button\" style=\"color: #000000; font-size: 16px; margin: 0;\" (click)=\"getCurrentReservation(reservation)\" data-open=\"reportsModal\">{{reservation.peopleQuantity}}</td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n<!-- User details Modal -->\n<div class=\"reveal\" id=\"reportsModal\" data-reveal>\n  <table>\n    <thead>\n      <tr>\n        <th>Carrera/Departamento</th>\n        <th>Division</th>\n        <th>Cantidad</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let userDetail of currentReservation\">\n        <td *ngIf=\"userDetail.career; else elseBlock\">{{userDetail.career}}</td>\n        <ng-template #elseBlock><td>{{userDetail.department}}</td></ng-template>\n        <td *ngIf=\"userDetail.division; else elseDivision\">{{userDetail.division}}</td>\n        <ng-template #elseDivision><td>N/A</td></ng-template>\n        <td>{{userDetail.quantity}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reservations_reservations_service__ = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = (function () {
    function ReportsComponent(reservationsService, usersService) {
        this.reservationsService = reservationsService;
        this.usersService = usersService;
        this.page = 1;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reservationsService.getAll().then(function (data) {
            if (data) {
                _this.reservations = data;
                console.log(_this.reservations);
                console.log(_this.reservations[0].reservationDate);
            }
        });
    };
    ReportsComponent.prototype.getCurrentReservation = function (reservation) {
        console.log(reservation.usersDetails);
        this.currentReservation = reservation.usersDetails;
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/home/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reports/reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reservations_reservations_service__["a" /* ReservationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reservations_reservations_service__["a" /* ReservationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], ReportsComponent);

var _a, _b;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_component__ = __webpack_require__("../../../../../src/app/home/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_user_details_reports_user_details_component__ = __webpack_require__("../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // <-- import the module

var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__reports_user_details_reports_user_details_component__["a" /* ReportsUserDetailsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__reports_user_details_reports_user_details_component__["a" /* ReportsUserDetailsComponent */]
        ]
    })
], ReportsModule);

//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n\nform {\n  border: solid orange;\n}\n.content {\n  border: solid brown;\n  background-color: #ffffff;\n}\n\n.circle {\n  position: relative;\n  /*font-size: 10px;*/\n  width: 20px;\n  height: 25px;\n  margin-top: 5px;\n  /*border-radius: 80%;*/\n}\n.circle i {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 5px;\n}\n.input-quantity {\n  margin: 0px 20px;\n  width: 60px;\n}\n.plus-minus-group {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.list-group {\n  /*border: solid green;*/\n  margin-left: 20px;\n  width: auto;\n  position: relative;\n  padding-top: 25px;\n}\n.list-group span {\n  position: absolute;\n  top: 0;\n  margin-left: 60px;\n  font-size: 13px;\n  /*border: solid brown;*/\n}\n.title-people {\n  /*border: solid orange;\n  padding: 0;*/\n  /*vertical-align: middle;\n  margin: 0 auto;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;*/\n}\n.hola {\n  margin: 0 auto;\n  /*border: solid green;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Create Reservation</h1>\n    <form #reservationForm=\"ngForm\">\n      <div class=\"grid-container content\">\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"title cell\">\n            <h2>Nueva reservacion</h2>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"cell form-group\">\n            <label>Usuario\n              <input type=\"number\" aria-describedby=\"userHelpText\" class=\"form-control\" name=\"user\" [(ngModel)]=\"registrationNumber\" placeholder=\"Ingrese la matricula\" required #matricula=\"ngModel\">\n            </label>\n            <!-- <p *ngIf=\"anyErrors._bod\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors._body}}</p> -->\n            <!-- <div *ngIf=\"matricula.errors && (matricula.dirty || matricula.touched)\" class=\"alert\">\n              <div [hidden]=\"!matricula.errors.required\">\n                La matricula es requerida\n              </div>\n            </div> -->\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-2 cell form-group\">\n            <label>Cubiculo\n              <input type=\"number\" class=\"form-control\" value=\"{{newReservation?.cubicle}}\">\n            </label>\n          </div>\n\n          <div class=\"small-5 cell form-group\">\n            <label>Hora de entrada\n              <input type=\"time\" class=\"form-control\" name=\"entryTime\" [(ngModel)]=\"currentTime\">\n              <p *ngIf=\"anyErrors?.errors?.entryTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.entryTime.message}}</p>\n\n            </label>\n          </div>\n\n          <div class=\"small-5 cell form-group\">\n            <label>Hora de salida\n              <input type=\"time\" class=\"form-control\" name=\"departureTime\" [(ngModel)]=\"departureTime\">\n              <p *ngIf=\"anyErrors?.errors?.departureTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departureTime.message}}</p>\n\n            </label>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"auto cell form-group\">\n            <label>Division\n              <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"selectedDivision\" (ngModelChange)=\"divisionChange($event)\">\n                <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"auto cell form-group\">\n            <label>Departamento\n              <select class=\"form-control\" name=\"selectedDepartment\" [ngModel]=\"departmentSelected\" (ngModelChange)=\"departmentChange($event)\" data-open=\"quantity-department\">\n                <option *ngFor=\"let department of departments\" [value]=\"department\">{{department}}</option>\n              </select>\n            </label>\n          </div>\n\n          <!-- Modal -->\n          <div class=\"reveal\" id=\"quantity-department\" data-reveal>\n            <label for=\"\">Cantidad de personas\n            <div class=\"input-group\">\n              <span class=\"input-group-label\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></span>\n              <input class=\"input-group-field\" type=\"number\" name=\"quantityDepartment\" min=\"1\" [(ngModel)]=\"quantityDepartment\">\n              <div class=\"input-group-button\">\n                <button type=\"button\" class=\"button\" [disabled]=\"!registrationNumber\" (click)=\"onSubmitQuantityDepartment()\" data-close aria-label=\"Close modal\">Listo</button>\n              </div>\n            </div>\n            </label>\n            <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n             <span aria-hidden=\"true\">&times;</span>\n           </button>\n          </div>\n\n          <div class=\"auto cell\">\n            <label>Fecha\n              <input type=\"date\" name=\"dateReservation\" [(ngModel)]=\"currentDate\" placeholder=\"Fecha\">\n              <p *ngIf=\"anyErrors?.errors?.reservationDate\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.reservationDate.message}}</p>\n\n            </label>\n          </div>\n        </div>\n        <!-- Input option careers -->\n        <div class=\"grid-x grid-padding-x plus-minus-group\">\n          <ul class=\"menu\">\n            <li *ngFor=\"let career of currentCareers; let i = index\" class=\"input-group list-group\">\n              <span>{{career}}</span>\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber || valores[i].count == 0\" (click)=\"decrementCareer(career)\" data-quantity=\"minus\" data-field=\"quantity\">\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n              </button>\n              <input class=\"text-center input-quantity\" type=\"number\" name=\"quantity\" [value]=\"valores[i].count\">\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber\" (click)=\"incrementCareer(career)\" data-quantity=\"plus\" data-field=\"quantity\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              </button>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-2 cell title-people\">\n            <label>Cantidad total\n              <input type=\"number\" name=\"peopleQuantity\" [(ngModel)]=\"newReservation.peopleQuantity\">\n            </label>\n          </div>\n          <div class=\"small-12 medium-10 large-10 cell\">\n            <label>\n              Prestamo de material\n              <textarea name=\"borrowedMaterial\" placeholder=\"Ingresar el material prestado\" [(ngModel)]=\"newReservation.borrowedMaterial\"></textarea>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-6 medium-6 large-4 cell text-center hola\">\n            <button type=\"button\" class=\"button\" name=\"button\" [disabled]=\"!reservationForm.form.valid\" (click)=\"save()\">\n              Reservar\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </form>\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__ = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cubicles_cubicles_service__ = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_departments_departments_service__ = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_usersQuantity_users_quantity_service__ = __webpack_require__("../../../../../src/app/services/usersQuantity/users.quantity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_reservation_model__ = __webpack_require__("../../../../../src/app/models/reservation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_userDetails_model__ = __webpack_require__("../../../../../src/app/models/userDetails.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ReservationCreateComponent = (function () {
    function ReservationCreateComponent(departmentsService, usersService, usersQuantity, settingService, cubiclesService, reservationsService, careersService, router, route) {
        this.departmentsService = departmentsService;
        this.usersService = usersService;
        this.usersQuantity = usersQuantity;
        this.settingService = settingService;
        this.cubiclesService = cubiclesService;
        this.reservationsService = reservationsService;
        this.careersService = careersService;
        this.router = router;
        this.route = route;
        this.valores = new Array;
        this.newReservation = new __WEBPACK_IMPORTED_MODULE_8__models_reservation_model__["a" /* ReservationModel */]();
        this.newUser = new __WEBPACK_IMPORTED_MODULE_10__models_user_model__["a" /* UserModel */]();
        this.departments = new Array;
        this.quantityDepartment = 1;
    }
    ReservationCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Fehca y hora de entrada: " + this.newReservation.entryTime);
        var hour = this.newReservation.entryTime.getHours();
        var minutes = this.newReservation.entryTime.getMinutes();
        var time = this.newReservation.entryTime.getTime();
        if (minutes >= 0 && minutes <= 9) {
            this.currentTime = hour + ":0" + minutes;
            console.log(this.currentTime);
        }
        else {
            this.currentTime = hour + ":" + minutes;
        }
        console.log('Hora de entrada: ' + this.currentTime);
        var day = this.newReservation.reservationDate.getDate();
        var month = this.newReservation.reservationDate.getMonth() + 1;
        var year = this.newReservation.reservationDate.getFullYear();
        this.currentDate = year + "-" + month + "-" + day;
        console.log("Fecha actual: " + this.currentDate);
        this.settingService.loadSchoolSettings().subscribe(function (res) {
            _this.divisions = res;
            console.log(_this.divisions);
        });
        this.departmentsService.getAll().then(function (data) {
            console.log('Departamentos' + data);
            data.forEach(function (department) {
                _this.departments.push(department.departmentName);
            });
        });
        this.route.params.subscribe(function (params) {
            var cubicleNumberId = params['id']; //
            console.log("Id de cubiculo: " + cubicleNumberId);
            if (cubicleNumberId) {
                _this.cubiclesService.getById(cubicleNumberId).then(function (cubicle) {
                    console.log(cubicle);
                    _this.newReservation.cubicle = cubicle.cubicleNumber;
                    console.log('Cubiculo: ' + _this.newReservation.cubicle);
                });
            }
        });
    };
    ReservationCreateComponent.prototype.save = function () {
        var _this = this;
        this.newReservation.entryTime = new Date(this.currentDate + ", " + this.currentTime);
        this.newReservation.departureTime = new Date(this.currentDate + ", " + this.departureTime);
        this.newReservation.reservationDate = new Date(this.currentDate + ", " + this.currentTime);
        // console.log(this.newReservation.reservationDate)
        // console.log(`Fecha de entrada reservacion: ${this.newReservation.entryTime}`)
        // console.log(`Fecha de salida reservacion: ${this.newReservation.departureTime}`)
        console.log(this.registrationNumber);
        this.usersService.getByRegistrationNumber(this.registrationNumber).then(function (user) {
            console.log("El usuario existe en la base de datos: " + JSON.stringify(user));
            _this.newReservation.user = user;
            _this.reservationsService.create(_this.newReservation)
                .subscribe(function (data) {
                console.log(data);
                _this.router.navigateByUrl('/');
            }, function (err) {
                _this.anyErrors = JSON.parse(err._body);
            });
        }).catch(function (error) {
            console.log("El usuario no se encuentra en la base de datos " + error.status);
            _this.anyErrors = JSON.parse(error._body);
        });
    };
    // onUserChange(event) {
    //   this.usersService.getByRegistrationNumber(event).then(user => {
    //     console.log(user)
    //   })
    // }
    ReservationCreateComponent.prototype.onSubmitQuantityDepartment = function () {
        // console.log(this.quantityDepartment)
        var newDepartmentUser = new __WEBPACK_IMPORTED_MODULE_9__models_userDetails_model__["a" /* UserDepartmentModel */](this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), this.registrationNumber);
        this.newReservation.usersDetails.push(newDepartmentUser);
        this.newReservation.peopleQuantity += this.quantityDepartment;
        console.log(this.newReservation.usersDetails);
        this.quantityDepartment = 1;
    };
    ReservationCreateComponent.prototype.divisionChange = function (newDivision) {
        var _this = this;
        this.currentCareers = new Array;
        console.log(newDivision.division);
        this.careersService.getByDivision(newDivision.division).then(function (data) {
            if (data.length >= 1) {
                data.forEach(function (career) {
                    _this.currentCareers.push(career.careerCode);
                    _this.valores.push({
                        career: career.careerCode,
                        count: 0
                    });
                });
            }
            else {
                _this.currentCareers.push('EXT');
                _this.valores.push({
                    career: 'EXT',
                    count: 0
                });
            }
        });
        this.usersQuantity.setDivisionSelected(newDivision.division);
        // this.currentCareers = newDivision.careers
        console.log("Division selected: " + this.usersQuantity.getDivisionSelected() + ", Careers: " + this.currentCareers);
    };
    ReservationCreateComponent.prototype.departmentChange = function (event) {
        console.log(event);
        this.usersQuantity.setDepartmentSelected(event);
        console.log("Department selected: " + this.usersQuantity.getDepartmentSelected());
    };
    ReservationCreateComponent.prototype.decrementCareer = function (career) {
        var _this = this;
        if (this.usersQuantity.getCareer() == null || undefined) {
        }
        else {
            if (this.usersQuantity.getCareer() != career) {
                var sigue_1 = false;
                this.newReservation.usersDetails.forEach(function (carrera, index) {
                    if (career == carrera.career) {
                        carrera.quantity -= 1;
                        _this.valores.forEach(function (element) {
                            if (element.career == career) {
                                element.count = carrera.quantity;
                            }
                        });
                        if (carrera.quantity == 0) {
                            _this.newReservation.usersDetails.splice(index, 1);
                        }
                        sigue_1 = true;
                    }
                });
                if (sigue_1 == false) {
                    this.usersQuantity.setCareer(career);
                    var selectedCareer = career;
                    var quantity_1 = this.usersQuantity.getUsersCounter() - 1;
                    this.valores.forEach(function (element) {
                        if (element.career == career) {
                            element.count = quantity_1;
                        }
                    });
                    if (quantity_1 > 0) {
                        var newDivisionUser = new __WEBPACK_IMPORTED_MODULE_9__models_userDetails_model__["b" /* UserDivisionModel */](quantity_1, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                        this.newReservation.usersDetails.push(newDivisionUser);
                    }
                }
            }
            else {
                this.newReservation.usersDetails.forEach(function (carrera, index) {
                    if (career == carrera.career) {
                        carrera.quantity -= 1;
                        _this.valores.forEach(function (element) {
                            if (element.career == career) {
                                element.count = carrera.quantity;
                            }
                        });
                        if (carrera.quantity == 0) {
                            if (_this.newReservation.usersDetails.length == 1) {
                                _this.newReservation.usersDetails.splice(index, 1);
                            }
                            else {
                                _this.usersQuantity.setCareer(_this.newReservation.usersDetails[index - 1].career);
                                _this.newReservation.usersDetails.splice(index, 1);
                            }
                        }
                    }
                });
            }
        }
        if (this.newReservation.peopleQuantity > 0) {
            this.newReservation.peopleQuantity -= 1;
        }
        console.log(this.newReservation.usersDetails);
    };
    ReservationCreateComponent.prototype.incrementCareer = function (career) {
        var _this = this;
        if (this.usersQuantity.getCareer() == null || undefined) {
            this.usersQuantity.setCareer(career);
            var selectedCareer = career;
            var quantity_2 = this.usersQuantity.getUsersCounter() + 1;
            this.valores.forEach(function (element) {
                if (element.career == career) {
                    element.count = quantity_2;
                }
            });
            var newDivisionUser = new __WEBPACK_IMPORTED_MODULE_9__models_userDetails_model__["b" /* UserDivisionModel */](quantity_2, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
            this.newReservation.usersDetails.push(newDivisionUser);
        }
        else {
            if (this.usersQuantity.getCareer() != career) {
                var sigue_2 = false;
                this.newReservation.usersDetails.forEach(function (carrera) {
                    if (career == carrera.career) {
                        carrera.quantity += 1;
                        _this.valores.forEach(function (element) {
                            if (element.career == career) {
                                element.count = carrera.quantity;
                            }
                        });
                        sigue_2 = true;
                    }
                });
                if (sigue_2 == false) {
                    this.usersQuantity.setCareer(career);
                    var selectedCareer = career;
                    var quantity_3 = this.usersQuantity.getUsersCounter() + 1;
                    this.valores.forEach(function (element) {
                        if (element.career == career) {
                            element.count = quantity_3;
                        }
                    });
                    var newDivisionUser = new __WEBPACK_IMPORTED_MODULE_9__models_userDetails_model__["b" /* UserDivisionModel */](quantity_3, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                    this.newReservation.usersDetails.push(newDivisionUser);
                }
            }
            else {
                if (this.newReservation.usersDetails.length == 0) {
                    var selectedCareer = career;
                    var quantity_4 = this.usersQuantity.getUsersCounter() + 1;
                    this.valores.forEach(function (element) {
                        if (element.career == career) {
                            element.count = quantity_4;
                        }
                    });
                    var newDivisionUser = new __WEBPACK_IMPORTED_MODULE_9__models_userDetails_model__["b" /* UserDivisionModel */](quantity_4, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                    this.newReservation.usersDetails.push(newDivisionUser);
                }
                else {
                    this.newReservation.usersDetails.forEach(function (carrera) {
                        if (career == carrera.career) {
                            carrera.quantity += 1;
                            _this.valores.forEach(function (element) {
                                if (element.career == career) {
                                    element.count = carrera.quantity;
                                }
                            });
                        }
                    });
                }
            }
        }
        this.newReservation.peopleQuantity += 1;
        console.log(this.newReservation.usersDetails);
    };
    return ReservationCreateComponent;
}());
ReservationCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reservation-create',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_departments_departments_service__["a" /* DepartmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_departments_departments_service__["a" /* DepartmentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_usersQuantity_users_quantity_service__["a" /* UsersQuantityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_usersQuantity_users_quantity_service__["a" /* UsersQuantityService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_cubicles_cubicles_service__["a" /* CubiclesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cubicles_cubicles_service__["a" /* CubiclesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__["a" /* ReservationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__["a" /* ReservationsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__services_careers_careers_service__["a" /* CareersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_careers_careers_service__["a" /* CareersService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _j || Object])
], ReservationCreateComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=reservation-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  margin-top: 30px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n/*th, td {\n    border-bottom: 1px solid #ddd;\n}*/\n/*.table-content {\n  overflow-x: auto;\n}*/\n/*table {\n  width: 1200px;\n}*/\n.message {\n  margin-top: 50px;\n}\n.message p {\n  color: grey;\n  font-variant: small-caps;\n  font-weight: bold;\n  font-size: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n<div class=\"grid-x grid-padding-x\">\n  <div class=\"title cell\">\n    <h2 class=\"text-center\">Reservaciones cubiculo {{cubicleReservationNumber}}</h2>\n  </div>\n</div>\n\n    <div *ngIf=\"exist\" class=\"grid-x grid-padding-x\">\n      <div class=\"small-12 cell\">\n        <label>Buscar\n          <input type=\"text\" placeholder=\"Ingrese matricula del usuario\" [(ngModel)]=\"searchReservationUser\">\n        </label>\n      </div>\n\n<table class=\"unstriped\">\n  <thead>\n    <tr>\n      <th>Usuario</th>\n      <th>Cubiculo</th>\n      <th>Entrada</th>\n      <th>Salida</th>\n      <th>Fecha</th>\n      <th>Personas</th>\n      <th>Modificar</th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let reservation of reservations | searchReservation: searchReservationUser\" class=\"text-center\">\n      <tr data-closable>\n        <td>{{reservation.user.registrationNumber}}</td>\n        <td>{{reservation.cubicle}}</td>\n        <td>{{reservation.entryTime | date: 'shortTime'}}</td>\n        <td>{{reservation.departureTime | date: 'shortTime'}}</td>\n        <td>{{reservation.reservationDate | date: 'mediumDate'}}</td>\n        <td class=\"clear button\" style=\"color: #000000; font-size: 16px; margin: 0;\" (click)=\"getCurrentReservation(reservation)\" data-open=\"exampleModal1\">{{reservation.peopleQuantity}}</td>\n        <td>\n          <a routerLink=\"/reservations-update/{{reservation._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n          <a (click)=\"delete(reservation._id)\" data-close><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n        </td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n</div>\n  <div *ngIf=\"!exist\" class=\"grid-x grid-padding-x message\">\n    <div class=\"small-12 cell text-center\">\n      <p>no existen reservaciones actualmente</p>\n    </div>\n  </div>\n</div>\n<!-- User details Modal -->\n<div class=\"reveal\" id=\"exampleModal1\" data-reveal>\n  <table>\n    <thead>\n      <tr>\n        <th>Carrera/Departamento</th>\n        <th>Division</th>\n        <th>Cantidad</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let userDetail of currentReservation\">\n        <td *ngIf=\"userDetail.career; else elseBlock\">{{userDetail.career}}</td>\n        <ng-template #elseBlock><td>{{userDetail.department}}</td></ng-template>\n        <td *ngIf=\"userDetail.division; else elseDivision\">{{userDetail.division}}</td>\n        <ng-template #elseDivision><td>N/A</td></ng-template>\n        <td>{{userDetail.quantity}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__ = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cubicles_cubicles_service__ = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservationEditComponent = (function () {
    function ReservationEditComponent(cubiclesService, reservationsService, router, route) {
        this.cubiclesService = cubiclesService;
        this.reservationsService = reservationsService;
        this.router = router;
        this.route = route;
    }
    ReservationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var cubicleNumberId = params['id']; //
            console.log("Id de cubiculo: " + cubicleNumberId);
            if (cubicleNumberId) {
                _this.cubiclesService.getById(cubicleNumberId).then(function (cubicle) {
                    _this.cubicleReservationNumber = cubicle.cubicleNumber;
                    _this.reservationsService.getByCubicle(_this.cubicleReservationNumber.toString()).then(function (data) {
                        data.length == 0 ? _this.exist = false : _this.exist = true;
                        _this.reservations = data;
                        console.log('reservations', data);
                    });
                    console.log(_this.cubicleReservationNumber);
                });
            }
        });
    };
    ReservationEditComponent.prototype.getCurrentReservation = function (reservation) {
        console.log(reservation.usersDetails);
        this.currentReservation = reservation.usersDetails;
    };
    ReservationEditComponent.prototype.delete = function (id) {
        this.reservationsService.remove(id).then(function (response) {
            console.log(response);
        }).catch(function (err) { return "Hubo un error " + err; });
        this.exist = false;
    };
    return ReservationEditComponent;
}());
ReservationEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reservation-edit',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_cubicles_cubicles_service__["a" /* CubiclesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cubicles_cubicles_service__["a" /* CubiclesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__["a" /* ReservationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__["a" /* ReservationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ReservationEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reservation-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-update/reservation-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n\nform {\n  border: solid orange;\n}\n.content {\n  border: solid brown;\n  background-color: #ffffff;\n}\n\n.circle {\n  position: relative;\n  /*font-size: 10px;*/\n  width: 20px;\n  height: 25px;\n  margin-top: 5px;\n  /*border-radius: 80%;*/\n}\n.circle i {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 5px;\n}\n.input-quantity {\n  margin: 0px 20px;\n  width: 60px;\n}\n.plus-minus-group {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.list-group {\n  /*border: solid green;*/\n  margin-left: 20px;\n  width: auto;\n  position: relative;\n  padding-top: 25px;\n}\n.list-group span {\n  position: absolute;\n  top: 0;\n  margin-left: 60px;\n  font-size: 13px;\n  /*border: solid brown;*/\n}\n.title-people {\n  vertical-align: middle;\n  margin: 0 auto;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.hola {\n  margin: 0 auto;\n  /*border: solid green;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-update/reservation-update.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Update Reservation</h1>\n    <form #reservationForm=\"ngForm\">\n      <div class=\"grid-container content\">\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"title cell\">\n            <h2>Modificar reservacion</h2>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"cell form-group\">\n            <label>Usuario\n              <input type=\"number\" class=\"form-control\" name=\"user\" [(ngModel)]=\"registrationNumber\" placeholder=\"Ingrese la matricula\" required>\n            </label>\n\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-2 cell form-group\">\n            <label>Cubiculo\n              <input type=\"number\" class=\"form-control\" value=\"{{updateReservation?.cubicle}}\">\n            </label>\n          </div>\n\n          <div class=\"small-5 cell form-group\">\n            <label>Hora de entrada\n              <input type=\"time\" class=\"form-control\" name=\"entryTime\" [(ngModel)]=\"currentTime\">\n              <p *ngIf=\"anyErrors?.errors?.entryTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.entryTime.message}}</p>\n\n            </label>\n          </div>\n\n          <div class=\"small-5 cell form-group\">\n            <label>Hora de salida\n              <input type=\"time\" class=\"form-control\" [(ngModel)]=\"currentDepartureTime\" name=\"departureTime\">\n              <p *ngIf=\"anyErrors?.errors?.departureTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departureTime.message}}</p>\n\n            </label>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"auto cell form-group\">\n            <label>Division\n              <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"selectedDivision\" (ngModelChange)=\"divisionChange($event)\">\n                <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n              </select>\n            </label>\n          </div>\n\n          <!-- Modal -->\n          <div class=\"reveal\" id=\"quantity-department\" data-reveal>\n            <label for=\"\">Cantidad de personas\n            <div class=\"input-group\">\n              <span class=\"input-group-label\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></span>\n              <input class=\"input-group-field\" type=\"number\" name=\"quantityDepartment\" min=\"1\" [(ngModel)]=\"quantityDepartment\">\n              <div class=\"input-group-button\">\n                <button type=\"button\" class=\"button\" [disabled]=\"!updateReservation.user\" (click)=\"onSubmitQuantityDepartment()\" data-close aria-label=\"Close modal\">Listo</button>\n              </div>\n            </div>\n            </label>\n            <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n             <span aria-hidden=\"true\">&times;</span>\n           </button>\n          </div>\n\n          <div class=\"auto cell form-group\">\n            <label>Departamento\n              <select class=\"form-control\" name=\"selectedDepartment\" data-open=\"quantity-department\" [ngModel]=\"departmentSelected\" (ngModelChange)=\"departmentChange($event)\">\n                <option *ngFor=\"let department of departments\" [value]=\"department\">{{department}}</option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"auto cell\">\n            <label>Fecha\n              <input type=\"date\" name=\"dateReservation\" [(ngModel)]=\"currentDate\" placeholder=\"Fecha\">\n              <p *ngIf=\"anyErrors?.errors?.reservationDate\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.reservationDate.message}}</p>\n\n            </label>\n          </div>\n        </div>\n        <!-- Input option careers -->\n        <div class=\"grid-x grid-padding-x plus-minus-group\">\n          <ul class=\"menu\">\n            <li *ngFor=\"let career of currentCareers; let i = index\" class=\"input-group list-group\">\n              <span>{{career}}</span>\n              <button type=\"button\" class=\"button hollow circle\" (click)=\"decrement(career)\" data-quantity=\"minus\" data-field=\"quantity\">\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n              </button>\n              <input class=\"text-center input-quantity\" type=\"number\" name=\"quantity\" [value]=\"0\">\n              <button type=\"button\" class=\"button hollow circle\" (click)=\"increment(career)\" data-quantity=\"plus\" data-field=\"quantity\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              </button>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-2 cell title-people\">\n            <label>Cantidad total\n              <input type=\"number\" name=\"peopleQuantity\" [(ngModel)]=\"updateReservation.peopleQuantity\">\n            </label>\n          </div>\n          <div class=\"small-12 medium-10 large-10 cell\">\n            <label>\n              Prestamo de material\n              <textarea name=\"borrowedMaterial\" placeholder=\"Ingresar el material prestado\" [(ngModel)]=\"updateReservation.borrowedMaterial\"></textarea>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-6 medium-6 large-4 cell text-center hola\">\n            <button type=\"button\" class=\"button\" name=\"button\" [disabled]=\"!reservationForm.form.valid\" (click)=\"update()\">Actualizar</button>\n          </div>\n        </div>\n\n      </div>\n    </form>\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-update/reservation-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__ = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usersQuantity_users_quantity_service__ = __webpack_require__("../../../../../src/app/services/usersQuantity/users.quantity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_reservation_model__ = __webpack_require__("../../../../../src/app/models/reservation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_userDetails_model__ = __webpack_require__("../../../../../src/app/models/userDetails.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__ = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_departments_departments_service__ = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_careers_careers_service__ = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ReservationUpdateComponent = (function () {
    function ReservationUpdateComponent(route, router, reservationsService, usersQuantity, settingService, usersService, careersService, departmentsService) {
        this.route = route;
        this.router = router;
        this.reservationsService = reservationsService;
        this.usersQuantity = usersQuantity;
        this.settingService = settingService;
        this.usersService = usersService;
        this.careersService = careersService;
        this.departmentsService = departmentsService;
        this.updateReservation = new __WEBPACK_IMPORTED_MODULE_5__models_reservation_model__["a" /* ReservationModel */]();
        this.newUser = new __WEBPACK_IMPORTED_MODULE_9__models_user_model__["a" /* UserModel */]();
        this.departments = new Array;
        this.quantityDepartment = 1;
    }
    ReservationUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.loadSchoolSettings().subscribe(function (res) {
            _this.divisions = res;
            console.log(_this.divisions);
        });
        this.route.params.subscribe(function (params) {
            _this.reservationId = params['id']; //
            console.log("Id de la reservacion: " + _this.reservationId);
            if (_this.reservationId) {
                _this.reservationsService.getById(_this.reservationId).then(function (reservation) {
                    console.log("Reservacion a actualizar: " + JSON.stringify(reservation));
                    var entryTime = new Date(reservation.entryTime);
                    var hour = entryTime.getHours();
                    var minutes = entryTime.getMinutes() < 10 ? "0" + entryTime.getMinutes() : entryTime.getMinutes();
                    _this.currentTime = hour + ":" + minutes;
                    var reservationDate = new Date(reservation.reservationDate);
                    var day = reservationDate.getDate();
                    var month = reservationDate.getMonth() + 1;
                    var year = reservationDate.getFullYear();
                    _this.currentDate = year + "-" + month + "-" + day;
                    var departureTime = new Date(reservation.departureTime);
                    var departureHour = departureTime.getHours();
                    var departureMinutes = departureTime.getMinutes() < 10 ? "0" + departureTime.getMinutes() : departureTime.getMinutes();
                    _this.currentDepartureTime = departureHour + ":" + departureMinutes;
                    _this.updateReservation = reservation;
                    _this.registrationNumber = reservation.user['registrationNumber'];
                    console.log(_this.updateReservation);
                    // this.updateReservation.user = reservation.user._id
                });
            }
        });
        this.departmentsService.getAll().then(function (data) {
            data.forEach(function (department) {
                _this.departments.push(department.departmentName);
            });
        });
    };
    ReservationUpdateComponent.prototype.update = function () {
        var _this = this;
        this.updateReservation.entryTime = new Date(this.currentDate + ", " + this.currentTime);
        this.updateReservation.departureTime = new Date(this.currentDate + ", " + this.currentDepartureTime);
        this.updateReservation.reservationDate = new Date(this.currentDate + ", " + this.currentTime);
        if (this.registrationNumber != this.updateReservation.user['registrationNumber']) {
            this.usersService.getByRegistrationNumber(this.registrationNumber).then(function (user) {
                _this.updateReservation.user = user;
            }).catch(function (err) {
                _this.anyErrors = JSON.parse(err._body);
            });
        }
        this.reservationsService.update(this.reservationId, this.updateReservation)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/');
        }, function (err) {
            _this.anyErrors = JSON.parse(err._body);
        });
        // this.reservationsService.update(this.reservationId, this.updateReservation).then(response => {
        //   if (response.status == 200 || response.status == 204) {
        //     console.log(response.json())
        //     this.router.navigateByUrl('/')
        //   }
        // }).catch(error => {
        //   this.anyErrors = JSON.parse(error._body)
        //   console.log(this.anyErrors)
        // })
    };
    ReservationUpdateComponent.prototype.onSubmitQuantityDepartment = function () {
        var newDepartmentUser = new __WEBPACK_IMPORTED_MODULE_6__models_userDetails_model__["a" /* UserDepartmentModel */](this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), this.registrationNumber);
        this.updateReservation.usersDetails.push(newDepartmentUser);
        this.updateReservation.peopleQuantity += this.quantityDepartment;
        console.log(this.updateReservation.usersDetails);
        this.quantityDepartment = 1;
    };
    ReservationUpdateComponent.prototype.departmentChange = function (event) {
        console.log(event);
        this.usersQuantity.setDepartmentSelected(event);
        console.log("Department selected: " + this.usersQuantity.getDepartmentSelected());
    };
    ReservationUpdateComponent.prototype.divisionChange = function (newDivision) {
        var _this = this;
        console.log(newDivision.division);
        this.usersQuantity.setDivisionSelected(newDivision.division);
        this.careersService.getByDivision(newDivision.division).then(function (data) {
            if (data.length >= 1) {
                data.forEach(function (career) {
                    _this.currentCareers.push(career.careerCode);
                });
            }
            else {
                _this.currentCareers.push('EXT');
            }
        });
        console.log("Division selected: " + this.usersQuantity.getDivisionSelected() + ", Careers: " + this.currentCareers);
    };
    ReservationUpdateComponent.prototype.decrement = function (career) {
        var _this = this;
        if (this.usersQuantity.getCareer() == null || undefined) {
        }
        else {
            if (this.usersQuantity.getCareer() != career) {
                var sigue_1 = false;
                this.updateReservation.usersDetails.forEach(function (carrera, index) {
                    if (career == carrera.career) {
                        carrera.quantity -= 1;
                        if (carrera.quantity == 0) {
                            _this.updateReservation.usersDetails.splice(index, 1);
                        }
                        sigue_1 = true;
                    }
                });
                if (sigue_1 == false) {
                    this.usersQuantity.setCareer(career);
                    var selectedCareer = career;
                    var quantity = this.usersQuantity.getUsersCounter() - 1;
                    if (quantity > 0) {
                        var newDivisionUser = new __WEBPACK_IMPORTED_MODULE_6__models_userDetails_model__["b" /* UserDivisionModel */](quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                        this.updateReservation.usersDetails.push(newDivisionUser);
                    }
                }
            }
            else {
                this.updateReservation.usersDetails.forEach(function (carrera, index) {
                    if (career == carrera.career) {
                        carrera.quantity -= 1;
                        if (carrera.quantity == 0) {
                            if (_this.updateReservation.usersDetails.length == 1) {
                                _this.updateReservation.usersDetails.splice(index, 1);
                            }
                            else {
                                _this.usersQuantity.setCareer(_this.updateReservation.usersDetails[index - 1].career);
                                _this.updateReservation.usersDetails.splice(index, 1);
                            }
                        }
                    }
                });
            }
        }
        if (this.updateReservation.peopleQuantity > 0) {
            this.updateReservation.peopleQuantity -= 1;
        }
        console.log(this.updateReservation.usersDetails);
    };
    ReservationUpdateComponent.prototype.increment = function (career) {
        if (this.usersQuantity.getCareer() == null || undefined) {
            this.usersQuantity.setCareer(career);
            var selectedCareer = career;
            var quantity = this.usersQuantity.getUsersCounter() + 1;
            var newDivisionUser = new __WEBPACK_IMPORTED_MODULE_6__models_userDetails_model__["b" /* UserDivisionModel */](quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
            this.updateReservation.usersDetails.push(newDivisionUser);
        }
        else {
            if (this.usersQuantity.getCareer() != career) {
                var sigue_2 = false;
                this.updateReservation.usersDetails.forEach(function (carrera) {
                    if (career == carrera.career) {
                        carrera.quantity += 1;
                        sigue_2 = true;
                    }
                });
                if (sigue_2 == false) {
                    this.usersQuantity.setCareer(career);
                    var selectedCareer = career;
                    var quantity = this.usersQuantity.getUsersCounter() + 1;
                    var newDivisionUser = new __WEBPACK_IMPORTED_MODULE_6__models_userDetails_model__["b" /* UserDivisionModel */](quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                    this.updateReservation.usersDetails.push(newDivisionUser);
                }
            }
            else {
                if (this.updateReservation.usersDetails.length == 0) {
                    var selectedCareer = career;
                    var quantity = this.usersQuantity.getUsersCounter() + 1;
                    var newDivisionUser = new __WEBPACK_IMPORTED_MODULE_6__models_userDetails_model__["b" /* UserDivisionModel */](quantity, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                    this.updateReservation.usersDetails.push(newDivisionUser);
                }
                else {
                    this.updateReservation.usersDetails.forEach(function (carrera) {
                        if (career == carrera.career) {
                            carrera.quantity += 1;
                        }
                    });
                }
            }
        }
        this.updateReservation.peopleQuantity += 1;
        console.log(this.updateReservation.usersDetails);
    };
    return ReservationUpdateComponent;
}());
ReservationUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reservation-update',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation-update/reservation-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation-update/reservation-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__["a" /* ReservationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_reservations_reservations_service__["a" /* ReservationsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_usersQuantity_users_quantity_service__["a" /* UsersQuantityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_usersQuantity_users_quantity_service__["a" /* UsersQuantityService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__["a" /* UsersService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__services_careers_careers_service__["a" /* CareersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_careers_careers_service__["a" /* CareersService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_departments_departments_service__["a" /* DepartmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_departments_departments_service__["a" /* DepartmentsService */]) === "function" && _h || Object])
], ReservationUpdateComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=reservation-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>reservation works!</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReservationComponent = (function () {
    function ReservationComponent() {
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    return ReservationComponent;
}());
ReservationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reservation',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReservationComponent);

//# sourceMappingURL=reservation.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reservation_component__ = __webpack_require__("../../../../../src/app/home/reservation/reservation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReservationModule = (function () {
    function ReservationModule() {
    }
    return ReservationModule;
}());
ReservationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__reservation_component__["a" /* ReservationComponent */]
        ]
    })
], ReservationModule);

//# sourceMappingURL=reservation.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/career.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerModel; });
var CareerModel = (function () {
    function CareerModel() {
    }
    return CareerModel;
}());

//# sourceMappingURL=career.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/cubicle.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CubicleModel; });
var CubicleModel = (function () {
    function CubicleModel() {
    }
    return CubicleModel;
}());

//# sourceMappingURL=cubicle.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/department.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentModel; });
var DepartmentModel = (function () {
    function DepartmentModel() {
    }
    return DepartmentModel;
}());

//# sourceMappingURL=department.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/reservation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationModel; });
var ReservationModel = (function () {
    function ReservationModel() {
        this.reservationDate = new Date();
        this.entryTime = new Date();
        this.peopleQuantity = 0;
        this.usersDetails = new Array();
    }
    return ReservationModel;
}());

//# sourceMappingURL=reservation.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/userDetails.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserDetailsModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDepartmentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserDivisionModel; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserDetailsModel = (function () {
    function UserDetailsModel() {
        this.quantity = 0;
    }
    return UserDetailsModel;
}());

var UserDepartmentModel = (function (_super) {
    __extends(UserDepartmentModel, _super);
    function UserDepartmentModel(quantity, department, registrationNumber) {
        var _this = _super.call(this) || this;
        _this.quantity = quantity;
        _this.department = department;
        _this.registrationNumber = registrationNumber;
        return _this;
    }
    return UserDepartmentModel;
}(UserDetailsModel));

var UserDivisionModel = (function (_super) {
    __extends(UserDivisionModel, _super);
    function UserDivisionModel(quantity, division, career, registrationNumber) {
        var _this = _super.call(this) || this;
        _this.quantity = quantity;
        _this.division = division;
        _this.career = career;
        _this.registrationNumber = registrationNumber;
        return _this;
    }
    return UserDivisionModel;
}(UserDetailsModel));

//# sourceMappingURL=userDetails.model.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchCareer/search-career.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCareerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchCareerPipe = (function () {
    function SearchCareerPipe() {
    }
    SearchCareerPipe.prototype.transform = function (items, career) {
        // career = career.toUpperCase()
        if (!career)
            return items;
        else {
            career = career.toUpperCase();
            return items.filter(function (value) { return value.careerCode == career || value.careerName == career; });
        }
    };
    return SearchCareerPipe;
}());
SearchCareerPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchCareer'
    })
], SearchCareerPipe);

//# sourceMappingURL=search-career.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchCubicle/search-cubicle.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCubiclePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchCubiclePipe = (function () {
    function SearchCubiclePipe() {
    }
    SearchCubiclePipe.prototype.transform = function (items, cubicle) {
        var cubicleNumber = parseInt(cubicle);
        if (!cubicle)
            return items;
        return items.filter(function (value) { return value.cubicleNumber == cubicle; });
    };
    return SearchCubiclePipe;
}());
SearchCubiclePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchCubicle'
    })
], SearchCubiclePipe);

//# sourceMappingURL=search-cubicle.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchDepartment/search-department.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDepartmentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchDepartmentPipe = (function () {
    function SearchDepartmentPipe() {
    }
    SearchDepartmentPipe.prototype.transform = function (items, name) {
        if (!name) {
            return items;
        }
        else {
            var number_1 = parseInt(name);
            name = name.toUpperCase();
            // console.log(nameUpper)
            if (number_1 != NaN) {
                return items.filter(function (value) { return value.departmentCode == number_1; });
            }
            else {
                return items.filter(function (value) { return value.departmentName == name; });
            }
        }
    };
    return SearchDepartmentPipe;
}());
SearchDepartmentPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchDepartment'
    })
], SearchDepartmentPipe);

//# sourceMappingURL=search-department.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchReservation/search-reservation.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchReservationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchReservationPipe = (function () {
    function SearchReservationPipe() {
    }
    SearchReservationPipe.prototype.transform = function (items, number) {
        var matricula = parseInt(number);
        if (!number)
            return items;
        return items.filter(function (value) { return value.user.registrationNumber == matricula; });
    };
    return SearchReservationPipe;
}());
SearchReservationPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchReservation'
    })
], SearchReservationPipe);

//# sourceMappingURL=search-reservation.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchUser/search-user.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchUserPipe = (function () {
    function SearchUserPipe() {
    }
    SearchUserPipe.prototype.transform = function (items, number) {
        var matricula = parseInt(number);
        if (!number)
            return items;
        return items.filter(function (value) { return value.registrationNumber == matricula; });
    };
    return SearchUserPipe;
}());
SearchUserPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchUser'
    })
], SearchUserPipe);

//# sourceMappingURL=search-user.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/careers/careers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CareersService = CareersService_1 = (function () {
    function CareersService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/api/careers";
    }
    CareersService.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CareersService.prototype.getAll = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(CareersService_1.handleError);
    };
    CareersService.prototype.getByDivision = function (area) {
        return this.http.get(this.url + "/division", {
            params: {
                area: area
            }
        })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(CareersService_1.handleError);
    };
    CareersService.prototype.getById = function (_id) {
        return this.http.get(this.url + "/" + _id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(CareersService_1.handleError);
    };
    CareersService.prototype.create = function (newCareer) {
        return this.http.post(this.url, newCareer)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return CareersService_1.handleError(err); });
    };
    CareersService.prototype.createFile = function (newCareers) {
        return this.http.post(this.url, newCareers)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return CareersService_1.handleError(err); });
    };
    CareersService.prototype.update = function (id, careerModel) {
        return this.http.put(this.url + "/" + id, careerModel).toPromise();
    };
    CareersService.prototype.remove = function (id) {
        console.log(id);
        return this.http.delete(this.url + "/" + id).toPromise();
    };
    return CareersService;
}());
CareersService = CareersService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CareersService);

var CareersService_1, _a;
//# sourceMappingURL=careers.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cubicles/cubicles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CubiclesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CubiclesService = CubiclesService_1 = (function () {
    function CubiclesService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/api/cubicles";
    }
    CubiclesService.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CubiclesService.prototype.getAll = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(CubiclesService_1.handleError);
    };
    CubiclesService.prototype.getById = function (_id) {
        return this.http.get(this.url + "/" + _id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(CubiclesService_1.handleError);
    };
    CubiclesService.prototype.create = function (newCubicle) {
        return this.http.post(this.url, newCubicle)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return CubiclesService_1.handleError(err); });
    };
    CubiclesService.prototype.createFile = function (newCubicles) {
        return this.http.post(this.url, newCubicles)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return CubiclesService_1.handleError(err); });
    };
    CubiclesService.prototype.update = function (id, cubicleModel) {
        return this.http.put(this.url + "/" + id, cubicleModel).toPromise();
    };
    CubiclesService.prototype.remove = function (id) {
        console.log(id);
        return this.http.delete(this.url + "/" + id).toPromise();
    };
    return CubiclesService;
}());
CubiclesService = CubiclesService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CubiclesService);

var CubiclesService_1, _a;
//# sourceMappingURL=cubicles.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/departments/departments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepartmentsService = DepartmentsService_1 = (function () {
    function DepartmentsService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/api/departments";
    }
    DepartmentsService.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DepartmentsService.prototype.getAll = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(DepartmentsService_1.handleError);
    };
    DepartmentsService.prototype.getById = function (_id) {
        return this.http.get(this.url + "/" + _id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(DepartmentsService_1.handleError);
    };
    DepartmentsService.prototype.create = function (newDepartment) {
        return this.http.post(this.url, newDepartment)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return DepartmentsService_1.handleError(err); });
    };
    DepartmentsService.prototype.createFile = function (newDepartments) {
        return this.http.post(this.url, newDepartments)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return DepartmentsService_1.handleError(err); });
    };
    DepartmentsService.prototype.update = function (id, departmentModel) {
        return this.http.put(this.url + "/" + id, departmentModel).toPromise();
    };
    DepartmentsService.prototype.remove = function (id) {
        console.log(id);
        return this.http.delete(this.url + "/" + id).toPromise();
    };
    return DepartmentsService;
}());
DepartmentsService = DepartmentsService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DepartmentsService);

var DepartmentsService_1, _a;
//# sourceMappingURL=departments.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/reports/reports.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportsService = ReportsService_1 = (function () {
    function ReportsService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/api/reports";
    }
    ReportsService.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ReportsService.prototype.getByDivision = function (startDate, endDate) {
        return this.http.get(this.url + "Division", {
            params: {
                start: startDate,
                end: endDate
            },
        })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ReportsService_1.handleError);
    };
    ReportsService.prototype.getByCareer = function (startDate, endDate) {
        return this.http.get(this.url + "Career", {
            params: {
                start: startDate,
                end: endDate
            },
        })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ReportsService_1.handleError);
    };
    ReportsService.prototype.getByCubicle = function (startDate, endDate) {
        return this.http.get(this.url + "Cubicle", {
            params: {
                start: startDate,
                end: endDate
            },
        })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ReportsService_1.handleError);
    };
    ReportsService.prototype.getByDay = function (startDate, endDate) {
        return this.http.get(this.url + "Day", {
            params: {
                start: startDate,
                end: endDate
            },
        })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ReportsService_1.handleError);
    };
    return ReportsService;
}());
ReportsService = ReportsService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReportsService);

var ReportsService_1, _a;
//# sourceMappingURL=reports.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/reservations/reservations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReservationsService = ReservationsService_1 = (function () {
    function ReservationsService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/api/reservations";
    }
    ReservationsService.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ReservationsService.prototype.getAll = function () {
        return this.http.get("" + this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ReservationsService_1.handleError);
    };
    ReservationsService.prototype.getById = function (_id) {
        return this.http.get(this.url + "/" + _id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ReservationsService_1.handleError);
    };
    ReservationsService.prototype.getByCubicle = function (cubicle) {
        return this.http.get(this.url + "/cubicle/" + cubicle)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ReservationsService_1.handleError);
    };
    ReservationsService.prototype.create = function (newReservation) {
        return this.http.post(this.url, newReservation)
            .map(function (response) { return response.json(); })
            .catch(function (err) { return ReservationsService_1.handleError(err); });
    };
    ReservationsService.prototype.update = function (id, reservationModel) {
        return this.http.put(this.url + "/" + id, reservationModel)
            .map(function (response) { return response.json(); })
            .catch(function (err) { return ReservationsService_1.handleError(err); });
    };
    ReservationsService.prototype.remove = function (id) {
        console.log(id);
        return this.http.delete(this.url + "/" + id).toPromise();
    };
    return ReservationsService;
}());
ReservationsService = ReservationsService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReservationsService);

var ReservationsService_1, _a;
//# sourceMappingURL=reservations.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsService = (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.loadSchoolSettings = function () {
        var url;
        url = 'assets/resources/settings/school.division.json';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SettingsService);

var _a;
//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import 'rxjs/Rx';
var UsersService = UsersService_1 = (function () {
    function UsersService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl + "/api/users";
    }
    UsersService.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UsersService.prototype.getAll = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(UsersService_1.handleError);
    };
    UsersService.prototype.getRecent = function () {
        return this.http.get(this.url + "/recent")
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(UsersService_1.handleError);
    };
    UsersService.prototype.getById = function (_id) {
        return this.http.get(this.url + "/" + _id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(UsersService_1.handleError);
    };
    UsersService.prototype.getByRegistrationNumber = function (registrationNumber) {
        return this.http.get(this.url + "/registrationNumber/" + registrationNumber)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(UsersService_1.handleError);
    };
    UsersService.prototype.create = function (newUser) {
        return this.http.post(this.url, newUser)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return UsersService_1.handleError(err); });
    };
    UsersService.prototype.createFile = function (newUsers) {
        return this.http.post(this.url, newUsers)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return UsersService_1.handleError(err); });
    };
    UsersService.prototype.update = function (id, userModel) {
        return this.http.put(this.url + "/" + id, userModel).toPromise();
    };
    UsersService.prototype.remove = function (id) {
        console.log(id);
        return this.http.delete(this.url + "/" + id).toPromise();
    };
    return UsersService;
}());
UsersService = UsersService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UsersService);

var UsersService_1, _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/usersQuantity/users.quantity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersQuantityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersQuantityService = (function () {
    function UsersQuantityService() {
        this.usersCounter = 0;
        this.count = 0;
    }
    UsersQuantityService.prototype.setDepartmentQuantity = function (departmentQuantity) {
        this.departmentQuantity = departmentQuantity;
    };
    UsersQuantityService.prototype.getDepartmentQuantity = function () {
        return this.departmentQuantity;
    };
    UsersQuantityService.prototype.setDivisionSelected = function (divisionSelected) {
        this.divisionSelected = divisionSelected;
    };
    UsersQuantityService.prototype.getDivisionSelected = function () {
        return this.divisionSelected;
    };
    UsersQuantityService.prototype.setDepartmentSelected = function (departmentSelected) {
        this.departmentSelected = departmentSelected;
    };
    UsersQuantityService.prototype.getDepartmentSelected = function () {
        return this.departmentSelected;
    };
    UsersQuantityService.prototype.increment = function () {
        return this.count += 1;
    };
    UsersQuantityService.prototype.decrement = function () {
        return this.count -= 1;
    };
    UsersQuantityService.prototype.setUsersCounter = function (usersCounter) {
        this.usersCounter = usersCounter;
    };
    UsersQuantityService.prototype.getUsersCounter = function () {
        return this.usersCounter;
    };
    UsersQuantityService.prototype.setCareer = function (career) {
        this.userCareer = career;
    };
    UsersQuantityService.prototype.getCareer = function () {
        return this.userCareer;
    };
    return UsersQuantityService;
}());
UsersQuantityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UsersQuantityService);

//# sourceMappingURL=users.quantity.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8482'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map