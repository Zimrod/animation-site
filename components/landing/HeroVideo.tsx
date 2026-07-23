// components/landing/HeroVideo.tsx
export default function HeroVideo() {
  return (
    <div className="relative inline-block w-full max-w-[500px]">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />

      {/* 1. Added 'inline-block' or 'w-fit' so the container shrinks to fit the video.
        2. Added 'w-full' to ensure responsiveness.
      */}
      <div className="relative inline-block w-full border border-zinc-800 bg-black rounded-2xl overflow-hidden shadow-2xl lines-none dynamic-box">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block" /* Forces video to dictate the size smoothly */
          width={500}
          height={500}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}