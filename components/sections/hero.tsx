
import Link from "next/link";
import SimpleServices from "@/components/ui/heroani-elem";
import Arrow from "@/components/svgs/arrow";

export default function Hero() {
  return (
    <section className="relative bg-[#0e0e0e] text-white min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Left-to-right gradient beam */}
<div className="absolute top-[-40%] md:top-[-40%] left-[1%] md:left-[8%] w-[180px] md:w-[250px] h-[750px] md:h-[1100px] bg-gradient-to-br from-blue-600/30 to-transparent blur-3xl rotate-[-35deg] md:rotate-[-45deg] z-0" />

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/100" />

      {/* UNBREAKABLE CENTER CONTAINER - Triple-layer center alignment */}
      <div className="relative z-10 w-full max-w-6xl min-h-screen">

        {/* Badge Container */}
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden sm:flex items-center justify-center w-full translate-y-[-65px] sm:translate-y-[-80px] z-30">
  <div className="relative transform translate-y-[172px] sm:translate-y-[260px]">
    <div className="inline-block rounded-full bg-[#1a1a1a] px-2 py-[2px] text-xs sm:px-4 sm:py-1 sm:text-sm text-white border border-neutral-700">
      <span className="inline-block rounded-full bg-[#131316] px-[4px] py-[2px] mr-1 text-xs sm:px-2 sm:py-0 sm:mr-3 sm:text-sm">
        🔥
      </span>
      Webzy studios welcomes you
    </div>
  </div>
</div>


        {/* Desktop Heading */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:block hidden flex items-center justify-center w-full translate-y-[-110px] z-20">
          <div className="relative transform sm:translate-y-[-120px]">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight w-full text-center mx-auto px-0">
              We Don't Just Build Websites,<br />
              <span className="block text-blue-200">We Build Your Digital Legacy</span>
            </h1>
          </div>
        </div>

        {/* Mobile Heading */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex sm:hidden items-center justify-center w-full translate-y-[-60px] z-20">
          <div className="relative transform translate-y-[-190px]">
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold leading-tight w-full text-center mx-auto px-0">
              We Don't Just Build Websites,
              <span className="block text-blue-200">We Build Your Digital Legacy</span>
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full z-20">
          <div className="relative transform translate-y-[0px]">
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-gray-400  text-sm leading-relaxed px-0 sm:hidden text-center mx-auto translate-y-[50px]">
                We craft stunning websites that don't just look good they build
                trust, drive results, and turn visitors into loyal clients.
              </p>
              <p className="text-gray-400 text-sm sm:text-xl hidden font-myfont sm:block max-w-[50vw] text-center mx-auto translate-y-[25px]">
                We craft stunning websites that don't just look good — they build
                trust, drive results, and turn visitors into loyal clients. Whether
                you're a startup or a brand ready to scale, we've got your digital
                back.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden sm:block absolute left-79 top-[210px] transform -translate-y-1/2 -translate-x-30">
              <div className="relative transform translate-y-[0px] translate-x-[0px]">
                <Arrow />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full mt-8 z-20">
          <div className="relative transform translate-y-[90px] justify-center sm:translate-y-[130px]">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="https://cal.com/santhosh-perumal-qwqkgl/15min" passHref>
                <button className="sm:px-6 sm:py-3 py-2 px-2 rounded-md bg-blue-600 hover:bg-blue-900 text-white font-medium transition">
                  Let's build yours
                </button>
              </Link>
           <a
  href="#works"
  className="sm:px-6 sm:py-3 py-2 px-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition"
>
  Our works
</a>

            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="relative transform md:translate-y-[750px] translate-y-[570px] flex items-center justify-center">
          <h3 className="text-sm sm:text-lg">
            webzy is Trusted by <span className="text-blue-300">10+ brands </span>worldwide
          </h3>
        </div>

        {/* Services Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full z-20">
          <div className="relative transform md:translate-y-[-65px] translate-y-[-110px]">
            <div className="w-full max-w-6xl flex items-center justify-center">
              <SimpleServices />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
