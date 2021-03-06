(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<main>\n  <app-main-nav></app-main-nav>\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container-fluid\" id=\"main\" style=\" padding-bottom: 10%;\">\n<br>\n  <div class=\"row\">\n\n\n      <div class=\"col-sm-2\">\n        <br>\n        <ul>\n            <button (click)=\"getUsers()\" mat-icon-button><mat-icon color='primary'>emoji_people</mat-icon></button>\n            <br>\n            <br>\n            <button (click)=\"viewAllMessages()\" mat-icon-button><mat-icon color='primary'>messages</mat-icon></button>\n            <br>\n            <br>\n            <button (click)=\"viewAllOrders()\" mat-icon-button><mat-icon color='primary'>add_alert</mat-icon></button>\n            <br>\n            <br>\n            <button (click)=\"addProduct2()\" mat-icon-button><mat-icon color='primary'>add_shopping_cart</mat-icon></button>\n            <br>\n            <br>\n          </ul>\n     </div>\n\n     <div class=\"col-md-8\" *ngIf=\"!isViewAllOrders && !viewOrders && isViewAllMessages !== true\">\n      <input placeholder=\"search for User here\" matInput (keyup) = \"filterText($event.target.value)\">\n      <br>\n        <mat-accordion *ngFor=\"let user of Users\">\n            <br>\n            <mat-expansion-panel>\n\n             <mat-expansion-panel-header color=\"primary\">\n               <table class=\"table\">\n                 <tr>\n                   <div class=\"container\">\n\n                      <td>  <span style=\"text-transform: capitalize;\"><br><span class=\"text-primary uk-text-uppercase\">{{user.username}}</span></span></td>\n                      <td *ngIf=\"user.orders.length !== 0\"><br><i class=\"material-icons\" id=\"add_alert\">add_alert</i><span class=\"text-danger\"></span></td>\n                   </div>\n\n                 </tr>\n               </table>\n\n            </mat-expansion-panel-header>\n\n              <table class=\"table\">\n                <thead>\n                  <th>Email </th>\n                  <th>Phone</th>\n                  <th>Registered</th>\n                  <th>Role</th>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>{{user.email}}</td>\n                    <td>{{user.cellnumber}}</td>\n                    <td><span style=\"text-transform: uppercase;\">{{user.signupdate.split('T')[0]}}</span></td>\n                    <td>\n                      <mat-select value = {{user.role}} #selectetedRole id='user._id'>\n                        <mat-option value= \"admin\" >admin</mat-option>\n                        <mat-option value=\"normal\">normal</mat-option>\n                      </mat-select>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <mat-action-row>\n                 <button mat-raised-button color='accent' [hidden] ='user.role === \"admin\"'   (click)=\"deleteUser(user._id)\" >Delete</button>\n                 <button mat-raised-button color='primary' [hidden]='user.role === \"admin\"' (click)=\"viewUserOrders(user._id)\" [disabled] = 'user.orders.length === 0'>View Order</button>\n                 <button mat-raised-button color='secondary' [disabled]='user.role === \"admin\"'  (click)=\"saveUserRole(user._id, selectetedRole)\">Save Role</button>\n              </mat-action-row>\n            </mat-expansion-panel>\n\n        </mat-accordion>\n        <br>\n        <div class=\"alert-success\"  *ngIf=\"editRole\">\n          User Role has been Changed Successfully\n        </div>\n        <mat-paginator  #paginator  [length]='recordsLength' [pageSize] = usersPerPage [pageSizeOptions]='pageSizeOptions' (page)='onChangedPage($event)'></mat-paginator>\n\n      </div>\n\n\n    <!--Add the orders panel-->\n    <div class=\"col-md-7\" *ngIf=\"isViewAllOrders && isAddNewProduct !== true\">\n        <table class=\"table table-striped table-responsive\">\n          <thead>\n            <th>Order By</th>\n            <th>Time</th>\n            <th>Total</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let order of allOrders\">\n              <td *ngIf=\"order.products.length !== 0\">{{order.username}}</td>\n              <td *ngIf=\"order.products.length !== 0\">{{order.orderdate.split('T')[1].split('.')[0]}}</td>\n              <td *ngIf=\"order.products.length !== 0\">R{{order.totalprice}}</td>\n              <td *ngIf=\"order.products.length !== 0\">\n                  <div align=\"center\" ><button mat-button color='primary' [disabled]='order.status' (click)=\"acceptOrder(order._id, order.userid)\">Accept</button></div>\n                  <div align=\"center\" *ngIf=\"order.status !== true\"><button mat-button color='accent' [hidden]=\"order.status\" (click)=\"deleteOrder(order._id)\">{{Reject}}</button></div>\n                  <div align=\"center\" *ngIf=\"order.status === true\"> <button mat-button color='accent' [hidden]=\"!order.status\" (click)=\"deleteOrder(order._id)\"  >Cancel</button></div>\n            </td>\n\n            </tr>\n          </tbody>\n\n        </table>\n\n\n    </div>\n\n    <div class=\"col-md-8\" *ngIf=\"viewOrders\">\n        <h2 class=\"text-center text-primary\" mat-text>ORDER DETAILS - <span style=\"text-transform: uppercase;\"> {{oneOrder.username}}</span></h2>\n        <br>\n        <mat-card>\n            <table class=\"table table-hover\">\n                <thead>\n                  <th>Order Time</th>\n                  <th>Total Items</th>\n                  <th>Total Price</th>\n                  <th>Products</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of oneOrder.orders\">\n                    <td>{{item.orderdate.split('T')[1].split('.')[0]}}</td>\n                    <td>{{item.products.length}}</td>\n                    <td>R{{item.totalprice}}</td>\n                    <td *ngFor=\"let prod of item.products\">\n                    {{prod.name}} @ R{{prod.price}} Each\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n        </mat-card>\n\n        <hr>\n    </div>\n\n    <div class=\"col-md-8\" *ngIf=\"isAddNewProduct\">\n        <mat-card>\n      <table class=\"table table-striped\">\n        <thead>\n          <th>Product Name</th>\n          <th>Unit Price</th>\n          <th>Edit/Delete</th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of products\">\n            <td>{{product.name}}</td>\n            <td>R{{product.price}}</td>\n            <td>\n              <div class=\"row\">\n                <div class=\"col-md-6\"><button mat-button color=\"accent\" (click)=\"deleteProduct(product._id)\">REMOVE</button></div>\n                <div class=\"col-md-6\"><button mat-button color=\"primary\" (click)=\"editProduct(product._id)\">EDIT</button></div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <mat-paginator [length]='products.length' pageSize = 5 [showFirstLastButtons] = \"true\" [pageSizeOptions]='[2, 4, 6, 8, 10]'></mat-paginator>\n      <br>\n      <br>\n    </mat-card>\n       <mat-card>\n            <form (submit) = \"addProduct(addProductForm)\" #addProductForm='ngForm'>\n\n              <mat-form-field>\n                <input matInput type=\"text\" required [(ngModel)]=\"name\" name=\"name\" placeholder=\"Product Name\" #nameInput>\n                <mat-error *ngIf=\"nameInput.invalid\"></mat-error>\n              </mat-form-field>\n\n              <br>\n\n            <mat-form-field>\n              <input matInput type=\"number\" name=\"price\" placeholder=\"Price\" [(ngModel)]=\"price\" #priceInput='ngModel' required>\n              <mat-error *ngIf=\"priceInput.invalid\">Please enter Price</mat-error>\n            </mat-form-field>\n\n            <div>\n                <button class=\"btn btn-outline-primary\" color='blue' visible='false' [disabled] = 'addProductForm.invalid' type=\"submit\">{{btnEditRemove}}</button>\n            </div>\n\n            </form>\n          </mat-card>\n    </div>\n    <div class=\"col-md-8\" *ngIf=\"isViewAllMessages\">\n\n      <mat-accordion *ngFor=\"let msg of messages\">\n          <br>\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <span style=\"color: palevioletred; font-size: medium; font-family: Georgia, 'Times New Roman', Times, serif\">Message From</span> : &nbsp; <span style=\"text-transform: capitalize;\"> {{msg.user.username}}</span> &nbsp;\n              <!-- <span style=\"color: palevioletred; font-size: medium; font-family: Georgia, 'Times New Roman', Times, serif\">Time Sent & Date</span> : &nbsp; {{msg.date.split('T')[0]}} &nbsp; {{msg.date.split('T')[1].split('.')[0]}} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -->\n              <span style=\"color: palevioletred; font-size: medium; font-family: Georgia, 'Times New Roman', Times, serif\">Subject</span> : &nbsp; <span style=\"text-transform: capitalize;\"> {{msg.subject}}</span>\n            </mat-expansion-panel-header>\n\n            <table class=\"table table-borderless\">\n              <thead>\n                <th>\n                    <span style=\"font-size: large;\">Message</span>\n                </th>\n              </thead>\n                <tbody>\n                  <tr>\n                   <td><span style=\"font-size: medium;\">{{msg.message}}</span> </td>\n                  </tr>\n                </tbody>\n                <thead>\n                    <th>\n                    <span style=\"font-size: large;\">Reply</span>\n                    </th>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td *ngIf=\"userRole === 'admin' && msg.read === true\"><span style=\"font-size: medium;\">{{msg.adminmsg}}</span> </td>\n                    <td *ngIf=\"userRole === 'admin' && msg.read !== true\"><span style=\"font-size: medium;\">A reply to <span style=\"text-transform: capitalize; text-decoration-color: dodgerblue;\">{{msg.user.username}} Needed!</span></span> </td>\n                   </tr><br>\n                  <tr>\n                    <td>\n                      <form>\n                        <mat-form-field *ngIf=\"msg.read !== true\">\n                            <textarea  matInput cols=\"49\" rows=\"8\" [(ngModel)]=\"messageReply\" name=\"messageReply\"></textarea>\n                        </mat-form-field>\n                        <mat-form-field *ngIf=\"msg.read === true\">\n                            <textarea  [disabled] = 'msg.read === true' [placeholder]=\"msg.adminmsg\" matInput cols=\"49\" rows=\"8\" [(ngModel)]=\"messageReply\" name=\"messageReply\"></textarea>\n                        </mat-form-field>\n                        <br>\n                        <table>\n                          <tr>\n                            <td>\n                                <button [disabled] = 'msg.read === true'  mat-raised-button color='primary' (click)='replyMessage(msg._id)'>SEND</button>\n\n                            </td>\n                            <td>\n                                <button [disabled] = 'msg.read !== true'  mat-raised-button color='accent' (click)='deleteMessage(msg._id)'>DELETE</button>\n\n                            </td>\n                          </tr>\n                        </table>\n                      </form>\n                    </td>\n                  </tr>\n                </tbody>\n            </table>\n          </mat-expansion-panel>\n      </mat-accordion>\n      <br>\n      <div class=\"alert-info\" *ngIf=\"isReply\">\n        {{infoMsg}}\n      </div>\n   </div>\n  </div>\n\n</div>\n\n\n\n\n  <!-- <h1 class=\"h1\">Welcome To Dashboard</h1>\n\n  <mat-card>\n    <table class=\"table\">\n      <thead>\n      <th>\n          Username\n     </th>\n     <th>\n          Email\n     </th>\n      <th>\n          Cell Number\n      </th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of Users\">\n          <td>\n            {{user.username}}\n          </td>\n          <td>\n            {{user.email}}\n          </td>\n          <td>\n            {{user.cellnumber}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </mat-card>\n -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" color='primary'>\n\n  <div class=\"container\">\n    <div class=\"text-center\">\n       <span class=\"text-muted\" > All Rights Reserved 2019 @KassiApp</span>\n    </div>\n  </div>\n\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landingpage/landingpage.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landingpage/landingpage.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div  id=\"phillip\"  class=\"d-flex justify-content-center\">\n <table>\n    <tbody>\n      <tr>\n        <td>\n          <button mat-raised-button color='primary' (click)='navigate(\"signin\")'>Sign In</button>\n        </td>\n      </tr>\n      <br>\n      <tr>\n          <td>\n              <button mat-raised-button color='accent' (click)='navigate(\"signup\")'>Sign Up</button>\n            </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n              #drawer\n              class=\"sidenav\"\n              fixedInViewport=\"true\"\n              [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n              [mode]=\"(isHandset$ | async) ? 'over' : 'push '\"\n              [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar color='primary' (click)=\"drawer.opened = !drawer.opened\">Menu</mat-toolbar>\n    <mat-nav-list>\n      &nbsp; &nbsp; &nbsp; &nbsp; <mat-icon *ngIf=\"userService.isUserLoggedIn()\" style=\"height:40px;\">fingerprint</mat-icon>  <br> &nbsp;   <a mat-button *ngIf=\"userService.isUserLoggedIn()\" [routerLink]=\"['/profile']\" routerLinkActive=\"mat-accent\" (click)=\"drawer.opened = !drawer.opened\" #onetwo>Profile</a><br>\n      &nbsp; &nbsp; &nbsp; &nbsp; <mat-icon *ngIf=\"userService.isUserLoggedIn()\" >shopping_basket</mat-icon>                  <br> &nbsp;  <a mat-button *ngIf=\"userService.isUserLoggedIn()\"  [routerLink]=\"['/order']\" routerLinkActive=\"mat-accent\" (click)=\"drawer.opened = !drawer.opened\">Order :-)</a><br>\n      &nbsp; &nbsp; &nbsp; &nbsp; <mat-icon *ngIf=\"userService.isUserLoggedIn() && !this.userService.isUserAdmin()\">settings_phone</mat-icon>  <br>  <a mat-button *ngIf=\"userService.isUserLoggedIn() && !this.userService.isUserAdmin()\"  [routerLink]=\"['/message']\" routerLinkActive=\"mat-accent\" (click)=\"drawer.opened = !drawer.opened\">Contact Admin</a> <br>\n      &nbsp; &nbsp; &nbsp; &nbsp; <mat-icon *ngIf=\"!userService.isUserLoggedIn()\">list_alt</mat-icon>  <br> &nbsp; <a mat-button *ngIf=\"!userService.isUserLoggedIn()\" [routerLink]=\"['/signup']\" routerLinkActive=\"mat-accent\" (click)=\"drawer.opened = !drawer.opened\">Sign Up</a><br>\n      &nbsp; &nbsp; &nbsp;  &nbsp; <mat-icon *ngIf=\"userService.isUserLoggedIn() && userService.isUserAdmin()\">emoji_people</mat-icon>  <br>  <a mat-button *ngIf=\"userService.isUserLoggedIn() && userService.isUserAdmin()\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"mat-accent\" (click)=\"drawer.opened = !drawer.opened\">Dashboard</a><br>\n      &nbsp; &nbsp; &nbsp; &nbsp; <mat-icon *ngIf=\"!userService.isUserLoggedIn()\">phone_in_talk</mat-icon>   <br>  &nbsp; &nbsp;<a mat-button *ngIf=\"!userService.isUserLoggedIn()\"[routerLink]=\"['/signin']\" routerLinkActive=\"mat-accent\" (click)=\"drawer.opened = !drawer.opened\">Sign In</a> <br>\n      &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; <mat-icon *ngIf=\"userService.isUserLoggedIn()\">phone_missed</mat-icon>   <br>   &nbsp; <a mat-button *ngIf=\"userService.isUserLoggedIn()\" (click)=\"signOut()\" (click)=\"drawer.opened = !drawer.opened\">Sign Out</a>\n    </mat-nav-list>\n  </mat-sidenav\n >\n  <mat-sidenav-content >\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span (click)=\"drawer.opened = !drawer.opened\">KassiOrder</span>\n    </mat-toolbar>\n    <ng-content #content></ng-content>\n\n  </mat-sidenav-content >\n</mat-sidenav-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <header style=\"position: static;\">\n\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <div><a class=\"navbar-brand\" href=\"\">KassiApp</a></div>\n\n\n  <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n    <li class=\"nav-link\"><a class=\"text-light\" [routerLink]=\"['/home/dashboard']\" routerLinkActive=\"router-link-active\" >Dashboard</a></li>\n    <li class=\"nav-link\"><a class=\"text-light\">Sign Out</a></li>\n  </ul>\n  <form class=\"form-inline my-2 my-lg-0\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search Shop...\" name=\"search\" aria-label=\"Search\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" routerLinkActive=\"router-link-active\">Search</button>\n  </form>\n\n\n\n\n</nav>\n</header> -->\n\n\n    <mat-toolbar color='primary'>\n\n      <span><a [routerLink]=\"['/profile']\" > Kassi Order</a></span>\n      <ul>\n          <li>\n             <a  *ngIf=\"userService.isUserLoggedIn()\" mat-button [routerLink]=\"['/profile']\" routerLinkActive=\"mat-accent\">Profile</a>\n          </li>\n        </ul>\n        <ul>\n            <li *ngIf=\"userService.isUserLoggedIn()\">\n               <a mat-button [routerLink]=\"['/order']\" routerLinkActive=\"mat-accent\">Order</a>\n            </li>\n        </ul>\n        <ul>\n          <li *ngIf=\"userService.isUserLoggedIn() && !this.userService.isUserAdmin()\">\n             <a mat-button [routerLink]=\"['/message']\" routerLinkActive=\"mat-accent\">Contat</a>\n          </li>\n      </ul>\n      <span class=\"spacer\"></span>\n      <ul>\n          <li>\n             <a *ngIf=\"!userService.isUserLoggedIn()\" mat-button [routerLink]=\"['/signup']\" routerLinkActive=\"mat-accent\">Sign Up</a>\n          </li>\n        </ul>\n      <ul>\n       <li>\n          <a *ngIf=\"userService.isUserLoggedIn() && userService.isUserAdmin()\" mat-button [routerLink]=\"['/dashboard']\" routerLinkActive=\"mat-accent\" >Dashboard</a>\n       </li>\n     </ul>\n     <ul>\n        <li>\n           <a  *ngIf=\"!userService.isUserLoggedIn()\" mat-button [routerLink]=\"['/signin']\" routerLinkActive=\"mat-accent\">Sign In</a>\n        </li>\n      </ul>\n      <ul>\n          <li>\n             <a  *ngIf=\"userService.isUserLoggedIn()\" mat-button (click)=\"signOut()\" >Sign Out</a>\n          </li>\n        </ul>\n    </mat-toolbar>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n        <h1>Contact Admin</h1>\n        <br>\n          <mat-form-field >\n              <input placeholder=\"Subject\" matInput type=\"text\" [(ngModel)]=\"subject\" name=\"subject\">\n          </mat-form-field>\n            <br>\n          <mat-form-field>\n              <textarea placeholder=\"Enter message here\" matInput col=\"30\" rows=\"10\" [(ngModel)]=\"message\" name=\"message\"></textarea>\n          </mat-form-field>\n            <br>\n              <button mat-raised-button color='primary' (click)=\"sendMessage()\">Send</button><br> <br>\n              <!-- <button class=\"btn btn-block\" (click)=\"getMyMessages()\">Refresh</button> -->\n            <br>\n\n            <div class=\"alert-success\" *ngIf=\"msgSuccess\">\n              Your Message has been sent to Admin.\n            </div>\n\n    </div>\n    <div class=\"col-md-6\">\n        <h1 style=\"text-align: center;\">My Messages</h1>\n        <br>\n\n        <mat-accordion *ngFor=\"let msg of messages\">\n\n          <div *ngIf=\"msg.user._id === userId\">\n              <br>\n            <mat-expansion-panel >\n              <mat-expansion-panel-header>\n          <span style=\"color:palevioletred; font-family: Georgia, 'Times New Roman', Times, serif;\">SENT</span> : &nbsp; {{msg.date.split('T')[0]}} &nbsp; &nbsp;\n\n          <span style=\"color:palevioletred; font-family: Georgia, 'Times New Roman', Times, serif;\">SUBJECT</span> :  &nbsp; <span style=\"text-transform: capitalize;\"> {{msg.subject}}</span>\n                <!-- <span style=\"text-transform: uppercase;\">{{msg.subject}}</span> -->\n              </mat-expansion-panel-header>\n              <table class=\"table table-borderless\">\n\n                <thead>\n                  <th>You</th>\n                </thead>\n                  <tbody>\n                      <tr>\n                          <td>{{msg.message}}</td>\n                      </tr>\n                  </tbody>\n                <thead>\n                  <th>Admin</th>\n                </thead>\n                <tbody>\n                  <tr>\n                        <td>{{msg.adminmsg}}</td>\n                  </tr>\n                  <br>\n                  <tr>\n                        <button mat-raised-button color='accent' (click)='deleteConvo(msg._id)'>DELETE</button>\n                  </tr>\n                </tbody>\n              </table>\n            </mat-expansion-panel>\n          </div>\n\n        </mat-accordion>\n        <br>\n        <div class=\"alert-warning\" *ngIf=\"isDeleted\">\n          Message Deleted.\n        </div>\n   </div>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\" id=\"toplevel\">\n    <br>\n    <mat-progress-bar\n      mode=\"buffer\"\n      *ngIf=\"isLoading\">\n    </mat-progress-bar>\n    <h1 class=\"display-4\">Shop Here <mat-icon color='primary'>add_shopping_cart</mat-icon></h1>\n    <br>\n    <mat-form-field  color='primary'>\n    <input placeholder=\"search for product here\" matInput (keyup) = \"filterText($event.target.value)\">\n    </mat-form-field>\n    <mat-card>\n    <div class=\"row\">\n        <table  class=\"table table-striped\">\n          <thead>\n            <th>Name</th>\n            <th>Price</th>\n            <th>Quantity</th>\n            <th>Edit</th>\n\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let product of products\">\n              <td>{{product.name}}</td>\n              <td>R{{product.price}}</td>\n              <td>\n                <!--  <mat-slider aria-label=\"Quantity\" min = '1' max = '20' step = '2' thumbLabel tickInterval=\"1\" invert ></mat-slider> -->\n                <mat-select placeholder = 'Quantity' #selectetedItem id='product._id'>\n                  <mat-option value= 1 >1</mat-option>\n                  <mat-option value=\"2\">2</mat-option>\n                  <mat-option value=\"6\">6</mat-option>\n                  <mat-option value=\"8\">8</mat-option>\n                  <mat-option value=\"10\">10</mat-option>\n                  <mat-option value=\"15\">15</mat-option>\n                  <mat-option value=\"20\">20</mat-option>\n                </mat-select>\n              </td>\n              <td><button mat-button color='primary'[disabled] = '!selectetedItem.selected' (click)=\"addTolist(selectetedItem, product._id)\">ADD</button> &nbsp;\n                  <button mat-button color='warn' [disabled] = '!selectetedItem.selected' (click)=\"removeFromlist(selectetedItem, product._id)\">REMOVE</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Paginator component -->\n        <mat-paginator pageIndex = '0' #paginator [length]='docsTotal' pageSize = 4 [showFirstLastButtons] = \"true\" [pageSizeOptions]='[2, 4, 6, 8, 10]'></mat-paginator>\n\n\n    </div>\n\n    <div class=\"row\" *ngIf=\"isMessage\">\n        <div class=\"col-lg-12\">\n            <div [class]=\"errorMessage\">\n              {{message}}\n            </div>\n        </div>\n    </div>\n  </mat-card>\n  <br>\n  <div *ngIf=\"viewList\">\n   <!-- <h3>Total Due: R{{total}}</h3> <br> <button mat-raised-button color='accent' [disabled] = \"isMessage\" (click)=\"placeOrder()\">ORDER</button>\n\n  <mat-list>\n    <mat-list-item *ngFor=\"let product of productList2\">{{ product.name }} &nbsp; @ &nbsp; R{{product.price}} Each</mat-list-item>\n  </mat-list> -->\n\n  <table class=\"table\">\n      <thead>\n        <th>Item</th>\n        <th>Unit Price</th>\n        <th>Quantity</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of productList2\">\n            <td>{{ product.name }}</td>\n            <td>R{{product.price}} Each</td>\n            <td>{{product.quantity}}</td>\n        </tr>\n        <tr>\n          <td><h4>Total Due: R{{total}}</h4></td>\n        </tr>\n        <tr>\n            <td> <button mat-raised-button color='accent' [disabled] = \"isMessage\" (click)=\"placeOrder()\">ORDER</button></td>\n          </tr>\n      </tbody>\n\n  </table>\n\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<div class=\"container-fluid\">\n    <!-- <h1 style=\"text-align: center;\">Welcome to Your Profile</h1>\n    <br>\n    <div  *ngIf=\"image !== '' && image\" style=\"text-align: center;\">\n        <img *ngIf=\"image !== '' && image\" [src] = 'image'>\n    </div>\n    <br>\n    <mat-progress-bar [value]='progress' color='accent'></mat-progress-bar> -->\n\n    <agm-map [latitude]=\"lat\" [zoom]=\"zoom\" [longitude]=\"lng\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n\n    <br>\n    <mat-card>\n    <table align=\"center\">\n\n\n<br>\n<br>\n      <tr>\n        <td >\n            <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n            <form class=\"table\" (submit) = \"onSaveProfile(profileForm)\" #profileForm=\"ngForm\" *ngIf=\"!isLoading\" >\n            <mat-form-field >\n              <input matInput type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" [disabled]=\"isFormDisabled\">\n            </mat-form-field>\n\n            <mat-form-field>\n                 <input #cellnumberV matInput type=\"text\" name=\"cellnumber\" placeholder=\"cell number\" [(ngModel)]=\"cellnumber\" required [disabled]=\"isFormDisabled\">\n                 <mat-error *ngIf=\"!cellnumberV.invalid\">Please provide cell number</mat-error>\n            </mat-form-field>\n\n             <mat-form-field>\n                  <input matInput type=\"text\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"email\" [disabled]=\"isFormDisabled\">\n            </mat-form-field>\n\n             <mat-form-field>\n                 <input #streetnameV required  matInput type=\"text\" name=\"streetname\" placeholder=\"Street name\" [(ngModel)]=\"streetname\" [disabled]=\"isFormDisabled\">\n                 <mat-error  *ngIf=\"!streetnameV.invalid\">Please provide cell number</mat-error>\n             </mat-form-field>\n\n             <mat-form-field>\n                <input #housenumberV matInput type=\"text\" name=\"housenumber\" placeholder=\"House Number\" required [(ngModel)]=\"housenumber\" [disabled]=\"isFormDisabled\">\n                <mat-error *ngIf=\"!housenumberV.invalid\">Please provide House Number</mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input #roleV matInput type=\"text\" name=\"role\" placeholder=\"Role\" required [(ngModel)]=\"role\" disabled=true>\n            </mat-form-field>\n\n            <br>\n            <table>\n                <tr>\n                  <td><button mat-raised-button (click)=\"onEddit()\" [hidden] = '!isEdit' type=\"button\">EDIT</button><button color=\"accent\" [hidden] = 'isEdit' mat-raised-button type=\"submit\">SAVE</button></td>\n                  <td><button mat-raised-button color =\"primary\" (click)=\"uploadImage.click()\">UPLOAD PICTURE</button>\n                  <td> <button mat-raised-button color =\"accent\" *ngIf=\"!this.userService.isUserAdmin()\" (click)=\"messageAdmin()\">Contact</button></td>\n                  <input type=\"file\" #uploadImage hidden=\"true\" (change) = 'onImagePicker($event)'/>\n                </tr>\n              </table>\n            </form>\n        </td>\n\n      </tr>\n    </table>\n    <!-- send message for a successfu update -->\n  </mat-card>\n  <hr>\n  <div>\n      <div class=\"alert-success\" *ngIf=\"isEditMessage\">\n          Profile update was a success!\n        </div>\n  </div>\n\n      <!-- <div class=\"col-md-6\">\n\n        <img [src] = 'image' alt='image here'>\n\n      </div> -->\n\n\n\n\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <br>\n    <mat-card>\n        <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n          <form (submit) = \"onSignUp(signUpForm)\" #signUpForm='ngForm' *ngIf=\"!isLoading\">\n\n            <mat-form-field>\n              <input matInput type=\"text\" required [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" #usernameInput>\n              <mat-error *ngIf=\"usernameInput.invalid\">Username is required!</mat-error>\n            </mat-form-field>\n\n            <br>\n\n          <mat-form-field>\n            <input matInput type=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" #emailInput='ngModel' required email>\n            <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid Email!</mat-error>\n          </mat-form-field>\n\n          <br>\n\n          <mat-form-field>\n            <input matInput type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" #passwordInput='ngModel' required>\n            <mat-error *ngIf=\"passwordInput.invalid\">Please eneter valid password!</mat-error>\n          </mat-form-field>\n          <div>\n            <br>\n              <button class=\"btn btn-outline-primary\" color='accent' type=\"submit\" [disabled] = \"signUpForm.invalid\">Sign Up</button>\n            </div>\n          </form>\n\n\n        </mat-card>\n\n\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/singin/singin.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/singin/singin.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n    <br>\n      <mat-card>\n          <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n            <form (submit) = \"onSignIn(signInForm)\" #signInForm='ngForm' *ngIf=\"!isLoading\">\n              <mat-form-field>\n                <input matInput type=\"text\" required [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" #usernameInput>\n                <mat-error *ngIf=\"usernameInput.invalid\"></mat-error>\n              </mat-form-field>\n              <br>\n             <mat-form-field>\n              <input matInput type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" #passwordInput='ngModel' required>\n               <mat-error *ngIf=\"passwordInput.invalid\">Please eneter valid password.</mat-error>\n             </mat-form-field>\n            <div>\n                <button class=\"btn btn-outline-primary\" color='blue' type=\"submit\">Sign In</button>\n            </div>\n          </form>\n\n            <hr>\n\n             <div *ngIf=\"!isLogin\">\n                <mat-error>Incorrect Username/Password combination.</mat-error>\n              </div>\n          </mat-card>\n\n\n  </div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _singin_singin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singin/singin.component */ "./src/app/singin/singin.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
            /* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
            /* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/route-guard.service */ "./src/app/services/route-guard.service.ts");
            /* harmony import */ var _services_route_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/route-guard-admin.service */ "./src/app/services/route-guard-admin.service.ts");
            /* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
            /* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "./src/app/landingpage/landingpage.component.ts");
            var routes = [
                { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_services_route_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["RouteGuardAdminService"]] },
                { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
                { path: 'signin', component: _singin_singin_component__WEBPACK_IMPORTED_MODULE_5__["SinginComponent"] },
                { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
                { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
                { path: 'message', component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_8__["RouteGuardService"]] },
                { path: '', component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_11__["LandingpageComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'kass-order-app';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
            /* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
            /* harmony import */ var _singin_singin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./singin/singin.component */ "./src/app/singin/singin.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
            /* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
            /* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
            /* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./landingpage/landingpage.component */ "./src/app/landingpage/landingpage.component.ts");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                        _order_order_component__WEBPACK_IMPORTED_MODULE_15__["OrderComponent"],
                        _message_message_component__WEBPACK_IMPORTED_MODULE_16__["MessageComponent"],
                        _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_17__["LandingpageComponent"],
                        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_19__["MainNavComponent"]
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
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
                        _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                            apiKey: 'AIzaSyBtJkjjqa8yV8oTGAcSOVCEM1fKBi7aLK4'
                        })
                    ],
                    providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__["CookieService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-paginator {\r\n  margin-top: 1rem;\r\n}\r\n.material-icons {\r\n  font-size: 50px;\r\n}\r\n#add_alert {\r\n  font-size: 28px;\r\n  color: red;\r\n}\r\n/* #main {\r\n  padding-bottom: 10%;\r\n  opacity: 0.9;\r\n} */\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBRUE7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXBhZ2luYXRvciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuI2FkZF9hbGVydCB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8qICNtYWluIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufSAqL1xyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/dashboard/dashboard.component.ts ***!
          \**************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
            /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(userService, orderService, productService, messageServive) {
                    this.userService = userService;
                    this.orderService = orderService;
                    this.productService = productService;
                    this.messageServive = messageServive;
                    this.Reject = 'Reject';
                    this.Users = [];
                    this.products = [];
                    this.viewOrders = false;
                    // used for pagination
                    this.recordsLength = 2;
                    this.pageSizeOptions = [1, 3, 5, 8, 16, 40, 10000];
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
                    // editing the user role
                    this.editRole = false;
                    this.messageReply = '';
                    this.isReply = false;
                    this.isRead = false;
                    this.infoMsg = '';
                    this.userRole = '';
                }
                DashboardComponent.prototype.viewUserOrders = function (id) {
                    var _this = this;
                    this.viewOrders = true;
                    this.isViewAllUsers = false;
                    this.isAddNewProduct = false;
                    this.orderService.getClientOders(id).subscribe(function (order) {
                        _this.oneOrder = order;
                    }, function (errr) {
                    });
                };
                DashboardComponent.prototype.deleteUser = function (id) {
                    var _this = this;
                    this.userService.deleteUser(id).subscribe(function (data) {
                        _this.getUsers();
                    }, function (err) {
                        console.log(err);
                    });
                };
                DashboardComponent.prototype.onChangedPage = function (pageData) {
                    this.currentPage = pageData.pageIndex + 1;
                    this.usersPerPage = pageData.pageSize;
                    this.userService.getUsers(this.usersPerPage, this.currentPage);
                    this.getUsers();
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
                    this.userRole = sessionStorage.getItem('role');
                    this.isViewAllUsers = true;
                    this.isViewAllOrders = false;
                    this.isViewAllMessages = false;
                    this.viewOrders = false;
                    this.userService.getUsers(this.usersPerPage, 1).subscribe(function (users) {
                        _this.Users = users;
                        _this.recordsLength = _this.Users.length;
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
                    var _this = this;
                    if (ngform) {
                        try {
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
                        try {
                            var product = {
                                price: ngform.value.price,
                                name: ngform.value.name
                            };
                            // now create the product
                            this.productService.createProduct(product).subscribe(function (result) {
                                _this.getProducts();
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                    else if (ngform && this.isEditProduct) {
                        var product = {
                            price: ngform.value.price,
                            name: ngform.value.name
                        };
                        this.startEdit(product, this.prod._id);
                        this.isEditProduct = false;
                    }
                };
                DashboardComponent.prototype.addProduct2 = function () {
                    this.addProduct(null);
                };
                DashboardComponent.prototype.viewAllMessages = function () {
                    var _this = this;
                    this.isViewAllOrders = false;
                    this.isViewAllUsers = false;
                    this.isViewAllMessages = true;
                    this.viewOrders = false;
                    this.isAddNewProduct = false;
                    this.isEditProduct = false;
                    this.messageServive.getMessages().subscribe(function (messages) {
                        _this.messages = messages;
                    });
                };
                DashboardComponent.prototype.replyMessage = function (userId) {
                    var _this = this;
                    this.messageServive.replyMessage(userId, this.messageReply).subscribe(function (msg) {
                        if (msg) {
                            _this.infoMsg = 'A reply has been sent';
                            _this.isReply = true;
                            _this.viewAllMessages();
                            setTimeout(function () {
                                _this.isReply = false;
                                _this.messageReply = '';
                            }, 3000);
                        }
                    });
                };
                // delete unwanted messages, ridiculous that is. i value opinions and complains not stupidity
                DashboardComponent.prototype.deleteMessage = function (userId) {
                    var _this = this;
                    this.messageServive.deleteConvo(userId).subscribe(function (deletedMSG) {
                        if (deletedMSG) {
                            _this.infoMsg = 'Conversation DELETED';
                            _this.isReply = true;
                            _this.viewAllMessages();
                            setTimeout(function () {
                                _this.isReply = false;
                                _this.messageReply = '';
                            }, 3000);
                        }
                    });
                };
                // to get all products
                DashboardComponent.prototype.getProducts = function () {
                    var _this = this;
                    this.productService.getProducts({ page: 1, perPage: 10, filter: '' }).subscribe(function (products) {
                        _this.products = products.docs;
                    }, function (err) {
                        console.log(err);
                    });
                };
                // FOR PRODUCTS
                DashboardComponent.prototype.deleteProduct = function (id) {
                    var _this = this;
                    this.productService.deleteProduct(id).subscribe(function (product) {
                        _this.getProducts();
                    }, function (err) {
                        console.log(err);
                    });
                };
                DashboardComponent.prototype.editProduct = function (id, ngform) {
                    var _this = this;
                    this.btnEditRemove = 'Edit Product';
                    this.products.forEach(function (element) {
                        if (element._id === id) {
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
                // h
                DashboardComponent.prototype.startEdit = function (prod, id) {
                    var _this = this;
                    this.productService.updateProduct(id, prod).subscribe(function (product) {
                        if (product) {
                            _this.getProducts();
                            _this.price = '0';
                            _this.name = ' ';
                            _this.btnEditRemove = 'Add Product';
                        }
                    }, function (err) {
                        console.log(err);
                    });
                };
                // delete order
                DashboardComponent.prototype.deleteOrder = function (id) {
                    var _this = this;
                    this.orderService.deleteOrder(id).subscribe(function (delOrder) {
                        _this.viewAllOrders();
                    });
                };
                // accept order
                DashboardComponent.prototype.acceptOrder = function (id, userID) {
                    var _this = this;
                    var data = { userid: userID, orderid: id };
                    this.orderService.acceptOrder(id, data).subscribe(function (acceptOrder) {
                        _this.viewAllOrders();
                    });
                };
                DashboardComponent.prototype.saveUserRole = function (id, form) {
                    var _this = this;
                    this.userService.updateUserRole(id, form.value).subscribe(function (roleUpdate) {
                        if (roleUpdate) {
                            _this.editRole = true;
                            setTimeout(function () {
                                _this.editRole = false;
                            }, 3000);
                        }
                    });
                };
                // search user here
                DashboardComponent.prototype.filterText = function (filterText) {
                    var _this = this;
                    filterText = filterText.trim();
                    this.paginator.page.subscribe(function (data) {
                    });
                    this.paginator.pageIndex = 0;
                    this.userService.getUsers2(this.paginator.pageSize, ++this.paginator.pageIndex, filterText).subscribe(function (data) {
                        _this.Users = data;
                    }, function (err) {
                        console.log(err);
                    });
                    // this.userService.getUsers()
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
                { type: 
                    // tslint:disable-next-line: align
                    _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
                { type: _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
            ], DashboardComponent.prototype, "paginator", void 0);
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
                    // tslint:disable-next-line: align
                    _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/footer/footer.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/landingpage/landingpage.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/landingpage/landingpage.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n#phillip {\r\n  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */\r\n  min-height: 100vh; /* These two lines are counted as one :-)       */\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  background-image: url('food-1081707_1280.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ3BhZ2UvbGFuZGluZ3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0IsR0FBRyxpREFBaUQ7RUFDcEUsaUJBQWlCLEVBQUUsaURBQWlEOztFQUVwRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhDQUFvRDtFQUNwRCw0QkFBNEI7RUFDNUIsMkJBQTJCOztBQUU3QiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmdwYWdlL2xhbmRpbmdwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3BoaWxsaXAge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7ICAvKiBGYWxsYmFjayBmb3IgYnJvd3NlcnMgZG8gTk9UIHN1cHBvcnQgdmggdW5pdCAqL1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBUaGVzZSB0d28gbGluZXMgYXJlIGNvdW50ZWQgYXMgb25lIDotKSAgICAgICAqL1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9mb29kLTEwODE3MDdfMTI4MC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/landingpage/landingpage.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/landingpage/landingpage.component.ts ***!
          \******************************************************/
        /*! exports provided: LandingpageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function () { return LandingpageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LandingpageComponent = /** @class */ (function () {
                function LandingpageComponent(route) {
                    this.route = route;
                }
                LandingpageComponent.prototype.ngOnInit = function () {
                };
                LandingpageComponent.prototype.navigate = function (whereto) {
                    if (whereto === 'signin') {
                        this.route.navigateByUrl(whereto);
                    }
                    if (whereto === 'signup') {
                        this.route.navigateByUrl(whereto);
                    }
                };
                return LandingpageComponent;
            }());
            LandingpageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LandingpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-landingpage',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landingpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landingpage/landingpage.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landingpage.component.css */ "./src/app/landingpage/landingpage.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
            ], LandingpageComponent);
            /***/ 
        }),
        /***/ "./src/app/main-nav/main-nav.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/main-nav/main-nav.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, .24);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix3Q0FBd0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgLjI0KTtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/main-nav/main-nav.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/main-nav/main-nav.component.ts ***!
          \************************************************/
        /*! exports provided: MainNavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () { return MainNavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            var MainNavComponent = /** @class */ (function () {
                function MainNavComponent(userService, router, breakpointObserver) {
                    this.userService = userService;
                    this.router = router;
                    this.breakpointObserver = breakpointObserver;
                    this.opened1 = false;
                    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
                    this.userLoggedin = false;
                }
                MainNavComponent.prototype.signOut = function () {
                    sessionStorage.clear();
                    this.router.navigateByUrl('/signin');
                };
                return MainNavComponent;
            }());
            MainNavComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
            ]; };
            MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-main-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
            ], MainNavComponent);
            /***/ 
        }),
        /***/ "./src/app/menu/menu.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/menu/menu.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu{\r\n  position: fixed;\r\n  top: 0%;\r\n  width: 100%;\r\n  height: 60px;\r\n}\r\nul {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n  size: 30px;\r\n}\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnV7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBzaXplOiAzMHB4O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/menu/menu.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/menu/menu.component.ts ***!
          \****************************************/
        /*! exports provided: MenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function () { return MenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var MenuComponent = /** @class */ (function () {
                function MenuComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    this.userLoggedin = false;
                }
                MenuComponent.prototype.ngOnInit = function () {
                    // this.userLoggedin = this.userService.isUserAdmin();
                };
                MenuComponent.prototype.signOut = function () {
                    sessionStorage.clear();
                    console.log('something here');
                    this.router.navigateByUrl('/signin');
                };
                return MenuComponent;
            }());
            MenuComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], MenuComponent);
            /***/ 
        }),
        /***/ "./src/app/message/message.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/message/message.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* .container{\r\n  opacity: 0.9;\r\n} */\r\n.container {\r\n  padding-bottom: 12%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lcntcclxuICBvcGFjaXR5OiAwLjk7XHJcbn0gKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEyJTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/message/message.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/message/message.component.ts ***!
          \**********************************************/
        /*! exports provided: MessageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function () { return MessageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
            var MessageComponent = /** @class */ (function () {
                function MessageComponent(messageServive) {
                    this.messageServive = messageServive;
                    this.message = '';
                    this.subject = '';
                    this.userId = '';
                    this.msgSuccess = false;
                    this.isDeleted = false;
                }
                MessageComponent.prototype.ngOnInit = function () {
                    this.userId = sessionStorage.getItem('id');
                    this.getMessages();
                };
                MessageComponent.prototype.sendMessage = function () {
                    var _this = this;
                    var realMessage = { subject: this.subject, message: this.message, user: sessionStorage.getItem('id') };
                    this.subject = '';
                    this.message = '';
                    this.messageServive.createMessage(realMessage).subscribe(function (mess) {
                        if (mess) {
                            _this.msgSuccess = true;
                        }
                        _this.ngOnInit();
                        setTimeout(function () {
                            _this.msgSuccess = false;
                        }, 3000);
                    });
                };
                MessageComponent.prototype.getMessages = function () {
                    var _this = this;
                    this.messageServive.getMessages().subscribe(function (messages) {
                        _this.messages = messages;
                    });
                };
                MessageComponent.prototype.getMyMessages = function () {
                    this.ngOnInit();
                };
                MessageComponent.prototype.deleteConvo = function (id) {
                    var _this = this;
                    this.messageServive.deleteConvo(id).subscribe(function (deleted) {
                        if (deleted) {
                            _this.isDeleted = true;
                        }
                        _this.ngOnInit();
                        setTimeout(function () {
                            _this.isDeleted = false;
                        }, 3000);
                    });
                };
                return MessageComponent;
            }());
            MessageComponent.ctorParameters = function () { return [
                { type: _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
            ]; };
            MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-message',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
            ], MessageComponent);
            /***/ 
        }),
        /***/ "./src/app/order/order.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/order/order.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".material-icons {\r\n  font-size: 50px;\r\n}\r\n\r\n#toplevel {\r\n  padding-bottom: 10%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyaWFsLWljb25zIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbiN0b3BsZXZlbCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/order/order.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/order/order.component.ts ***!
          \******************************************/
        /*! exports provided: OrderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function () { return OrderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
            /* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var OrderComponent = /** @class */ (function () {
                // create a viewChild to scout the dom
                function OrderComponent(productService, orderService) {
                    this.productService = productService;
                    this.orderService = orderService;
                    // create docTotal to store amout of documents
                    this.docsTotal = 0;
                    // for when the compnent is looading
                    this.isLoading = false;
                    this.productsList = [];
                    this.productList2 = [];
                    this.total = 0;
                    // selected product quantity
                    this.quantity = 0;
                    // order message to indicate the success
                    this.message = '';
                    // use this to clear the order list and display the message
                    this.isMessage = false;
                    // use this to display error message color
                    this.errorMessage = '';
                }
                OrderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.paginator.page.subscribe(function (data) {
                        _this.productService.getProducts({ page: ++data.pageIndex, perPage: data.pageSize, filter: '' }).subscribe(function (products) {
                            console.log(data.pageIndex + ' pageIndex');
                            _this.products = products.docs;
                            _this.docsTotal = products.total;
                        }, function (err) {
                        });
                    });
                    this.getProducts();
                    this.isLoading = false;
                };
                // get products on load
                OrderComponent.prototype.getProducts = function () {
                    var _this = this;
                    this.productService.getProducts({ page: 1, perPage: 5, filter: '' }).subscribe(function (products) {
                        _this.products = products.docs;
                        _this.docsTotal = products.total;
                    }, function (err) {
                        console.log(err);
                    });
                };
                // add items to list
                OrderComponent.prototype.addTolist = function (form, productID) {
                    var _this = this;
                    this.isMessage = false;
                    var quantity = 1;
                    quantity = form.value;
                    var arr = [];
                    this.products.forEach(function (element) {
                        if (element._id.includes(productID) && _this.productsList.indexOf(element._id) === -1) {
                            console.log(element._id);
                            if (!(_this.productList2.includes(element)) && (_this.productList2.indexOf(element) === -1)) {
                                _this.productsList.push(productID.trim());
                                element.quantity = quantity;
                                _this.productList2.push(element);
                            }
                            else {
                                element.quantity = 1 * ((element.quantity * 1) + (1 * quantity));
                            }
                            _this.viewList = true;
                            _this.total = 0;
                            _this.productList2.forEach(function (element) {
                                _this.total += (element.price * element.quantity);
                            });
                            // this.total = element.price * element.quantity;
                        }
                    });
                    this.quantity = quantity;
                };
                // remove from list
                OrderComponent.prototype.removeFromlist = function (form, productID) {
                    var _this = this;
                    // tslint:disable-next-line: max-line-length
                    this.productList2.forEach(function (element) {
                        console.log(element._id);
                        if (element._id === productID) {
                            _this.total = _this.total - (element.price * element.quantity);
                            if (_this.total < 0) {
                                _this.total = 0;
                            }
                        }
                    });
                    var index = this.productsList.indexOf(productID);
                    if (index !== -1) {
                        this.productsList = this.productsList.slice(0, index).concat(this.productsList.slice(index + 1));
                        this.productList2 = this.productList2.slice(0, index).concat(this.productList2.slice(index + 1));
                    }
                };
                OrderComponent.prototype.placeOrder = function () {
                    var _this = this;
                    var userID = sessionStorage.getItem('id');
                    var list = '';
                    var quantityList = '';
                    this.productsList.forEach(function (element) {
                        _this.productList2.forEach(function (element2) {
                            if (element === element2._id) {
                                list += element + '#';
                                quantityList += element2.quantity + '#';
                            }
                        });
                    });
                    var totalprice = this.total;
                    // // tslint:disable-next-line: object-literal-shorthand
                    var data = { products: list.substr(0, list.length - 1), totalprice: totalprice, quantitylist: quantityList.substr(0, quantityList.length - 1) };
                    this.orderService.createOrder(userID, data).subscribe(function (respose) {
                        if (respose) {
                            _this.errorMessage = 'alert alert-success';
                            _this.isMessage = true;
                            _this.message = 'Your Oder Was Successful! Please go to your email to See a summary of your Order :)';
                        }
                        else {
                            _this.isMessage = true;
                            _this.errorMessage = 'alert alert-warning';
                            _this.message = 'Something went wrong :(, try Signing in again';
                        }
                    }, function (err) {
                        if (err) {
                            _this.isMessage = true;
                            _this.errorMessage = 'alert alert-warning';
                            _this.message = 'Something went wrong :(, try Signing in again';
                        }
                    });
                };
                // method to filter
                OrderComponent.prototype.filterText = function (filterText) {
                    var _this = this;
                    this.isLoading = true;
                    filterText = filterText.trim();
                    this.paginator.pageIndex = 0;
                    this.productService.getProducts({ page: ++this.paginator.pageIndex,
                        perPage: this.paginator.pageSize,
                        filter: filterText }).subscribe(function (products) {
                        _this.products = products.docs;
                        _this.docsTotal = products.total;
                    }, function (err) {
                    });
                    this.isLoading = false;
                };
                OrderComponent.prototype.placeOrderagain = function (list) {
                    // const file = (event.target as HTMLInputElement).files[0];
                    console.log(list);
                };
                return OrderComponent;
            }());
            OrderComponent.ctorParameters = function () { return [
                { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
                { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
            ], OrderComponent.prototype, "paginator", void 0);
            OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-order',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
            ], OrderComponent);
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/profile/profile.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  height: 23rem;\r\n  margin: 3rem 1;\r\n  width: 350px;\r\n  border-radius: 0;\r\n}\r\n/* .container{\r\n  opacity: 0.8;\r\n} */\r\nmat-form-field  {\r\n  width: 50%;\r\n}\r\n.container {\r\n  padding-bottom: 15%;\r\n}\r\nagm-map {\r\n  height: 300px;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTs7R0FFRztBQUNIO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IDIzcmVtO1xyXG4gIG1hcmdpbjogM3JlbSAxO1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi8qIC5jb250YWluZXJ7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59ICovXHJcbm1hdC1mb3JtLWZpZWxkICB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTUlO1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gfVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/profile/profile.component.ts ***!
          \**********************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    // google maps
                    this.texto = 'Wenceslau Braz - Cuidado com as cargas';
                    this.lat = -23.8779431;
                    this.lng = -49.8046873;
                    this.zoom = 15;
                    this.progress = 50;
                    // disabling the form
                    this.isFormDisabled = false;
                    this.isEdit = true;
                    this.isLoading = false;
                    // user details
                    this.username = '';
                    this.email = '';
                    this.cellnumber = '';
                    this.streetname = '';
                    this.housenumber = '';
                    this.role = '';
                    // are the details valid
                    this.error = true;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isFormDisabled = true;
                    this.isLoading = true;
                    this.userService.getUser(sessionStorage.getItem('id')).subscribe(function (user) {
                        _this.User = user;
                        _this.username = user.username;
                        _this.email = user.email;
                        _this.cellnumber = user.cellnumber;
                        _this.streetname = user.streetname;
                        _this.housenumber = user.housenumber;
                        _this.role = user.role;
                        _this.image = user.image.trim();
                        if (_this.cellnumber === '000 0000 000') {
                            _this.cellnumber = '';
                        }
                        if (_this.streetname.trim() === 'Streen Name Needed') {
                            _this.streetname = '';
                        }
                        if (_this.housenumber.trim() === 'House Number Needed') {
                            _this.housenumber = '';
                        }
                    }, function (err) {
                        console.log(err);
                    });
                    this.isLoading = false;
                };
                ProfileComponent.prototype.onSaveProfile = function (profileForm) {
                    var _this = this;
                    this.isFormDisabled = true;
                    this.isEdit = true;
                    this.isEditMessage = true;
                    var user = { username: profileForm.value.username, email: profileForm.value.email,
                        cellnumber: profileForm.value.cellnumber, streetname: profileForm.value.streetname, housenumber: profileForm.value.housenumber };
                    this.userService.updateUser2(sessionStorage.getItem('id'), user).subscribe(function (user1) {
                    }, function (err) {
                        console.log(err);
                    });
                    setTimeout(function () {
                        _this.isEditMessage = null;
                    }, 3000);
                };
                ProfileComponent.prototype.onEddit = function () {
                    this.isFormDisabled = false;
                    this.isEdit = false;
                };
                // image picker method
                ProfileComponent.prototype.onImagePicker = function (event) {
                    var _this = this;
                    var file = event.target.files[0];
                    var reader = new FileReader();
                    var userData = new FormData();
                    userData.append('image', file, file.name);
                    userData.append('name', sessionStorage.getItem('id'));
                    reader.onload = function () {
                        _this.image = reader.result;
                        _this.userService.updateUser(sessionStorage.getItem('id'), userData).subscribe(function (result) {
                        }, function (err) {
                        });
                    };
                    reader.readAsDataURL(file);
                };
                ProfileComponent.prototype.messageAdmin = function () {
                    this.router.navigateByUrl('/message');
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/services/message.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/message.service.ts ***!
          \*********************************************/
        /*! exports provided: MessageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function () { return MessageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var MessageService = /** @class */ (function () {
                function MessageService(http) {
                    this.http = http;
                }
                MessageService.prototype.createMessage = function (messageData) {
                    return this.http.post('api/message', messageData);
                };
                MessageService.prototype.getMessages = function () {
                    return this.http.get('api/messages');
                };
                MessageService.prototype.deleteConvo = function (id) {
                    return this.http.delete('api/messages/' + id);
                };
                MessageService.prototype.replyMessage = function (msgID, message) {
                    var msg = { message: message };
                    return this.http.post('api/message/reply/' + msgID, msg);
                };
                return MessageService;
            }());
            MessageService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
            ], MessageService);
            /***/ 
        }),
        /***/ "./src/app/services/order.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/order.service.ts ***!
          \*******************************************/
        /*! exports provided: OrderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function () { return OrderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var OrderService = /** @class */ (function () {
                function OrderService(httpClient) {
                    this.httpClient = httpClient;
                }
                OrderService.prototype.deleteOrder = function (id) {
                    return this.httpClient.delete('api/orders/' + id);
                };
                OrderService.prototype.acceptOrder = function (id, data) {
                    return this.httpClient.post('api/orders/accept', data);
                };
                OrderService.prototype.getClientOders = function (id) {
                    return this.httpClient.get('api/users/' + id + '/orders');
                };
                OrderService.prototype.getAllOrders = function () {
                    return this.httpClient.get('api/orders');
                };
                OrderService.prototype.createOrder = function (userID, orderList) {
                    return this.httpClient.post('api/users/' + userID + '/order', orderList);
                };
                return OrderService;
            }());
            OrderService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
            ], OrderService);
            /***/ 
        }),
        /***/ "./src/app/services/product.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/product.service.ts ***!
          \*********************************************/
        /*! exports provided: ProductService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function () { return ProductService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ProductService = /** @class */ (function () {
                function ProductService(httpClient) {
                    this.httpClient = httpClient;
                }
                ProductService.prototype.createProduct = function (product) {
                    return this.httpClient.post('api/product', product);
                };
                ProductService.prototype.getProducts = function (_a) {
                    var page = _a.page, perPage = _a.perPage, filter = _a.filter;
                    return this.httpClient.get('api/products' + ("?page=" + page + "&perPage=" + perPage + "&filter=" + filter));
                };
                ProductService.prototype.deleteProduct = function (id) {
                    return this.httpClient.delete('api/products/' + id);
                };
                ProductService.prototype.updateProduct = function (id, product) {
                    return this.httpClient.put('api/products/' + id, product);
                };
                return ProductService;
            }());
            ProductService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
            ], ProductService);
            /***/ 
        }),
        /***/ "./src/app/services/route-guard-admin.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/services/route-guard-admin.service.ts ***!
          \*******************************************************/
        /*! exports provided: RouteGuardAdminService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardAdminService", function () { return RouteGuardAdminService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
            var RouteGuardAdminService = /** @class */ (function () {
                function RouteGuardAdminService(userService) {
                    this.userService = userService;
                }
                RouteGuardAdminService.prototype.canActivate = function (route, state) {
                    if (this.userService.isUserAdmin()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return RouteGuardAdminService;
            }());
            RouteGuardAdminService.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            RouteGuardAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
            ], RouteGuardAdminService);
            /***/ 
        }),
        /***/ "./src/app/services/route-guard.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/route-guard.service.ts ***!
          \*************************************************/
        /*! exports provided: RouteGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function () { return RouteGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
            var RouteGuardService = /** @class */ (function () {
                function RouteGuardService(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                RouteGuardService.prototype.canActivate = function (route, state) {
                    if (this.userService.isUserLoggedIn()) {
                        return true;
                    }
                    else {
                        this.router.navigateByUrl('/signin');
                        return false;
                    }
                };
                return RouteGuardService;
            }());
            RouteGuardService.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
                // implement the routeguardservice from angular router and implement
                // canActivate()  Method;
                ,
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
            ], RouteGuardService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserService = /** @class */ (function () {
                function UserService(httpClient) {
                    this.httpClient = httpClient;
                }
                UserService.prototype.getUsers = function (pageSize, currentPage) {
                    var query = "?pageSize=" + pageSize + "&currentPage=" + currentPage;
                    return this.httpClient.get('api/users' + query);
                };
                UserService.prototype.getUsers2 = function (pageSize, currentPage, filter) {
                    var query = "?pageSize=" + pageSize + "&currentPage=" + currentPage + "&filter=" + filter;
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
                UserService.prototype.updateUser = function (id, data) {
                    return this.httpClient.post('api/update/' + id, data);
                };
                UserService.prototype.updateUser2 = function (id, data) {
                    return this.httpClient.post('api/users/update/' + id, data);
                };
                UserService.prototype.isUserLoggedIn = function () {
                    return sessionStorage.getItem('id') === null || sessionStorage.getItem('id') === '' ? false : true;
                };
                UserService.prototype.updateUserRole = function (id, role) {
                    var userRole = { role: role };
                    return this.httpClient.post('api/users/role/' + id, userRole);
                };
                UserService.prototype.isUserAdmin = function () {
                    return sessionStorage.getItem('role') === 'admin' ? true : false;
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/signup/signup.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signup/signup.component.ts ***!
          \********************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(userService, route) {
                    this.userService = userService;
                    this.route = route;
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
                        _this.isLoading = false;
                        sessionStorage.setItem('id', result._id);
                        _this.route.navigateByUrl('/profile');
                    });
                };
                SignupComponent.prototype.ngOnInit = function () {
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/singin/singin.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/singin/singin.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n/* .container {\r\n  opacity: 0.7;\r\n}\r\n */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2luL3Npbmdpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBOzs7RUFHRSIsImZpbGUiOiJzcmMvYXBwL3Npbmdpbi9zaW5naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4vKiAuY29udGFpbmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuICovXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/singin/singin.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/singin/singin.component.ts ***!
          \********************************************/
        /*! exports provided: SinginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinginComponent", function () { return SinginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SinginComponent = /** @class */ (function () {
                function SinginComponent(userService, route) {
                    this.userService = userService;
                    this.route = route;
                    this.isLogin = true;
                    this.isLoading = false;
                }
                SinginComponent.prototype.onSignIn = function (form) {
                    var _this = this;
                    this.isLoading = true;
                    console.log('sign in');
                    var password = form.value.password.trim();
                    var username = form.value.username.trim();
                    this.userService.checkUser(password, username).subscribe(function (user) {
                        if (user.message === 'not found') {
                            _this.isLogin = false;
                        }
                        else {
                            _this.isLogin = true;
                            // this.token = user.token;
                            sessionStorage.setItem('id', user.user[0]._id);
                            sessionStorage.setItem('role', user.user[0].role);
                            _this.route.navigateByUrl('/profile');
                        }
                    }, function (err) {
                        console.log(err);
                    });
                    this.isLoading = false;
                };
                SinginComponent.prototype.ngOnInit = function () {
                };
                return SinginComponent;
            }());
            SinginComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SinginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-singin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./singin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/singin/singin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./singin.component.css */ "./src/app/singin/singin.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], SinginComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\phillip\development\kass-order-app\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map