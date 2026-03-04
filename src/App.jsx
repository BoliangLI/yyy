
import { useState, useEffect } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div
        className={`max-w-2xl w-full text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <svg
              className="w-10 h-10 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          欢迎<span className="text-purple-400">到来</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg mx-auto">
          这是一个简洁优雅的欢迎页面，采用现代设计语言打造，
          为您带来舒适的视觉体验。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            开始探索
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20">
            了解更多
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-sm">
            使用 React + Vite + Tailwind CSS 构建
          </p>
        </div>
      </div>
    </div>
  );
}
