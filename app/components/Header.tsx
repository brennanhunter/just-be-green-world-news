import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-white overflow-hidden">
      {/* Logo container */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-8">
        <Image
          src="/logos/logo.png"
          alt="Logo"
          width={180}
          height={90}
          className="object-contain"
          priority
        />
        
        {/* Navigation */}
        <nav className="flex gap-8 items-center">
          <a href="#" className="text-black font-semibold hover:text-gray-600 transition-colors">
            ENTERPRISE
          </a>
          <a href="#" className="text-black font-semibold hover:text-gray-600 transition-colors">
            INDUSTRIES
          </a>
        </nav>
      </div>
      
      {/* Angled gradient overlay on the right */}
      <div 
        className="absolute right-0 top-0 h-full"
        style={{
          width: '25%',
          background: 'linear-gradient(to right, white, #9ca3af)',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      />
    </header>
  );
}
