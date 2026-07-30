import type { HeroSectionData } from "@/website/types/home";

interface HeroSectionProps {
    data: HeroSectionData;
}

const HeroSection = ({ data }: HeroSectionProps) => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src={data.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />

            <div className="absolute inset-0 bg-black/20" />


            <div className="absolute bottom-10 left-1/2 " >
                <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="15" height="141" viewBox="0 0 15 141" fill="none">
                    <line x1="7.42285" y1="4" x2="7.42285" y2="133.587" stroke="url(#paint0_linear_467_1070)" />
                    <g filter="url(#filter0_f_467_1070)">
                        <line x1="7.42285" y1="4" x2="7.42285" y2="133.587" stroke="url(#paint1_linear_467_1070)" />
                    </g>
                    <circle cx="7.39793" cy="133.586" r="1.77" fill="white" />
                    <g filter="url(#filter1_f_467_1070)">
                        <circle cx="7.39793" cy="133.586" r="2.27" fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_f_467_1070" x="2.92285" y="0" width="9" height="137.587" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_467_1070" />
                        </filter>
                        <filter id="filter1_f_467_1070" x="0.000164509" y="126.189" width="14.7956" height="14.7956" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2.56388" result="effect1_foregroundBlur_467_1070" />
                        </filter>
                        <linearGradient id="paint0_linear_467_1070" x1="6.42285" y1="4" x2="6.42285" y2="133.587" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_467_1070" x1="6.42285" y1="4" x2="6.42285" y2="133.587" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg></div>
        </section>
    );
};

export default HeroSection;
