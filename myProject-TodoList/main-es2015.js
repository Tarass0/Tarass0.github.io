(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-form/list-form.component */ "./src/app/list-form/list-form.component.ts");




class AppComponent {
    constructor() {
        this.title = 'myProject-TodoList';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__["UserInfoComponent"], _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_2__["ListFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-form/list-form.component */ "./src/app/list-form/list-form.component.ts");
/* harmony import */ var _list_item_template_list_item_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item-template/list-item-template.component */ "./src/app/list-item-template/list-item-template.component.ts");
/* harmony import */ var _pipes_filter_items_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/filter-items.pipe */ "./src/app/pipes/filter-items.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__["UserInfoComponent"], _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_5__["ListFormComponent"], _list_item_template_list_item_template_component__WEBPACK_IMPORTED_MODULE_6__["ListItemTemplateComponent"], _pipes_filter_items_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterItemsPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__["UserInfoComponent"], _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_5__["ListFormComponent"], _list_item_template_list_item_template_component__WEBPACK_IMPORTED_MODULE_6__["ListItemTemplateComponent"], _pipes_filter_items_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterItemsPipe"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_list_form_list_form_component__WEBPACK_IMPORTED_MODULE_5__["ListFormComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__["UserInfoComponent"], _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_5__["ListFormComponent"], _list_item_template_list_item_template_component__WEBPACK_IMPORTED_MODULE_6__["ListItemTemplateComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"], _pipes_filter_items_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterItemsPipe"]]);


/***/ }),

/***/ "./src/app/list-form/list-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-form/list-form.component.ts ***!
  \**************************************************/
