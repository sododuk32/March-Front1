import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  ngOnInit() {
    this.carousel.activeId = '1';
  }

  //나중엔 데이터 랜덤 6개 정도를 받아서 OnInit으로 이런 배열에 집어 넣을거임.
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  carouselData = [
    {
      first: {
        title: '오피스리더0',
        categorys: '건설',
        careers: '5',
        sales: '10',
        totalcreer: '20',
        case1: '기관 방문 5천승인/한도 안맞아 취소',
        case2: '기관 방문 5천승인/한도 안맞아 취소',
        case3: '기관 방문 5천승인/한도 안맞아 취소',

        case4: '은행부결',
        solutionstart: '18년 5월 컨설팅 의뢰',
        totalsolution: '업종 변경 빛 보완',
      },
      second: {
        title: '오피스리더1',
        categorys: '건설',
        careers: '5',
        sales: '10',
        totalcreer: '20',
        case1: '기관 방문 5천승인/한도 안맞아 취소',
        case2: '기관 방문 5천승인/한도 안맞아 취소',
        case3: '기관 방문 5천승인/한도 안맞아 취소',

        case4: '은행부결',
        solutionstart: '18년 5월 컨설팅 의뢰',
        totalsolution: '업종 변경 빛 보완',
      },
    },
    {
      first: {
        title: '오피스리더25825 2',
        categorys: '건설',
        careers: '5',
        sales: '10',
        totalcreer: '20',
        case1: '기관 방문 5천승인/한도 안맞아 취소',
        case2: '기관 방문 5천승인/한도 안맞아 취소',
        case3: '기관 방문 5천승인/한도 안맞아 취소',

        case4: '은행부결',
        solutionstart: '18년 5월 컨설팅 의뢰',
        totalsolution: '업종 변경 빛 보완',
      },
      second: {
        title: '오피스리더3',
        categorys: '건설',
        careers: '5',
        sales: '10',
        totalcreer: '20',
        case1: '기관 방문 5천승인/한도 안맞아 취소',
        case2: '기관 방문 5천승인/한도 안맞아 취소',
        case3: '기관 방문 5천승인/한도 안맞아 취소',

        case4: '은행부결',
        solutionstart: '18년 5월 컨설팅 의뢰',
        totalsolution: '업종 변경 빛 보완',
      },
    },
  ];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}

//이게 다른 문제면 괜찮은대 케러셀 자체는 array[i]를 출력할때 0번쨰를 activate 시키지 않고 출력해서
//오브젝트 2개를 한번에 묶는게 낫다.
