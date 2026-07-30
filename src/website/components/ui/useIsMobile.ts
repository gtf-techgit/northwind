'use client'

import { useEffect, useState } from "react"

export function useIsMobile(breakpoint: number = 768) {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            `(max-width: ${breakpoint - 1}px)`
        )

        setIsMobile(mediaQuery.matches)

        const handleChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches)
        }

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handleChange)
        } else {
            // Safari fallback
            mediaQuery.addListener(handleChange)
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener("change", handleChange)
            } else {
                mediaQuery.removeListener(handleChange)
            }
        }
    }, [breakpoint])

    return isMobile
}