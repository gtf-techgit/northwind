import Image from "next/image";
import Link from "next/link";

const Awards = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-primary section-padding">
      <div className="container-custom relative flex h-full min-h-[calc(100vh-160px)] items-center">
        <div className="grid w-full items-center gap-y-16 md:grid-cols-12">
          {/* Left content */}
          <div className="md:col-span-4">
            <h2 className="max-w-sm font-heading text-4xl leading-[1.15] text-brand md:text-[42px]">
              Awards That Reflect Our Commitment
            </h2>

            <Link href={"/"}>  <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 bg-[#B9A1481A] px-8 py-3 font-body text-sm tracking-wide text-brand backdrop-blur-sm transition-colors cursor-pointer"
            >
              Know More
            </button>
            </Link>
          </div>
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-95 w-95 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#14694D]/60 blur-3xl" />
          {/* Trophy + glass card */}
          <div className="relative md:col-span-8">
            <div className="relative flex min-h-105 items-center">


              {/* Glass card */}
              <div
                className="absolute right-0 top-1/2 w-[70%] -translate-y-1/2 rounded-[28px] border border-white/25 px-10 py-14 md:pl-32"
                // style={{
                //   background:
                //     "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.06) 100%)",
                //   backdropFilter: "blur(72px)",
                // }}
              >
                <h3 className="font-heading text-2xl text-brand">
                  Recognized For Excellence
                </h3>
                <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>

              {/* Trophy */}
              <div className="relative z-10  w-full max-w-100 ">
                <Image
                  src={"/pages/home/awards/award.png"}
                  alt="Award"
                  width={400}
                  height={600}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
