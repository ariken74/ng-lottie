import { NgModule, ModuleWithProviders } from '@angular/core';
import { LottieAnimationViewComponent } from './lottieAnimationView.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LottieAnimationViewComponent
  ],
  imports: [CommonModule],
  exports: [LottieAnimationViewComponent]
})
export class LottieAnimationViewModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LottieAnimationViewModule
    };
  }

}
