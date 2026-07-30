"use client";

import { forwardRef, useState } from "react";
import Image from "next/image";

const areas = [
    {
        id: "greater-noida",
        label: "Greater Noida",
        project: "Northwind Sanctuary",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/pages/home/projects/elevation.png",
    },
    {
        id: "delhi",
        label: "Delhi",
        project: "Northwind Residency",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/pages/home/projects/elevation.png",
    },
    {
        id: "dehradun",
        label: "Dehradun",
        project: "Northwind Meadows",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/pages/home/projects/elevation.png",
    },
];

const PresenceOverlay = forwardRef<HTMLDivElement>((_, ref) => {
    const [activeId, setActiveId] = useState(areas[0].id);
    const activeArea = areas.find((area) => area.id === activeId) ?? areas[0];

    return (
        <div ref={ref} className="w-full bg-[#0D382912] absolute top-0 right-0 z-10 flex h-full justify-end backdrop-blur-sm">
        <div
            
            className="w-full  max-w-115  bg-page px-10 shadow-lg-custom"
        >
            <div className="flex flex-col justify-center h-full">
            <h3 className="font-heading text-3xl text-primary">Area of Operations</h3>
            <p className="mt-2 text-body text-secondary">
                We have projects in Greater Noida, Delhi &amp; Dehradun
            </p>

            <div className="mt-8 flex items-center gap-1 rounded-full border-default p-1.5">
                {areas.map((area) => (
                    <button
                        key={area.id}
                        type="button"
                        onClick={() => setActiveId(area.id)}
                        className={`flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-heading transition-colors ${
                            activeId === area.id
                                ? "bg-primary text-secondary!"
                                : "text-primary/70 hover:text-primary"
                        }`}
                    >
                        {area.label}
                    </button>
                ))}
            </div>

            <div className="mt-6">
                <div className="relative h-64 w-full overflow-hidden rounded-lg-custom bg-primary">
                    <Image
                        src={activeArea.image}
                        alt={activeArea.project}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                    <h4 className="font-heading text-xl text-primary">
                        {activeArea.project}
                    </h4>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7 17L17 7M17 7H8M17 7V16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
                <p className="mt-2 text-body text-secondary">{activeArea.description}</p>
            </div>
            </div>
        </div>
        </div>
    );
});

PresenceOverlay.displayName = "PresenceOverlay";

export default PresenceOverlay;
