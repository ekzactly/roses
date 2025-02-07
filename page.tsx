"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function VirtualRoses() {
  const [showGift, setShowGift] = useState(false)
  const [rosePosition, setRosePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const animateRose = () => {
      setRosePosition({
        x: Math.sin(Date.now() / 1000) * 10,
        y: Math.cos(Date.now() / 1000) * 10,
      })
      requestAnimationFrame(animateRose)
    }
    animateRose()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Do you want a gift? 🌹</h1>
      <div
        className="text-6xl mb-8"
        style={{
          transform: `translate(${rosePosition.x}px, ${rosePosition.y}px)`,
        }}
      >
        🌹
      </div>
      <button
        onClick={() => setShowGift(true)}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        Yes!
      </button>
      {showGift && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
            <div className="text-center">
              <h2 className="text-3xl font-serif text-gray-800 mb-4">The Valentine Times</h2>
              <h3 className="text-xl font-bold text-gray-900 mb-2">FEBRUARY 07, 2025</h3>
              <h4 className="text-2xl font-bold text-red-600 mb-6">WILL YOU BE MY VALENTINE?</h4>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20%E2%80%9CWill%20You%20Be%20My%20Valentine%E2%80%9D%20Bouquet%20Design_%F0%9F%8C%B9%F0%9F%93%B0%E2%80%A6.jpg-dpu0aaxHtExG31vvdvQ2qoon2DnTYe.jpeg"
                alt="Valentine Rose Bouquet"
                width={400}
                height={500}
                className="mx-auto mb-6 rounded-lg shadow-lg"
              />
              <p className="text-gray-700 text-lg mb-6 font-serif">
                Sending you this special Valentine's bouquet with all my love! 💝
              </p>
              <button
                onClick={() => setShowGift(false)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

