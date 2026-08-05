'use client'

import { useMemo, useState } from 'react'
import SectionHeader from '../../ui/SectionHeader'
import { EmiCalculatorData } from '@/website/types/emi-calculator'

const LOAN_AMOUNT_MIN = 100000
const LOAN_AMOUNT_MAX = 20000000
const TENURE_MIN = 1
const TENURE_MAX = 30
const RATE_MIN = 5
const RATE_MAX = 15

const formatCurrency = (value: number) =>
    `₹ ${Math.round(value).toLocaleString('en-IN')}`

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max)

interface SliderRowProps {
    label: string
    value: number
    min: number
    max: number
    step: number
    suffix?: string
    prefix?: string
    onChange: (value: number) => void
}

const SliderRow = ({ label, value, min, max, step, suffix = '', prefix = '', onChange }: SliderRowProps) => {
    const percent = ((value - min) / (max - min)) * 100

    return (
        <div>
            <div className="flex items-center justify-between gap-4">
                <label className="font-body text-[18px] font-medium text-primary">{label}</label>

                <div className="flex items-center gap-1 rounded-md-custom bg-[#eef0dc] px-4 text-xl py-2  w-fit">
                    {prefix && <span className="font-heading text-primary ">{prefix}</span>}
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => onChange(clamp(Number(e.target.value) || 0, min, max))}
                        className="font-heading w-24 bg-transparent  text-primary outline-none"
                    />
                    {suffix && <span className="font-heading text-primary">{suffix}</span>}
                </div>
            </div>

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="range-slider mt-6 w-full"
                style={{
                    background: `linear-gradient(to right, var(--color-primary) ${percent}%, var(--color-border) ${percent}%)`,
                }}
                aria-label={label}
            />
        </div>
    )
}

const Calculator = ({ data }: { data: EmiCalculatorData }) => {
    const [loanAmount, setLoanAmount] = useState(6400000)
    const [tenureYears, setTenureYears] = useState(5)
    const [interestRate, setInterestRate] = useState(6.5)

    const { emi, totalInterest, totalPayment, interestPercent } = useMemo(() => {
        const months = tenureYears * 12
        const monthlyRate = interestRate / 12 / 100

        const emiValue =
            monthlyRate === 0
                ? loanAmount / months
                : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1)

        const totalPaymentValue = emiValue * months
        const totalInterestValue = totalPaymentValue - loanAmount

        return {
            emi: emiValue,
            totalInterest: totalInterestValue,
            totalPayment: totalPaymentValue,
            interestPercent: totalPaymentValue > 0 ? Math.round((totalInterestValue / totalPaymentValue) * 100) : 0,
        }
    }, [loanAmount, tenureYears, interestRate])

    const radius = 70
    const circumference = 2 * Math.PI * radius
    const interestDash = (interestPercent / 100) * circumference

    return (
        <section className="relative w-full section-padding ">

            <div className="container-custom relative z-10">
                <SectionHeader
                    className="max-w-3xl mx-auto text-center"
                    heading={data.heading}
                    paragraph={data.paragraph}
                />

                <div className="content mt-7 md:mt-14 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        <div className="space-y-12">
                            <SliderRow
                                label="Loan Amount"
                                value={loanAmount}
                                min={LOAN_AMOUNT_MIN}
                                max={LOAN_AMOUNT_MAX}
                                step={10000}
                                prefix="₹"
                                onChange={setLoanAmount}
                            />

                            <SliderRow
                                label="Loan Tenure"
                                value={tenureYears}
                                min={TENURE_MIN}
                                max={TENURE_MAX}
                                step={1}
                                suffix="Yr"
                                onChange={setTenureYears}
                            />

                            <SliderRow
                                label="Rate of interest (P.A)"
                                value={interestRate}
                                min={RATE_MIN}
                                max={RATE_MAX}
                                step={0.1}
                                suffix="%"
                                onChange={setInterestRate}
                            />
                        </div>

                        <div className="rounded-lg-custom bg-[#eef0dc] p-6 md:p-10">
                            <div className="divide-y divide-border">
                                <div className="flex text-[16px] items-center justify-between py-4 first:pt-0">
                                    <span className="font-body text-primary">Monthly EMI</span>
                                    <span className="font-heading font-semibold text-primary">{formatCurrency(emi)}</span>
                                </div>
                                <div className="flex text-[16px] items-center justify-between py-4">
                                    <span className="font-body text-primary">Principal Amount</span>
                                    <span className="font-heading font-semibold text-primary">{formatCurrency(loanAmount)}</span>
                                </div>
                                <div className="flex text-[16px] items-center justify-between py-4">
                                    <span className="font-body text-primary">Total Interest</span>
                                    <span className="font-heading font-semibold text-primary">{formatCurrency(totalInterest)}</span>
                                </div>
                                <div className="flex text-[16px] items-center justify-between py-4 last:pb-0">
                                    <span className="font-body text-primary">Total Payment</span>
                                    <span className="font-heading font-semibold text-primary">{formatCurrency(totalPayment)}</span>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col items-center">
                                <div className="relative h-52 w-52">
                                    <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
                                        <circle
                                            cx="90"
                                            cy="90"
                                            r={radius}
                                            fill="none"
                                            stroke="var(--color-accent)"
                                            strokeWidth="22"
                                        />
                                        <circle
                                            cx="90"
                                            cy="90"
                                            r={radius}
                                            fill="none"
                                            stroke="var(--color-primary)"
                                            strokeWidth="22"
                                            strokeDasharray={`${interestDash} ${circumference}`}
                                            // strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-heading text-2xl font-semibold text-primary">{interestPercent}%</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-6 rounded-full bg-accent" />
                                        <span className="font-body text-sm text-muted">Principal Amount</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-6 rounded-full bg-primary" />
                                        <span className="font-body text-sm text-muted">Interest Amount</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Calculator
