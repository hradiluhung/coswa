// components/StackCard.tsx
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp } from "react-feather"

type Props = {
  items: string[]
}

export default function StackedCards({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  enum AnimationType {
    UP,
    DOWN,
  }

  const [animationType, setAnimationType] = useState<AnimationType>(
    AnimationType.DOWN
  )

  const handlePrev = () => {
    if (currentIndex < items.length - 1 && !isAnimating) {
      setAnimationType(AnimationType.UP)
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setIsAnimating(false)
      }, 100) // Adjust the duration to match the transition time in milliseconds
    }
  }

  const handleNext = () => {
    if (currentIndex > 0 && !isAnimating) {
      setAnimationType(AnimationType.DOWN)
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setIsAnimating(false)
      }, 100) // Adjust the duration to match the transition time in milliseconds
    }
  }

  return (
    <div className="flex justify-end gap-4 text-lg">
      {/* Active Card */}
      <div className="relative">
        <div
          className={`bg-white p-8 border w-full rounded-2xl transition-transform text-quaternary ${
            isAnimating
              ? animationType === AnimationType.UP
                ? "transform translate-y-full opacity-0"
                : "transform -translate-y-full opacity-0"
              : "opacity-100"
          }`}
        >
          {items[currentIndex]}
        </div>

        {/* Next Card */}
        <div
          className={`p-8 border w-full absolute bg-slate-100 overflow-hidden rounded-2xl transition-transform -z-10 -bottom-20 -right-10 ${
            isAnimating
              ? "transform translate-y-0"
              : "transform -translate-y-10"
          } `}
        >
          <p className="text-transparent">{items[currentIndex]}</p>
        </div>

        <Image
          width={200}
          height={200}
          src="/images/gradient-circle.png"
          alt="stack-card-bg"
          className="absolute -z-20 -top-16 -right-28"
        />
      </div>

      <div className="flex flex-col gap-2 justify-start items-start">
        <button
          className={`p-2 bg-white border text-quaternary rounded-full ${
            currentIndex === items.length - 1
              ? "bg-slate-100 text-slate-300"
              : ""
          }`}
          onClick={handlePrev}
        >
          <ChevronUp size={24} />
        </button>
        <button
          className={`p-2 bg-white border text-quaternary rounded-full ${
            currentIndex === 0 ? "bg-slate-100 text-slate-300" : ""
          }`}
          onClick={handleNext}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  )
}
