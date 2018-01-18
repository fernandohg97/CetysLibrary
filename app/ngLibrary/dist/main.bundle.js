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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
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
    core_1.Component({
        selector: 'app-admin-careers-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.css")],
        providers: [settings_service_1.SettingsService, careers_service_1.CareersService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof careers_service_1.CareersService !== "undefined" && careers_service_1.CareersService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _d || Object])
], AdminCareersUpdateComponent);
exports.AdminCareersUpdateComponent = AdminCareersUpdateComponent;
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

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createCareer()\">Nueva carrera</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese la clave o nombre de la carrera\" [(ngModel)]=\"searchCareerName\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Clave</th>\n          <th>Nombre</th>\n          <th>Division</th>\n          <th>Activo</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let career of careers | paginate: { itemsPerPage: 50, currentPage: page } | searchCareer: searchCareerName\" data-closable>\n          <td>{{career.careerCode}}</td>\n          <td>{{career.careerName}}</td>\n          <td>{{career.division}}</td>\n          <td *ngIf=\"career.active; else elseBlock\">Si</td>\n          <ng-template #elseBlock>No</ng-template>\n          <td class=\"text-center\"><a routerLink=\"/admin-site/careers/{{career._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(career._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n<!-- Create Form -->\n<form *ngIf=\"called\" #careerForm=\"ngForm\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nueva carrera</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"careerName\" placeholder=\"Ingrese el nombre de la carrera\" [(ngModel)]=\"newCareer.careerName\" required>\n            <p *ngIf=\"anyErrors?.errors?.careerName\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.careerName.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Clave\n            <input type=\"text\" name=\"shortName\" placeholder=\"Ingrese la clave de la carrera\" [(ngModel)]=\"newCareer.careerCode\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.careerCode\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.careerCode.message}}</p>\n              <p *ngIf=\"anyErrors?.existCareer && !anyErrors?.existCareers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existCareer}}</p>\n            </div>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Division\n            <input type=\"text\" name=\"division\" placeholder=\"Ingrese la division de la carrera\" [(ngModel)]=\"newCareer.division\" required>\n            <p *ngIf=\"anyErrors?.errors?.division\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.division.message}}</p>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Area\n            <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"areaSelected\" (ngModelChange)=\"areaChange($event)\" required>\n              <!-- <option [value]=\"''\"></option> -->\n              <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n            </select>\n            <p *ngIf=\"anyErrors?.errors?.area\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.area.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label for=\"exampleFileUpload\" class=\"button\">Adjuntar archivo</label>\n          <input #inputFile type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" name=\"fileUpload\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existCareers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existCareers}}</p>\n\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remover archivo</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-careers/admin-careers.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var career_model_1 = __webpack_require__("../../../../../src/app/models/career.model.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var AdminCareersComponent = (function () {
    function AdminCareersComponent(settingsService, careersService, router) {
        this.settingsService = settingsService;
        this.careersService = careersService;
        this.router = router;
        this.newCareer = new career_model_1.CareerModel();
        this.page = 1;
        this.called = false;
    }
    AdminCareersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.loadSchoolSettings().subscribe(function (res) {
            res.splice(res.length - 1, 1);
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
    core_1.ViewChild('inputFile'),
    __metadata("design:type", Object)
], AdminCareersComponent.prototype, "myInputVariable", void 0);
AdminCareersComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-careers',
        template: __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _a || Object, typeof (_b = typeof careers_service_1.CareersService !== "undefined" && careers_service_1.CareersService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], AdminCareersComponent);
exports.AdminCareersComponent = AdminCareersComponent;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
    core_1.Component({
        selector: 'app-admin-cubicles-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.css")],
        providers: [cubicles_service_1.CubiclesService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cubicles_service_1.CubiclesService !== "undefined" && cubicles_service_1.CubiclesService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], AdminCubiclesUpdateComponent);
exports.AdminCubiclesUpdateComponent = AdminCubiclesUpdateComponent;
var _a, _b, _c;
//# sourceMappingURL=admin-cubicles-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.file-btn {\n  margin-top: 30px;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createCubicle()\">Nuevo cubiculo</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese el numero de cubiculo\" [(ngModel)]=\"searchCubicle\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Cubiculo</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let cubicle of cubicles | searchCubicle: searchCubicle\" data-closable>\n          <td>{{cubicle.cubicleNumber}}</td>\n          <td><a routerLink=\"/admin-site/cubicles/{{cubicle._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(cubicle._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n<form *ngIf=\"called\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nuevo cubiculo</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Numero\n            <input type=\"number\" name=\"cubicleNumber\" placeholder=\"Ingrese el numero del cubiculo\" [(ngModel)]=\"newCubicle.cubicleNumber\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.cubicleNumber\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.cubicleNumber.message}}</p>\n              <p *ngIf=\"anyErrors?.existCubicle && !anyErrors?.existCubicles\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existCubicle}}</p>\n            </div>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label for=\"exampleFileUpload\" class=\"button\">Adjuntar archivo</label>\n          <input #inputFile type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existCubicles\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existCubicles}}</p>\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remover archivo</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var cubicle_model_1 = __webpack_require__("../../../../../src/app/models/cubicle.model.ts");
var AdminCubiclesComponent = (function () {
    function AdminCubiclesComponent(cubiclesService, router, route) {
        this.cubiclesService = cubiclesService;
        this.router = router;
        this.route = route;
        this.newCubicle = new cubicle_model_1.CubicleModel();
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
    core_1.ViewChild('inputFile'),
    __metadata("design:type", Object)
], AdminCubiclesComponent.prototype, "myInputVariable", void 0);
AdminCubiclesComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-cubicles',
        template: __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cubicles_service_1.CubiclesService !== "undefined" && cubicles_service_1.CubiclesService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], AdminCubiclesComponent);
exports.AdminCubiclesComponent = AdminCubiclesComponent;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var departments_service_1 = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
    core_1.Component({
        selector: 'app-admin-departments-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof departments_service_1.DepartmentsService !== "undefined" && departments_service_1.DepartmentsService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], AdminDepartmentsUpdateComponent);
exports.AdminDepartmentsUpdateComponent = AdminDepartmentsUpdateComponent;
var _a, _b, _c;
//# sourceMappingURL=admin-departments-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createDepartment()\">Nuevo departmento</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese el numero o nombre del departamento\" [(ngModel)]=\"searchDepartment\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Numero</th>\n          <th>Departamento</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let department of departments | paginate: { itemsPerPage: 50, currentPage: page } | searchDepartment: searchDepartment\" data-closable>\n          <td>{{department.departmentCode}}</td>\n          <td>{{department.departmentName}}</td>\n          <td><a routerLink=\"/admin-site/departments/{{department._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(department._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n<form *ngIf=\"called\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nuevo departamento</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Numero\n            <input type=\"number\" name=\"departmentNumber\" placeholder=\"Ingrese numero del departamento\" [(ngModel)]=\"newDepartment.departmentCode\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.departmentCode\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departmentCode.message}}</p>\n              <p *ngIf=\"anyErrors?.existDepartment && !anyErrors?.existDepartments\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existDepartment}}</p>\n            </div>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"departmentName\" placeholder=\"Ingrese nombre del departamento\" [(ngModel)]=\"newDepartment.departmentName\" required>\n            <p *ngIf=\"anyErrors?.errors?.departmentName\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departmentName.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label for=\"exampleFileUpload\" class=\"button\">Adjuntar archivo</label>\n          <input type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span #inputFile class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existDepartments\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existDepartments}}</p>\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remover archivo</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-departments/admin-departments.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var departments_service_1 = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var department_model_1 = __webpack_require__("../../../../../src/app/models/department.model.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AdminDepartmentsComponent = (function () {
    function AdminDepartmentsComponent(departmentsService, router) {
        this.departmentsService = departmentsService;
        this.router = router;
        this.newDepartment = new department_model_1.DepartmentModel();
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
    core_1.ViewChild('inputFile'),
    __metadata("design:type", Object)
], AdminDepartmentsComponent.prototype, "myInputVariable", void 0);
AdminDepartmentsComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-departments',
        template: __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof departments_service_1.DepartmentsService !== "undefined" && departments_service_1.DepartmentsService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AdminDepartmentsComponent);
exports.AdminDepartmentsComponent = AdminDepartmentsComponent;
var _a, _b;
//# sourceMappingURL=admin-departments.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees-update/admin-employees-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees-update/admin-employees-update.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"grid-container content\">\n    <a class=\"button\" routerLink=\"/admin-site/employees\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Modificar empleado</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Numero\n            <input type=\"number\" name=\"employeeNumber\" placeholder=\"Ingrese numero del empleado\" [ngModel]=\"currentEmployee?.employeeNumber\" (ngModelChange)=\"currentEmployee.employeeNumber = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"departmentName\" placeholder=\"Ingrese nombre del empleado\" [ngModel]=\"currentEmployee?.name\" (ngModelChange)=\"currentEmployee.name = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Departamento\n            <input type=\"number\" name=\"departmentNumber\" placeholder=\"Ingrese numero de departamento del empleado\" [ngModel]=\"currentEmployee?.department\" (ngModelChange)=\"currentEmployee.department = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <fieldset class=\"large-6 cell\">\n          <legend>Activo</legend>\n          <input type=\"radio\" name=\"active\" value=\"true\" (change)=\"isActiveEmployee($event)\" id=isActive required><label for=\"isActive\">SI</label>\n          <input type=\"radio\" name=\"active\" value=\"false\" (change)=\"isNotActiveEmployee($event)\" id=\"isNotActive\"><label for=\"isNotActive\">NO</label>\n        </fieldset>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"update()\">Actualizar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees-update/admin-employees-update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var employees_service_1 = __webpack_require__("../../../../../src/app/services/employees/employees.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AdminEmployeesUpdateComponent = (function () {
    function AdminEmployeesUpdateComponent(employeesService, router, route) {
        this.employeesService = employeesService;
        this.router = router;
        this.route = route;
    }
    AdminEmployeesUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var employeeId = params['id']; //
            console.log("Id del departamento: " + employeeId);
            if (employeeId) {
                _this.employeesService.getById(employeeId).then(function (employee) {
                    console.log(employee);
                    _this.currentEmployee = employee;
                });
            }
        });
    };
    AdminEmployeesUpdateComponent.prototype.isActiveCareer = function (event) {
        console.log(event.target.value);
        this.currentEmployee.active = event.target.value;
    };
    AdminEmployeesUpdateComponent.prototype.isNotActiveCareer = function (event) {
        console.log(event.target.value);
        this.currentEmployee.active = event.target.value;
    };
    AdminEmployeesUpdateComponent.prototype.update = function () {
        var _this = this;
        this.employeesService.update(this.currentEmployee._id, this.currentEmployee).then(function (response) {
            console.log(response);
            if (response.status == 200 || response.status == 204) {
                _this.router.navigateByUrl('/admin-site');
            }
        }).catch(function (err) { return console.log("Error " + err); });
    };
    return AdminEmployeesUpdateComponent;
}());
AdminEmployeesUpdateComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-employees-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees-update/admin-employees-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees-update/admin-employees-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof employees_service_1.EmployeesService !== "undefined" && employees_service_1.EmployeesService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], AdminEmployeesUpdateComponent);
exports.AdminEmployeesUpdateComponent = AdminEmployeesUpdateComponent;
var _a, _b, _c;
//# sourceMappingURL=admin-employees-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createEmployee()\">Nuevo empleado</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese el numero del empleado\" [(ngModel)]=\"searchEmployeeNumber\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Numero</th>\n          <th>Nombre</th>\n          <th>Departamento</th>\n          <th>Activo</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n          </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let employee of employees | paginate: { itemsPerPage: 50, currentPage: page } | searchEmployee: searchEmployeeNumber\" data-closable>\n          <td>{{employee.employeeNumber}}</td>\n          <td>{{employee.name}}</td>\n          <td>{{employee.department}}</td>\n          <td *ngIf=\"employee.active; else elseBlock\">Si</td>\n          <ng-template #elseBlock>No</ng-template>\n          <td><a routerLink=\"/admin-site/employees/{{employee._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(employee._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n<form *ngIf=\"called\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nuevo empleado</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Numero\n            <input type=\"number\" name=\"employeeNumber\" placeholder=\"Ingrese numero del empleado\" [(ngModel)]=\"newEmployee.employeeNumber\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.employeeNumber\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.employeeNumber.message}}</p>\n              <p *ngIf=\"anyErrors?.existEmployee && !anyErrors?.existEmployees\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existEmployee}}</p>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"employeeName\" placeholder=\"Ingrese nombre del empleado\" [(ngModel)]=\"newEmployee.name\" required>\n            <p *ngIf=\"anyErrors?.errors?.name\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.name.message}}</p>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Departamento\n            <input type=\"number\" name=\"departmentNumber\" placeholder=\"Ingrese numero del departamento\" [(ngModel)]=\"newEmployee.department\" required>\n            <p *ngIf=\"anyErrors?.errors?.department\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.department.message}}</p>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label for=\"exampleFileUpload\" class=\"button\">Adjuntar archivo</label>\n          <input #inputFile type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existEmployees\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existEmployees}}</p>\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remover archivo</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-employees/admin-employees.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var employees_service_1 = __webpack_require__("../../../../../src/app/services/employees/employees.service.ts");
var employee_model_1 = __webpack_require__("../../../../../src/app/models/employee.model.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AdminEmployeesComponent = (function () {
    function AdminEmployeesComponent(employeesService, router) {
        this.employeesService = employeesService;
        this.router = router;
        this.newEmployee = new employee_model_1.EmployeeModel();
        this.page = 1;
        this.called = false;
    }
    AdminEmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeesService.getAll().then(function (data) {
            _this.employees = data;
        });
    };
    AdminEmployeesComponent.prototype.createEmployee = function () {
        this.called = true;
    };
    AdminEmployeesComponent.prototype.removeFile = function () {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        console.log(this.myInputVariable.nativeElement.files);
        this.nameFile = '';
        this.textFile = undefined;
    };
    AdminEmployeesComponent.prototype.fileChange = function (event) {
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
    AdminEmployeesComponent.prototype.save = function () {
        var _this = this;
        if (this.textFile) {
            console.log(this.textFile);
            var jsonFiles = JSON.parse(this.textFile);
            this.employeesService.createFile(jsonFiles)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) {
                _this.anyErrors = JSON.parse(err._body);
            }));
        }
        else {
            this.employeesService.create(this.newEmployee)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) {
                _this.anyErrors = JSON.parse(err._body);
                console.log(err);
            }));
        }
    };
    AdminEmployeesComponent.prototype.delete = function (id) {
        this.employeesService.remove(id).then(function (response) {
            console.log(response);
        }).catch(function (err) { return console.log("Hubo un error " + err); });
    };
    return AdminEmployeesComponent;
}());
__decorate([
    core_1.ViewChild('inputFile'),
    __metadata("design:type", Object)
], AdminEmployeesComponent.prototype, "myInputVariable", void 0);
AdminEmployeesComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-employees',
        template: __webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof employees_service_1.EmployeesService !== "undefined" && employees_service_1.EmployeesService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AdminEmployeesComponent);
