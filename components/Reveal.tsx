"use client";

import { useRef, useEffect, useState } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const Reveal = ({
    children,
    width = "100%",
    className = "",
    delay = 0,
    direction = "up"
}: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px 60px 0px", threshold: 0.02 }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${inView ? "reveal-visible" : ""} w-full ${className}`}
            style={{
                width: width === "100%" ? "100%" : width,
                transitionDelay: `${delay}s`,
            }}
            data-direction={direction}
        >
            {children}
        </div>
    );
};
