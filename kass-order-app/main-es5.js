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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"\">\n<br>\n  <div class=\"row\">\n\n\n      <div class=\"col-sm-2\">\n        <br>\n        <ul>\n            <button (click)=\"getUsers()\" mat-icon-button><mat-icon color='primary'>emoji_people</mat-icon></button>\n            <br>\n            <br>\n            <button (click)=\"viewAllMessages()\" mat-icon-button><mat-icon color='primary'>messages</mat-icon></button>\n            <br>\n            <br>\n            <button (click)=\"viewAllOrders()\" mat-icon-button><mat-icon color='primary'>add_alert</mat-icon></button>\n            <br>\n            <br>\n            <button (click)=\"addProduct()\" mat-icon-button><mat-icon color='primary'>add_shopping_cart</mat-icon></button>\n            <br>\n            <br>\n          </ul>\n     </div>\n     <div class=\"col-md-6\" *ngIf=\"!isViewAllOrders && !viewOrders\">\n        <mat-accordion *ngFor=\"let user of Users\">\n            <hr>\n            <mat-expansion-panel>\n\n             <mat-expansion-panel-header color=\"primary\">\n               <table class=\"table\">\n                 <tr>\n                   <div class=\"container\">\n\n                      <td>  <span style=\"text-transform: capitalize;\"><br><span class=\"text-primary uk-text-uppercase\">{{user.username}}</span></span></td>\n                      <td *ngIf=\"user.orders.length !== 0\"><br><i class=\"material-icons\" id=\"add_alert\">add_alert</i><span class=\"text-danger\"></span></td>\n                   </div>\n\n                 </tr>\n               </table>\n\n            </mat-expansion-panel-header>\n\n              <table class=\"table\">\n                <thead>\n                  <th>Email </th>\n                  <th>Cell Number</th>\n                  <th>Date Registered</th>\n                  <th>View Order/s</th>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>{{user.email}}</td>\n                    <td>{{user.cellnumber}}</td>\n                    <td><span style=\"text-transform: uppercase;\">{{user.signupdate.split('T')[0]}}</span></td>\n                    <td></td>\n                  </tr>\n                </tbody>\n              </table>\n              <mat-action-row>\n                  <button mat-button color='accent' (click)=\"deleteUser(user._id)\" >Delete User</button>\n                 <button mat-button color='primary' (click)=\"viewUserOrders(user._id)\" [disabled] = 'user.orders.length === 0'>View Order</button>\n              </mat-action-row>\n            </mat-expansion-panel>\n        </mat-accordion>\n        <br>\n        <mat-paginator  #paginator  [length]='recordsLength' [pageSize] = usersPerPage [pageSizeOptions]='pageSizeOptions' (page)='onChangedPage($event)'></mat-paginator>\n    </div>\n\n\n    <!--Add the orders panel-->\n    <div class=\"col-md-6\" *ngIf=\"isViewAllOrders && isAddNewProduct !== true\">\n        <table class=\"table mat-table\">\n          <thead>\n            <th align=\"center\">Order By</th>\n            <th align=\"center\">Order Time</th>\n            <th align=\"center\">Total in Rands</th>\n            <th align=\"center\">No. Of Products Ordered</th>\n            <th align=\"center\">Accept/Reject Order</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let order of allOrders\">\n              <td *ngIf=\"order.products.length !== 0\">----------</td>\n              <td align=\"center\"  *ngIf=\"order.products.length !== 0\">{{order.orderdate.split('T')[1].split('.')[0]}}</td>\n              <td align=\"center\"  *ngIf=\"order.products.length !== 0\">{{order.totalprice}}</td>\n              <td align=\"center\"  *ngIf=\"order.products.length !== 0\">{{order.products.length}}</td>\n              <td align=\"center\"  *ngIf=\"order.products.length !== 0\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\"><button class=\"btn btn-outline-success\">Accept</button></div>\n                  <div class=\"col-md-6\"><button class=\"btn btn-outline-danger\">Reject</button></div>\n                </div>\n            </td>\n            </tr>\n          </tbody>\n\n        </table>\n\n\n    </div>\n\n    <div class=\"col-md-6\" *ngIf=\"viewOrders\">\n        <h2 class=\"text-center text-primary\" mat-text>ORDER DETAILS - <span style=\"text-transform: uppercase;\"> {{oneOrder.username}}</span></h2>\n        <br>\n        <mat-card>\n            <table class=\"table table-hover\">\n                <thead>\n                  <th>Order Time</th>\n                  <th>Total Items</th>\n                  <th>Total Price</th>\n                  <th>Producs</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of oneOrder.orders\">\n                    <td>{{item.orderdate.split('T')[1].split('.')[0]}}</td>\n                    <td>{{item.products.length}}</td>\n                    <td>R{{item.totalprice}}</td>\n                    <td *ngFor=\"let prod of item.products\">\n                    {{prod.name}} @ R{{prod.price}} Each\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n        </mat-card>\n\n        <hr>\n    </div>\n\n    <div class=\"col-md-6\" *ngIf=\"isAddNewProduct\">\n        <mat-card>\n      <table class=\"table table-striped\">\n        <thead>\n          <th>Product Name</th>\n          <th>Unit Price</th>\n          <th>Edit/Delete</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of products\">\n            <td>{{product.name}}</td>\n            <td>R{{product.price}}</td>\n            <td>\n              <div class=\"row\">\n                <div class=\"col-md-6\"><button mat-button color=\"accent\" (click)=\"deleteProduct(product._id)\">REMOVE</button></div>\n                <div class=\"col-md-6\"><button mat-button color=\"primary\" (click)=\"editProduct(product._id)\">EDIT</button></div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <mat-paginator [length]='products.length' pageSize = 5 [showFirstLastButtons] = \"true\" [pageSizeOptions]='[2, 4, 6, 8, 10]'></mat-paginator>\n      <br>\n      <br>\n    </mat-card>\n       <mat-card>\n            <form (submit) = \"addProduct(addProductForm)\" #addProductForm='ngForm'>\n\n              <mat-form-field>\n                <input matInput type=\"text\" required [(ngModel)]=\"name\" name=\"name\" placeholder=\"Product Name\" #nameInput>\n                <mat-error *ngIf=\"nameInput.invalid\"></mat-error>\n              </mat-form-field>\n\n              <br>\n\n            <mat-form-field>\n              <input matInput type=\"number\" name=\"price\" placeholder=\"Price\" [(ngModel)]=\"price\" #priceInput='ngModel' required>\n              <mat-error *ngIf=\"priceInput.invalid\">Please enter Price</mat-error>\n            </mat-form-field>\n\n            <div>\n                <button class=\"btn btn-outline-primary\" color='blue' visible='false' [disabled] = 'addProductForm.invalid' type=\"submit\">{{btnEditRemove}}</button>\n            </div>\n\n            </form>\n          </mat-card>\n    </div>\n\n  </div>\n</div>\n\n\n\n\n  <!-- <h1 class=\"h1\">Welcome To Dashboard</h1>\n\n  <mat-card>\n    <table class=\"table\">\n      <thead>\n      <th>\n          Username\n     </th>\n     <th>\n          Email\n     </th>\n      <th>\n          Cell Number\n      </th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of Users\">\n          <td>\n            {{user.username}}\n          </td>\n          <td>\n            {{user.email}}\n          </td>\n          <td>\n            {{user.cellnumber}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </mat-card>\n -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n\n  <div class=\"container\">\n    <div class=\"text-center\">\n       <span class=\"text-muted\" > All Rights Reserved 2019 @KassiApp</span>\n    </div>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header style=\"position: static;\">\n\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <div><a class=\"navbar-brand\" href=\"\">KassiApp</a></div>\n\n\n  <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n    <li class=\"nav-link\"><a class=\"text-light\" [routerLink]=\"['/home/dashboard']\" routerLinkActive=\"router-link-active\" >Dashboard</a></li>\n    <li class=\"nav-link\"><a class=\"text-light\">Sign Out</a></li>\n  </ul>\n  <form class=\"form-inline my-2 my-lg-0\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search Shop...\" name=\"search\" aria-label=\"Search\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" routerLinkActive=\"router-link-active\">Search</button>\n  </form>\n\n\n\n\n</nav>\n</header> -->\n\n<mat-toolbar color='primary'>\n\n  <span><a [routerLink]=\"['/']\" >Kassi Order</a></span>\n  <ul>\n      <li>\n         <a mat-button [routerLink]=\"['/profile']\" routerLinkActive=\"mat-accent\">Profile</a>\n      </li>\n    </ul>\n    <ul>\n        <li>\n           <a mat-button [routerLink]=\"['/order']\">Order</a>\n        </li>\n      </ul>\n  <span class=\"spacer\"></span>\n  <ul>\n      <li>\n         <a mat-button [routerLink]=\"['/signup']\" routerLinkActive=\"mat-accent\">Sign Up</a>\n      </li>\n    </ul>\n  <ul>\n   <li>\n      <a mat-button [routerLink]=\"['/dashboard']\" routerLinkActive=\"mat-accent\" >Dashboard</a>\n   </li>\n </ul>\n <ul>\n    <li>\n       <a mat-button [routerLink]=\"['/signin']\" routerLinkActive=\"mat-accent\">Sign in</a>\n    </li>\n  </ul>\n  <ul>\n      <li>\n         <a mat-button [routerLink]=\"['/home']\" >Sign Out</a>\n      </li>\n    </ul>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/order.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <br>\n    <mat-progress-bar\n      mode=\"query\">\n    </mat-progress-bar>\n    <h1 >Shop Here :)</h1>\n    <br>\n    <mat-card>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <table  class=\"table mat-table\">\n          <thead>\n            <th>Name</th>\n            <th>Price</th>\n            <th>Quantity</th>\n            <th>Add To List</th>\n            <th>Remove From List</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let product of products\">\n              <td>{{product.name}}</td>\n              <td>R{{product.price}}</td>\n              <td>\n                <!--  <mat-slider aria-label=\"Quantity\" min = '1' max = '20' step = '2' thumbLabel tickInterval=\"1\" invert ></mat-slider> -->\n                <mat-select placeholder = 'Quantity' #selectetedItem id='product._id'>\n                  <mat-option value= 1 >1</mat-option>\n                  <mat-option value=\"2\">2</mat-option>\n                  <mat-option value=\"6\">6</mat-option>\n                  <mat-option value=\"8\">8</mat-option>\n                  <mat-option value=\"10\">10</mat-option>\n                  <mat-option value=\"15\">15</mat-option>\n                  <mat-option value=\"20\">20</mat-option>\n                </mat-select>\n              </td>\n              <td><button class=\"btn btn-outline-success\" [disabled] = '!selectetedItem.selected' (click)=\"addTolist(selectetedItem, product._id)\">Add 2 List</button></td>\n              <td><button class=\"btn btn-outline-warning\" [disabled] = '!selectetedItem.selected' (click)=\"removeFromlist(selectetedItem, product._id)\">Remove from list</button></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"col-md-6\" *ngIf=\"viewList\">\n        <h3>Total Due: R{{total}}</h3>\n\n    <mat-list>\n      <mat-list-item *ngFor=\"let product of productList2\">{{ product.name }}</mat-list-item>\n    </mat-list>\n   <button class=\"btn btn-outline-primary\" (click)=\"placeOrder()\">ORDER LIST</button>\n      </div>\n    </div>\n  </mat-card>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoadind\"></mat-spinner>\n\n<div class=\"container\" *ngIf=\"!isLoading\">\n\n\n  <h1>Welcome Your Profile</h1>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <br>\n    <mat-card>\n        <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n          <form (submit) = \"onSignUp(signUpForm)\" #signUpForm='ngForm' *ngIf=\"!isLoadin\">\n\n            <mat-form-field>\n              <input matInput type=\"text\" required [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" #usernameInput>\n              <mat-error *ngIf=\"usernameInput.invalid\">Username is required!</mat-error>\n            </mat-form-field>\n\n            <br>\n\n          <mat-form-field>\n            <input matInput type=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" #emailInput='ngModel' required email>\n            <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid Email!</mat-error>\n          </mat-form-field>\n\n          <br>\n\n          <mat-form-field>\n            <input matInput type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" #passwordInput='ngModel' required>\n            <mat-error *ngIf=\"passwordInput.invalid\">Please eneter valid password!</mat-error>\n          </mat-form-field>\n          <div>\n            <br>\n              <button class=\"btn btn-outline-primary\" color='accent' type=\"submit\" [disabled] = \"signUpForm.invalid\">Sign Up</button>\n            </div>\n          </form>\n\n\n        </mat-card>\n\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/singin/singin.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/singin/singin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <br>\n      <mat-card>\n          <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n            <form (submit) = \"onSignIn(signInForm)\" #signInForm='ngForm' *ngIf=\"!isLoadin\">\n\n              <mat-form-field>\n                <input matInput type=\"text\" required [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" #usernameInput>\n                <mat-error *ngIf=\"usernameInput.invalid\"></mat-error>\n              </mat-form-field>\n\n              <br>\n\n            <mat-form-field>\n              <input matInput type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" #passwordInput='ngModel' required>\n              <mat-error *ngIf=\"passwordInput.invalid\">Please eneter valid password.</mat-error>\n            </mat-form-field>\n\n            <div>\n                <button class=\"btn btn-outline-primary\" color='blue' type=\"submit\">Sign In</button>\n            </div>\n\n            </form>\n\n\n            <hr>\n             <div *ngIf=\"!isLogin\">\n                <mat-error>Incorrect Username/Password combination.</mat-error>\n              </div>\n          </mat-card>\n\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _singin_singin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singin/singin.component */ "./src/app/singin/singin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");








