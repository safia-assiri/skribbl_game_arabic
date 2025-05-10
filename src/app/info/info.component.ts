import {
  Component,
  AfterRenderPhase,
  NgZone,
  afterNextRender,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  imports: [CommonModule],
})
export class InfoComponent {
  steps = [
    { image: 'assets/img1.png', text: '!عندما يحين دورك، اختر كلمة لتقوم برسمها' },
    { image: 'assets/img2.png', text: '!حاول رسم الكلمة التي اخترتها !بدون تهجئة' },
    { image: 'assets/img3.png', text: '!دع اللاعبين الآخرين يحاولون تخمين الكلمة التي رسمتها' },
    { image: 'assets/img4.png', text: '!عندما لا يكون دورك، حاول تخمين ما يرسمه اللاعبون الآخرون' },
    { image: 'assets/img5.png', text: '!'+'اجمع أكبر عدد من النقاط وكن الفائز في النهاية' }

  ];

  currentPage: number = 0;
  interval: any;

  constructor() {
    const ngZone = inject(NgZone);

    afterNextRender(() => {
      this.interval = setInterval(() => {
        ngZone.run(() => {
          this.currentPage = (this.currentPage + 1) % this.steps.length;
        });
      }, 3000);
    }, { phase: AfterRenderPhase.Write });
  }

  goToPage(index: number): void {
    this.currentPage = index;
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