exports.AdminEmployeesComponent = AdminEmployeesComponent;
var _a, _b;
//# sourceMappingURL=admin-employees.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-external-user/admin-external-user-update/admin-external-user-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-external-user/admin-external-user-update/admin-external-user-update.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"grid-container content\">\n    <a class=\"button\" routerLink=\"/admin-site/externals\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Modificar usuario</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Codigo\n            <input type=\"text\" name=\"externalUserCode\" placeholder=\"Ingrese numero del usuario\" [ngModel]=\"currentUser?.userCode\" (ngModelChange)=\"currentUser.userCode = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"name\" placeholder=\"Ingrese nombre del usuario\" [ngModel]=\"currentUser?.name\" (ngModelChange)=\"currentUser.name = $event\">\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Descripcion\n            <textarea name=\"description\" placeholder=\"Ingrese alguna descripcion del usuario\" [ngModel]=\"currentUser?.description\" (ngModelChange)=\"currentUser.description = $event\"></textarea>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"update()\">Actualizar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-external-user/admin-external-user-update/admin-external-user-update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var external_user_service_1 = __webpack_require__("../../../../../src/app/services/externalUser/external-user.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var AdminExternalUserUpdateComponent = (function () {
    function AdminExternalUserUpdateComponent(router, route, externalUserService) {
        this.router = router;
        this.route = route;
        this.externalUserService = externalUserService;
    }
    AdminExternalUserUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var externalUserId = params['id']; //
            console.log("Id del departamento: " + externalUserId);
            if (externalUserId) {
                _this.externalUserService.getById(externalUserId).then(function (user) {
                    console.log(user);
                    _this.currentUser = user;
                });
            }
        });
    };
    AdminExternalUserUpdateComponent.prototype.update = function () {
        var _this = this;
        this.externalUserService.update(this.currentUser._id, this.currentUser).then(function (response) {
            console.log(response);
            if (response.status == 200 || response.status == 204) {
                _this.router.navigateByUrl('/admin-site');
            }
        }).catch(function (err) { return console.log("Error " + err); });
    };
    return AdminExternalUserUpdateComponent;
}());
AdminExternalUserUpdateComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-external-user-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-external-user/admin-external-user-update/admin-external-user-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-external-user/admin-external-user-update/admin-external-user-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof external_user_service_1.ExternalUserService !== "undefined" && external_user_service_1.ExternalUserService) === "function" && _c || Object])
], AdminExternalUserUpdateComponent);
exports.AdminExternalUserUpdateComponent = AdminExternalUserUpdateComponent;
var _a, _b, _c;
//# sourceMappingURL=admin-external-user-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-external-user/admin-external-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-external-user/admin-external-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createExternalUser()\">Nuevo usuario</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese el codigo del usuario\" [(ngModel)]=\"searchUserCode\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Codigo</th>\n          <th>Nombre</th>\n          <th>Descripcion</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users | paginate: { itemsPerPage: 50, currentPage: page } | searchExternalUser: searchUserCode\" data-closable>\n          <td>{{user.userCode}}</td>\n          <td>{{user.name}}</td>\n          <td>{{user.description}}</td>\n          <td><a routerLink=\"/admin-site/externals/{{user._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(user._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n\n<form *ngIf=\"called\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nuevo usuario</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Codigo\n            <input type=\"text\" name=\"externalUserCode\" placeholder=\"Ingrese codigo del usuario\" [(ngModel)]=\"newExternalUser.userCode\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.userCode\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.userCode.message}}</p>\n              <p *ngIf=\"anyErrors?.existExternalUser && !anyErrors?.existExternalUsers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existExternalUser}}</p>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"externalUserName\" placeholder=\"Ingrese nombre del usuario\" [(ngModel)]=\"newExternalUser.name\" required>\n            <p *ngIf=\"anyErrors?.errors?.name\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.name.message}}</p>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Descripcion\n            <textarea name=\"description\" placeholder=\"Ingrese alguna descripcion del usuario\" [(ngModel)]=\"newExternalUser.description\"></textarea>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label for=\"exampleFileUpload\" class=\"button\">Adjuntar archivo</label>\n          <input #inputFile type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existExternalUsers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existExternalUsers}}</p>\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remover archivo</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-external-user/admin-external-user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var external_user_service_1 = __webpack_require__("../../../../../src/app/services/externalUser/external-user.service.ts");
var externalUser_model_1 = __webpack_require__("../../../../../src/app/models/externalUser.model.ts");
var AdminExternalUserComponent = (function () {
    function AdminExternalUserComponent(externalUserService, router) {
        this.externalUserService = externalUserService;
        this.router = router;
        this.newExternalUser = new externalUser_model_1.ExternalUserModel();
        this.page = 1;
        this.called = false;
    }
    AdminExternalUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.externalUserService.getAll().then(function (data) {
            _this.users = data;
        });
    };
    AdminExternalUserComponent.prototype.createExternalUser = function () {
        this.called = true;
    };
    AdminExternalUserComponent.prototype.removeFile = function () {
        console.log(this.myInputVariable.nativeElement.files);
        this.myInputVariable.nativeElement.value = "";
        console.log(this.myInputVariable.nativeElement.files);
        this.nameFile = '';
        this.textFile = undefined;
    };
    AdminExternalUserComponent.prototype.fileChange = function (event) {
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
    AdminExternalUserComponent.prototype.save = function () {
        var _this = this;
        if (this.textFile) {
            console.log(this.textFile);
            var jsonFiles = JSON.parse(this.textFile);
            this.externalUserService.createFile(jsonFiles)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) {
                _this.anyErrors = JSON.parse(err._body);
            }));
        }
        else {
            this.externalUserService.create(this.newExternalUser)
                .subscribe((function (response) {
                console.log(response);
                _this.router.navigateByUrl('/admin-site');
            }), (function (err) {
                _this.anyErrors = JSON.parse(err._body);
                console.log(err);
            }));
        }
    };
    AdminExternalUserComponent.prototype.delete = function (id) {
        this.externalUserService.remove(id).then(function (response) {
            console.log(response);
        }).catch(function (err) { return console.log("Hubo un error " + err); });
    };
    return AdminExternalUserComponent;
}());
__decorate([
    core_1.ViewChild('inputFile'),
    __metadata("design:type", Object)
], AdminExternalUserComponent.prototype, "myInputVariable", void 0);
AdminExternalUserComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-external-user',
        template: __webpack_require__("../../../../../src/app/admin/admin-external-user/admin-external-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-external-user/admin-external-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof external_user_service_1.ExternalUserService !== "undefined" && external_user_service_1.ExternalUserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AdminExternalUserComponent);
exports.AdminExternalUserComponent = AdminExternalUserComponent;
var _a, _b;
//# sourceMappingURL=admin-external-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-home/admin-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.title {\n  z-index: 100;\n}\nh3 {\n  display: block;\n  z-index: 10;\n  color: rgba(180, 180, 180, 0.81);\n}*/\n.blocks {\n  text-align: center;\n  margin-top: 50px;\n}\n.blocks div {\n  margin-bottom: 50px;\n}\n.blocks a:hover {\n  background-color: rgba(75, 75, 75, 0.69);\n}\nhr {\n  border-width: 2px;\n}\n.admin-home {\n  margin-top: 20px;\n}\n.admin-home h2, .admin-home h4 {\n  display: inline;\n}\nh2 {\n  padding-right: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-home/admin-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container admin-home\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <h2 class=\"admin-title\">Administrador</h2><h4>Bienvenido</h4>\n      <hr>\n    </div>\n  </div>\n\n  <div class=\"grid-x grid-margin-x small-up-1 medium-up-2 large-up-2 blocks\">\n    <a routerLink=\"users\" class=\"cell callout button\">\n      <h6 class=\"font-bold\">Estudiantes</h6>\n      <span>{{totalUsers}} Elementos</span>\n    </a>\n    <a routerLink=\"cubicles\" class=\"cell callout button\">\n      <h6 class=\"font-bold\">Cubiculos</h6>\n      <span>{{totalCubicles}} Elementos</span>\n    </a>\n    <a routerLink=\"departments\" class=\"cell callout button\">\n      <h6 class=\"font-bold\">Departamentos</h6>\n      <span>{{totalDepartments}} Elementos</span>\n    </a>\n    <a routerLink=\"careers\" class=\"cell callout button\">\n      <h6 class=\"font-bold\">Carreras</h6>\n      <span>{{totalCareers}} Elementos</span>\n    </a>\n    <a routerLink=\"employees\" class=\"cell callout button\">\n      <h6 class=\"font-bold\">Empleados</h6>\n      <span>{{totalEmployees}} Elementos</span>\n    </a>\n    <a routerLink=\"externals\" class=\"cell callout button\">\n      <h6 class=\"font-bold\">Externos</h6>\n      <span>{{totalExternals}} Elementos</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-home/admin-home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var users_service_1 = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var departments_service_1 = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var employees_service_1 = __webpack_require__("../../../../../src/app/services/employees/employees.service.ts");
var external_user_service_1 = __webpack_require__("../../../../../src/app/services/externalUser/external-user.service.ts");
var AdminHomeComponent = (function () {
    function AdminHomeComponent(usersService, cubiclesService, careersService, departmentsService, employeesService, externalUserService) {
        this.usersService = usersService;
        this.cubiclesService = cubiclesService;
        this.careersService = careersService;
        this.departmentsService = departmentsService;
        this.employeesService = employeesService;
        this.externalUserService = externalUserService;
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getAll().then(function (data) {
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
        this.employeesService.getAll().then(function (data) {
            _this.totalEmployees = data.length;
        });
        this.externalUserService.getAll().then(function (data) {
            _this.totalExternals = data.length;
        });
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-home',
        template: __webpack_require__("../../../../../src/app/admin/admin-home/admin-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-home/admin-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" && _a || Object, typeof (_b = typeof cubicles_service_1.CubiclesService !== "undefined" && cubicles_service_1.CubiclesService) === "function" && _b || Object, typeof (_c = typeof careers_service_1.CareersService !== "undefined" && careers_service_1.CareersService) === "function" && _c || Object, typeof (_d = typeof departments_service_1.DepartmentsService !== "undefined" && departments_service_1.DepartmentsService) === "function" && _d || Object, typeof (_e = typeof employees_service_1.EmployeesService !== "undefined" && employees_service_1.EmployeesService) === "function" && _e || Object, typeof (_f = typeof external_user_service_1.ExternalUserService !== "undefined" && external_user_service_1.ExternalUserService) === "function" && _f || Object])
], AdminHomeComponent);
exports.AdminHomeComponent = AdminHomeComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=admin-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-reports/admin-reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reports-content {\n  margin-top: 40px;\n}\n/*.total-msg {\n  padding: 30px;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-reports/admin-reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container reports-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <h2 class=\"text-center\">Reporte estadistico</h2>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-6 cell\">\n        <label>Fecha Inicio\n          <input type=\"date\" name=\"startDate\" [(ngModel)]=\"startDate\" placeholder=\"Fecha\" required>\n        </label>\n    </div>\n    <div class=\"small-6 cell\">\n      <label>Fecha Fin\n        <input type=\"date\" name=\"endDate\" [(ngModel)]=\"endDate\" placeholder=\"Fecha\" required>\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-6 cell\">\n      <button type=\"button\" class=\"button\" name=\"button\" (click)=\"searchReports()\">Buscar</button>\n    </div>\n    <div class=\"small-6 cell text-right\">\n      <h6><u><strong>Total de reservaciones: {{totalReservations}}</strong></u></h6>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingresos por cubiculo</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Cubiculo</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsCubicle\">\n          <td>{{report._id}}</td>\n          <td>{{report.ingresos}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div style=\"display: block; margin: 0 auto;\">\n      <canvas  width=\"300\" height=\"300\" *ngIf=\"pieChartLabelsCubicles && pieChartDataCubicles\" baseChart\n              [data]=\"pieChartDataCubicles\"\n              [labels]=\"pieChartLabelsCubicles\"\n              [chartType]=\"pieChartType\">\n      </canvas>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingresos por division</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Division</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsDivision\">\n          <td>{{report._id}}</td>\n          <td>{{report.ingresos}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div style=\"display: block; margin: 0 auto;\">\n      <canvas width=\"300\" height=\"300\" *ngIf=\"pieChartLabelsDivision && pieChartDataDivision\" baseChart\n              [data]=\"pieChartDataDivision\"\n              [labels]=\"pieChartLabelsDivision\"\n              [chartType]=\"pieChartType\">\n      </canvas>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingresos por carrera</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Carrera</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsCareer\">\n          <td>{{report._id}}</td>\n          <td>{{report.ingresos}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div style=\"display: block; margin: 0 auto;\">\n      <canvas width=\"300\" height=\"300\" *ngIf=\"pieChartLabelsCareers && pieChartDataCareers\" baseChart\n              [data]=\"pieChartDataCareers\"\n              [labels]=\"pieChartLabelsCareers\"\n              [chartType]=\"pieChartType\">\n      </canvas>\n    </div>\n  </div>\n  <!-- <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingresos por departmento</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Departamento</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let department of allDepartments\">\n          <td>{{department.departmentName}}</td>\n          <td>s</td>\n        </tr>\n      </tbody>\n    </table>\n  </div> -->\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"category-title cell\">\n      <h4>Ingreso total por dia</h4>\n    </div>\n    <table>\n      <thead>\n        <tr>\n          <th>Fecha</th>\n          <th>Cantidad de ingresos</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsDay\">\n          <td>{{report._id | date: 'shortDate'}}</td>\n          <td>{{report.ingresos}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div style=\"display: block; margin: 0 auto; padding: 20px;\">\n    <canvas *ngIf=\"pieChartLabelsDays && pieChartDataDays\" baseChart\n            [data]=\"pieChartDataDays\"\n            [labels]=\"pieChartLabelsDays\"\n            [chartType]=\"pieChartType\">\n    </canvas>\n  </div>\n  <!-- <div class=\"grid-x grid-padding-x total-msg\">\n\n  </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-reports/admin-reports.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var reports_service_1 = __webpack_require__("../../../../../src/app/services/reports/reports.service.ts");
var chart_js_1 = __webpack_require__("../../../../chart.js/src/chart.js");
var reservations_service_1 = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
var AdminReportsComponent = (function () {
    function AdminReportsComponent(reportsService, reservationsService) {
        this.reportsService = reportsService;
        this.reservationsService = reservationsService;
        this.totalReservations = 0;
        this.currentDate = new Date();
        this.pieChartType = 'pie';
    }
    AdminReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reservationsService.getCount().then(function (data) {
            _this.totalReservations = parseInt(JSON.parse(JSON.stringify(data))._body);
        });
        var day = this.currentDate.getDate().toString();
        var month = this.currentDate.getMonth() + 1;
        var year = this.currentDate.getFullYear();
        var month2 = this.currentDate.getMonth() + 2;
        if (parseInt(day) >= 1 && parseInt(day) <= 9) {
            day = '0' + day;
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
    };
    AdminReportsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            this.reportsService.getByDivision(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.reportsDivision = data;
                    _this.pieChartLabelsDivision = [];
                    _this.pieChartDataDivision = [];
                    _this.insertChartItems(_this.reportsDivision, _this.pieChartLabelsDivision, _this.pieChartDataDivision);
                    _this.countLabelsDivision = _this.pieChartDataDivision.length;
                    console.log(_this.pieChartLabelsDivision);
                    // this.sumReservations(this.reportsDivision)
                }
            });
            this.reportsService.getByCubicle(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.reportsCubicle = data;
                    _this.pieChartDataCubicles = [];
                    _this.pieChartLabelsCubicles = [];
                    data.forEach(function (element) {
                        _this.pieChartLabelsCubicles.push("Cubiculo " + element._id.toString());
                        _this.pieChartDataCubicles.push(element.ingresos);
                    });
                    _this.countLabelsCubicles = _this.pieChartDataCubicles.length;
                    // this.sumReservations(this.reportsCubicle)
                }
            });
            this.reportsService.getByCareer(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.reportsCareer = data;
                    _this.pieChartLabelsCareers = [];
                    _this.pieChartDataCareers = [];
                    _this.insertChartItems(_this.reportsCareer, _this.pieChartLabelsCareers, _this.pieChartDataCareers);
                    _this.countLabelsCareers = _this.pieChartDataCareers.length;
                    // this.sumReservations(this.reportsCareer)
                }
            });
            this.reportsService.getByDay(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.reportsDay = data;
                    _this.pieChartLabelsDays = [];
                    _this.pieChartDataDays = [];
                    data.forEach(function (element) {
                        var shortDate = element._id.split('T');
                        _this.pieChartLabelsDays.push(shortDate[0]);
                        _this.pieChartDataDays.push(element.ingresos);
                    });
                    _this.countLabelsDays = _this.pieChartDataDays.length;
                    // this.sumReservations(this.reportsDay)
                }
            });
        }
    };
    AdminReportsComponent.prototype.insertChartItems = function (object, labels, data) {
        object.forEach(function (element) {
            labels.push(element._id);
            data.push(element.ingresos);
        });
    };
    // sumReservations(reservations) {
    //   reservations.forEach(element => {
    //       this.totalReservations += element.ingresos
    //   });
    // }
    AdminReportsComponent.prototype.searchReports = function () {
        var _this = this;
        var labelsDaysClone = this.pieChartLabelsDays;
        var dataDaysClone = this.pieChartDataDays;
        var itemsDays = [];
        var labelsCareersClone = this.pieChartLabelsCareers;
        var dataCareersClone = this.pieChartDataCareers;
        var itemsCareers = [];
        var labelsCubiclesClone = this.pieChartLabelsCubicles;
        var dataCubiclesClone = this.pieChartDataCubicles;
        var itemsCubicles = [];
        var labelsDivisionClone = this.pieChartLabelsDivision;
        var dataDivisionClone = this.pieChartDataDivision;
        var itemsDivision = [];
        if (this.startDate && this.endDate) {
            this.reportsService.getByDivision(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.reportsDivision = data;
                    _this.insertChartItems(_this.reportsDivision, itemsDivision, dataDivisionClone);
                    dataDivisionClone.splice(0, _this.countLabelsDivision);
                    _this.countLabelsDivision = dataDivisionClone.length;
                    labelsDivisionClone = itemsDivision;
                    _this.pieChartLabelsDivision = labelsDivisionClone;
                    _this.pieChartDataDivision = dataDivisionClone;
                }
            });
            this.reportsService.getByCubicle(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.reportsCubicle = data;
                    data.forEach(function (element) {
                        itemsCubicles.push("Cubiculo " + element._id);
                        dataCubiclesClone.push(element.ingresos);
                    });
                    dataCubiclesClone.splice(0, _this.countLabelsCubicles);
                    _this.countLabelsCubicles = labelsCubiclesClone.length;
                    labelsCubiclesClone = itemsCubicles;
                    _this.pieChartLabelsCubicles = labelsCubiclesClone;
                    _this.pieChartDataCubicles = dataCubiclesClone;
                }
            });
            this.reportsService.getByCareer(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    console.log('Reportes por carrera');
                    console.log(data);
                    _this.reportsCareer = data;
                    _this.insertChartItems(_this.reportsCareer, itemsCareers, dataCareersClone);
                    dataCareersClone.splice(0, _this.countLabelsCareers);
                    _this.countLabelsCareers = dataCareersClone.length;
                    labelsCareersClone = itemsCareers;
                    _this.pieChartLabelsCareers = labelsCareersClone;
                    _this.pieChartDataCareers = dataCareersClone;
                }
            });
            this.reportsService.getByDay(this.startDate, this.endDate).then(function (data) {
                if (data) {
                    _this.reportsDay = data;
                    data.forEach(function (element) {
                        var shortDate = element._id.split('T');
                        itemsDays.push(shortDate[0]);
                        dataDaysClone.push(element.ingresos);
                    });
                    dataDaysClone.splice(0, _this.countLabelsDays);
                    _this.countLabelsDays = dataDaysClone.length;
                    labelsDaysClone = itemsDays;
                    _this.pieChartLabelsDays = labelsDaysClone;
                    _this.pieChartDataDays = dataDaysClone;
                }
            });
        }
    };
    return AdminReportsComponent;
}());
__decorate([
    core_1.ViewChild("baseChart"),
    __metadata("design:type", typeof (_a = typeof chart_js_1.BaseChartDirective !== "undefined" && chart_js_1.BaseChartDirective) === "function" && _a || Object)
], AdminReportsComponent.prototype, "chart", void 0);
AdminReportsComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-reports',
        template: __webpack_require__("../../../../../src/app/admin/admin-reports/admin-reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-reports/admin-reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof reports_service_1.ReportsService !== "undefined" && reports_service_1.ReportsService) === "function" && _b || Object, typeof (_c = typeof reservations_service_1.ReservationsService !== "undefined" && reservations_service_1.ReservationsService) === "function" && _c || Object])
], AdminReportsComponent);
exports.AdminReportsComponent = AdminReportsComponent;
var _a, _b, _c;
//# sourceMappingURL=admin-reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing/admin.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var admin_component_1 = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var admin_home_component_1 = __webpack_require__("../../../../../src/app/admin/admin-home/admin-home.component.ts");
var admin_users_component_1 = __webpack_require__("../../../../../src/app/admin/admin-users/admin-users.component.ts");
var admin_cubicles_component_1 = __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.ts");
var admin_careers_component_1 = __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers.component.ts");
var admin_departments_component_1 = __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments.component.ts");
var admin_users_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.ts");
var admin_cubicles_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.ts");
var admin_careers_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.ts");
var admin_departments_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.ts");
var admin_reports_component_1 = __webpack_require__("../../../../../src/app/admin/admin-reports/admin-reports.component.ts");
var admin_employees_component_1 = __webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees.component.ts");
var admin_employees_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees-update/admin-employees-update.component.ts");
var admin_external_user_component_1 = __webpack_require__("../../../../../src/app/admin/admin-external-user/admin-external-user.component.ts");
var admin_external_user_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-external-user/admin-external-user-update/admin-external-user-update.component.ts");
var adminRoutes = [{
        path: 'admin-site',
        component: admin_component_1.AdminComponent,
        children: [
            { path: '', component: admin_home_component_1.AdminHomeComponent },
            { path: 'users', component: admin_users_component_1.AdminUsersComponent },
            { path: 'users/:id', component: admin_users_update_component_1.AdminUsersUpdateComponent },
            { path: 'cubicles', component: admin_cubicles_component_1.AdminCubiclesComponent },
            { path: 'cubicles/:id', component: admin_cubicles_update_component_1.AdminCubiclesUpdateComponent },
            { path: 'careers', component: admin_careers_component_1.AdminCareersComponent },
            { path: 'careers/:id', component: admin_careers_update_component_1.AdminCareersUpdateComponent },
            { path: 'departments', component: admin_departments_component_1.AdminDepartmentsComponent },
            { path: 'departments/:id', component: admin_departments_update_component_1.AdminDepartmentsUpdateComponent },
            { path: 'employees', component: admin_employees_component_1.AdminEmployeesComponent },
            { path: 'employees/:id', component: admin_employees_update_component_1.AdminEmployeesUpdateComponent },
            { path: 'externals', component: admin_external_user_component_1.AdminExternalUserComponent },
            { path: 'externals/:id', component: admin_external_user_update_component_1.AdminExternalUserUpdateComponent },
            { path: 'reports', component: admin_reports_component_1.AdminReportsComponent },
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
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(adminRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        declarations: []
    })
], AdminRoutingModule);
exports.AdminRoutingModule = AdminRoutingModule;
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var users_service_1 = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
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
    core_1.Component({
        selector: 'app-admin-users-update',
        template: __webpack_require__("../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _a || Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof careers_service_1.CareersService !== "undefined" && careers_service_1.CareersService) === "function" && _e || Object])
], AdminUsersUpdateComponent);
exports.AdminUsersUpdateComponent = AdminUsersUpdateComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-users-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n}\n.save-btn {\n  margin: 0 auto;\n}\n.submit-btn {\n  margin-top: 40px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.table-content {\n  margin-top: 50px;\n}\n.table-info {\n  display: block;\n  height: 600px;\n  width: auto;\n  margin: 0 auto;\n  overflow: auto;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!called\" class=\"grid-container table-content\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <button type=\"button\" class=\"button float-right\" name=\"button\" (click)=\"createUser()\">Nuevo estudiante</button>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese la matricula o nombre del usuario\" [(ngModel)]=\"searchUserNumber\">\n      </label>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <table class=\"unstriped table-info\">\n      <thead>\n        <tr>\n          <th>Matricula</th>\n          <th>Nombre</th>\n          <th>Division</th>\n          <th>Carrera</th>\n          <th>Modificar</th>\n          <th>Eliminar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users | paginate: { itemsPerPage: 50, currentPage: page } | searchUser: searchUserNumber\" data-closable>\n          <td>{{user.registrationNumber}}</td>\n          <td>{{user.name}}</td>\n          <td>{{user.division}}</td>\n          <td>{{user.career}}</td>\n          <td class=\"text-center\"><a routerLink=\"/admin-site/users/{{user._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a></td>\n          <td class=\"remove\">\n              <button (click)=\"delete(user._id)\" class=\"close-button remove-item\" aria-label=\"Dismiss alert\" type=\"button\" data-close>\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <!-- <ul>\n    <li *ngFor=\"let item of users | paginate: { itemsPerPage: 10, currentPage: page }\"> {{item.name}} </li>\n  </ul> -->\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n\n</div>\n\n<!-- Create User Form -->\n<form *ngIf=\"called\">\n  <div class=\"grid-container content\">\n    <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"title cell\">\n        <h2>Nuevo estudiante</h2>\n      </div>\n    </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Nombre\n            <input type=\"text\" name=\"name\" placeholder=\"Ingrese nombre del estudiante\" [(ngModel)]=\"newUser.name\" required>\n            <p *ngIf=\"anyErrors?.errors?.name\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.name.message}}</p>\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Matricula\n            <input type=\"number\" name=\"registrationNumber\" placeholder=\"Ingrese la matricula del estudiante\" [(ngModel)]=\"newUser.registrationNumber\" required>\n            <div *ngIf=\"anyErrors\">\n              <p *ngIf=\"anyErrors?.errors?.registrationNumber\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.registrationNumber.message}}</p>\n              <p *ngIf=\"anyErrors?.existUser && !anyErrors?.existUsers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existUser}}</p>\n            </div>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Division\n            <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"divisionSelected\" (ngModelChange)=\"divisionChange($event)\" required>\n              <!-- <option [value]=\"''\"></option> -->\n              <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n            </select>\n            <p *ngIf=\"anyErrors?.errors?.division\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.division.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x\">\n        <div class=\"medium-6 cell\">\n          <label>Carrera\n            <select class=\"form-control\" name=\"selectedCareer\" [ngModel]=\"newUser?.career\" (ngModelChange)=\"newUser.career = $event\" required>\n              <!-- <option [selected]=\"selectedDivision == 'Choose an option'\">Choose an option</option> -->\n              <!-- <option [value]=\"''\"></option> -->\n              <option *ngFor=\"let career of careers\" [value]=\"career\">{{career}}</option>\n            </select>\n            <p *ngIf=\"anyErrors?.errors?.career\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.career.message}}</p>\n\n          </label>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x file-btn\">\n        <div class=\"small-12 cell uploadFile-btn\">\n          <label for=\"exampleFileUpload\" class=\"button\">Adjuntar archivo</label>\n          <input #inputFile type=\"file\" id=\"exampleFileUpload\" class=\"show-for-sr\" (change)=\"fileChange($event)\" accept=\".json, .csv\" multiple>\n          <span class=\"nameFile\">{{nameFile}}</span>\n          <p *ngIf=\"anyErrors?.existUsers\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.existUsers}}</p>\n        </div>\n        <div class=\"small-12 cell\">\n          <button type=\"button\" class=\"button\" name=\"button\" *ngIf=\"nameFile\" (click)=\"removeFile()\">Remover archivo</button>\n        </div>\n      </div>\n      <div class=\"grid-x grid-padding-x submit-btn\">\n        <div class=\"small-6 medium-6 large-4 cell text-center save-btn\">\n          <button type=\"button\" class=\"button\" name=\"button\" (click)=\"save()\">Guardar</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-users/admin-users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var users_service_1 = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var user_model_1 = __webpack_require__("../../../../../src/app/models/user.model.ts");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var AdminUsersComponent = (function () {
    function AdminUsersComponent(usersService, settingService, router, route, careersService) {
        this.usersService = usersService;
        this.settingService = settingService;
        this.router = router;
        this.route = route;
        this.careersService = careersService;
        this.newUser = new user_model_1.UserModel();
        this.page = 1;
        this.called = false;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.loadSchoolSettings().subscribe(function (res) {
            res.splice(res.length - 1, 1);
            _this.divisions = res;
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
        switch (event.division) {
            case 'DOCTORADO':
                this.newUser.division = 'DOCT';
                break;
            case 'POSGRADO':
                this.newUser.division = 'POST';
                break;
            case 'INGENIERIA':
                this.newUser.division = 'PROF';
                break;
            case 'ADMINISTRACION Y NEGOCIOS':
                this.newUser.division = 'PROF';
                break;
            case 'PREPARATORIA':
                this.newUser.division = 'PREP';
                break;
        }
        this.careers = new Array;
        this.careersService.getByDivision(event.division).then(function (data) {
            console.log(data);
            data.forEach(function (career) {
                _this.careers.push(career.careerCode);
            });
        }).catch(function (err) { return console.log("Error " + err); });
    };
    return AdminUsersComponent;
}());
__decorate([
    core_1.ViewChild('inputFile'),
    __metadata("design:type", Object)
], AdminUsersComponent.prototype, "myInputVariable", void 0);
AdminUsersComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-users',
        template: __webpack_require__("../../../../../src/app/admin/admin-users/admin-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin-users/admin-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" && _a || Object, typeof (_b = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof careers_service_1.CareersService !== "undefined" && careers_service_1.CareersService) === "function" && _e || Object])
], AdminUsersComponent);
exports.AdminUsersComponent = AdminUsersComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".admin-bar {\n  background: #4a8ab9 !important;\n}\n.title-admin {\n  font-size: 20px;\n}\n/*.admin-menu a {\n  color: #ffffff;\n}*/\n.top-bar-right ul {\n  background: inherit;\n}\n.top-bar-left a {\n  /*color: #ffffff;*/\n  margin: 0 0 0 20px;\n  padding: 0;\n  font-size: 20px;\n}\n/*.top-bar-right a {\n  color: #ffffff;\n}*/\n.top-bar-right a i {\n  margin-right: 10px;\n}\n.menu-bar a {\n  color: whitesmoke;\n}\n.menu-bar a:hover {\n  /*background-color: grey;*/\n  color: rgba(17, 18, 17, 0.86);\n}\n.title-left a{\n  color: whitesmoke;\n}\n.title-left a:hover {\n  color: rgba(17, 18, 17, 0.86);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"top-bar admin-bar\">\n    <div class=\"top-bar-left title-left\">\n      <a class=\"clear button\"routerLink=\"/\">Cetys Universidad</a>\n    </div>\n  <div class=\"top-bar-right\">\n    <ul class=\"menu menu-bar\">\n      <li><a class=\"clear button\" routerLink=\"admin-site\"><i class=\"fa fa-home fa-lg\" aria-hidden=\"true\"></i></a></li>\n      <li><a class=\"clear button\" routerLink=\"users\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>Estudiantes</a></li>\n      <li><a class=\"clear button\" routerLink=\"cubicles\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>Cubiculos</a></li>\n      <li><a class=\"clear button\" routerLink=\"careers\"><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>Carreras</a></li>\n      <li><a class=\"clear button\" routerLink=\"departments\"><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>Departamentos</a></li>\n      <li><a class=\"clear button\" routerLink=\"employees\"><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>Empleados</a></li>\n      <li><a class=\"clear button\" routerLink=\"externals\"><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>Externos</a></li>\n      <li><a class=\"clear button\" routerLink=\"reports\"><strong>Reportes</strong></a></li>\n    </ul>\n  </div>\n</div>\n</header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
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
    core_1.Component({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
], AdminComponent);
exports.AdminComponent = AdminComponent;
var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var admin_component_1 = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var admin_home_component_1 = __webpack_require__("../../../../../src/app/admin/admin-home/admin-home.component.ts");
var admin_users_component_1 = __webpack_require__("../../../../../src/app/admin/admin-users/admin-users.component.ts");
var admin_careers_component_1 = __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers.component.ts");
var admin_cubicles_component_1 = __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles.component.ts");
var users_service_1 = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var departments_service_1 = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var admin_departments_component_1 = __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments.component.ts");
var admin_cubicles_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-cubicles/admin-cubicles-update/admin-cubicles-update.component.ts");
var admin_careers_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-careers/admin-careers-update/admin-careers-update.component.ts");
var admin_departments_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-departments/admin-departments-update/admin-departments-update.component.ts");
var admin_users_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-users/admin-users-update/admin-users-update.component.ts");
var admin_routing_module_1 = __webpack_require__("../../../../../src/app/admin/admin-routing/admin.routing.module.ts");
var admin_reports_component_1 = __webpack_require__("../../../../../src/app/admin/admin-reports/admin-reports.component.ts");
var ngx_pagination_1 = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js"); // <-- import the module
var reports_service_1 = __webpack_require__("../../../../../src/app/services/reports/reports.service.ts");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var ng2_charts_1 = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
var admin_employees_component_1 = __webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees.component.ts");
var admin_employees_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-employees/admin-employees-update/admin-employees-update.component.ts");
var employees_service_1 = __webpack_require__("../../../../../src/app/services/employees/employees.service.ts");
var pipes_module_1 = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
var admin_external_user_component_1 = __webpack_require__("../../../../../src/app/admin/admin-external-user/admin-external-user.component.ts");
var admin_external_user_update_component_1 = __webpack_require__("../../../../../src/app/admin/admin-external-user/admin-external-user-update/admin-external-user-update.component.ts");
var external_user_service_1 = __webpack_require__("../../../../../src/app/services/externalUser/external-user.service.ts");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            admin_routing_module_1.AdminRoutingModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            ng2_charts_1.ChartsModule,
            pipes_module_1.PipesModule.forRoot()
        ],
        declarations: [
            admin_component_1.AdminComponent,
            admin_home_component_1.AdminHomeComponent,
            admin_users_component_1.AdminUsersComponent,
            admin_careers_component_1.AdminCareersComponent,
            admin_cubicles_component_1.AdminCubiclesComponent,
            admin_departments_component_1.AdminDepartmentsComponent,
            admin_cubicles_update_component_1.AdminCubiclesUpdateComponent,
            admin_careers_update_component_1.AdminCareersUpdateComponent,
            admin_departments_update_component_1.AdminDepartmentsUpdateComponent,
            admin_users_update_component_1.AdminUsersUpdateComponent,
            admin_reports_component_1.AdminReportsComponent,
            admin_employees_component_1.AdminEmployeesComponent,
            admin_employees_update_component_1.AdminEmployeesUpdateComponent,
            admin_external_user_component_1.AdminExternalUserComponent,
            admin_external_user_update_component_1.AdminExternalUserUpdateComponent
        ],
        providers: [
            users_service_1.UsersService,
            cubicles_service_1.CubiclesService,
            careers_service_1.CareersService,
            reports_service_1.ReportsService,
            departments_service_1.DepartmentsService,
            settings_service_1.SettingsService,
            employees_service_1.EmployeesService,
            external_user_service_1.ExternalUserService
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  color: slategray;\n  position: absolute;\n  bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<footer>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      Fernando Hernandez &copy; 2018\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var admin_module_1 = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app.routing.module.ts");
var home_module_1 = __webpack_require__("../../../../../src/app/home/home.module.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // All components
        declarations: [
            app_component_1.AppComponent
        ],
        // All modules
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            home_module_1.HomeModule,
            admin_module_1.AdminModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
// import { ReservationCreateComponent } from './home/reservation/reservation-create/reservation-create.component'
// import { ReservationUpdateComponent } from './home/reservation/reservation-update/reservation-update.component'
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent }
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
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing/home.routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var reports_component_1 = __webpack_require__("../../../../../src/app/home/reports/reports.component.ts");
var reservation_create_component_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create.component.ts");
var reservation_update_component_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation-update/reservation-update.component.ts");
var reservation_edit_component_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.ts");
var admin_component_1 = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
var homeRoutes = [
    { path: 'reservations', component: reports_component_1.ReportsComponent },
    { path: 'reservations-create/:id', component: reservation_create_component_1.ReservationCreateComponent },
    { path: 'reservations-update/:id', component: reservation_update_component_1.ReservationUpdateComponent },
    { path: 'reservations-edit/:id', component: reservation_edit_component_1.ReservationEditComponent },
    { path: 'admin', component: admin_component_1.AdminComponent }
    // { path: '**', component: PageNotFoundComponent } Route in case page is not found
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(homeRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], HomeRoutingModule);
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin-top: 80px;\n}\n.matrix {\n  background-color: #FFFFFF;\n  margin-top: 80px;\n}\n.matrix-content {\n\n}\n.matrix-content .cubicle-option {\n  padding: 35px;\n  border-color: #171A21;\n  border-width: thin;\n  border-radius: inherit;\n  /*border-style: solid;*/\n  border-collapse: collapse;\n  margin: 0;\n  background-color: transparent;\n  color: black;\n}\n.matrix-content a, .matrix-content button, .matrix-content i, .matrix-content p {\n  display: inline-block;\n}\n.cubicle-number {\n  margin: 0 20px;\n  padding: 0;\n  font-size: 16px;\n  font-weight: bold;\n}\n.boton {\n  margin-top: 30px;\n}\n.boton div{\n  /*border: solid green;*/\n  margin: 0;\n  padding: 0;\n}\n.boton-edit {\n  /*border: solid blue;*/\n  padding: 0;\n  margin: 0;\n}\n.check-icon {\n  color: green;\n}\n.times-icon {\n  color: red;\n}\n.reports-button {\n  margin: 0;\n}\n.admin-text {\n  margin-top: 80px;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Sistema de reservacion de cubiculos</h1>\n\n<div class=\"grid-container matrix\">\n  <div class=\"grid-x grid-padding-x small-up-1 medium-up-3 large-up-4 text-center matrix-content\">\n    <a *ngFor=\"let cubicle of cubicles\" routerLink=\"/reservations-create/{{cubicle._id}}\" class=\"cell button cubicle-option\">\n      <a routerLink=\"/reservations-edit/{{cubicle._id}}\" class=\"boton-edit\">\n        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n      </a>\n      <p class=\"cubicle-number\">{{cubicle.cubicleNumber}}</p>\n      <ng-container *ngIf=\"cubicle.availability; else elseBlock\">\n        <i class=\"fa fa-check-circle check-icon\" aria-hidden=\"true\"></i>\n      </ng-container>\n      <ng-template #elseBlock><i class=\"fa fa-times-circle times-icon\" aria-hidden=\"true\"></i></ng-template>\n    </a>\n  </div>\n</div>\n\n<div class=\"grid-container boton\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell\">\n      <a class=\"button radius shadow float-right reports-button\" routerLink=\"reservations\" name=\"button\">Reservaciones</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"grid-container admin-text\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      Cetys Universidad <br> <a routerLink=\"admin-site\" style=\"font-size: 15px;\">Administrador</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var reservations_service_1 = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
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
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof cubicles_service_1.CubiclesService !== "undefined" && cubicles_service_1.CubiclesService) === "function" && _a || Object, typeof (_b = typeof reservations_service_1.ReservationsService !== "undefined" && reservations_service_1.ReservationsService) === "function" && _b || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var home_routing_module_1 = __webpack_require__("../../../../../src/app/home/home-routing/home.routing.module.ts");
var reservation_module_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation.module.ts");
var reports_module_1 = __webpack_require__("../../../../../src/app/home/reports/reports.module.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var reservation_create_component_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create.component.ts");
var reservation_create_external_component_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create-external/reservation-create-external.component.ts");
var reservation_update_component_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation-update/reservation-update.component.ts");
var reservation_edit_component_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.ts");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var departments_service_1 = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var users_service_1 = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var reservations_service_1 = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
var users_quantity_service_1 = __webpack_require__("../../../../../src/app/services/usersQuantity/users.quantity.service.ts");
var popup_1 = __webpack_require__("../../../../@ngui/popup/dist/index.js");
var popup_userDetails_component_1 = __webpack_require__("../../../../../src/app/home/popup-userDetails/popup-userDetails.component.ts");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var pipes_module_1 = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
var popup_user_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-user-info/popup-user-info.component.ts");
var popup_employee_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-employee-info/popup-employee-info.component.ts");
var external_user_service_1 = __webpack_require__("../../../../../src/app/services/externalUser/external-user.service.ts");
var popup_external_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-external-info/popup-external-info.component.ts");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            reservation_module_1.ReservationModule,
            reports_module_1.ReportsModule,
            home_routing_module_1.HomeRoutingModule,
            popup_1.NguiPopupModule,
            pipes_module_1.PipesModule.forRoot()
        ],
        declarations: [
            home_component_1.HomeComponent,
            reservation_create_component_1.ReservationCreateComponent,
            reservation_update_component_1.ReservationUpdateComponent,
            reservation_edit_component_1.ReservationEditComponent,
            popup_userDetails_component_1.PopupUserDetailsComponent,
            popup_user_info_component_1.PopupUserInfoComponent,
            popup_employee_info_component_1.PopupEmployeeInfoComponent,
            reservation_create_external_component_1.ReservationCreateExternalComponent,
            popup_external_info_component_1.PopupExternalInfoComponent
        ],
        providers: [
            cubicles_service_1.CubiclesService,
            users_service_1.UsersService,
            careers_service_1.CareersService,
            departments_service_1.DepartmentsService,
            settings_service_1.SettingsService,
            reservations_service_1.ReservationsService,
            users_quantity_service_1.UsersQuantityService,
            data_reservation_service_1.DataReservationService,
            external_user_service_1.ExternalUserService
        ],
        exports: [
            reservation_module_1.ReservationModule,
            reports_module_1.ReportsModule,
            reservation_edit_component_1.ReservationEditComponent,
            popup_userDetails_component_1.PopupUserDetailsComponent
        ],
        entryComponents: [popup_userDetails_component_1.PopupUserDetailsComponent, popup_user_info_component_1.PopupUserInfoComponent, popup_employee_info_component_1.PopupEmployeeInfoComponent, popup_external_info_component_1.PopupExternalInfoComponent]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/popup-employee-info/popup-employee-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/popup-employee-info/popup-employee-info.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Employee Info Modal -->\n<div style=\"padding: 10px;\">\n  <table>\n    <thead>\n      <tr>\n        <th>Nombre</th>\n        <th>Departamento</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{currentEmployee.name}}</td>\n        <td>{{currentEmployee.department}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/popup-employee-info/popup-employee-info.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var PopupEmployeeInfoComponent = (function () {
    function PopupEmployeeInfoComponent(dataReservationService) {
        this.dataReservationService = dataReservationService;
    }
    PopupEmployeeInfoComponent.prototype.ngOnInit = function () {
        this.currentEmployee = this.dataReservationService.getCurrentEmployee();
    };
    return PopupEmployeeInfoComponent;
}());
PopupEmployeeInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-popup-employee-info',
        template: __webpack_require__("../../../../../src/app/home/popup-employee-info/popup-employee-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/popup-employee-info/popup-employee-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_reservation_service_1.DataReservationService !== "undefined" && data_reservation_service_1.DataReservationService) === "function" && _a || Object])
], PopupEmployeeInfoComponent);
exports.PopupEmployeeInfoComponent = PopupEmployeeInfoComponent;
var _a;
//# sourceMappingURL=popup-employee-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/popup-external-info/popup-external-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/popup-external-info/popup-external-info.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- External user Info Modal -->\n<div style=\"padding: 10px;\">\n  <table>\n    <thead>\n      <tr>\n        <th>Nombre</th>\n        <th>Descripcion</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{currentExternalUser.name}}</td>\n        <td>{{currentExternalUser.description}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/popup-external-info/popup-external-info.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var PopupExternalInfoComponent = (function () {
    function PopupExternalInfoComponent(dataReservationService) {
        this.dataReservationService = dataReservationService;
    }
    PopupExternalInfoComponent.prototype.ngOnInit = function () {
        this.currentExternalUser = this.dataReservationService.getCurrentExternalUser();
    };
    return PopupExternalInfoComponent;
}());
PopupExternalInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-popup-external-info',
        template: __webpack_require__("../../../../../src/app/home/popup-external-info/popup-external-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/popup-external-info/popup-external-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_reservation_service_1.DataReservationService !== "undefined" && data_reservation_service_1.DataReservationService) === "function" && _a || Object])
], PopupExternalInfoComponent);
exports.PopupExternalInfoComponent = PopupExternalInfoComponent;
var _a;
//# sourceMappingURL=popup-external-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/popup-user-info/popup-user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/popup-user-info/popup-user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- User Info Modal -->\n<div style=\"padding: 10px;\">\n  <table>\n    <thead>\n      <tr>\n        <th>Nombre</th>\n        <th>Division</th>\n        <th>Carrera</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{currentUser.name}}</td>\n        <td>{{currentUser.division}}</td>\n        <td>{{currentUser.career}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/popup-user-info/popup-user-info.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var PopupUserInfoComponent = (function () {
    function PopupUserInfoComponent(dataReservationService) {
        this.dataReservationService = dataReservationService;
    }
    PopupUserInfoComponent.prototype.ngOnInit = function () {
        this.currentUser = this.dataReservationService.getCurrentUser();
    };
    return PopupUserInfoComponent;
}());
PopupUserInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-popup-user-info',
        template: __webpack_require__("../../../../../src/app/home/popup-user-info/popup-user-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/popup-user-info/popup-user-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_reservation_service_1.DataReservationService !== "undefined" && data_reservation_service_1.DataReservationService) === "function" && _a || Object])
], PopupUserInfoComponent);
exports.PopupUserInfoComponent = PopupUserInfoComponent;
var _a;
//# sourceMappingURL=popup-user-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/popup-userDetails/popup-userDetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/popup-userDetails/popup-userDetails.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- User details Modal -->\n<div style=\"padding: 10px;\">\n    <table>\n      <thead>\n        <tr>\n          <th>Carrera/Departamento</th>\n          <th>Division</th>\n          <th>Cantidad</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let userDetail of currentReservation\">\n          <td *ngIf=\"userDetail.career; else elseBlock\">{{userDetail.career}}</td>\n          <ng-template #elseBlock><td>{{userDetail.department}}</td></ng-template>\n          <td *ngIf=\"userDetail.division; else elseDivision\">{{userDetail.division}}</td>\n          <ng-template #elseDivision><td>N/A</td></ng-template>\n          <td>{{userDetail.quantity}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/popup-userDetails/popup-userDetails.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var users_quantity_service_1 = __webpack_require__("../../../../../src/app/services/usersQuantity/users.quantity.service.ts");
var PopupUserDetailsComponent = (function () {
    function PopupUserDetailsComponent(usersQuantityService, dataReservationService) {
        this.usersQuantityService = usersQuantityService;
        this.dataReservationService = dataReservationService;
    }
    PopupUserDetailsComponent.prototype.ngOnInit = function () {
        this.currentReservation = this.dataReservationService.getCurrentReservations();
    };
    PopupUserDetailsComponent.prototype.ngOnDestroy = function () { };
    return PopupUserDetailsComponent;
}());
PopupUserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-popup-userDetails',
        template: __webpack_require__("../../../../../src/app/home/popup-userDetails/popup-userDetails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/popup-userDetails/popup-userDetails.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof users_quantity_service_1.UsersQuantityService !== "undefined" && users_quantity_service_1.UsersQuantityService) === "function" && _a || Object, typeof (_b = typeof data_reservation_service_1.DataReservationService !== "undefined" && data_reservation_service_1.DataReservationService) === "function" && _b || Object])
], PopupUserDetailsComponent);
exports.PopupUserDetailsComponent = PopupUserDetailsComponent;
var _a, _b;
//# sourceMappingURL=popup-userDetails.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ReportsUserDetailsComponent = (function () {
    function ReportsUserDetailsComponent() {
    }
    ReportsUserDetailsComponent.prototype.ngOnInit = function () {
    };
    return ReportsUserDetailsComponent;
}());
ReportsUserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-reports-user-details',
        template: __webpack_require__("../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReportsUserDetailsComponent);
exports.ReportsUserDetailsComponent = ReportsUserDetailsComponent;
//# sourceMappingURL=reports-user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.reports-content {\n  margin: 0 auto;\n}*/\n.title {\n  margin-top: 30px;\n}\n.pagination-users /deep/ .ngx-pagination .current {\n  margin-top: 20px;\n}\n.user-people, .user-number {\n  margin: 0;\n  font-size: 16px;\n  color: #000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"title cell\">\n      <h2 class=\"text-center\">Reservaciones</h2>\n    </div>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese matricula del usuario\" [(ngModel)]=\"searchReservationNumber\">\n      </label>\n    </div>\n\n    <table class=\"unstriped\">\n      <thead>\n        <tr>\n          <th>Usuario</th>\n          <th>Cubiculo</th>\n          <th>Entrada</th>\n          <th>Salida</th>\n          <th>Fecha</th>\n          <th>Personas</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let reservation of reservations | paginate: { itemsPerPage: 30, currentPage: page } | searchReservation: searchReservationNumber\"  class=\"text-center\">\n            <td class=\"clear button user-number\" (click)=\"getCurrentUser(reservation.user || reservation.employee || reservation.externalUser)\">{{reservation.user?.registrationNumber || reservation.employee.employeeNumber || reservation.externalUser.userCode}}</td>\n            <td>{{reservation.cubicle}}</td>\n            <td>{{reservation.entryTime | date: 'shortTime'}}</td>\n            <td>{{reservation.departureTime | date: 'shortTime'}}</td>\n            <td>{{reservation.reservationDate | date: 'mediumDate'}}</td>\n            <td class=\"clear button user-people\" (click)=\"getCurrentReservation(reservation)\">{{reservation.peopleQuantity}}</td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell text-center\">\n      <pagination-controls class=\"pagination-users\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n<ngui-popup #popup></ngui-popup>\n"

/***/ }),