var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'signin', component: _singin_singin_component__WEBPACK_IMPORTED_MODULE_5__["SinginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kass-order-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _singin_singin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./singin/singin.component */ "./src/app/singin/singin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _singin_singin_component__WEBPACK_IMPORTED_MODULE_13__["SinginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_15__["OrderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-paginator {\r\n  margin-top: 1rem;\r\n}\r\n.material-icons {\r\n  font-size: 50px;\r\n}\r\n#add_alert {\r\n  font-size: 28px;\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXBhZ2luYXRvciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuI2FkZF9hbGVydCB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService, orderService, productService) {
        this.userService = userService;
        this.orderService = orderService;
        this.productService = productService;
        this.Users = [];
        this.products = [];
        this.viewOrders = false;
        // used for pagination
        this.recordsLength = 2;
        this.pageSizeOptions = [1, 3, 5, 8];
        this.usersPerPage = 5;
        this.currentPage = 0;
        // edit remove button
        this.btnEditRemove = 'Add Product';
        this.btnVisible = false;
        // what to display
        this.isViewAllOrders = false;
        this.isViewAllMessages = false;
        this.isViewAllUsers = false;
        this.isAddNewProduct = false;
        this.isEditProduct = false;
    }
    // @ViewChild(MatPaginator) paginator: MatPaginator;
    // clickme() {
    //   this.products.push(this.Quantity);
    //   console.log(this.products);
    // }
    // clickme2() {
    //   let orderString = '';
    //   this.products.forEach(element => {
    //     orderString += element + '#';
    //   });
    //   console.log(orderString);
    // }
    DashboardComponent.prototype.viewUserOrders = function (id) {
        var _this = this;
        this.viewOrders = true;
        this.isViewAllUsers = false;
        this.isAddNewProduct = false;
        this.orderService.getClientOders(id).subscribe(function (order) {
            console.log(order);
            _this.oneOrder = order;
        }, function (errr) {
            console.log(errr);
        });
    };
    DashboardComponent.prototype.deleteUser = function (id) {
        this.userService.deleteUser(id).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.onChangedPage = function (pageData) {
        console.log(pageData);
        this.currentPage = pageData.pageIndex + 1;
        this.usersPerPage = pageData.pageSize;
        this.userService.getUsers(this.usersPerPage, this.currentPage);
    };
    // all orders will be viewed
    DashboardComponent.prototype.viewAllOrders = function () {
        var _this = this;
        this.isViewAllOrders = true;
        this.isViewAllUsers = false;
        this.isViewAllMessages = false;
        this.viewOrders = false;
        this.isAddNewProduct = false;
        this.orderService.getAllOrders().subscribe(function (orders) {
            _this.allOrders = orders;
            console.log(_this.allOrders);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isViewAllUsers = true;
        this.isViewAllOrders = false;
        this.isViewAllMessages = false;
        this.viewOrders = false;
        this.userService.getUsers(this.usersPerPage, 1).subscribe(function (users) {
            _this.Users = users;
            _this.recordsLength = _this.Users.length;
            console.log(_this.recordsLength);
        });
        this.getProducts();
    };
    DashboardComponent.prototype.getUsers = function () {
        this.ngOnInit();
        this.isViewAllOrders = false;
        this.isViewAllMessages = false;
        this.isViewAllUsers = true;
        this.isAddNewProduct = false;
    };
    // adding a product to database
    DashboardComponent.prototype.addProduct = function (ngform) {
        if (ngform) {
            try {
                console.log(ngform.value);
            }
            catch (error) {
                console.log(error);
            }
        }
        this.isViewAllOrders = true;
        this.isViewAllUsers = false;
        this.isViewAllMessages = false;
        this.viewOrders = false;
        this.isAddNewProduct = true;
        if (ngform && !this.isEditProduct) {
            console.log('this happened');
            try {
                var product_1 = {
                    price: ngform.value.price,
                    name: ngform.value.name
                };
                // now create the product
                this.productService.createProduct(product_1).subscribe(function (result) {
                    console.log('got here and all that');
                    console.log(product_1);
                }, function (err) {
                    console.log(err);
                });
            }
            catch (error) {
                console.log(error);
            }
        }
        else if (ngform && this.isEditProduct) {
            console.log('LET IT GO');
            console.log(this.prod);
            var product = {
                price: ngform.value.price,
                name: ngform.value.name
            };
            this.startEdit(product, this.prod._id);
            this.isEditProduct = false;
        }
    };
    DashboardComponent.prototype.viewAllMessages = function () {
    };
    // to get all products
    DashboardComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
            console.log(_this.products);
        }, function (err) {
            console.log(err);
        });
    };
    // FOR PRODUCTS
    DashboardComponent.prototype.deleteProduct = function (id) {
        this.productService.deleteProduct(id).subscribe(function (product) {
            console.log(product);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.editProduct = function (id, ngform) {
        var _this = this;
        this.btnEditRemove = 'Edit Product';
        this.products.forEach(function (element) {
            if (element._id === id) {
                console.log(element);
                _this.isEditProduct = true;
                _this.name = element.name;
                _this.price = element.price;
                _this.prod = {
                    _id: id,
                    name: _this.name,
                    price: _this.price
                };
            }
        });
    };
    DashboardComponent.prototype.startEdit = function (prod, id) {
        this.productService.updateProduct(id, prod).subscribe(function (product) {
            console.log('EDIT THIS THING BELOW');
            console.log(product);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n}\r\nul {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  size: 30px;\r\n}\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnV7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");




var OrderComponent = /** @class */ (function () {
    function OrderComponent(productService, orderService) {
        this.productService = productService;
        this.orderService = orderService;
        this.productsList = [];
        this.productList2 = [];
        this.total = 0;
        // selected product quantity
        this.quantity = 0;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            console.log(err);
        });
    };
    // add items to list
    OrderComponent.prototype.addTolist = function (form, productID) {
        var _this = this;
        console.log(form.value, productID);
        var quantity = 1;
        quantity = form.value;
        this.productsList.push(productID);
        console.log(this.productsList);
        this.products.forEach(function (element) {
            if (element._id === productID) {
                _this.productList2.push(element);
                _this.viewList = true;
                _this.total += element.price * quantity;
            }
        });
        this.quantity = quantity;
        console.log('QUATITY' + quantity);
    };
    // remove from list
    OrderComponent.prototype.removeFromlist = function (form, productID) {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        var index = this.productsList.indexOf(productID);
        this.productsList = this.productsList.slice(0, index).concat(this.productsList.slice(index + 1));
        this.productList2 = this.productList2.slice(0, index).concat(this.productList2.slice(index + 1));
        console.log(this.productsList);
        this.products.forEach(function (element) {
            if (element._id === productID) {
                _this.total = _this.total - (element.price * form.value);
                if (_this.total < 0) {
                    _this.total = 0;
                }
                console.log();
            }
        });
    };
    OrderComponent.prototype.placeOrder = function () {
        var userID = sessionStorage.getItem('id');
        console.log('id --------->  ' + userID);
        var list = '';
        this.productsList.forEach(function (element) {
            list += element + '#';
        });
        var totalprice = this.total;
        // tslint:disable-next-line: object-literal-shorthand
        var data = { products: list.substr(0, list.length - 1), totalprice: totalprice };
        this.orderService.createOrder(userID, data).subscribe(function (respose) {
            console.log(respose);
        }, function (err) {
            console.log(err);
        });
    };
    OrderComponent.ctorParameters = function () { return [
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }
    ]; };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.isLoding = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoding = true;
        this.userService.getUser('5daafe50a3cd811a98c1dddb').subscribe(function (user) {
            _this.User = user;
            console.log(_this.User);
        }, function (err) {
            console.log(err);
        });
        this.isLoding = false;
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrderService = /** @class */ (function () {
    function OrderService(httpClient) {
        this.httpClient = httpClient;
    }
    OrderService.prototype.getClientOders = function (id) {
        return this.httpClient.get('api/users/' + id + '/orders');
    };
    OrderService.prototype.getAllOrders = function () {
        return this.httpClient.get('api/orders/');
    };
    OrderService.prototype.createOrder = function (userID, orderList) {
        return this.httpClient.post('api/users/' + userID + '/order', orderList);
    };
    OrderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductService = /** @class */ (function () {
    function ProductService(httpClient) {
        this.httpClient = httpClient;
    }
    ProductService.prototype.createProduct = function (product) {
        return this.httpClient.post('api/product', product);
    };
    ProductService.prototype.getProducts = function () {
        return this.httpClient.get('api/products');
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.httpClient.delete('api/products/' + id);
    };
    ProductService.prototype.updateProduct = function (id, product) {
        return this.httpClient.put('api/products/' + id, product);
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.getUsers = function (pageSize, currentPage) {
        var query = "?pageSize=" + pageSize + "&currentPage=" + currentPage;
        return this.httpClient.get('api/users' + query);
    };
    UserService.prototype.getUser = function (id) {
        return this.httpClient.get('api/users/' + id);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.httpClient.delete('api/users/' + id);
    };
    UserService.prototype.createtUser = function (user) {
        return this.httpClient.post('api/signup', user);
    };
    UserService.prototype.checkUser = function (password, username) {
        return this.httpClient.get('api/user/' + username + '/' + password);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.isLoading = false;
    }
    SignupComponent.prototype.onSignUp = function (form) {
        var _this = this;
        this.isLoading = true;
        var newUser = {
            username: form.value.username,
            email: form.value.email,
            password: form.value.password
        };
        this.userService.createtUser(newUser).subscribe(function (result) {
            console.log(result);
            _this.isLoading = false;
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/singin/singin.component.css":
/*!*********************************************!*\
  !*** ./src/app/singin/singin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2luL3Npbmdpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2luZ2luL3Npbmdpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/singin/singin.component.ts":
/*!********************************************!*\
  !*** ./src/app/singin/singin.component.ts ***!
  \********************************************/
/*! exports provided: SinginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinginComponent", function() { return SinginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SinginComponent = /** @class */ (function () {
    function SinginComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.isLogin = true;
    }
    SinginComponent.prototype.onSignIn = function (form) {
        var _this = this;
        console.log('sign in');
        var password = form.value.password;
        var username = form.value.username;
        this.userService.checkUser(password, username).subscribe(function (user) {
            if (user.message === 'not found') {
                _this.isLogin = false;
            }
            else {
                _this.isLogin = true;
                // this.token = user.token;
                console.log(user.user[0]._id);
                sessionStorage.setItem('id', user.user[0]._id);
                _this.route.navigateByUrl('/profile');
            }
        }, function (err) {
            console.log(err);
        });
    };
    SinginComponent.prototype.ngOnInit = function () {
    };
    SinginComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SinginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singin',
            template: __webpack_require__(/*! raw-loader!./singin.component.html */ "./node_modules/raw-loader/index.js!./src/app/singin/singin.component.html"),
            styles: [__webpack_require__(/*! ./singin.component.css */ "./src/app/singin/singin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SinginComponent);
    return SinginComponent;
}());



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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\phillip\development\kass-order-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map