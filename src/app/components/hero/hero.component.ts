import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../services/services.component';
import { RouterModule } from '@angular/router';
import { ImageCarouselComponent } from '../../shared/components/image-carousel/image-carousel.component';
import { BookingComponent } from '../booking/booking.component';
import { ScrollGalleryComponent } from '../../shared/components/gallery/scroll-gallery.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    ServicesComponent,
    RouterModule,
    ImageCarouselComponent,
    BookingComponent,
    ScrollGalleryComponent
  ],
  template: `
    <div>
      <section id="hero" class="hero relative w-full h-screen overflow-hidden bg-black">
        <app-image-carousel
          [images]="images"
          [interval]="4000"
          class="absolute inset-0"
        ></app-image-carousel>
        
        <div class="absolute inset-0 bg-black/30 z-10"></div>
        
        <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <div class="creative-text text-center">
            <h1 class="text-[12vw] leading-none font-light">
              <span class="block transform hover:scale-105 transition-transform duration-500">
                creating
              </span>
              <span class="block mt-4 text-[8vw] text-orange-500 font-light italic opacity-80">
                (feeling)
              </span>
            </h1>
          </div>
        </div>

        <!-- Decorative elements -->
        <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30"></div>
        
        <!-- Animated particles -->
        <div class="absolute inset-0 z-15 opacity-30">
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
          <div class="firefly"></div>
        </div>
      </section>
      <app-services></app-services>
      <app-scroll-gallery></app-scroll-gallery>
      <section id="booking">
        <app-booking></app-booking>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .hero {
      height: 100vh;
      min-height: 600px;
      max-height: 1080px;
    }

    .creative-text {
      transform-style: preserve-3d;
      perspective: 1000px;
    }

    .creative-text h1 span {
      display: block;
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }

    .creative-text h1 span:first-child {
      animation: float 6s ease-in-out infinite;
    }

    .creative-text h1 span:last-child {
      animation: glow 4s ease-in-out infinite alternate;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes glow {
      from {
        text-shadow: 0 0 20px rgba(249, 115, 22, 0.5),
                     0 0 40px rgba(249, 115, 22, 0.3);
      }
      to {
        text-shadow: 0 0 30px rgba(249, 115, 22, 0.7),
                     0 0 60px rgba(249, 115, 22, 0.5);
      }
    }

    .firefly {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: move 4s infinite;
      opacity: 0;
    }

    .firefly:nth-child(1) { left: 20%; animation-delay: 0s; }
    .firefly:nth-child(2) { left: 40%; animation-delay: 1s; }
    .firefly:nth-child(3) { left: 60%; animation-delay: 2s; }
    .firefly:nth-child(4) { left: 80%; animation-delay: 3s; }
    .firefly:nth-child(5) { left: 90%; animation-delay: 4s; }

    @keyframes move {
      0% {
        transform: translateY(100vh);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh);
        opacity: 0;
      }
    }

    :host ::ng-deep section {
      scroll-margin-top: 80px;
    }

    @media (prefers-reduced-motion: reduce) {
      .creative-text h1 span,
      .firefly {
        animation: none;
      }
    }
  `]
})
export class HeroComponent {
  images = [
    'https://studiomedhat.com/uploads/image/image_1725909659.jpg',
    'https://studiomedhat.com/uploads/image/image_1725909675.jpg',
    'https://studiomedhat.com/uploads/image/image_1725909696.jpg'
  ];
}