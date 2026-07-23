'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './clock.module.css';

interface TimeZoneClock {
  name: string;
  timezone: string;
  color: string;
}

const timeZones: TimeZoneClock[] = [
  { name: 'New York', timezone: 'America/New_York', color: '#1e40af' },
  { name: 'London', timezone: 'Europe/London', color: '#7c3aed' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo', color: '#dc2626' },
  { name: 'Sydney', timezone: 'Australia/Sydney', color: '#059669' },
  { name: 'Dubai', timezone: 'Asia/Dubai', color: '#f59e0b' },
  { name: 'São Paulo', timezone: 'America/Sao_Paulo', color: '#06b6d4' },
  { name: 'Singapore', timezone: 'Asia/Singapore', color: '#ec4899' },
  { name: 'Frankfurt', timezone: 'Europe/Berlin', color: '#8b5cf6' },
];

interface ClockData {
  [key: string]: {
    time: string;
    date: string;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export default function ClockPage() {
  const [clocks, setClocks] = useState<ClockData>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateClocks = () => {
      const newClocks: ClockData = {};
      
      timeZones.forEach((tz) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.timezone,
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
        
        const now = new Date();
        const timeString = formatter.format(now);
        const dateString = dateFormatter.format(now);
        
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        
        newClocks[tz.timezone] = {
          time: timeString,
          date: dateString,
          hours,
          minutes,
          seconds,
        };
      });
      
      setClocks(newClocks);
    };
    
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const getAnalogClock = (hours: number, minutes: number, seconds: number) => {
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    return { secondDeg, minuteDeg, hourDeg };
  };

  return (
    <div className={styles.container}>
      {/* Back Navigation */}
      <nav className={styles.backNav}>
        <Link href="/">← Back to Home</Link>
      </nav>

      {/* Header */}
      <section className={styles.header}>
        <h1>Global Time Zone Clock</h1>
        <p>Real-time display of current time across major world cities</p>
      </section>

      {/* Digital Clocks Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Digital Clocks</h2>
          <div className={styles.digitalGrid}>
            {timeZones.map((tz) => {
              const data = clocks[tz.timezone];
              if (!data) return null;
              
              return (
                <div key={tz.timezone} className={styles.digitalCard}>
                  <div className={styles.city}>{tz.name}</div>
                  <div className={styles.digitalTime}>{data.time}</div>
                  <div className={styles.date}>{data.date}</div>
                  <div className={styles.timezone}>{tz.timezone}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analog Clocks Grid */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Analog Clocks</h2>
          <div className={styles.analogGrid}>
            {timeZones.map((tz) => {
              const data = clocks[tz.timezone];
              if (!data) return null;
              
              const { secondDeg, minuteDeg, hourDeg } = getAnalogClock(
                data.hours,
                data.minutes,
                data.seconds
              );
              
              return (
                <div key={tz.timezone} className={styles.analogCard}>
                  <div className={styles.analogCityName}>{tz.name}</div>
                  <div className={styles.clockFace}>
                    <div className={styles.center}></div>
                    
                    {/* Hour markers */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30) * (Math.PI / 180);
                      const x = 50 + 40 * Math.cos(angle - Math.PI / 2);
                      const y = 50 + 40 * Math.sin(angle - Math.PI / 2);
                      return (
                        <div
                          key={i}
                          className={styles.hourMarker}
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                          }}
                        >
                          {i === 0 ? 12 : i}
                        </div>
                      );
                    })}
                    
                    {/* Hour hand */}
                    <div
                      className={styles.hand + ' ' + styles.hourHand}
                      style={{
                        transform: `rotate(${hourDeg}deg)`,
                        borderLeftColor: tz.color,
                      }}
                    ></div>
                    
                    {/* Minute hand */}
                    <div
                      className={styles.hand + ' ' + styles.minuteHand}
                      style={{
                        transform: `rotate(${minuteDeg}deg)`,
                        borderLeftColor: tz.color,
                      }}
                    ></div>
                    
                    {/* Second hand */}
                    <div
                      className={styles.hand + ' ' + styles.secondHand}
                      style={{
                        transform: `rotate(${secondDeg}deg)`,
                        borderLeftColor: '#ef4444',
                      }}
                    ></div>
                  </div>
                  <div className={styles.analogTime}>{data.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* World Map Info */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Time Zone Information</h2>
          <div className={styles.infoGrid}>
            {timeZones.map((tz) => {
              const data = clocks[tz.timezone];
              if (!data) return null;
              
              // Calculate UTC offset
              const now = new Date();
              const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
              const tzDate = new Date(now.toLocaleString('en-US', { timeZone: tz.timezone }));
              const offset = (tzDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60);
              const offsetSign = offset >= 0 ? '+' : '';
              
              return (
                <div key={tz.timezone} className={styles.infoCard}>
                  <div className={styles.infoCityName}>{tz.name}</div>
                  <div className={styles.infoTime}>{data.time}</div>
                  <div className={styles.infoOffset}>
                    UTC {offsetSign}{offset.toFixed(1).replace('.0', '')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🕐</div>
              <h3>Real-Time Updates</h3>
              <p>Clock updates every second for accurate time display across all zones.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌍</div>
              <h3>8 Major Cities</h3>
              <p>Covers New York, London, Tokyo, Sydney, Dubai, São Paulo, Singapore, and Frankfurt.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Dual Display</h3>
              <p>Both digital and analog clock formats for your preference.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3>Color Coded</h3>
              <p>Each city has a unique color for easy identification.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
