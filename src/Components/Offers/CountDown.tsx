"use client";
import React, { useEffect, useState, useMemo } from "react";

type CountdownProps = {
    targetDate: string | Date;
    onComplete?: () => void;
    className?: string;
    showLabels?: boolean;
};

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const pad = (n: number) => n.toString().padStart(2, "0");

const getTimeLeft = (target: Date): TimeLeft => {
    const now = new Date();
    let diff = Math.max(0, target.getTime() - now.getTime());

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    return { days, hours, minutes, seconds };
};

export default function Countdown({
    targetDate,
    onComplete,
    className = "",
    showLabels = true,
}: CountdownProps) {
    const target = useMemo(() => {
        const date = new Date();
        date.setMonth(date.getMonth() + 2);
        return date;
    }, []);

    const invalidDate = Number.isNaN(target.getTime());

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
        invalidDate ? { days: 0, hours: 0, minutes: 0, seconds: 0 } : getTimeLeft(target)
    );

    useEffect(() => {
        if (invalidDate) return;

        let fired = false;

        const id = setInterval(() => {
            const t = getTimeLeft(target);
            setTimeLeft(t);

            if (!fired && t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0) {
                fired = true;
                onComplete?.();
            }
        }, 1000);

        return () => clearInterval(id);
    }, [target, onComplete, invalidDate]);

    if (invalidDate) {
        return (
            <div className="text-red-500 text-sm font-medium">
                Invalid target date
            </div>
        );
    }

    const Card = ({ value, label }: { value: string | number; label: string }) => (
        <div className="group relative">
            <div className="
                w-24 md:w-28
                rounded-2xl
                bg-white/10 dark:bg-white/5
                backdrop-blur-xl
                border border-white/10
                shadow-lg
                hover:shadow-purple-500/20
                transition-all duration-300
                hover:scale-[1.05]
                text-center
                py-4
            ">
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {value}
                </div>

                {showLabels && (
                    <div className="text-xs md:text-sm mt-1 text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {label}
                    </div>
                )}
            </div>

            {/* glow effect */}
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 bg-gradient-to-r from-purple-500 to-pink-500 transition" />
        </div>
    );

    return (
        <div
            className={`
                flex flex-wrap justify-center gap-4 md:gap-6
                items-center
                ${className}
            `}
            aria-live="polite"
        >
            <Card value={timeLeft.days} label="Days" />
            <Card value={pad(timeLeft.hours)} label="Hours" />
            <Card value={pad(timeLeft.minutes)} label="Minutes" />
            <Card value={pad(timeLeft.seconds)} label="Seconds" />
        </div>
    );
}