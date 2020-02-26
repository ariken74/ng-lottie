import { NgModule } from '@angular/core';
import { LottieAnimationViewComponent } from './lottieAnimationView.component';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
var LottieAnimationViewModule = /** @class */ (function () {
    function LottieAnimationViewModule() {
    }
    LottieAnimationViewModule.forRoot = function () {
        return {
            ngModule: LottieAnimationViewModule
        };
    };
    LottieAnimationViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: LottieAnimationViewModule });
    LottieAnimationViewModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LottieAnimationViewModule_Factory(t) { return new (t || LottieAnimationViewModule)(); }, imports: [[CommonModule]] });
    return LottieAnimationViewModule;
}());
export { LottieAnimationViewModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LottieAnimationViewModule, { declarations: [LottieAnimationViewComponent], imports: [CommonModule], exports: [LottieAnimationViewComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LottieAnimationViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LottieAnimationViewComponent
                ],
                imports: [CommonModule],
                exports: [LottieAnimationViewComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=lottieAnimationView.module.js.map