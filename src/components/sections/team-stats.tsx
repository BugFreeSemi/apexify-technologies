"use client";

import React from "react";
import { CheckSquare, ChevronDown } from "lucide-react";

// ProgressCircle Component
const ProgressCircle = ({ percentage, label }: { percentage: number, label: string }) => {
    const size = 160;
    const strokeWidth = 12;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const targetOffset = circumference - (percentage / 100) * circumference;

    const [strokeOffset, setStrokeOffset] = React.useState(circumference);

    React.useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setStrokeOffset(targetOffset);
        }, 100);

        return () => clearTimeout(animationTimeout);
    }, [targetOffset]);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "var(--color-primary-purple)" }} />
                            <stop offset="100%" style={{ stopColor: "var(--color-primary-blue)" }} />
                        </linearGradient>
                    </defs>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        className="stroke-gray-200"
                        fill="none"
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        strokeWidth={strokeWidth}
                        stroke="url(#progressGradient)"
                        fill="none"
                        strokeLinecap="round"
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: strokeOffset,
                            transition: "stroke-dashoffset 1s ease-out",
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold font-display text-text-primary">{percentage}%</span>
                </div>
            </div>
            <p className="text-base font-semibold text-text-primary text-center">{label}</p>
        </div>
    );
};

// FAQ Data
const faqData = [
    {
        question: "What types of websites do you design and develop?",
        answer: "We create a variety of websites, from corporate and e-commerce sites to personal and portfolio websites, tailored to meet your specific goals and audience needs.",
    },
    {
        question: "Can you build mobile applications as well?",
        answer: "Yes, we specialize in both web and mobile application development, delivering seamless experiences across devices with user-focused design and functionality.",
    },
    {
        question: "Do I really need a website?",
        answer: "Absolutely! In today's digital landscape, a website is essential for building credibility, reaching a wider audience, and providing customers with easy access to your products or services. A well-designed website acts as a central hub for your online presence, helping you stand out from competitors and build trust with potential clients. Whether you're a small business, a professional, or a larger enterprise, a website is a powerful tool for growth and engagement.",
    },
    {
        question: "Can you help with SEO and digital marketing?",
        answer: "Yes, we provide SEO and digital marketing services to help your website rank higher and reach a wider audience, driving growth for your business.",
    },
];

// Main Section Component
const TeamStatsSection = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const listItems = [
        "Dedicated Project Managers",
        "100% Satisfaction Guarantee",
        "Bringing your vision to life",
    ];

    return (
        <section className="bg-white py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                    {/* Left Column */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h5 className="text-overline text-primary-blue">OUR DIGITAL EXPERIENCE</h5>
                            <h2 className="text-4xl font-bold font-display text-text-primary">Leading the way in innovative solutions</h2>
                        </div>
                        <ul className="space-y-3">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckSquare className="w-6 h-6 text-gray-400" />
                                    <span className="text-text-secondary text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row items-center justify-start gap-12 pt-6">
                            <ProgressCircle percentage={58} label="Company Growth" />
                            <ProgressCircle percentage={92} label="Satisfied Clients" />
                        </div>
                    </div>

                    {/* Right Column - FAQ */}
                    <div className="space-y-2">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-border-light last:border-b-0">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center text-left py-6"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-content-${index}`}
                                >
                                    <h4 id={`faq-question-${index}`} className="text-xl font-semibold text-text-primary pr-4">{item.question}</h4>
                                    <ChevronDown
                                        className={`w-5 h-5 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                                            openIndex === index ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    id={`faq-content-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-text-secondary pb-6 pr-8">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamStatsSection;