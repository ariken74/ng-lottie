import { ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LottieAnimationViewComponent implements OnInit {
    private platformId;
    viewWidth: string;
    viewHeight: string;
    options: any;
    width: number;
    height: number;
    animCreated: any;
    lavContainer: ElementRef;
    private _options;
    constructor(platformId: string);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<LottieAnimationViewComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LottieAnimationViewComponent, "lottie-animation-view", never, { "options": "options"; "width": "width"; "height": "height"; }, { "animCreated": "animCreated"; }, never>;
}
