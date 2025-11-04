import React, { useState, useRef, useEffect } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
}

const useAnimatedCounter = (endValueStr: string) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    
    // Robustly parse numbers with Portuguese formatting ('.' for thousands, ',' for decimal)
    const cleanedString = endValueStr.replace(/\./g, '').replace(',', '.');
    const numericEndValue = parseFloat(cleanedString.replace(/[^\d.-]/g, ''));
    
    // Handle non-numeric values gracefully by skipping the animation.
    if (isNaN(numericEndValue)) {
        return { ref, displayValue: endValueStr };
    }

    const isFloat = endValueStr.includes(',');
    const suffix = endValueStr.replace(/[\d.,+\-]/g, '');

    const easeOutQuad = (t: number) => t * (2 - t);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTime: number;
                    const duration = 2000;

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const t = Math.min(progress / duration, 1);
                        const easedT = easeOutQuad(t);
                        const currentVal = easedT * numericEndValue;
                        
                        setCount(isFloat ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));

                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(numericEndValue);
                        }
                    };
                    requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [numericEndValue, isFloat]);

    const formattedCount = new Intl.NumberFormat('pt-PT', {
      minimumFractionDigits: isFloat ? 1 : 0,
      maximumFractionDigits: isFloat ? 1 : 0,
    }).format(count);

    return { ref, displayValue: `${endValueStr.startsWith('+') ? '+' : ''}${formattedCount}${suffix}` };
};

const StatCard: React.FC<StatCardProps> = ({ title, value, description }) => {
    const { ref, displayValue } = useAnimatedCounter(value);

    return (
        <div ref={ref} className="bg-gray-100 p-6 rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
            <p className="text-4xl font-extrabold text-teal-600 my-2">{displayValue}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
};

export default StatCard;