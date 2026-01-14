export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">
          Just Be Green World News
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl px-4 py-6 bg-black/30 backdrop-blur-md border border-white/20">
          Your source for the latest updates on global environmental advancements and sustainability initiatives
        </p>
        
        {/* Glassmorphic Button */}
        <a
          href="https://justbegreen.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-green-500/20 backdrop-blur-md border border-green-400/30 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 text-lg font-semibold"
        >
          Learn More
        </a>
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>
    </div>
  );
}
