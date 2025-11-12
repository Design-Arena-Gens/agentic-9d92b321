'use client'

import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Profile Card */}
      <div className="relative z-10 max-w-4xl w-full">
        <div
          className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-purple-500/50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Header Banner */}
          <div className="relative h-48 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated Fashion Icons */}
              <div className="flex space-x-8 opacity-30">
                <div className="text-6xl animate-pulse">👗</div>
                <div className="text-6xl animate-pulse" style={{ animationDelay: '1s' }}>👠</div>
                <div className="text-6xl animate-pulse" style={{ animationDelay: '2s' }}>👜</div>
                <div className="text-6xl animate-pulse" style={{ animationDelay: '3s' }}>💄</div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="relative px-8 pb-8">
            {/* Profile Image */}
            <div className="flex justify-center -mt-20 mb-6">
              <div className={`relative w-36 h-36 rounded-full border-4 border-white shadow-xl overflow-hidden transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 flex items-center justify-center">
                  <div className="text-7xl animate-float">✨</div>
                </div>
              </div>
            </div>

            {/* Channel Name */}
            <h1 className="fashion-title text-4xl md:text-5xl font-black text-center text-white mb-3 tracking-tight">
              Animated Fashion Show
            </h1>
            <p className="text-center text-white/80 text-xl mb-6 font-light" style={{ fontFamily: 'Montserrat' }}>
              فشن شو انیمیشنی
            </p>

            {/* Description */}
            <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
              <p className="text-white/90 text-center leading-relaxed text-lg">
                🎨 خوش آمدید به دنیای جادویی فشن انیمیشنی! <br />
                ✨ جایی که هنر، طراحی و انیمیشن با هم ترکیب می‌شوند <br />
                👗 بهترین مدل‌های لباس را در قالب انیمیشن‌های خلاقانه تماشا کنید
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl p-4 text-center border border-pink-300/20">
                <div className="text-3xl font-bold text-white mb-1">100K+</div>
                <div className="text-white/70 text-sm">Subscribers</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 text-center border border-purple-300/20">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Videos</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl p-4 text-center border border-indigo-300/20">
                <div className="text-3xl font-bold text-white mb-1">10M+</div>
                <div className="text-white/70 text-sm">Views</div>
              </div>
            </div>

            {/* Content Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                <div className="text-3xl mb-2">🎭</div>
                <div className="text-white text-sm font-semibold">Fashion Shows</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-white text-sm font-semibold">Design Tips</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                <div className="text-3xl mb-2">💫</div>
                <div className="text-white text-sm font-semibold">Animations</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                <div className="text-3xl mb-2">🌟</div>
                <div className="text-white text-sm font-semibold">Tutorials</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-2xl">▶️</span>
                  Subscribe Now!
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/20">
                <span className="text-2xl">📷</span>
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/20">
                <span className="text-2xl">🐦</span>
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/20">
                <span className="text-2xl">💬</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-white/60 mt-6 text-sm">
          Created with ❤️ for Fashion & Animation Lovers
        </p>
      </div>
    </main>
  )
}
