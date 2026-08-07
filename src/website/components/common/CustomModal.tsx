"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import clsx from "clsx";

interface CustomModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    overlayClassName?: string;
    showCloseButton?: boolean;
}

const CustomModal = ({
    open,
    onClose,
    children,
    className,
    overlayClassName,
    showCloseButton = true,
}: CustomModalProps) => {
    useEffect(() => {
        if (!open) return;

        const scrollY = window.scrollY;

        const lenis = (
            window as Window & {
                lenis?: {
                    stop?: () => void;
                    start?: () => void;
                };
            }
        ).lenis;

        // Stop Lenis
        lenis?.stop?.();

        const body = document.body;

        const previousBodyPosition = body.style.position;
        const previousBodyTop = body.style.top;
        const previousBodyWidth = body.style.width;
        const previousBodyOverflow = body.style.overflow;

        // Freeze background
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
        body.style.overflow = "hidden";

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);

            body.style.position = previousBodyPosition;
            body.style.top = previousBodyTop;
            body.style.width = previousBodyWidth;
            body.style.overflow = previousBodyOverflow;
            body.style.left = "";
            body.style.right = "";

            window.scrollTo(0, scrollY);

            lenis?.start?.();
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className={clsx(
                "fixed inset-0 z-[9999] flex items-center justify-center bg-[#F0F0DB]/20 p-4 backdrop-blur-sm",
                overlayClassName
            )}
            onClick={onClose}
        >
            <div
                data-lenis-prevent
                className={clsx(
                    "relative max-h-[85vh] w-full overflow-y-auto overscroll-contain rounded-3xl bg-[#fbf6e8] shadow-lg-custom",
                    className
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {showCloseButton && (
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close modal"
                        className="absolute right-5 top-5 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-primary transition hover:bg-primary/20"
                    >
                        <FiX size={20} />
                    </button>
                )}

                {children}
            </div>
        </div>
    );
};

export default CustomModal;