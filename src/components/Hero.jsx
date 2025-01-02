
import { DownloadIcon } from "lucide-react";
import { HERO_CONTENT } from "../constants";
const profilePicture = "/logo.JPG";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center mt-16 lg:mt-0">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-40 md:w-80 h-40 md:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content Section */}
          <div className="w-full lg:w-3/5 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              {/* Mobile-only stacked layout */}
              <div className="block lg:hidden space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Hi, I&apos;m
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Abdul Salam
                  </span>
                </h1>
              </div>
              {/* Desktop-only inline layout */}
              <h1 className="hidden lg:block text-6xl font-bold whitespace-nowrap">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Abdul Salam
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-300">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {HERO_CONTENT}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4">
              <a
                href="/Abdul Salam-CV.pdf"
                download
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 
                bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-xl text-white font-medium 
                hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 ease-out"
              >
                <DownloadIcon className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </a>
              
              <a
                href="#contact"
                className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-medium 
                border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 ease-out"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 
                rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300" />
              
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 
                rounded-full animate-spin-slow opacity-70" />
              
              <img
                src={profilePicture}
                alt="Abdul Salam"
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 
                rounded-full object-cover border-4 border-neutral-900
                shadow-2xl shadow-purple-500/20 hover:border-purple-500 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;