/***/ "../../../../../src/app/home/reports/reports.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var reservations_service_1 = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
var users_service_1 = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var popup_1 = __webpack_require__("../../../../@ngui/popup/dist/index.js");
var popup_userDetails_component_1 = __webpack_require__("../../../../../src/app/home/popup-userDetails/popup-userDetails.component.ts");
var popup_user_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-user-info/popup-user-info.component.ts");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var popup_employee_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-employee-info/popup-employee-info.component.ts");
var popup_external_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-external-info/popup-external-info.component.ts");
var ReportsComponent = (function () {
    function ReportsComponent(dataReservationService, reservationsService, usersService) {
        this.dataReservationService = dataReservationService;
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
            }
        });
    };
    ReportsComponent.prototype.getCurrentReservation = function (reservation) {
        this.currentReservation = reservation.usersDetails;
        this.dataReservationService.addReservationsDetails(this.currentReservation);
        this.openPopup();
    };
    ReportsComponent.prototype.getCurrentUser = function (user) {
        if (user.registrationNumber) {
            this.openPopup2();
            this.dataReservationService.changeUser(user);
        }
        else if (user.employeeNumber) {
            this.openPopup3();
            this.dataReservationService.changeEmployee(user);
        }
        else {
            this.openPopup4();
            this.dataReservationService.changeExternalUser(user);
        }
    };
    ReportsComponent.prototype.openPopup = function () {
        this.popup.open(popup_userDetails_component_1.PopupUserDetailsComponent, {
            classNames: 'custom',
            closeButton: true
        });
    };
    ReportsComponent.prototype.openPopup2 = function () {
        this.popup2.open(popup_user_info_component_1.PopupUserInfoComponent, {
            classNames: 'custom',
            closeButton: true
        });
    };
    ReportsComponent.prototype.openPopup3 = function () {
        this.popup3.open(popup_employee_info_component_1.PopupEmployeeInfoComponent, {
            classNames: 'custom',
            closeButton: true
        });
    };
    ReportsComponent.prototype.openPopup4 = function () {
        this.popup4.open(popup_external_info_component_1.PopupExternalInfoComponent, {
            classNames: 'custom',
            closeButton: true
        });
    };
    return ReportsComponent;
}());
__decorate([
    core_1.ViewChild(popup_1.NguiPopupComponent),
    __metadata("design:type", typeof (_a = typeof popup_1.NguiPopupComponent !== "undefined" && popup_1.NguiPopupComponent) === "function" && _a || Object)
], ReportsComponent.prototype, "popup", void 0);
__decorate([
    core_1.ViewChild(popup_1.NguiPopupComponent),
    __metadata("design:type", typeof (_b = typeof popup_1.NguiPopupComponent !== "undefined" && popup_1.NguiPopupComponent) === "function" && _b || Object)
], ReportsComponent.prototype, "popup2", void 0);
__decorate([
    core_1.ViewChild(popup_1.NguiPopupComponent),
    __metadata("design:type", typeof (_c = typeof popup_1.NguiPopupComponent !== "undefined" && popup_1.NguiPopupComponent) === "function" && _c || Object)
], ReportsComponent.prototype, "popup3", void 0);
__decorate([
    core_1.ViewChild(popup_1.NguiPopupComponent),
    __metadata("design:type", typeof (_d = typeof popup_1.NguiPopupComponent !== "undefined" && popup_1.NguiPopupComponent) === "function" && _d || Object)
], ReportsComponent.prototype, "popup4", void 0);
ReportsComponent = __decorate([
    core_1.Component({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/home/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reports/reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof data_reservation_service_1.DataReservationService !== "undefined" && data_reservation_service_1.DataReservationService) === "function" && _e || Object, typeof (_f = typeof reservations_service_1.ReservationsService !== "undefined" && reservations_service_1.ReservationsService) === "function" && _f || Object, typeof (_g = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" && _g || Object])
], ReportsComponent);
exports.ReportsComponent = ReportsComponent;
var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reports/reports.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var reports_component_1 = __webpack_require__("../../../../../src/app/home/reports/reports.component.ts");
var reports_user_details_component_1 = __webpack_require__("../../../../../src/app/home/reports/reports-user-details/reports-user-details.component.ts");
var ngx_pagination_1 = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js"); // <-- import the module
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var popup_1 = __webpack_require__("../../../../@ngui/popup/dist/index.js");
var pipes_module_1 = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ngx_pagination_1.NgxPaginationModule,
            forms_1.FormsModule,
            popup_1.NguiPopupModule,
            pipes_module_1.PipesModule.forRoot()
        ],
        declarations: [
            reports_component_1.ReportsComponent,
            reports_user_details_component_1.ReportsUserDetailsComponent
        ],
        exports: [
            reports_component_1.ReportsComponent,
            reports_user_details_component_1.ReportsUserDetailsComponent
        ]
    })
], ReportsModule);
exports.ReportsModule = ReportsModule;
//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create-external/reservation-create-external.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\nform {\n  margin-top: 100px;\n}\n.title-rs {\n  padding: 20px 0;\n}\n.content {\n  border: solid #000000;\n  background-color: #ffffff;\n}\n.circle {\n  position: relative;\n  /*font-size: 10px;*/\n  width: 20px;\n  height: 25px;\n  margin-top: 5px;\n  /*border-radius: 80%;*/\n}\n.circle i {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 5px;\n}\n.input-quantity {\n  margin: 0px 20px;\n  width: 60px;\n}\n.plus-minus-group {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.list-group {\n  /*border: solid green;*/\n  margin-left: 20px;\n  width: auto;\n  position: relative;\n  padding-top: 25px;\n}\n.list-group span {\n  position: absolute;\n  top: 0;\n  margin-left: 60px;\n  font-size: 13px;\n  /*border: solid brown;*/\n}\n.department-list {\n  margin-left: 20px;\n  width: auto;\n  position: relative;\n  padding-top: 25px;\n}\n.department-list span {\n  position: absolute;\n  top: 0;\n  margin-left: 10px;\n  font-size: 13px;\n  /*border: solid brown;*/\n}\n.title-people {\n  /*border: solid orange;\n  padding: 0;*/\n  /*vertical-align: middle;\n  margin: 0 auto;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;*/\n}\n.hola {\n  margin: 0 auto;\n  /*border: solid green;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create-external/reservation-create-external.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"called\" #reservationForm=\"ngForm\">\n\n  <div class=\"grid-container\">\n    <div class=\"grid-x grid-padding-x\">\n      <div class=\"cell\">\n        <button type=\"button\" class=\"button\" name=\"button\" (click)=\"called = false\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n  </div>\n\n<div class=\"grid-container content\">\n  <div class=\"grid-x grid-padding-x title-rs\">\n    <div class=\"cell\">\n      <h2>Nueva reservacion</h2>\n    </div>\n  </div>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"cell form-group\">\n      <label>Usuario externo\n        <div class=\"input-group\">\n          <input class=\"input-group-field\" type=\"text\" name=\"user\" [(ngModel)]=\"registrationNumber\" placeholder=\"Ingrese el codigo del usuario\" required>\n          <div class=\"input-group-button\">\n            <button type=\"button\" class=\"button\" (click)=\"searchUser()\">Buscar</button>\n          </div>\n        </div>\n      </label>\n      <p *ngIf=\"anyErrors?.messageUser\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors.messageUser}}</p>\n      <p *ngIf=\"anyErrors?.msg\" class=\"help-text\" id=\"userHelpText\" style=\"color: #3f9d51;\">{{anyErrors.msg}}</p>\n    </div>\n  </div>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-2 cell form-group\">\n      <label>Cubiculo\n        <input type=\"number\" class=\"form-control\" value=\"{{newReservation?.cubicle}}\">\n      </label>\n    </div>\n\n    <div class=\"small-5 cell form-group\">\n      <label>Hora de entrada\n        <input type=\"time\" class=\"form-control\" name=\"entryTime\" [(ngModel)]=\"currentTime\">\n        <p *ngIf=\"anyErrors?.errors?.entryTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.entryTime.message}}</p>\n      </label>\n    </div>\n\n    <div class=\"small-5 cell form-group\">\n      <label>Hora de salida\n        <input type=\"time\" class=\"form-control\" name=\"departureTime\" [(ngModel)]=\"departureTime\">\n        <p *ngIf=\"anyErrors?.errors?.departureTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departureTime.message}}</p>\n        <p *ngIf=\"departureTimeError\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{departureTimeError.departureTimeMsg}}</p>\n\n      </label>\n    </div>\n  </div>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"auto cell form-group\">\n      <label>Division\n        <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"selectedDivision\" (ngModelChange)=\"divisionChange($event)\">\n          <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n        </select>\n      </label>\n    </div>\n\n    <div class=\"auto cell form-group\">\n      <label>Departamento\n        <select class=\"form-control\" name=\"selectedDepartment\" [ngModel]=\"departmentSelected\" (ngModelChange)=\"departmentChange($event)\">\n          <option *ngFor=\"let department of departments\" [value]=\"department\">{{department}}</option>\n        </select>\n      </label>\n    </div>\n\n    <div class=\"auto cell\">\n      <label>Fecha\n        <input type=\"date\" name=\"dateReservation\" [(ngModel)]=\"currentDate\" placeholder=\"Fecha\">\n        <p *ngIf=\"anyErrors?.errors?.reservationDate\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.reservationDate.message}}</p>\n\n      </label>\n    </div>\n  </div>\n\n  <!-- Input option department -->\n  <div *ngIf=\"departmentSelected\" class=\"grid-x grid-padding-x plus-minus-group\">\n      <div class=\"input-group department-list\">\n        <span>{{departmentSelected}}</span>\n        <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber || quantityDepartment == 0\" (click)=\"decrementDepartment()\" data-quantity=\"minus\" data-field=\"quantity\">\n          <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n        </button>\n        <input class=\"text-center input-quantity\" type=\"number\" name=\"quantity\" [value]=\"quantityDepartment\">\n        <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber\" (click)=\"incrementDepartment()\" data-quantity=\"plus\" data-field=\"quantity\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n  </div>\n\n  <!-- Input option careers -->\n  <div class=\"grid-x grid-padding-x plus-minus-group\">\n    <ul class=\"menu\">\n      <li *ngFor=\"let career of currentCareers; let i = index\" class=\"input-group list-group\">\n        <span>{{career}}</span>\n        <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber || valores[i].count == 0\" (click)=\"decrementCareer(career)\" data-quantity=\"minus\" data-field=\"quantity\">\n          <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n        </button>\n        <input class=\"text-center input-quantity\" type=\"number\" name=\"quantity\" [value]=\"valores[i].count\">\n        <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber\" (click)=\"incrementCareer(career)\" data-quantity=\"plus\" data-field=\"quantity\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"grid-x grid-margin-x\">\n    <div class=\"small-2 cell title-people\">\n      <label>Personas\n        <input type=\"number\" name=\"peopleQuantity\" [(ngModel)]=\"newReservation.peopleQuantity\">\n      </label>\n    </div>\n    <div class=\"small-10 medium-10 large-10 cell\">\n      <label> Prestamo de material\n        <textarea name=\"borrowedMaterial\" placeholder=\"Ingresar el material prestado\" [(ngModel)]=\"newReservation.borrowedMaterial\"></textarea>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"small-6 medium-6 large-4 cell text-center hola\">\n      <button type=\"button\" class=\"button\" name=\"button\" [disabled]=\"!reservationForm.form.valid\" (click)=\"save()\">\n        Reservar\n      </button>\n    </div>\n  </div>\n</div>\n</form>\n<app-reservation-create *ngIf=\"!called\"></app-reservation-create>\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create-external/reservation-create-external.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var reservations_service_1 = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var departments_service_1 = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var users_quantity_service_1 = __webpack_require__("../../../../../src/app/services/usersQuantity/users.quantity.service.ts");
var external_user_service_1 = __webpack_require__("../../../../../src/app/services/externalUser/external-user.service.ts");
var externalUser_model_1 = __webpack_require__("../../../../../src/app/models/externalUser.model.ts");
var reservation_model_1 = __webpack_require__("../../../../../src/app/models/reservation.model.ts");
var userDetails_model_1 = __webpack_require__("../../../../../src/app/models/userDetails.model.ts");
var userDetails_model_2 = __webpack_require__("../../../../../src/app/models/userDetails.model.ts");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var ReservationCreateExternalComponent = (function () {
    function ReservationCreateExternalComponent(dataReservationService, departmentsService, usersQuantity, settingService, cubiclesService, reservationsService, careersService, externalUserService, router, route) {
        this.dataReservationService = dataReservationService;
        this.departmentsService = departmentsService;
        this.usersQuantity = usersQuantity;
        this.settingService = settingService;
        this.cubiclesService = cubiclesService;
        this.reservationsService = reservationsService;
        this.careersService = careersService;
        this.externalUserService = externalUserService;
        this.router = router;
        this.route = route;
        this.valores = new Array;
        this.newReservation = new reservation_model_1.ReservationModel();
        this.newUser = new externalUser_model_1.ExternalUserModel();
        this.quantityDepartment = 0;
        this.departments = new Array;
        this.called = true;
    }
    ReservationCreateExternalComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Fehca y hora de entrada: " + this.newReservation.entryTime);
        var hour = this.newReservation.entryTime.getHours().toString();
        var minutes = this.newReservation.entryTime.getMinutes();
        if (parseInt(hour) >= 0 && parseInt(hour) <= 9) {
            hour = '0' + hour;
            console.log(hour);
        }
        if (minutes >= 0 && minutes <= 9) {
            this.currentTime = hour + ":0" + minutes;
            console.log(this.currentTime);
        }
        else {
            this.currentTime = hour + ":" + minutes;
        }
        console.log('Hora de entrada: ' + this.currentTime);
        var day = this.newReservation.reservationDate.getDate().toString();
        var month = this.newReservation.reservationDate.getMonth() + 1;
        var year = this.newReservation.reservationDate.getFullYear();
        if (parseInt(day) >= 1 && parseInt(day) <= 9) {
            day = '0' + day;
            console.log(day);
        }
        if (month >= 1 && month <= 9) {
            this.currentDate = year + "-0" + month + "-" + day;
        }
        else {
            this.currentDate = year + "-" + month + "-" + day;
        }
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
    ReservationCreateExternalComponent.prototype.save = function () {
        var _this = this;
        this.newReservation.entryTime = new Date(this.currentDate + ", " + this.currentTime);
        this.newReservation.departureTime = new Date(this.currentDate + ", " + this.departureTime);
        this.newReservation.reservationDate = new Date(this.currentDate + ", " + this.currentTime);
        this.externalUserService.getByUserCode(this.registrationNumber).then(function (user) {
            var externalUser = JSON.parse(JSON.stringify(user)).usuario;
            _this.newReservation.externalUser = externalUser;
            _this.reservationsService.create(_this.newReservation)
                .subscribe(function (data) {
                console.log(data);
                _this.router.navigateByUrl('/');
            }, function (err) {
                _this.anyErrors = JSON.parse(err._body);
                console.log(_this.anyErrors);
                _this.departureTimeError = JSON.parse(err._body);
            });
        }).catch(function (error) {
            console.log("El usuario no se encuentra en la base de datos " + error.status);
            _this.anyErrors = JSON.parse(error._body);
        });
    };
    ReservationCreateExternalComponent.prototype.searchUser = function () {
        var _this = this;
        this.externalUserService.getByUserCode(this.registrationNumber).then(function (data) {
            // console.log(JSON.parse(JSON.stringify(data)).usuario || JSON.parse(JSON.stringify(data)).empleado)
            _this.anyErrors = JSON.parse(JSON.stringify(data));
            // this.newReservation.user = user
        }).catch(function (err) { return _this.anyErrors = JSON.parse(err._body); });
    };
    ReservationCreateExternalComponent.prototype.divisionChange = function (newDivision) {
        var _this = this;
        this.departmentSelected = '';
        this.currentCareers = new Array;
        this.valores = [];
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
    ReservationCreateExternalComponent.prototype.departmentChange = function (event) {
        var _this = this;
        this.selectedDivision = {};
        var sigue = false;
        console.log(event);
        this.currentCareers = [];
        if (this.newReservation.usersDetails) {
            this.newReservation.usersDetails.forEach(function (e, index) {
                if (event == e.department) {
                    _this.quantityDepartment = e.quantity;
                    sigue = true;
                }
            });
        }
        if (!sigue)
            this.quantityDepartment = 0;
        this.departmentSelected = event;
        console.log(event);
        this.usersQuantity.setDepartmentSelected(event);
        console.log("Department selected: " + this.usersQuantity.getDepartmentSelected());
    };
    ReservationCreateExternalComponent.prototype.decrementCareer = function (career) {
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
                        var newDivisionUser = new userDetails_model_2.UserDivisionModel(quantity_1, this.usersQuantity.getDivisionSelected(), selectedCareer, undefined, this.registrationNumber);
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
    ReservationCreateExternalComponent.prototype.incrementCareer = function (career) {
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
            var newDivisionUser = new userDetails_model_2.UserDivisionModel(quantity_2, this.usersQuantity.getDivisionSelected(), selectedCareer, undefined, this.registrationNumber);
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
                    var newDivisionUser = new userDetails_model_2.UserDivisionModel(quantity_3, this.usersQuantity.getDivisionSelected(), selectedCareer, undefined, this.registrationNumber);
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
                    var newDivisionUser = new userDetails_model_2.UserDivisionModel(quantity_4, this.usersQuantity.getDivisionSelected(), selectedCareer, undefined, this.registrationNumber);
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
    ReservationCreateExternalComponent.prototype.decrementDepartment = function () {
        var _this = this;
        this.quantityDepartment -= 1;
        this.newReservation.usersDetails.forEach(function (e, index) {
            if (_this.usersQuantity.getDepartmentSelected() == e.department) {
                e.quantity -= 1;
                if (e.quantity == 0) {
                    _this.newReservation.usersDetails.splice(index, 1);
                }
            }
        });
        if (this.newReservation.peopleQuantity > 0) {
            this.newReservation.peopleQuantity -= 1;
        }
        console.log(this.newReservation.usersDetails);
    };
    ReservationCreateExternalComponent.prototype.incrementDepartment = function () {
        var _this = this;
        var exist = false;
        this.quantityDepartment += 1;
        this.newReservation.usersDetails.forEach(function (e, index) {
            if (_this.usersQuantity.getDepartmentSelected() == e.department) {
                e.quantity += 1;
                exist = true;
            }
        });
        if (!exist) {
            var newDepartmentUser = new userDetails_model_1.UserDepartmentModel(this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), undefined, this.registrationNumber);
            this.newReservation.usersDetails.push(newDepartmentUser);
        }
        this.newReservation.peopleQuantity += 1;
        console.log(this.newReservation.usersDetails);
    };
    return ReservationCreateExternalComponent;
}());
ReservationCreateExternalComponent = __decorate([
    core_1.Component({
        selector: 'app-reservation-create-external',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create-external/reservation-create-external.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create-external/reservation-create-external.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_reservation_service_1.DataReservationService !== "undefined" && data_reservation_service_1.DataReservationService) === "function" && _a || Object, typeof (_b = typeof departments_service_1.DepartmentsService !== "undefined" && departments_service_1.DepartmentsService) === "function" && _b || Object, typeof (_c = typeof users_quantity_service_1.UsersQuantityService !== "undefined" && users_quantity_service_1.UsersQuantityService) === "function" && _c || Object, typeof (_d = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _d || Object, typeof (_e = typeof cubicles_service_1.CubiclesService !== "undefined" && cubicles_service_1.CubiclesService) === "function" && _e || Object, typeof (_f = typeof reservations_service_1.ReservationsService !== "undefined" && reservations_service_1.ReservationsService) === "function" && _f || Object, typeof (_g = typeof careers_service_1.CareersService !== "undefined" && careers_service_1.CareersService) === "function" && _g || Object, typeof (_h = typeof external_user_service_1.ExternalUserService !== "undefined" && external_user_service_1.ExternalUserService) === "function" && _h || Object, typeof (_j = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _j || Object, typeof (_k = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _k || Object])
], ReservationCreateExternalComponent);
exports.ReservationCreateExternalComponent = ReservationCreateExternalComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=reservation-create-external.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\nform {\n  margin-top: 100px;\n}\n.title-rs {\n  padding: 20px 0;\n}\n.content {\n  border: solid #000000;\n  background-color: #ffffff;\n}\n.circle {\n  position: relative;\n  /*font-size: 10px;*/\n  width: 20px;\n  height: 25px;\n  margin-top: 5px;\n  /*border-radius: 80%;*/\n}\n.circle i {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 5px;\n}\n.input-quantity {\n  margin: 0px 20px;\n  width: 60px;\n}\n.plus-minus-group {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.list-group {\n  /*border: solid green;*/\n  margin-left: 20px;\n  width: auto;\n  position: relative;\n  padding-top: 25px;\n}\n.list-group span {\n  position: absolute;\n  top: 0;\n  margin-left: 60px;\n  font-size: 13px;\n  /*border: solid brown;*/\n}\n.department-list {\n  margin-left: 20px;\n  width: auto;\n  position: relative;\n  padding-top: 25px;\n}\n.department-list span {\n  position: absolute;\n  top: 0;\n  margin-left: 10px;\n  font-size: 13px;\n  /*border: solid brown;*/\n}\n.title-people {\n  /*border: solid orange;\n  padding: 0;*/\n  /*vertical-align: middle;\n  margin: 0 auto;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;*/\n}\n.hola {\n  margin: 0 auto;\n  /*border: solid green;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 class=\"text-center\">Create Reservation</h1> -->\n    <form *ngIf=\"!called\" #reservationForm=\"ngForm\">\n      <div class=\"grid-container\">\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"cell\">\n            <button type=\"button\" class=\"button\" name=\"button\" (click)=\"reservateExternalUser()\">Usuario externo</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"grid-container content\">\n        <div class=\"grid-x grid-padding-x title-rs\">\n          <div class=\"cell\">\n            <h2>Nueva reservacion</h2>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"cell form-group\">\n            <label>Usuario\n              <div class=\"input-group\">\n                <input class=\"input-group-field\" type=\"number\" name=\"user\" [(ngModel)]=\"registrationNumber\" placeholder=\"Ingrese la matricula\" required>\n                <div class=\"input-group-button\">\n                  <button type=\"button\" class=\"button\" (click)=\"searchUser()\">Buscar</button>\n                </div>\n              </div>\n            </label>\n            <p *ngIf=\"anyErrors?.messageUser\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors.messageUser}}</p>\n            <p *ngIf=\"anyErrors?.msg\" class=\"help-text\" id=\"userHelpText\" style=\"color: #3f9d51;\">{{anyErrors.msg}}</p>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-2 cell form-group\">\n            <label>Cubiculo\n              <input type=\"number\" class=\"form-control\" value=\"{{newReservation?.cubicle}}\">\n            </label>\n          </div>\n\n          <div class=\"small-5 cell form-group\">\n            <label>Hora de entrada\n              <input type=\"time\" class=\"form-control\" name=\"entryTime\" [(ngModel)]=\"currentTime\">\n              <p *ngIf=\"anyErrors?.errors?.entryTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.entryTime.message}}</p>\n            </label>\n          </div>\n\n          <div class=\"small-5 cell form-group\">\n            <label>Hora de salida\n              <input type=\"time\" class=\"form-control\" name=\"departureTime\" [(ngModel)]=\"departureTime\">\n              <p *ngIf=\"anyErrors?.errors?.departureTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departureTime.message}}</p>\n              <p *ngIf=\"departureTimeError\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{departureTimeError.departureTimeMsg}}</p>\n\n            </label>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"auto cell form-group\">\n            <label>Division\n              <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"selectedDivision\" (ngModelChange)=\"divisionChange($event)\">\n                <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"auto cell form-group\">\n            <label>Departamento\n              <select class=\"form-control\" name=\"selectedDepartment\" [ngModel]=\"departmentSelected\" (ngModelChange)=\"departmentChange($event)\">\n                <option *ngFor=\"let department of departments\" [value]=\"department\">{{department}}</option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"auto cell\">\n            <label>Fecha\n              <input type=\"date\" name=\"dateReservation\" [(ngModel)]=\"currentDate\" placeholder=\"Fecha\">\n              <p *ngIf=\"anyErrors?.errors?.reservationDate\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.reservationDate.message}}</p>\n\n            </label>\n          </div>\n        </div>\n\n        <!-- Input option department -->\n        <div *ngIf=\"departmentSelected\" class=\"grid-x grid-padding-x plus-minus-group\">\n            <div class=\"input-group department-list\">\n              <span>{{departmentSelected}}</span>\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber || quantityDepartment == 0\" (click)=\"decrementDepartment()\" data-quantity=\"minus\" data-field=\"quantity\">\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n              </button>\n              <input class=\"text-center input-quantity\" type=\"number\" name=\"quantity\" [value]=\"quantityDepartment\">\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber\" (click)=\"incrementDepartment()\" data-quantity=\"plus\" data-field=\"quantity\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n        </div>\n\n        <!-- Input option careers -->\n        <div class=\"grid-x grid-padding-x plus-minus-group\">\n          <ul class=\"menu\">\n            <li *ngFor=\"let career of currentCareers; let i = index\" class=\"input-group list-group\">\n              <span>{{career}}</span>\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber || valores[i].count == 0\" (click)=\"decrementCareer(career)\" data-quantity=\"minus\" data-field=\"quantity\">\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n              </button>\n              <input class=\"text-center input-quantity\" type=\"number\" name=\"quantity\" [value]=\"valores[i].count\">\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber\" (click)=\"incrementCareer(career)\" data-quantity=\"plus\" data-field=\"quantity\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              </button>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"grid-x grid-margin-x\">\n          <div class=\"small-2 cell title-people\">\n            <label>Personas\n              <input type=\"number\" name=\"peopleQuantity\" [(ngModel)]=\"newReservation.peopleQuantity\">\n            </label>\n          </div>\n          <div class=\"small-10 medium-10 large-10 cell\">\n            <label> Prestamo de material\n              <textarea name=\"borrowedMaterial\" placeholder=\"Ingresar el material prestado\" [(ngModel)]=\"newReservation.borrowedMaterial\"></textarea>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-6 medium-6 large-4 cell text-center hola\">\n            <button type=\"button\" class=\"button\" name=\"button\" [disabled]=\"!reservationForm.form.valid\" (click)=\"save()\">\n              Reservar\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n\n    <app-reservation-create-external *ngIf=\"called\"></app-reservation-create-external>\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-create/reservation-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var reservations_service_1 = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var departments_service_1 = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var users_quantity_service_1 = __webpack_require__("../../../../../src/app/services/usersQuantity/users.quantity.service.ts");
var users_service_1 = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var reservation_model_1 = __webpack_require__("../../../../../src/app/models/reservation.model.ts");
var userDetails_model_1 = __webpack_require__("../../../../../src/app/models/userDetails.model.ts");
var userDetails_model_2 = __webpack_require__("../../../../../src/app/models/userDetails.model.ts");
var user_model_1 = __webpack_require__("../../../../../src/app/models/user.model.ts");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var ReservationCreateComponent = (function () {
    function ReservationCreateComponent(dataReservationService, departmentsService, usersService, usersQuantity, settingService, cubiclesService, reservationsService, careersService, router, route) {
        this.dataReservationService = dataReservationService;
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
        this.newReservation = new reservation_model_1.ReservationModel();
        this.newUser = new user_model_1.UserModel();
        this.quantityDepartment = 0;
        this.departments = new Array;
        this.called = false;
    }
    ReservationCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Fehca y hora de entrada: " + this.newReservation.entryTime);
        var hour = this.newReservation.entryTime.getHours().toString();
        var minutes = this.newReservation.entryTime.getMinutes();
        if (parseInt(hour) >= 0 && parseInt(hour) <= 9) {
            hour = '0' + hour;
            console.log(hour);
        }
        if (minutes >= 0 && minutes <= 9) {
            this.currentTime = hour + ":0" + minutes;
            console.log(this.currentTime);
        }
        else {
            this.currentTime = hour + ":" + minutes;
        }
        console.log('Hora de entrada: ' + this.currentTime);
        var day = this.newReservation.reservationDate.getDate().toString();
        var month = this.newReservation.reservationDate.getMonth() + 1;
        var year = this.newReservation.reservationDate.getFullYear();
        if (parseInt(day) >= 1 && parseInt(day) <= 9) {
            day = '0' + day;
            console.log(day);
        }
        if (month >= 1 && month <= 9) {
            this.currentDate = year + "-0" + month + "-" + day;
        }
        else {
            this.currentDate = year + "-" + month + "-" + day;
        }
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
    ReservationCreateComponent.prototype.ngOnDestroy = function () {
        console.clear();
        this.newReservation = new reservation_model_1.ReservationModel();
    };
    ReservationCreateComponent.prototype.save = function () {
        var _this = this;
        this.newReservation.entryTime = new Date(this.currentDate + ", " + this.currentTime);
        this.newReservation.departureTime = new Date(this.currentDate + ", " + this.departureTime);
        this.newReservation.reservationDate = new Date(this.currentDate + ", " + this.currentTime);
        this.usersService.getByRegistrationNumber(this.registrationNumber).then(function (user) {
            var student = JSON.parse(JSON.stringify(user)).usuario;
            var employee = JSON.parse(JSON.stringify(user)).empleado;
            if (student) {
                // this.dataReservationService.changeUserType(student)
                _this.newReservation.user = student;
            }
            else {
                // this.dataReservationService.changeUserType(employee)
                _this.newReservation.employee = employee;
            }
            _this.reservationsService.create(_this.newReservation)
                .subscribe(function (data) {
                console.log(data);
                _this.router.navigateByUrl('/');
            }, function (err) {
                _this.anyErrors = JSON.parse(err._body);
                console.log(_this.anyErrors);
                _this.departureTimeError = JSON.parse(err._body);
            });
        }).catch(function (error) {
            console.log("El usuario no se encuentra en la base de datos " + error.status);
            _this.anyErrors = JSON.parse(error._body);
        });
    };
    ReservationCreateComponent.prototype.reservateExternalUser = function () {
        this.called = true;
    };
    ReservationCreateComponent.prototype.searchUser = function () {
        var _this = this;
        this.usersService.getByRegistrationNumber(this.registrationNumber).then(function (data) {
            // console.log(JSON.parse(JSON.stringify(data)).usuario || JSON.parse(JSON.stringify(data)).empleado)
            _this.anyErrors = JSON.parse(JSON.stringify(data));
            // this.newReservation.user = user
        }).catch(function (err) { return _this.anyErrors = JSON.parse(err._body); });
    };
    ReservationCreateComponent.prototype.divisionChange = function (newDivision) {
        var _this = this;
        this.departmentSelected = '';
        this.currentCareers = new Array;
        this.valores = [];
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
        var _this = this;
        this.selectedDivision = {};
        var sigue = false;
        console.log(event);
        this.currentCareers = [];
        if (this.newReservation.usersDetails) {
            this.newReservation.usersDetails.forEach(function (e, index) {
                if (event == e.department) {
                    _this.quantityDepartment = e.quantity;
                    sigue = true;
                }
            });
        }
        if (!sigue)
            this.quantityDepartment = 0;
        this.departmentSelected = event;
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
                        var newDivisionUser = new userDetails_model_2.UserDivisionModel(quantity_1, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
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
            var newDivisionUser = new userDetails_model_2.UserDivisionModel(quantity_2, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
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
                    var newDivisionUser = new userDetails_model_2.UserDivisionModel(quantity_3, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
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
                    var newDivisionUser = new userDetails_model_2.UserDivisionModel(quantity_4, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
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
    ReservationCreateComponent.prototype.decrementDepartment = function () {
        var _this = this;
        this.quantityDepartment -= 1;
        this.newReservation.usersDetails.forEach(function (e, index) {
            if (_this.usersQuantity.getDepartmentSelected() == e.department) {
                e.quantity -= 1;
                if (e.quantity == 0) {
                    _this.newReservation.usersDetails.splice(index, 1);
                }
            }
        });
        if (this.newReservation.peopleQuantity > 0) {
            this.newReservation.peopleQuantity -= 1;
        }
        console.log(this.newReservation.usersDetails);
    };
    ReservationCreateComponent.prototype.incrementDepartment = function () {
        var _this = this;
        var exist = false;
        this.quantityDepartment += 1;
        this.newReservation.usersDetails.forEach(function (e, index) {
            if (_this.usersQuantity.getDepartmentSelected() == e.department) {
                e.quantity += 1;
                exist = true;
            }
        });
        if (!exist) {
            var newDepartmentUser = new userDetails_model_1.UserDepartmentModel(this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), this.registrationNumber);
            this.newReservation.usersDetails.push(newDepartmentUser);
        }
        this.newReservation.peopleQuantity += 1;
        console.log(this.newReservation.usersDetails);
    };
    return ReservationCreateComponent;
}());
ReservationCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-reservation-create',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation-create/reservation-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_reservation_service_1.DataReservationService !== "undefined" && data_reservation_service_1.DataReservationService) === "function" && _a || Object, typeof (_b = typeof departments_service_1.DepartmentsService !== "undefined" && departments_service_1.DepartmentsService) === "function" && _b || Object, typeof (_c = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" && _c || Object, typeof (_d = typeof users_quantity_service_1.UsersQuantityService !== "undefined" && users_quantity_service_1.UsersQuantityService) === "function" && _d || Object, typeof (_e = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _e || Object, typeof (_f = typeof cubicles_service_1.CubiclesService !== "undefined" && cubicles_service_1.CubiclesService) === "function" && _f || Object, typeof (_g = typeof reservations_service_1.ReservationsService !== "undefined" && reservations_service_1.ReservationsService) === "function" && _g || Object, typeof (_h = typeof careers_service_1.CareersService !== "undefined" && careers_service_1.CareersService) === "function" && _h || Object, typeof (_j = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _j || Object, typeof (_k = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _k || Object])
], ReservationCreateComponent);
exports.ReservationCreateComponent = ReservationCreateComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=reservation-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  margin-top: 30px;\n}\n.remove {\n  position: relative;\n  /*background: inherit;*/\n}\n.remove-item {\n  position: absolute;\n  left: 30%;\n}\n.message {\n  margin-top: 50px;\n}\n.message p {\n  color: grey;\n  font-variant: small-caps;\n  font-weight: bold;\n  font-size: 30px;\n}\n.user-people, .user-number {\n  margin: 0;\n  font-size: 16px;\n  color: #000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <div class=\"grid-x grid-padding-x\">\n    <div class=\"title cell\">\n      <h2 class=\"text-center\">Reservaciones cubiculo {{cubicleReservationNumber}}</h2>\n    </div>\n  </div>\n\n  <div *ngIf=\"exist\" class=\"grid-x grid-padding-x\">\n    <div class=\"small-12 cell\">\n      <label>Buscar\n        <input type=\"text\" placeholder=\"Ingrese matricula del usuario\" [(ngModel)]=\"searchReservationUser\">\n      </label>\n    </div>\n    <table class=\"unstriped\">\n      <thead>\n        <tr>\n          <th>Usuario</th>\n          <th>Cubiculo</th>\n          <th>Entrada</th>\n          <th>Salida</th>\n          <th>Fecha</th>\n          <th>Personas</th>\n          <th>Modificar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let reservation of reservations | searchReservation: searchReservationUser\" class=\"text-center\">\n          <tr data-closable>\n            <td class=\"clear button user-number\" (click)=\"getCurrentUser(reservation.user || reservation.employee || reservation.externalUser)\">{{reservation.user?.registrationNumber || reservation.employee.employeeNumber || reservation.externalUser}}</td>\n            <td>{{reservation.cubicle}}</td>\n            <td>{{reservation.entryTime | date: 'shortTime'}}</td>\n            <td>{{reservation.departureTime | date: 'shortTime'}}</td>\n            <td>{{reservation.reservationDate | date: 'mediumDate'}}</td>\n            <td class=\"clear button user-people\" style=\"color: #000000; font-size: 16px; margin: 0;\" (click)=\"getCurrentReservation(reservation)\">{{reservation.peopleQuantity}}</td>\n            <td>\n              <a routerLink=\"/reservations-update/{{reservation._id}}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n              <a (click)=\"delete(reservation._id)\" data-close><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n  <div *ngIf=\"!exist\" class=\"grid-x grid-padding-x message\">\n    <div class=\"small-12 cell text-center\">\n      <p>no existen reservaciones actualmente</p>\n    </div>\n  </div>\n</div>\n<ngui-popup #popup></ngui-popup>\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var reservations_service_1 = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
var cubicles_service_1 = __webpack_require__("../../../../../src/app/services/cubicles/cubicles.service.ts");
var popup_1 = __webpack_require__("../../../../@ngui/popup/dist/index.js");
var popup_userDetails_component_1 = __webpack_require__("../../../../../src/app/home/popup-userDetails/popup-userDetails.component.ts");
var popup_user_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-user-info/popup-user-info.component.ts");
var popup_employee_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-employee-info/popup-employee-info.component.ts");
var popup_external_info_component_1 = __webpack_require__("../../../../../src/app/home/popup-external-info/popup-external-info.component.ts");
var data_reservation_service_1 = __webpack_require__("../../../../../src/app/services/dataReservation/data-reservation.service.ts");
var ReservationEditComponent = (function () {
    function ReservationEditComponent(dataReservationService, cubiclesService, reservationsService, router, route) {
        this.dataReservationService = dataReservationService;
        this.cubiclesService = cubiclesService;
        this.reservationsService = reservationsService;
        this.router = router;
        this.route = route;
    }
    ReservationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var cubicleNumberId = params['id']; //
            if (cubicleNumberId) {
                _this.cubiclesService.getById(cubicleNumberId).then(function (cubicle) {
                    _this.cubicleReservationNumber = cubicle.cubicleNumber;
                    _this.reservationsService.getByCubicle(_this.cubicleReservationNumber.toString()).then(function (data) {
                        data.length == 0 ? _this.exist = false : _this.exist = true;
                        _this.reservations = data;
                    });
                });
            }
        });
    };
    ReservationEditComponent.prototype.getCurrentUser = function (user) {
        if (user.registrationNumber) {
            this.openPopup2();
            this.dataReservationService.changeUser(user);
        }
        else if (user.employeeNumber) {
            this.openPopup3();
            this.dataReservationService.changeEmployee(user);
        }
        else {
            this.openPopup4();
            this.dataReservationService.changeExternalUser(user);
        }
    };
    ReservationEditComponent.prototype.getCurrentReservation = function (reservation) {
        this.dataReservationService.addReservationsDetails(reservation.usersDetails);
        this.openPopup();
    };
    ReservationEditComponent.prototype.openPopup = function () {
        this.popup.open(popup_userDetails_component_1.PopupUserDetailsComponent, {
            classNames: 'custom',
            closeButton: true
        });
    };
    ReservationEditComponent.prototype.openPopup2 = function () {
        this.popup2.open(popup_user_info_component_1.PopupUserInfoComponent, {
            classNames: 'custom',
            closeButton: true
        });
    };
    ReservationEditComponent.prototype.openPopup3 = function () {
        this.popup3.open(popup_employee_info_component_1.PopupEmployeeInfoComponent, {
            classNames: 'custom',
            closeButton: true
        });
    };
    ReservationEditComponent.prototype.openPopup4 = function () {
        this.popup4.open(popup_external_info_component_1.PopupExternalInfoComponent, {
            classNames: 'custom',
            closeButton: true
        });
    };
    ReservationEditComponent.prototype.delete = function (id) {
        this.reservationsService.remove(id).then(function (response) {
            console.log(response);
        }).catch(function (err) { return console.log("Hubo un error " + err); });
        this.exist = false;
    };
    return ReservationEditComponent;
}());
__decorate([
    core_1.ViewChild(popup_1.NguiPopupComponent),
    __metadata("design:type", typeof (_a = typeof popup_1.NguiPopupComponent !== "undefined" && popup_1.NguiPopupComponent) === "function" && _a || Object)
], ReservationEditComponent.prototype, "popup", void 0);
__decorate([
    core_1.ViewChild(popup_1.NguiPopupComponent),
    __metadata("design:type", typeof (_b = typeof popup_1.NguiPopupComponent !== "undefined" && popup_1.NguiPopupComponent) === "function" && _b || Object)
], ReservationEditComponent.prototype, "popup2", void 0);
__decorate([
    core_1.ViewChild(popup_1.NguiPopupComponent),
    __metadata("design:type", typeof (_c = typeof popup_1.NguiPopupComponent !== "undefined" && popup_1.NguiPopupComponent) === "function" && _c || Object)
], ReservationEditComponent.prototype, "popup3", void 0);
__decorate([
    core_1.ViewChild(popup_1.NguiPopupComponent),
    __metadata("design:type", typeof (_d = typeof popup_1.NguiPopupComponent !== "undefined" && popup_1.NguiPopupComponent) === "function" && _d || Object)
], ReservationEditComponent.prototype, "popup4", void 0);
ReservationEditComponent = __decorate([
    core_1.Component({
        selector: 'app-reservation-edit',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation-edit/reservation-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof data_reservation_service_1.DataReservationService !== "undefined" && data_reservation_service_1.DataReservationService) === "function" && _e || Object, typeof (_f = typeof cubicles_service_1.CubiclesService !== "undefined" && cubicles_service_1.CubiclesService) === "function" && _f || Object, typeof (_g = typeof reservations_service_1.ReservationsService !== "undefined" && reservations_service_1.ReservationsService) === "function" && _g || Object, typeof (_h = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _h || Object, typeof (_j = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _j || Object])
], ReservationEditComponent);
exports.ReservationEditComponent = ReservationEditComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=reservation-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-update/reservation-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid rgb(43, 147, 72);\n}\n.ng-invalid:not(form) {\n  border-left: 5px solid rgb(152, 57, 57);\n}\nform {\n  margin-top: 100px;\n}\n.content {\n  border: solid #000000;\n  background-color: #ffffff;\n}\n.circle {\n  position: relative;\n  /*font-size: 10px;*/\n  width: 20px;\n  height: 25px;\n  margin-top: 5px;\n  /*border-radius: 80%;*/\n}\n.circle i {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 5px;\n}\n.input-quantity {\n  margin: 0px 20px;\n  width: 60px;\n}\n.plus-minus-group {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.list-group {\n  /*border: solid green;*/\n  margin-left: 20px;\n  width: auto;\n  position: relative;\n  padding-top: 25px;\n}\n.list-group span {\n  position: absolute;\n  top: 0;\n  margin-left: 60px;\n  font-size: 13px;\n  /*border: solid brown;*/\n}\n.department-list {\n  margin-left: 20px;\n  width: auto;\n  position: relative;\n  padding-top: 25px;\n}\n.department-list span {\n  position: absolute;\n  top: 0;\n  margin-left: 10px;\n  font-size: 13px;\n  /*border: solid brown;*/\n}\n.title-people {\n  vertical-align: middle;\n  margin: 0 auto;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.hola {\n  margin: 0 auto;\n  /*border: solid green;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-update/reservation-update.component.html":
/***/ (function(module, exports) {

module.exports = "    <form #reservationForm=\"ngForm\">\n      <div class=\"grid-container content\">\n        <div class=\"grid-x grid-padding-x title-rs\">\n          <div class=\"cell\">\n            <h2>Modificar reservacion</h2>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"cell form-group\">\n            <label>Usuario\n              <div class=\"input-group\">\n                <input class=\"input-group-field\" type=\"{{ externalUser ? 'number' : 'text' }}\" name=\"user\" [ngModel]=\"\" (ngModelChange)=\"codeOnChange($event)\" placeholder=\"Ingrese la matricula\" required>\n                <div class=\"input-group-button\">\n                  <button type=\"button\" class=\"button\" (click)=\"searchUser()\">Buscar</button>\n                </div>\n              </div>\n            </label>\n            <p *ngIf=\"anyErrors?.messageUser\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors.messageUser}}</p>\n            <p *ngIf=\"anyErrors?.msg\" class=\"help-text\" id=\"userHelpText\" style=\"color: #3f9d51;\">{{anyErrors.msg}}</p>\n          </div>\n        </div>\n\n        <!-- <div class=\"grid-x grid-padding-x\">\n          <div class=\"cell form-group\">\n            <label>Usuario\n              <div class=\"input-group\">\n                <input class=\"input-group-field\" type=\"number\" name=\"user\" [(ngModel)]=\"registrationNumber\" placeholder=\"Ingrese la matricula\" required>\n                <div class=\"input-group-button\">\n                  <button type=\"button\" class=\"button\" (click)=\"searchUser()\">Buscar</button>\n                </div>\n              </div>\n            </label>\n            <p *ngIf=\"anyErrors?.messageUser\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors.messageUser}}</p>\n            <p *ngIf=\"anyErrors?.msg\" class=\"help-text\" id=\"userHelpText\" style=\"color: #3f9d51;\">{{anyErrors.msg}}</p>\n          </div>\n        </div> -->\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-2 cell form-group\">\n            <label>Cubiculo\n              <input type=\"number\" class=\"form-control\" value=\"{{updateReservation?.cubicle}}\">\n            </label>\n          </div>\n\n          <div class=\"small-5 cell form-group\">\n            <label>Hora de entrada\n              <input type=\"time\" class=\"form-control\" name=\"entryTime\" [(ngModel)]=\"currentTime\">\n              <p *ngIf=\"anyErrors?.errors?.entryTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.entryTime.message}}</p>\n\n            </label>\n          </div>\n\n          <div class=\"small-5 cell form-group\">\n            <label>Hora de salida\n              <input type=\"time\" class=\"form-control\" [(ngModel)]=\"currentDepartureTime\" name=\"departureTime\">\n              <p *ngIf=\"anyErrors?.errors?.departureTime\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.departureTime.message}}</p>\n              <p *ngIf=\"departureTimeError\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{departureTimeError}}</p>\n\n            </label>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"auto cell form-group\">\n            <label>Division\n              <select class=\"form-control\" name=\"selectedDivision\" [ngModel]=\"selectedDivision\" (ngModelChange)=\"divisionChange($event)\">\n                <option *ngFor=\"let division of divisions\" [ngValue]=\"division\">{{division.division}}</option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"auto cell form-group\">\n            <label>Departamento\n              <select class=\"form-control\" name=\"selectedDepartment\" data-open=\"quantity-department\" [ngModel]=\"departmentSelected\" (ngModelChange)=\"departmentChange($event)\">\n                <option *ngFor=\"let department of departments\" [value]=\"department\">{{department}}</option>\n              </select>\n            </label>\n          </div>\n\n          <div class=\"auto cell\">\n            <label>Fecha\n              <input type=\"date\" name=\"dateReservation\" [(ngModel)]=\"currentDate\" placeholder=\"Fecha\">\n              <p *ngIf=\"anyErrors?.errors?.reservationDate\" class=\"help-text\" id=\"userHelpText\" style=\"color: #b53535;\">{{anyErrors?.errors?.reservationDate.message}}</p>\n            </label>\n          </div>\n        </div>\n\n        <!-- Input option department -->\n        <div *ngIf=\"departmentSelected\" class=\"grid-x grid-padding-x plus-minus-group\">\n            <div class=\"input-group department-list\">\n              <span>{{departmentSelected}}</span>\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber || quantityDepartment == 0\" (click)=\"decrementDepartment()\" data-quantity=\"minus\" data-field=\"quantity\">\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n              </button>\n              <input class=\"text-center input-quantity\" type=\"number\" name=\"quantity\" [value]=\"quantityDepartment\">\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber\" (click)=\"incrementDepartment()\" data-quantity=\"plus\" data-field=\"quantity\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n        </div>\n\n        <!-- Input option careers -->\n        <div class=\"grid-x grid-padding-x plus-minus-group\">\n          <ul class=\"menu\">\n            <li *ngFor=\"let career of currentCareers; let i = index\" class=\"input-group list-group\">\n              <span>{{career}}</span>\n              <button type=\"button\" class=\"button hollow circle\" [disabled]=\"!registrationNumber || valores[i].count == 0\" (click)=\"decrement(career)\" data-quantity=\"minus\" data-field=\"quantity\">\n                <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n              </button>\n              <input class=\"text-center input-quantity\" type=\"number\" name=\"quantity\" [value]=\"valores[i].count\">\n              <button type=\"button\" class=\"button hollow circle\" (click)=\"increment(career)\" data-quantity=\"plus\" data-field=\"quantity\">\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n              </button>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-2 cell title-people\">\n            <label>Cantidad total\n              <input type=\"number\" name=\"peopleQuantity\" [(ngModel)]=\"updateReservation.peopleQuantity\">\n            </label>\n          </div>\n          <div class=\"small-12 medium-10 large-10 cell\">\n            <label>\n              Prestamo de material\n              <textarea name=\"borrowedMaterial\" placeholder=\"Ingresar el material prestado\" [(ngModel)]=\"updateReservation.borrowedMaterial\"></textarea>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"grid-x grid-padding-x\">\n          <div class=\"small-6 medium-6 large-4 cell text-center hola\">\n            <button type=\"button\" class=\"button\" name=\"button\" [disabled]=\"!reservationForm.form.valid\" (click)=\"update()\">Actualizar</button>\n          </div>\n        </div>\n\n      </div>\n    </form>\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation-update/reservation-update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var reservations_service_1 = __webpack_require__("../../../../../src/app/services/reservations/reservations.service.ts");
var users_quantity_service_1 = __webpack_require__("../../../../../src/app/services/usersQuantity/users.quantity.service.ts");
var settings_service_1 = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var reservation_model_1 = __webpack_require__("../../../../../src/app/models/reservation.model.ts");
var userDetails_model_1 = __webpack_require__("../../../../../src/app/models/userDetails.model.ts");
var userDetails_model_2 = __webpack_require__("../../../../../src/app/models/userDetails.model.ts");
var users_service_1 = __webpack_require__("../../../../../src/app/services/users/users.service.ts");
var departments_service_1 = __webpack_require__("../../../../../src/app/services/departments/departments.service.ts");
var user_model_1 = __webpack_require__("../../../../../src/app/models/user.model.ts");
var careers_service_1 = __webpack_require__("../../../../../src/app/services/careers/careers.service.ts");
var external_user_service_1 = __webpack_require__("../../../../../src/app/services/externalUser/external-user.service.ts");
var ReservationUpdateComponent = (function () {
    function ReservationUpdateComponent(route, router, reservationsService, usersQuantity, settingService, usersService, careersService, departmentsService, externalUserService) {
        this.route = route;
        this.router = router;
        this.reservationsService = reservationsService;
        this.usersQuantity = usersQuantity;
        this.settingService = settingService;
        this.usersService = usersService;
        this.careersService = careersService;
        this.departmentsService = departmentsService;
        this.externalUserService = externalUserService;
        this.updateReservation = new reservation_model_1.ReservationModel();
        this.newUser = new user_model_1.UserModel();
        this.departments = new Array;
        this.valores = new Array;
        this.employee = false;
        this.externalUser = false;
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
                    var hour = entryTime.getHours().toString();
                    if (parseInt(hour) >= 0 && parseInt(hour) <= 9) {
                        hour = '0' + hour;
                        console.log(hour);
                    }
                    var minutes = entryTime.getMinutes() < 10 ? "0" + entryTime.getMinutes() : entryTime.getMinutes();
                    _this.currentTime = hour + ":" + minutes;
                    var reservationDate = new Date(reservation.reservationDate);
                    var day = reservationDate.getDate().toString();
                    var month = reservationDate.getMonth() + 1;
                    var year = reservationDate.getFullYear();
                    if (parseInt(day) >= 1 && parseInt(day) <= 9) {
                        day = '0' + day;
                        console.log(day);
                    }
                    if (month >= 1 && month <= 9) {
                        _this.currentDate = year + "-0" + month + "-" + day;
                    }
                    else {
                        _this.currentDate = year + "-" + month + "-" + day;
                    }
                    var departureTime = new Date(reservation.departureTime);
                    var departureHour = departureTime.getHours().toString();
                    if (parseInt(departureHour) >= 0 && parseInt(departureHour) <= 9) {
                        departureHour = '0' + departureHour;
                        console.log(departureHour);
                    }
                    var departureMinutes = departureTime.getMinutes() < 10 ? "0" + departureTime.getMinutes() : departureTime.getMinutes();
                    _this.currentDepartureTime = departureHour + ":" + departureMinutes;
                    _this.updateReservation = reservation;
                    if (reservation.user) {
                        _this.registrationNumber = reservation.user['registrationNumber'];
                        _this.updateReservation.user = reservation.user;
                    }
                    else if (reservation.employee) {
                        _this.employee = true;
                        _this.registrationNumber = reservation.employee['employeeNumber'];
                        _this.updateReservation.employee = reservation.employee;
                    }
                    else {
                        _this.externalUser = true;
                        _this.externalUserCode = reservation.externalUser['userCode'];
                    }
                    console.log(_this.updateReservation);
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
        console.log(this.employee);
        this.updateReservation.entryTime = new Date(this.currentDate + ", " + this.currentTime);
        this.updateReservation.departureTime = new Date(this.currentDate + ", " + this.currentDepartureTime);
        this.updateReservation.reservationDate = new Date(this.currentDate + ", " + this.currentTime);
        if (this.employee) {
            if (this.registrationNumber != this.updateReservation.employee.employeeNumber) {
                console.log(this.registrationNumber);
                this.usersService.getByRegistrationNumber(this.registrationNumber).then(function (user) {
                    var student = JSON.parse(JSON.stringify(user)).usuario;
                    console.log(student);
                    var employee = JSON.parse(JSON.stringify(user)).empleado;
                    if (student) {
                        _this.updateReservation.employee = null;
                        _this.updateReservation.user = student;
                        console.log(_this.updateReservation.user);
                    }
                    else {
                        _this.updateReservation.employee = employee;
                    }
                }).catch(function (err) {
                    _this.anyErrors = JSON.parse(err._body);
                });
            }
        }
        else if (this.externalUser) {
            if (this.externalUserCode != this.updateReservation.externalUser.userCode) {
                this.externalUserService.getByUserCode(this.externalUserCode).then(function (user) {
                    var external = JSON.parse(JSON.stringify(user)).usuario;
                    console.log(external);
                    if (external) {
                        _this.updateReservation.employee = null;
                        _this.updateReservation.user = null;
                        _this.updateReservation.externalUser = external;
                        console.log(_this.updateReservation.externalUser);
                    }
                }).catch(function (err) {
                    _this.anyErrors = JSON.parse(err._body);
                });
            }
        }
        else {
            if (this.registrationNumber != this.updateReservation.user.registrationNumber) {
                this.usersService.getByRegistrationNumber(this.registrationNumber).then(function (user) {
                    var student = JSON.parse(JSON.stringify(user)).usuario;
                    var employee = JSON.parse(JSON.stringify(user)).empleado;
                    if (student) {
                        _this.updateReservation.user = student;
                    }
                    else {
                        _this.updateReservation.employee = employee;
                    }
                }).catch(function (err) {
                    _this.anyErrors = JSON.parse(err._body);
                });
            }
        }
        // if (this.registrationNumber != this.updateReservation.user['registrationNumber']) {
        //   this.usersService.getByRegistrationNumber(this.registrationNumber).then(user => {
        //     let student = JSON.parse(JSON.stringify(user)).usuario
        //     let employee = JSON.parse(JSON.stringify(user)).empleado
        //     if (student) {
        //       // this.dataReservationService.changeUserType(student)
        //       this.updateReservation.user = student
        //     } else {
        //       // this.dataReservationService.changeUserType(employee)
        //       this.updateReservation.employee = employee
        //     }
        //   }).catch(err => {
        //     this.anyErrors = JSON.parse(err._body)
        //   })
        // } else if (this.registrationNumber != this.updateReservation.employee['employeeNumber']) {
        //
        // }
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
    ReservationUpdateComponent.prototype.codeOnChange = function (event) {
        console.log(event);
    };
    ReservationUpdateComponent.prototype.searchUser = function () {
        var _this = this;
        this.usersService.getByRegistrationNumber(this.registrationNumber).then(function (data) {
            // console.log(JSON.parse(JSON.stringify(data)).usuario || JSON.parse(JSON.stringify(data)).empleado)
            _this.anyErrors = JSON.parse(JSON.stringify(data));
            // this.newReservation.user = user
        }).catch(function (err) { return _this.anyErrors = JSON.parse(err._body); });
    };
    ReservationUpdateComponent.prototype.departmentChange = function (event) {
        var _this = this;
        this.selectedDivision = {};
        var sigue = false;
        console.log(event);
        this.currentCareers = [];
        if (this.updateReservation.usersDetails) {
            this.updateReservation.usersDetails.forEach(function (e, index) {
                if (event == e.department) {
                    _this.quantityDepartment = e.quantity;
                    sigue = true;
                }
            });
        }
        if (!sigue)
            this.quantityDepartment = 0;
        this.departmentSelected = event;
        console.log(event);
        this.usersQuantity.setDepartmentSelected(event);
        console.log("Department selected: " + this.usersQuantity.getDepartmentSelected());
    };
    ReservationUpdateComponent.prototype.divisionChange = function (newDivision) {
        var _this = this;
        this.departmentSelected = '';
        this.currentCareers = new Array;
        this.valores = [];
        console.log(newDivision.division);
        this.usersQuantity.setDivisionSelected(newDivision.division);
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
                        _this.valores.forEach(function (element) {
                            if (element.career == career) {
                                element.count = carrera.quantity;
                            }
                        });
                        if (carrera.quantity == 0) {
                            _this.updateReservation.usersDetails.splice(index, 1);
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
                        var newDivisionUser = new userDetails_model_1.UserDivisionModel(quantity_1, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                        this.updateReservation.usersDetails.push(newDivisionUser);
                    }
                }
            }
            else {
                this.updateReservation.usersDetails.forEach(function (carrera, index) {
                    if (career == carrera.career) {
                        carrera.quantity -= 1;
                        _this.valores.forEach(function (element) {
                            if (element.career == career) {
                                element.count = carrera.quantity;
                            }
                        });
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
            var newDivisionUser = new userDetails_model_1.UserDivisionModel(quantity_2, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
            this.updateReservation.usersDetails.push(newDivisionUser);
        }
        else {
            if (this.usersQuantity.getCareer() != career) {
                var sigue_2 = false;
                this.updateReservation.usersDetails.forEach(function (carrera) {
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
                    var newDivisionUser = new userDetails_model_1.UserDivisionModel(quantity_3, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                    this.updateReservation.usersDetails.push(newDivisionUser);
                }
            }
            else {
                if (this.updateReservation.usersDetails.length == 0) {
                    var selectedCareer = career;
                    var quantity_4 = this.usersQuantity.getUsersCounter() + 1;
                    this.valores.forEach(function (element) {
                        if (element.career == career) {
                            element.count = quantity_4;
                        }
                    });
                    var newDivisionUser = new userDetails_model_1.UserDivisionModel(quantity_4, this.usersQuantity.getDivisionSelected(), selectedCareer, this.registrationNumber);
                    this.updateReservation.usersDetails.push(newDivisionUser);
                }
                else {
                    this.updateReservation.usersDetails.forEach(function (carrera) {
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
        this.updateReservation.peopleQuantity += 1;
        console.log(this.updateReservation.usersDetails);
    };
    ReservationUpdateComponent.prototype.decrementDepartment = function () {
        var _this = this;
        this.quantityDepartment -= 1;
        this.updateReservation.usersDetails.forEach(function (e, index) {
            if (_this.usersQuantity.getDepartmentSelected() == e.department) {
                e.quantity -= 1;
                if (e.quantity == 0) {
                    _this.updateReservation.usersDetails.splice(index, 1);
                }
            }
        });
        if (this.updateReservation.peopleQuantity > 0) {
            this.updateReservation.peopleQuantity -= 1;
        }
        console.log(this.updateReservation.usersDetails);
    };
    ReservationUpdateComponent.prototype.incrementDepartment = function () {
        var _this = this;
        var exist = false;
        this.quantityDepartment += 1;
        this.updateReservation.usersDetails.forEach(function (e, index) {
            if (_this.usersQuantity.getDepartmentSelected() == e.department) {
                e.quantity += 1;
                exist = true;
            }
        });
        if (!exist) {
            var newDepartmentUser = new userDetails_model_2.UserDepartmentModel(this.quantityDepartment, this.usersQuantity.getDepartmentSelected(), this.registrationNumber);
            this.updateReservation.usersDetails.push(newDepartmentUser);
        }
        this.updateReservation.peopleQuantity += 1;
        console.log(this.updateReservation.usersDetails);
    };
    return ReservationUpdateComponent;
}());
ReservationUpdateComponent = __decorate([
    core_1.Component({
        selector: 'app-reservation-update',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation-update/reservation-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation-update/reservation-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof reservations_service_1.ReservationsService !== "undefined" && reservations_service_1.ReservationsService) === "function" && _c || Object, typeof (_d = typeof users_quantity_service_1.UsersQuantityService !== "undefined" && users_quantity_service_1.UsersQuantityService) === "function" && _d || Object, typeof (_e = typeof settings_service_1.SettingsService !== "undefined" && settings_service_1.SettingsService) === "function" && _e || Object, typeof (_f = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" && _f || Object, typeof (_g = typeof careers_service_1.CareersService !== "undefined" && careers_service_1.CareersService) === "function" && _g || Object, typeof (_h = typeof departments_service_1.DepartmentsService !== "undefined" && departments_service_1.DepartmentsService) === "function" && _h || Object, typeof (_j = typeof external_user_service_1.ExternalUserService !== "undefined" && external_user_service_1.ExternalUserService) === "function" && _j || Object])
], ReservationUpdateComponent);
exports.ReservationUpdateComponent = ReservationUpdateComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
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

module.exports = "<!-- <p>reservation works!</p> -->\n"

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ReservationComponent = (function () {
    function ReservationComponent() {
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    return ReservationComponent;
}());
ReservationComponent = __decorate([
    core_1.Component({
        selector: 'app-reservation',
        template: __webpack_require__("../../../../../src/app/home/reservation/reservation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/reservation/reservation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReservationComponent);
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=reservation.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/reservation/reservation.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var reservation_component_1 = __webpack_require__("../../../../../src/app/home/reservation/reservation.component.ts");
var ReservationModule = (function () {
    function ReservationModule() {
    }
    return ReservationModule;
}());
ReservationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            reservation_component_1.ReservationComponent
        ]
    })
], ReservationModule);
exports.ReservationModule = ReservationModule;
//# sourceMappingURL=reservation.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/career.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CareerModel = (function () {
    function CareerModel() {
    }
    return CareerModel;
}());
exports.CareerModel = CareerModel;
//# sourceMappingURL=career.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/cubicle.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CubicleModel = (function () {
    function CubicleModel() {
    }
    return CubicleModel;
}());
exports.CubicleModel = CubicleModel;
//# sourceMappingURL=cubicle.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/department.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DepartmentModel = (function () {
    function DepartmentModel() {
    }
    return DepartmentModel;
}());
exports.DepartmentModel = DepartmentModel;
//# sourceMappingURL=department.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/employee.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeModel = (function () {
    function EmployeeModel() {
    }
    return EmployeeModel;
}());
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=employee.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/externalUser.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExternalUserModel = (function () {
    function ExternalUserModel() {
    }
    return ExternalUserModel;
}());
exports.ExternalUserModel = ExternalUserModel;
//# sourceMappingURL=externalUser.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/reservation.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReservationModel = (function () {
    function ReservationModel() {
        this.reservationDate = new Date();
        this.entryTime = new Date();
        this.peopleQuantity = 0;
        this.usersDetails = new Array();
    }
    return ReservationModel;
}());
exports.ReservationModel = ReservationModel;
//# sourceMappingURL=reservation.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/userDetails.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var UserDetailsModel = (function () {
    function UserDetailsModel() {
        this.quantity = 0;
    }
    return UserDetailsModel;
}());
exports.UserDetailsModel = UserDetailsModel;
var UserDepartmentModel = (function (_super) {
    __extends(UserDepartmentModel, _super);
    function UserDepartmentModel(quantity, department, registrationNumber, userCode) {
        var _this = _super.call(this) || this;
        _this.quantity = quantity;
        _this.department = department;
        _this.registrationNumber = registrationNumber;
        _this.userCode = userCode;
        return _this;
    }
    return UserDepartmentModel;
}(UserDetailsModel));
exports.UserDepartmentModel = UserDepartmentModel;
var UserDivisionModel = (function (_super) {
    __extends(UserDivisionModel, _super);
    function UserDivisionModel(quantity, division, career, registrationNumber, userCode) {
        var _this = _super.call(this) || this;
        _this.quantity = quantity;
        _this.division = division;
        _this.career = career;
        _this.registrationNumber = registrationNumber;
        _this.userCode = userCode;
        return _this;
    }
    return UserDivisionModel;
}(UserDetailsModel));
exports.UserDivisionModel = UserDivisionModel;
//# sourceMappingURL=userDetails.model.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/pipes.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var search_reservation_pipe_1 = __webpack_require__("../../../../../src/app/pipes/searchReservation/search-reservation.pipe.ts");
var search_employee_pipe_1 = __webpack_require__("../../../../../src/app/pipes/searchEmployee/search-employee.pipe.ts");
var search_external_user_pipe_1 = __webpack_require__("../../../../../src/app/pipes/searchExternalUser/search-external-user.pipe.ts");
var search_cubicle_pipe_1 = __webpack_require__("../../../../../src/app/pipes/searchCubicle/search-cubicle.pipe.ts");
var search_career_pipe_1 = __webpack_require__("../../../../../src/app/pipes/searchCareer/search-career.pipe.ts");
var search_user_pipe_1 = __webpack_require__("../../../../../src/app/pipes/searchUser/search-user.pipe.ts");
var search_department_pipe_1 = __webpack_require__("../../../../../src/app/pipes/searchDepartment/search-department.pipe.ts");
var PipesModule = PipesModule_1 = (function () {
    function PipesModule() {
    }
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [],
        };
    };
    return PipesModule;
}());
PipesModule = PipesModule_1 = __decorate([
    core_1.NgModule({
        // All components
        declarations: [
            search_reservation_pipe_1.SearchReservationPipe,
            search_employee_pipe_1.SearchEmployeePipe,
            search_external_user_pipe_1.SearchExternalUserPipe,
            search_user_pipe_1.SearchUserPipe,
            search_career_pipe_1.SearchCareerPipe,
            search_cubicle_pipe_1.SearchCubiclePipe,
            search_department_pipe_1.SearchDepartmentPipe
        ],
        // All modules
        imports: [],
        exports: [
            search_reservation_pipe_1.SearchReservationPipe,
            search_employee_pipe_1.SearchEmployeePipe,
            search_external_user_pipe_1.SearchExternalUserPipe,
            search_user_pipe_1.SearchUserPipe,
            search_career_pipe_1.SearchCareerPipe,
            search_cubicle_pipe_1.SearchCubiclePipe,
            search_department_pipe_1.SearchDepartmentPipe
        ],
        providers: [] // Services are here
    })
], PipesModule);
exports.PipesModule = PipesModule;
var PipesModule_1;
//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchCareer/search-career.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    core_1.Pipe({
        name: 'searchCareer'
    })
], SearchCareerPipe);
exports.SearchCareerPipe = SearchCareerPipe;
//# sourceMappingURL=search-career.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchCubicle/search-cubicle.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    core_1.Pipe({
        name: 'searchCubicle'
    })
], SearchCubiclePipe);
exports.SearchCubiclePipe = SearchCubiclePipe;
//# sourceMappingURL=search-cubicle.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchDepartment/search-department.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    core_1.Pipe({
        name: 'searchDepartment'
    })
], SearchDepartmentPipe);
exports.SearchDepartmentPipe = SearchDepartmentPipe;
//# sourceMappingURL=search-department.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchEmployee/search-employee.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchEmployeePipe = (function () {
    function SearchEmployeePipe() {
    }
    SearchEmployeePipe.prototype.transform = function (items, number) {
        if (!number)
            return items;
        var employeeNumber = parseInt(number);
        return items.filter(function (value) { return value.employeeNumber == employeeNumber; });
    };
    return SearchEmployeePipe;
}());
SearchEmployeePipe = __decorate([
    core_1.Pipe({
        name: 'searchEmployee'
    })
], SearchEmployeePipe);
exports.SearchEmployeePipe = SearchEmployeePipe;
//# sourceMappingURL=search-employee.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchExternalUser/search-external-user.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SearchExternalUserPipe = (function () {
    function SearchExternalUserPipe() {
    }
    SearchExternalUserPipe.prototype.transform = function (items, user) {
        if (!user)
            return items;
        return items.filter(function (value) { return value.userCode == user; });
    };
    return SearchExternalUserPipe;
}());
SearchExternalUserPipe = __decorate([
    core_1.Pipe({
        name: 'searchExternalUser'
    })
], SearchExternalUserPipe);
exports.SearchExternalUserPipe = SearchExternalUserPipe;
//# sourceMappingURL=search-external-user.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchReservation/search-reservation.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    core_1.Pipe({
        name: 'searchReservation'
    })
], SearchReservationPipe);
exports.SearchReservationPipe = SearchReservationPipe;
//# sourceMappingURL=search-reservation.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/searchUser/search-user.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    core_1.Pipe({
        name: 'searchUser'
    })
], SearchUserPipe);
exports.SearchUserPipe = SearchUserPipe;
//# sourceMappingURL=search-user.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/careers/careers.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var CareersService = CareersService_1 = (function () {
    function CareersService(http) {
        this.http = http;
        this.url = environment_1.environment.baseUrl + "/api/careers";
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], CareersService);
exports.CareersService = CareersService;
var CareersService_1, _a;
//# sourceMappingURL=careers.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cubicles/cubicles.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var CubiclesService = CubiclesService_1 = (function () {
    function CubiclesService(http) {
        this.http = http;
        this.url = environment_1.environment.baseUrl + "/api/cubicles";
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], CubiclesService);
exports.CubiclesService = CubiclesService;
var CubiclesService_1, _a;
//# sourceMappingURL=cubicles.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/dataReservation/data-reservation.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var DataReservationService = (function () {
    function DataReservationService() {
        this.reservationsSource = new BehaviorSubject_1.BehaviorSubject(this.doneReservations);
        this.currentResservationsDone = this.reservationsSource.asObservable();
        this.userSource = new BehaviorSubject_1.BehaviorSubject(this.user);
        this.currentUser = this.userSource.asObservable();
        this.employeeSource = new BehaviorSubject_1.BehaviorSubject(this.employee);
        this.currentEmployee = this.employeeSource.asObservable();
        this.externalSource = new BehaviorSubject_1.BehaviorSubject(this.external);
        this.currentExternalUser = this.externalSource.asObservable();
    }
    DataReservationService.prototype.getCurrentReservations = function () {
        return this.doneReservations;
    };
    DataReservationService.prototype.addReservationsDetails = function (message) {
        this.doneReservations = message;
        this.reservationsSource.next(this.doneReservations);
    };
    DataReservationService.prototype.getCurrentUser = function () {
        return this.user;
    };
    DataReservationService.prototype.changeUser = function (message) {
        this.user = message;
        this.userSource.next(this.user);
    };
    DataReservationService.prototype.getCurrentEmployee = function () {
        return this.employee;
    };
    DataReservationService.prototype.changeEmployee = function (message) {
        this.employee = message;
        this.employeeSource.next(this.employee);
    };
    DataReservationService.prototype.getCurrentExternalUser = function () {
        return this.external;
    };
    DataReservationService.prototype.changeExternalUser = function (message) {
        this.external = message;
        this.employeeSource.next(this.employee);
    };
    return DataReservationService;
}());
DataReservationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DataReservationService);
exports.DataReservationService = DataReservationService;
//# sourceMappingURL=data-reservation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/departments/departments.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var DepartmentsService = DepartmentsService_1 = (function () {
    function DepartmentsService(http) {
        this.http = http;
        this.url = environment_1.environment.baseUrl + "/api/departments";
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
var DepartmentsService_1, _a;
//# sourceMappingURL=departments.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/employees/employees.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var EmployeesService = EmployeesService_1 = (function () {
    function EmployeesService(http) {
        this.http = http;
        this.url = environment_1.environment.baseUrl + "/api/employees";
    }
    EmployeesService.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    EmployeesService.prototype.getAll = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(EmployeesService_1.handleError);
    };
    EmployeesService.prototype.getById = function (_id) {
        return this.http.get(this.url + "/" + _id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(EmployeesService_1.handleError);
    };
    EmployeesService.prototype.create = function (newEmployee) {
        return this.http.post(this.url, newEmployee)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return EmployeesService_1.handleError(err); });
    };
    EmployeesService.prototype.createFile = function (newEmployees) {
        return this.http.post(this.url, newEmployees)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return EmployeesService_1.handleError(err); });
    };
    EmployeesService.prototype.update = function (id, employeeModel) {
        return this.http.put(this.url + "/" + id, employeeModel).toPromise();
    };
    EmployeesService.prototype.remove = function (id) {
        console.log(id);
        return this.http.delete(this.url + "/" + id).toPromise();
    };
    return EmployeesService;
}());
EmployeesService = EmployeesService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], EmployeesService);
exports.EmployeesService = EmployeesService;
var EmployeesService_1, _a;
//# sourceMappingURL=employees.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/externalUser/external-user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var ExternalUserService = ExternalUserService_1 = (function () {
    function ExternalUserService(http) {
        this.http = http;
        this.url = environment_1.environment.baseUrl + "/api/externalUsers";
    }
    ExternalUserService.handleError = function (error) {
        console.error("An error occurred", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ExternalUserService.prototype.getAll = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ExternalUserService_1.handleError);
    };
    ExternalUserService.prototype.getById = function (_id) {
        return this.http.get(this.url + "/" + _id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ExternalUserService_1.handleError);
    };
    ExternalUserService.prototype.getByUserCode = function (registrationNumber) {
        return this.http.get(this.url + "/userCode/" + registrationNumber)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(ExternalUserService_1.handleError);
    };
    ExternalUserService.prototype.create = function (newExternalUser) {
        return this.http.post(this.url, newExternalUser)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return ExternalUserService_1.handleError(err); });
    };
    ExternalUserService.prototype.createFile = function (newExternalUsers) {
        return this.http.post(this.url, newExternalUsers)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return ExternalUserService_1.handleError(err); });
    };
    ExternalUserService.prototype.update = function (id, externalUserModel) {
        return this.http.put(this.url + "/" + id, externalUserModel).toPromise();
    };
    ExternalUserService.prototype.remove = function (id) {
        console.log(id);
        return this.http.delete(this.url + "/" + id).toPromise();
    };
    return ExternalUserService;
}());
ExternalUserService = ExternalUserService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ExternalUserService);
exports.ExternalUserService = ExternalUserService;
var ExternalUserService_1, _a;
//# sourceMappingURL=external-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/reports/reports.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var ReportsService = ReportsService_1 = (function () {
    function ReportsService(http) {
        this.http = http;
        this.url = environment_1.environment.baseUrl + "/api/reports";
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
    ReportsService.prototype.getByDepartment = function (startDate, endDate) {
        return this.http.get(this.url + "Department", {
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ReportsService);
exports.ReportsService = ReportsService;
var ReportsService_1, _a;
//# sourceMappingURL=reports.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/reservations/reservations.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var ReservationsService = ReservationsService_1 = (function () {
    function ReservationsService(http) {
        this.http = http;
        this.url = environment_1.environment.baseUrl + "/api/reservations";
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
    ReservationsService.prototype.getCount = function () {
        return this.http.get(this.url + "/count")
            .toPromise()
            .then()
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ReservationsService);
exports.ReservationsService = ReservationsService;
var ReservationsService_1, _a;
//# sourceMappingURL=reservations.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings/settings.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/Rx.js");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], SettingsService);
exports.SettingsService = SettingsService;
var _a;
//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users/users.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
// import 'rxjs/Rx';
var UsersService = UsersService_1 = (function () {
    function UsersService(http) {
        this.http = http;
        this.url = environment_1.environment.baseUrl + "/api/users";
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], UsersService);
exports.UsersService = UsersService;
var UsersService_1, _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/usersQuantity/users.quantity.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UsersQuantityService);
exports.UsersQuantityService = UsersQuantityService;
//# sourceMappingURL=users.quantity.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    baseUrl: 'http://localhost:8482'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
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