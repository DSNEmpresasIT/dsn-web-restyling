'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function Carousel() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="relative max-w-lg mx-auto">
      {/* Contenedor principal */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {/* Slides - Agrega las que necesites */}
          <div className="flex-[0_0_33%] min-w-0 p-4 bg-blue-200">Slide 1</div>
          <div className="flex-[0_0_33%] min-w-0 p-4 bg-green-200">Slide 2</div>
          <div className="flex-[0_0_33%] min-w-0 p-4 bg-red-200">Slide 3</div>
          <div className="flex-[0_0_33%] min-w-0 p-4 bg-red-200">Slide 4</div>
          <div className="flex-[0_0_33%] min-w-0 p-4 bg-red-200">Slide 5</div>
          <div className="flex-[0_0_33%] min-w-0 p-4 bg-red-200">Slide 6</div>
          <div className="flex-[0_0_33%] min-w-0 p-4 bg-red-200">Slide 7</div>
        </div>
      </div>

      {/* Botones de navegación */}
      <button className="absolute left-0 top-1/2" onClick={scrollPrev}>Prev</button>
      <button className="absolute right-0 top-1/2" onClick={scrollNext}>Next</button>
    </div>
  )
}