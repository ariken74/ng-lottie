import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["lavContainer"];
var _c1 = function (a0, a1) { return { "width": a0, "height": a1, "overflow": "hidden", "margin": "0 auto" }; };
var lottie = require('lottie-web/build/player/lottie.js');
var LottieAnimationViewComponent = /** @class */ (function () {
    function LottieAnimationViewComponent(platformId) {
        this.platformId = platformId;
        this.animCreated = new EventEmitter();
    }
    LottieAnimationViewComponent.prototype.ngOnInit = function () {
        if (isPlatformServer(this.platformId)) {
            return;
        }
        this._options = {
            container: this.lavContainer.nativeElement,
            renderer: this.options.renderer || 'svg',
            loop: this.options.loop !== false,
            autoplay: this.options.autoplay !== false,
            autoloadSegments: this.options.autoloadSegments !== false,
            animationData: this.options.animationData,
            path: this.options.path || '',
            rendererSettings: this.options.rendererSettings || {}
        };
        this.viewWidth = this.width + 'px' || '100%';
        this.viewHeight = this.height + 'px' || '100%';
        var anim = lottie.loadAnimation(this._options);
        this.animCreated.emit(anim);
    };
    LottieAnimationViewComponent.ɵfac = function LottieAnimationViewComponent_Factory(t) { return new (t || LottieAnimationViewComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
    LottieAnimationViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LottieAnimationViewComponent, selectors: [["lottie-animation-view"]], viewQuery: function LottieAnimationViewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.lavContainer = _t.first);
        } }, inputs: { options: "options", width: "width", height: "height" }, outputs: { animCreated: "animCreated" }, decls: 2, vars: 4, consts: [[3, "ngStyle"], ["lavContainer", ""]], template: function LottieAnimationViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0, 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(1, _c1, ctx.viewWidth, ctx.viewHeight));
        } }, directives: [i1.NgStyle], encapsulation: 2 });
    return LottieAnimationViewComponent;
}());
export { LottieAnimationViewComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LottieAnimationViewComponent, [{
        type: Component,
        args: [{
                selector: 'lottie-animation-view',
                template: "\n        <div #lavContainer\n             [ngStyle]=\"{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}\">\n        </div>"
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { options: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], animCreated: [{
            type: Output
        }], lavContainer: [{
            type: ViewChild,
            args: ['lavContainer', { static: true }]
        }] }); })();
//# sourceMappingURL=lottieAnimationView.component.js.map