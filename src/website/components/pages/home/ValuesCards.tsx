// "use client";

// import { IoLeafOutline } from "react-icons/io5";


// const cards = [
//   {
//     title: "Innovation",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     className: "top-0 left-1/2 -translate-x-1/2",
//   },
//   {
//     title: "Innovation",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     className: "top-[18%] left-0",
//   },
//   {
//     title: "Innovation",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     className: "top-[18%] right-0",
//   },
//   {
//     title: "Innovation",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     className: "bottom-[18%] left-0",
//   },
//   {
//     title: "Innovation",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     className: "bottom-[18%] right-0",
//   },
//   {
//     title: "Innovation",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     className: "bottom-0 left-1/2 -translate-x-1/2",
//   },
// ];

// export default function ValueCards() {
//   return (
//     <section className="relative mx-auto h-[900px] w-full max-w-[1400px]">
//       {/* Circle Guides */}
//       <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8d2b4]/30" />
//       <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8d2b4]/30" />
//       <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8d2b4]/30" />
//       <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8d2b4]/30" />
//       <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8d2b4]/30" />

//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`absolute ${card.className} w-[360px] rounded-[28px] bg-gradient-to-r from-[#edf2dc] via-[#f7f4e8] to-[#edf2dc] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]`}
//         >
//           <div className="mb-5 flex items-center gap-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dfe8c6]">
//               <IoLeafOutline  className="h-6 w-6 text-[#2d4f39]" strokeWidth={1.8} />
//             </div>

//             <h3 className="text-[20px] font-semibold text-[#173A2C]">
//               {card.title}
//             </h3>
//           </div>

//           <p className="text-[16px] leading-8 text-[#51695e]">
//             {card.description}
//           </p>
//         </div>
//       ))}
//     </section>
//   );
// }

"use client";

import { RefObject } from "react";
import { IoLeafOutline } from "react-icons/io5";

interface ValueCardsProps {
  refs: RefObject<HTMLDivElement[]>;
}

const cards = [
  {
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const ValueCards = ({ refs }: ValueCardsProps) => {
  return (
    <>
      {cards.map((card, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) refs.current[index] = el;
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] rounded-[28px] bg-gradient-to-r from-[#EDF2DC] via-[#F8F5EB] to-[#EDF2DC] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] will-change-transform select-none"
        >
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DFE8C6]">
              <IoLeafOutline
                className="h-6 w-6 text-[#1F4634]"
                strokeWidth={1.8}
              />
            </div>

            <h3 className="text-[22px] font-semibold text-[#173A2C]">
              {card.title}
            </h3>
          </div>

          <p className="text-[16px] leading-8 text-[#556C61]">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default ValueCards;