/*! exports provided: ListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFormComponent", function() { return ListFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["toDo_container"];
const _c1 = ["items"];
function ListFormComponent_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngTemplateOutlet", "showListContainer ? list_container : null"]);
} }
function ListFormComponent_ng_template_5_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFormComponent_ng_template_5_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.showAllItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFormComponent_ng_template_5_div_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.showCompletedItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Completed Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFormComponent_ng_template_5_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.showNotCompletedItems(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Not Completed Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListFormComponent_ng_template_5_div_9_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-list-item-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCheck", function ListFormComponent_ng_template_5_div_9_li_2_Template_app_list_item_template_onCheck_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.refreshCounter($event); })("onRemove", function ListFormComponent_ng_template_5_div_9_li_2_Template_app_list_item_template_onRemove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.removeListItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listItem", item_r13)("counterToDoTasks", ctx_r12.counterToDoTasks);
} }
function ListFormComponent_ng_template_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListFormComponent_ng_template_5_div_9_li_2_Template, 2, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filterItems");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r6.listItems, ctx_r6.filterParameter));
} }
function ListFormComponent_ng_template_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No todos yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add todo to get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListFormComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFormComponent_ng_template_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.showListContainer = !ctx_r17.showListContainer; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListFormComponent_ng_template_5_div_8_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListFormComponent_ng_template_5_div_9_Template, 4, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListFormComponent_ng_template_5_div_10_Template, 5, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListFormComponent_ng_template_5_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.listItemText = $event; })("keyup.enter", function ListFormComponent_ng_template_5_Template_input_keyup_enter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.addListItem(); })("focusout", function ListFormComponent_ng_template_5_Template_input_focusout_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.focusOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.counterToDoTasks, " TO DO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.listItems.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.listItems.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.listItems.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.listItemText);
} }
const _c2 = ["*"];
class ListFormComponent {
    constructor() {
        this.showListContainer = false;
        this.listItemText = '';
        this.counterItemsWithoutScroll = 0;
        this.listItems = [];
        this.filterParameter = { key: 'itemTopicality', value: true };
        this.counterToDoTasks = this.listItems.length;
    }
    focusOut() {
        this.listItemText = '';
    }
    addListItem() {
        if (this.listItemText.trim()) {
            let item = {
                text: this.listItemText,
                isCompleted: false,
                id: this.listItems.length,
                itemTopicality: true,
            };
            this.listItems.unshift(item);
            this.counterToDoTasks = this.counterToDoTasks + 1;
            this.listItemText = '';
            let heightContainerList = this.toDoContainer.nativeElement.offsetHeight;
            console.log(this.listItems);
            if (heightContainerList >= this.windowHeight - 30) {
                console.log('!!!!!!!!!!!!!!!!!! висота перевищена');
                this.items.nativeElement.style.overflowY = 'scroll';
            }
            else {
                this.counterItemsWithoutScroll = this.listItems.length;
            }
        }
    }
    refreshCounter(counter) {
        this.counterToDoTasks = counter;
    }
    removeListItem(id) {
        if (!this.counterToDoTasks)
            this.counterToDoTasks = 0;
        this.listItems = this.listItems.filter((item) => {
            return item.id !== id;
        });
        this.counterToDoTasks = this.listItems.filter((item) => {
            return item.isCompleted === false;
        }).length;
        if (this.listItems.length <= this.counterItemsWithoutScroll) {
            console.log('!!!!!!!!!!!!!!!!!! висота допустима');
            this.items.nativeElement.style.overflowY = 'hidden';
        }
    }
    showAllItems() {
        this.filterParameter = {
            key: 'itemTopicality',
            value: true,
        };
        console.log(this.listItems);
    }
    showCompletedItems() {
        this.filterParameter = {
            key: 'isCompleted',
            value: true,
        };
        console.log(this.listItems);
    }
    showNotCompletedItems() {
        this.filterParameter = {
            key: 'isCompleted',
            value: false,
        };
        console.log(this.listItems);
    }
    ngOnInit() {
        this.windowHeight = window.innerHeight;
    }
    // Изменение размера окна
    onResize(event) {
        this.windowHeight = event.target.innerHeight;
        console.log(this.windowHeight);
    }
}
ListFormComponent.ɵfac = function ListFormComponent_Factory(t) { return new (t || ListFormComponent)(); };
ListFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListFormComponent, selectors: [["app-list-form"]], viewQuery: function ListFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toDoContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t.first);
    } }, hostBindings: function ListFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ListFormComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, ngContentSelectors: _c2, decls: 7, vars: 1, consts: [[1, "toDo_container"], ["toDo_container", ""], [4, "ngTemplateOutlet"], [1, "bth_show_toDo", 3, "click"], ["list_container", ""], [1, "show_container"], [1, "list_container"], ["items", ""], [1, "title"], [1, "counter"], [1, "bth", "bth_close_to_do", 3, "click"], ["class", "bths", 4, "ngIf"], ["class", "list_items", 4, "ngIf"], ["class", "msg_empty_container", 4, "ngIf"], ["type", "text", "placeholder", "Your item", 3, "ngModel", "ngModelChange", "keyup.enter", "focusout"], [1, "bths"], [3, "click"], [1, "list_items"], [4, "ngFor", "ngForOf"], [3, "listItem", "counterToDoTasks", "onCheck", "onRemove"], [1, "msg_empty_container"]], template: function ListFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListFormComponent_2_Template, 1, 0, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListFormComponent_Template_button_click_3_listener() { return ctx.showListContainer = !ctx.showListContainer; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListFormComponent_ng_template_5_Template, 12, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.showListContainer ? _r2 : null);
    } }, styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Montserrat\";\n  src: url('Montserrat-Light.eot');\n  src: local(\"Montserrat Light\"), local(\"Montserrat-Light\"), url('Montserrat-Light.eot?#iefix') format(\"embedded-opentype\"), url('Montserrat-Light.woff') format(\"woff\"), url('Montserrat-Light.ttf') format(\"truetype\");\n}\n.bth_show_toDo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n  background: none;\n  border: none;\n  cursor: pointer;\n  float: right;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin-top: 20px;\n}\n.bth_show_toDo[_ngcontent-%COMP%]:hover {\n  background: orangered;\n}\n.bth_show_toDo[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.toDo_container[_ngcontent-%COMP%] {\n  max-height: 95%;\n  max-width: 300px;\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  padding: 10px;\n}\n.show_container[_ngcontent-%COMP%] {\n  width: 100vw;\n  max-width: 300px;\n  background: #081b1d;\n  position: relative;\n  border-radius: 4px;\n}\n.show_container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  \n  right: 20px;\n  bottom: -20px;\n  \n  border: 10px solid transparent;\n  \n  border-top: 10px solid #081b1d;\n  \n}\ninput[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: grey;\n  padding: 10px 10px;\n  width: 100%;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border: 1px solid grey;\n}\n.list_container[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 85vh;\n  padding: 5px 10px;\n  position: relative;\n}\np[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n  box-sizing: border-box;\n}\n.msg_empty_container[_ngcontent-%COMP%] {\n  padding: 20px 0px 60px 0px;\n}\n.msg_empty_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 25px;\n}\n.msg_empty_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  font-size: 12px;\n  font-weight: 300;\n  color: grey;\n}\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.title[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-bottom: 30px;\n}\n.bth_close_to_do[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  color: #ffffff;\n  background: none;\n  cursor: pointer;\n  border: 2px solid grey;\n}\n.bth_close_to_do[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.bth_close_to_do[_ngcontent-%COMP%]:hover {\n  background: orangered;\n}\nli[_ngcontent-%COMP%]:hover {\n  background: #292828;\n  list-style: none;\n}\n.bths[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 15px;\n}\n.bths[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n  background: none;\n  border: none;\n  padding: 5px;\n  cursor: pointer;\n}\n.bths[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.bths[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: orangered;\n  border-radius: 10px;\n}\n@media (max-width: 360px) {\n  .toDo_container[_ngcontent-%COMP%] {\n    right: 0;\n  }\n\n  .show_container[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1mb3JtL2xpc3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdC1mb3JtL0Q6XFzQmtGD0YDRgdC4INC3IFVkZW15KEpTKVxcW1VkZW15KNCS0LvQsNC00LjQu9C10L0g0JzQuNC90LjQvSldIEFuZ3VsYXIgOS4g0KLQtdC+0YDQuNGPINC4INCf0YDQsNC60YLQuNC60LAgMjAyMC4g0JLRgdC1INCy0LrQu9GO0YfQtdC90L4gKyDQkdC+0L3Rg9GB0YtcXG15UHJvamVjdC1Ub2RvTGlzdC9zcmNcXGFwcFxcbGlzdC1mb3JtXFxsaXN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNOQUFBO0FERUY7QUNVQTtFQUxFLGVBTXlCO0VBTHpCLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBSUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURMRjtBQ09BO0VBQ0UscUJBQUE7QURKRjtBQ01BO0VBQ0UsYUFBQTtBREhGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBREZGO0FDTUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURIRjtBQ01BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQW9CLGdDQUFBO0VBQ3BCLFdBQUE7RUFBYSxhQUFBO0VBQWUsMkJBQUE7RUFDNUIsOEJBQUE7RUFBZ0MsdUJBQUE7RUFDaEMsOEJBQUE7RUFBZ0MsMEJBQUE7QURFbEM7QUNDQTtFQS9DRSxlQWdEeUI7RUEvQ3pCLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBOENBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FES0Y7QUNIQTtFQUNFLHNCQUFBO0FETUY7QUNKQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURPRjtBQ0xBO0VBbkVFLGVBb0V5QjtFQW5FekIsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFrRUEsc0JBQUE7QURXRjtBQ1RBO0VBQ0UsMEJBQUE7QURZRjtBQ1hFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBRGFKO0FDVkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FEWUo7QUNUQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRFlGO0FDVkE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QURhRjtBQ1hBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURjRjtBQ1pBO0VBQ0UsYUFBQTtBRGVGO0FDYkE7RUFDRSxxQkFBQTtBRGdCRjtBQ2RBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBRGlCRjtBQ2ZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FEa0JGO0FDakJFO0VBakhBLGVBa0gyQjtFQWpIM0IsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFnSEUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURzQko7QUNwQkU7RUFDRSxhQUFBO0FEc0JKO0FDcEJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBRHNCSjtBQ25CQTtFQUNFO0lBQ0UsUUFBQTtFRHNCRjs7RUNwQkE7SUFDRSxnQkFBQTtFRHVCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1mb3JtL2xpc3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1MaWdodC5lb3RcIik7XG4gIHNyYzogbG9jYWwoXCJNb250c2VycmF0IExpZ2h0XCIpLCBsb2NhbChcIk1vbnRzZXJyYXQtTGlnaHRcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuLmJ0aF9zaG93X3RvRG8ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ0aF9zaG93X3RvRG86aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XG59XG5cbi5idGhfc2hvd190b0RvOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRvRG9fY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogOTUlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zaG93X2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogIzA4MWIxZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zaG93X2NvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qINCQ0LHRgdC+0LvRjtGC0L3QvtC1INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC1ICovXG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IC0yMHB4O1xuICAvKiDQn9C+0LvQvtC20LXQvdC40LUg0YLRgNC10YPQs9C+0LvRjNC90LjQutCwICovXG4gIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLyog0J/RgNC+0LfRgNCw0YfQvdGL0LUg0LPRgNCw0L3QuNGG0YsgKi9cbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMDgxYjFkO1xuICAvKiDQlNC+0LHQsNCy0LvRj9C10Lwg0YLRgNC10YPQs9C+0LvRjNC90LjQuiAqL1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyZXk7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbn1cblxuLmxpc3RfY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4NXZoO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tc2dfZW1wdHlfY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAwcHggNjBweCAwcHg7XG59XG4ubXNnX2VtcHR5X2NvbnRhaW5lciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5tc2dfZW1wdHlfY29udGFpbmVyIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRpdGxlIC5jb3VudGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmJ0aF9jbG9zZV90b19kbyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG59XG5cbi5idGhfY2xvc2VfdG9fZG86Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRoX2Nsb3NlX3RvX2RvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xufVxuXG5saTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyOTI4Mjg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5idGhzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5idGhzIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0aHMgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5idGhzIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC50b0RvX2NvbnRhaW5lciB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAuc2hvd19jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gIH1cbn0iLCJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LmVvdCcpO1xyXG4gIHNyYzogbG9jYWwoJ01vbnRzZXJyYXQgTGlnaHQnKSwgbG9jYWwoJ01vbnRzZXJyYXQtTGlnaHQnKSxcclxuICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBtaXhpbiBmb250LU1vbnRzZXJyYXQoJGZvbnRTaXplKXtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5idGhfc2hvd190b0Rve1xyXG4gIEBpbmNsdWRlIGZvbnQtTW9udHNlcnJhdCgxNXB4KTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5idGhfc2hvd190b0RvOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcclxufVxyXG4uYnRoX3Nob3dfdG9Ebzpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4udG9Eb19jb250YWluZXJ7XHJcbiAgbWF4LWhlaWdodDogOTUlO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNob3dfY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwODFiMWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAvL2JveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnNob3dfY29udGFpbmVyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiDQkNCx0YHQvtC70Y7RgtC90L7QtSDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjQtSAqL1xyXG4gIHJpZ2h0OiAyMHB4OyBib3R0b206IC0yMHB4OyAvKiDQn9C+0LvQvtC20LXQvdC40LUg0YLRgNC10YPQs9C+0LvRjNC90LjQutCwICovXHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAvKiDQn9GA0L7Qt9GA0LDRh9C90YvQtSDQs9GA0LDQvdC40YbRiyAqL1xyXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzA4MWIxZDsgLyog0JTQvtCx0LDQstC70Y/QtdC8INGC0YDQtdGD0LPQvtC70YzQvdC40LogKi9cclxufVxyXG5cclxuaW5wdXR7XHJcbiAgQGluY2x1ZGUgZm9udC1Nb250c2VycmF0KDEycHgpO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmlucHV0OmZvY3Vze1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuLmxpc3RfY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA4NXZoO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5we1xyXG4gIEBpbmNsdWRlIGZvbnQtTW9udHNlcnJhdCgxMnB4KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5tc2dfZW1wdHlfY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4IDYwcHggMHB4O1xyXG4gIHB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuXHJcbiAgfVxyXG4gIHA6bGFzdC1jaGlsZHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9XHJcbn1cclxuLnRpdGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi50aXRsZSAuY291bnRlcntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmJ0aF9jbG9zZV90b19kb3tcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxufVxyXG4uYnRoX2Nsb3NlX3RvX2RvOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0aF9jbG9zZV90b19kbzpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XHJcbn1cclxubGk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzI5MjgyODtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5idGhze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBidXR0b257XHJcbiAgICBAaW5jbHVkZSBmb250LU1vbnRzZXJyYXQoMTJweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBidXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpe1xyXG4gIC50b0RvX2NvbnRhaW5lcntcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAuc2hvd19jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-form',
                templateUrl: './list-form.component.html',
                styleUrls: ['./list-form.component.scss'],
            }]
    }], null, { toDoContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toDo_container', { static: false }]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['items', { static: false }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/list-item-template/list-item-template.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/list-item-template/list-item-template.component.ts ***!
  \********************************************************************/
