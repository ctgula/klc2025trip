'use client';

import { useState, useEffect } from &apos;react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DD'
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className=&quot;w-full max-w-3xl mx-auto&quot;>
      <h3 className=&quot;text-center text-xl font-medium mb-4&quot;>Trip Countdown</h3>
      <div className=&quot;flex justify-center space-x-4&quot;>
        {timeBlocks.map((block) => (
          <div key={block.label} className=&quot;flex flex-col items-center&quot;>
            <div className=&quot;bg-white rounded-lg shadow-md w-20 h-20 flex items-center justify-center mb-2&quot;>
              <span className=&quot;text-3xl font-bold text-blue-600&quot;>
                {block.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className=&quot;text-sm font-medium text-gray-600&quot;>{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
