import Image from "next/image";

type HeroImageProps = {
  src: string;
  alt: string;
};

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="relative w-full max-h-[28rem] rounded-2xl overflow-hidden border border-border/50 mb-6">
      <div className="relative w-full h-[18rem] sm:h-[22rem] md:h-[28rem]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
