import { useState } from "react";
import type { ProjectSlide } from "../data/projects";

interface ProjectCarouselProps {
  slides: ProjectSlide[];
  title: string;
}

export function ProjectCarousel({ slides, title }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  if (slides.length === 0) {
    return null;
  }

  const slide = slides[index];
  const hasMultiple = slides.length > 1;

  const go = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label={title}
    >
      <div className="carousel__frame">
        <img
          className="carousel__image"
          src={slide.src}
          alt={`${title} screenshot ${index + 1}`}
        />
        {slide.caption ? (
          <p className="carousel__caption">{slide.caption}</p>
        ) : null}
      </div>

      {hasMultiple ? (
        <>
          <div className="carousel__controls">
            <button
              className="carousel__btn"
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
            >
              ‹
            </button>
            <button
              className="carousel__btn"
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
            >
              ›
            </button>
          </div>
          <div className="carousel__dots" role="tablist" aria-label="Slides">
            {slides.map((_, i) => (
              <button
                key={slides[i].src}
                type="button"
                className={`carousel__dot${i === index ? " carousel__dot--active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
