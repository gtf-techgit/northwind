import React from 'react'
import Ticker from '../../ui/Ticker';
import type { StatItem } from '@/website/types/home';

interface StatsProps {
    stats: StatItem[];
}

const parseStatValue = (value: string) => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return { number: 0, suffix: value };
    return { number: Number(match[1]), suffix: match[2] };
};

const Stats = ({ stats }: StatsProps) => {
    return (
        <div className="relative">
            <div className="grid grid-cols-3 divide-x divide-border">
                {stats.map((stat) => {
                    const { number, suffix } = parseStatValue(stat.value);
                    return (
                        <div
                            key={stat.label}
                            className="px-4 text-center first:pl-0 md:px-8"
                        >
                            <Ticker
                                value={number}
                                suffix={suffix}
                                className="font-heading text-[28px] md:text-[42px] text-primary"
                            />
                            <p className="mt-2 text-[12px] md:text-[16px]  text-muted ">
                                {stat.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Stats
