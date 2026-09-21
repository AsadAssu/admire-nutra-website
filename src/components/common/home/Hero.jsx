import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f8f8f8] pt-24 xl:pt-[148px]"
      aria-label="Third party manufacturing"
    >
      <div className="mx-auto w-full max-w-[1920px]">
        <Image
          src="/third-party-manufacturing-hero.jpeg"
          alt="Third party nutraceutical and sports nutrition manufacturing with premium quality, custom formulations, and compliance assurance"
          width={1600}
          height={800}
          priority
          sizes="100vw"
          className="block h-auto w-full object-contain object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