/*! exports provided: ListItemTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemTemplateComponent", function() { return ListItemTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["check"];
const _c1 = ["item"];
class ListItemTemplateComponent {
    constructor() {
        this.onCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //isCompleted = false;
    checkItem() {
        if (!this.listItem.isCompleted) {
            this.listItem.isCompleted = true;
            this.counterToDoTasks = this.counterToDoTasks - 1;
            this.onCheck.emit(this.counterToDoTasks);
            // console.log(this.counterToDoTasks);
            this.checkInput.nativeElement.nextElementSibling.style.textDecoration = 'line-through';
            this.checkInput.nativeElement.nextElementSibling.style.color = 'grey';
            console.log(this.listItem);
        }
        else {
            this.listItem.isCompleted = false;
            this.counterToDoTasks = this.counterToDoTasks + 1;
            this.onCheck.emit(this.counterToDoTasks);
            // console.log(this.counterToDoTasks);
            this.checkInput.nativeElement.nextElementSibling.style.textDecoration = null;
            this.checkInput.nativeElement.nextElementSibling.style.color = '#ffffff';
            console.log(this.listItem);
        }
    }
    removeItem() {
        this.onRemove.emit(this.listItem.id);
    }
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.listItem.isCompleted) {
            console.log('1');
            console.log(this.checkInput);
            this.checkInput.nativeElement.checked = true;
            this.checkInput.nativeElement.nextElementSibling.style.textDecoration = 'line-through';
            this.checkInput.nativeElement.nextElementSibling.style.color = 'grey';
        }
    }
}
ListItemTemplateComponent.ɵfac = function ListItemTemplateComponent_Factory(t) { return new (t || ListItemTemplateComponent)(); };
ListItemTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemTemplateComponent, selectors: [["app-list-item-template"]], viewQuery: function ListItemTemplateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.item = _t.first);
    } }, inputs: { listItem: "listItem", counterToDoTasks: "counterToDoTasks" }, outputs: { onCheck: "onCheck", onRemove: "onRemove" }, decls: 8, vars: 1, consts: [[1, "item_container"], ["type", "checkbox", 3, "click"], ["check", ""], [1, "listItem_text"], ["item", ""], [1, "bth", "bth_listItem_delete", 3, "click"]], template: function ListItemTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemTemplateComponent_Template_input_click_1_listener() { return ctx.checkItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemTemplateComponent_Template_button_click_6_listener() { return ctx.removeItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.listItem.text);
    } }, styles: ["@font-face {\n  font-family: \"Montserrat\";\n  src: url('Montserrat-Light.eot');\n  src: local(\"Montserrat Light\"), local(\"Montserrat-Light\"), url('Montserrat-Light.eot?#iefix') format(\"embedded-opentype\"), url('Montserrat-Light.woff') format(\"woff\"), url('Montserrat-Light.ttf') format(\"truetype\");\n}\n.item_container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n  padding: 5px 0 5px 0;\n}\n.item_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 10px 0 10px;\n  word-break: break-all;\n}\n.item_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  background: none;\n  border: none;\n  color: #ffffff;\n  cursor: pointer;\n}\n.item_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  color: black;\n  border-radius: 50%;\n}\n.item_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pdGVtLXRlbXBsYXRlL0Q6XFzQmtGD0YDRgdC4INC3IFVkZW15KEpTKVxcW1VkZW15KNCS0LvQsNC00LjQu9C10L0g0JzQuNC90LjQvSldIEFuZ3VsYXIgOS4g0KLQtdC+0YDQuNGPINC4INCf0YDQsNC60YLQuNC60LAgMjAyMC4g0JLRgdC1INCy0LrQu9GO0YfQtdC90L4gKyDQkdC+0L3Rg9GB0YtcXG15UHJvamVjdC1Ub2RvTGlzdC9zcmNcXGFwcFxcbGlzdC1pdGVtLXRlbXBsYXRlXFxsaXN0LWl0ZW0tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3QtaXRlbS10ZW1wbGF0ZS9saXN0LWl0ZW0tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc05BQUE7QUNDRjtBRFdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBUkEsZUFTeUI7RUFSekIsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFPQSxvQkFBQTtBQ05GO0FEUUU7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FDTko7QURRRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNOSjtBRFFFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFFFO0VBQ0UsYUFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1pdGVtLXRlbXBsYXRlL2xpc3QtaXRlbS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQuZW90Jyk7XHJcbiAgc3JjOiBsb2NhbCgnTW9udHNlcnJhdCBMaWdodCcpLCBsb2NhbCgnTW9udHNlcnJhdC1MaWdodCcpLFxyXG4gIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1MaWdodC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1MaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5AbWl4aW4gZm9udC1Nb250c2VycmF0KCRmb250U2l6ZSl7XHJcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLml0ZW1fY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAaW5jbHVkZSBmb250LU1vbnRzZXJyYXQoMTNweCk7XHJcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XHJcblxyXG4gIHB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LmVvdFwiKTtcbiAgc3JjOiBsb2NhbChcIk1vbnRzZXJyYXQgTGlnaHRcIiksIGxvY2FsKFwiTW9udHNlcnJhdC1MaWdodFwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1MaWdodC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4uaXRlbV9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG59XG4uaXRlbV9jb250YWluZXIgcCB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5pdGVtX2NvbnRhaW5lciBidXR0b24ge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaXRlbV9jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaXRlbV9jb250YWluZXIgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListItemTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-item-template',
                templateUrl: './list-item-template.component.html',
                styleUrls: ['./list-item-template.component.scss'],
            }]
    }], null, { listItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], counterToDoTasks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], checkInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['check', { static: false }]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['item', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/filter-items.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/filter-items.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterItemsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterItemsPipe", function() { return FilterItemsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterItemsPipe {
    transform(listItems, filter) {
        return listItems.filter((item) => item[filter.key] === filter.value);
    }
}
FilterItemsPipe.ɵfac = function FilterItemsPipe_Factory(t) { return new (t || FilterItemsPipe)(); };
FilterItemsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterItems", type: FilterItemsPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterItemsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filterItems',
                pure: false,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = ["askName"];
function UserInfoComponent_div_4_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your name can't be longer then 10 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInfoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Who are you?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserInfoComponent_div_4_small_4_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInfoComponent_div_4_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.name = $event; })("keyup.enter", function UserInfoComponent_div_4_Template_input_keyup_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sayHello(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.name.length > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.name);
} }
function UserInfoComponent_ng_template_5_div_4_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your aim can't be longer then 80 characters!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInfoComponent_ng_template_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What would you like to do today?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserInfoComponent_ng_template_5_div_4_small_3_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInfoComponent_ng_template_5_div_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.aim = $event; })("keyup.enter", function UserInfoComponent_ng_template_5_div_4_Template_input_keyup_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.sayYourAim(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.aim.length > 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.aim);
} }
function UserInfoComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserInfoComponent_ng_template_5_div_4_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.canSayAim)("ngIfElse", _r3);
} }
function UserInfoComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TODAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.aim);
} }
class UserInfoComponent {
    constructor() {
        this.date = new Date();
        this.name = '';
        this.aim = '';
        this.canSayHello = false;
        this.canSayAim = false;
    }
    sayHello() {
        if (this.name) {
            this.name = this.name[0].toUpperCase() + this.name.slice(1);
            this.canSayHello = true;
        }
    }
    sayYourAim() {
        if (this.aim) {
            this.aim = this.aim[0].toUpperCase() + this.aim.slice(1);
            this.canSayAim = true;
        }
    }
    ngOnInit() {
        setInterval(() => {
            this.date = new Date();
        }, 1000);
    }
}
UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(); };
UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInfoComponent, selectors: [["app-user-info"]], viewQuery: function UserInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.askNameContainer = _t.first);
    } }, decls: 9, vars: 6, consts: [[1, "container"], [1, "time"], ["class", "container_name", 4, "ngIf", "ngIfElse"], ["hello", ""], ["yourAim", ""], [1, "container_name"], ["askName", ""], ["for", "name", 1, "question"], [4, "ngIf"], ["type", "text", "id", "name", "maxlength", "11", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "container_aim"], [4, "ngIf", "ngIfElse"], ["for", "aim", 1, "question"], ["type", "text", "id", "aim", "autocomplete", "off", "maxlength", "81", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserInfoComponent_div_4_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserInfoComponent_ng_template_5_Template, 5, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserInfoComponent_ng_template_7_Template, 4, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx.date, "HH:mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.canSayHello)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["@font-face {\n  font-family: \"Montserrat\";\n  src: url('Montserrat-Light.eot');\n  src: local(\"Montserrat Light\"), local(\"Montserrat-Light\"), url('Montserrat-Light.eot?#iefix') format(\"embedded-opentype\"), url('Montserrat-Light.woff') format(\"woff\"), url('Montserrat-Light.ttf') format(\"truetype\");\n}\n.time[_ngcontent-%COMP%] {\n  font-size: 10vw;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 10px;\n  box-sizing: border-box;\n}\n.question[_ngcontent-%COMP%] {\n  font-size: 4vw;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 3vw;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n  background: none;\n  border: none;\n  border-bottom: 2px solid #ffffff;\n  outline: none;\n  cursor: pointer;\n  text-align: center;\n  max-width: 80%;\n}\np[_ngcontent-%COMP%] {\n  font-size: 4vw;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n}\nsmall[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-family: \"Montserrat\", serif;\n  font-weight: bold;\n  color: #ffffff;\n  color: #ff1616;\n}\n.container_name[_ngcontent-%COMP%], .container_aim[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.container_aim[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 90%;\n}\n.container_aim[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  box-sizing: border-box;\n  font-size: 2vw;\n  text-align: center;\n  font-weight: bold;\n}\n.container_aim[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  box-sizing: border-box;\n  font-size: 3.5vw;\n  margin-top: 15px;\n  text-align: center;\n  font-weight: bold;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbmZvL0Q6XFzQmtGD0YDRgdC4INC3IFVkZW15KEpTKVxcW1VkZW15KNCS0LvQsNC00LjQu9C10L0g0JzQuNC90LjQvSldIEFuZ3VsYXIgOS4g0KLQtdC+0YDQuNGPINC4INCf0YDQsNC60YLQuNC60LAgMjAyMC4g0JLRgdC1INCy0LrQu9GO0YfQtdC90L4gKyDQkdC+0L3Rg9GB0YtcXG15UHJvamVjdC1Ub2RvTGlzdC9zcmNcXGFwcFxcdXNlci1pbmZvXFx1c2VyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc05BQUE7QUNDRjtBRFVBO0VBTEUsZUFNeUI7RUFMekIsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNGRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE1BO0VBaEJFLGNBaUJ5QjtFQWhCekIsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNjRjtBREVBO0VBbkJFLGNBb0J5QjtFQW5CekIsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFrQkEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0lGO0FERkE7RUE3QkUsY0E4QnlCO0VBN0J6QixnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ21DRjtBRE5BO0VBaENFLGVBaUN5QjtFQWhDekIsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUErQkEsY0FBQTtBQ1lGO0FEVkE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2FGO0FEWEE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNjRjtBRFpBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2VGO0FEYkE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNnQkYiLCJmaWxlIjoic3JjL2FwcC91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1MaWdodC5lb3QnKTtcclxuICBzcmM6IGxvY2FsKCdNb250c2VycmF0IExpZ2h0JyksIGxvY2FsKCdNb250c2VycmF0LUxpZ2h0JyksXHJcbiAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXHJcbiAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcbkBtaXhpbiBmb250LU1vbnRzZXJyYXQoJGZvbnRTaXplKXtcclxuICBmb250LXNpemU6ICRmb250U2l6ZTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi50aW1le1xyXG4gIEBpbmNsdWRlIGZvbnQtTW9udHNlcnJhdCgxMHZ3KTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5xdWVzdGlvbntcclxuICBAaW5jbHVkZSBmb250LU1vbnRzZXJyYXQoNHZ3KTtcclxufVxyXG5pbnB1dHtcclxuICBAaW5jbHVkZSBmb250LU1vbnRzZXJyYXQoM3Z3KTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5we1xyXG4gIEBpbmNsdWRlIGZvbnQtTW9udHNlcnJhdCg0dncpO1xyXG59XHJcbnNtYWxse1xyXG4gIEBpbmNsdWRlIGZvbnQtTW9udHNlcnJhdCgxM3B4KTtcclxuICBjb2xvcjogI2ZmMTYxNjtcclxufVxyXG4uY29udGFpbmVyX25hbWUsIC5jb250YWluZXJfYWltIGRpdntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXJfYWlte1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbn1cclxuLmNvbnRhaW5lcl9haW0gcDpmaXJzdC1jaGlsZHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGFpbmVyX2FpbSBwOmxhc3QtY2hpbGR7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQuZW90XCIpO1xuICBzcmM6IGxvY2FsKFwiTW9udHNlcnJhdCBMaWdodFwiKSwgbG9jYWwoXCJNb250c2VycmF0LUxpZ2h0XCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi50aW1lIHtcbiAgZm9udC1zaXplOiAxMHZ3O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucXVlc3Rpb24ge1xuICBmb250LXNpemU6IDR2dztcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmYxNjE2O1xufVxuXG4uY29udGFpbmVyX25hbWUsIC5jb250YWluZXJfYWltIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXJfYWltIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG5cbi5jb250YWluZXJfYWltIHA6Zmlyc3QtY2hpbGQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDJ2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lcl9haW0gcDpsYXN0LWNoaWxkIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAzLjV2dztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-info',
                templateUrl: './user-info.component.html',
                styleUrls: ['./user-info.component.scss'],
            }]
    }], null, { askNameContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['askName', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Курси з Udemy(JS)\[Udemy(Владилен Минин)] Angular 9. Теория и Практика 2020. Все включено + Бонусы\myProject-TodoList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map