
import { Coupon } from './types';

export const HERO_IMAGES = [
  "https://i.ibb.co/Y45FtThN/MCV-HOL25-Drop-Mo-M-Dot-Net-Wallpaper-800x450.png",
  "https://i.ibb.co/4whprn45/Subdungeon.png",
  "https://i.ibb.co/TMQh9r6G/Cacti-Canyon.png",
  "https://i.ibb.co/5hW0QFmg/Ancient-Hunt.png",
  "https://i.ibb.co/0jpZ7G3J/Main-Backdrop.png"
];

export const INITIAL_COUPONS: Coupon[] = [
  { code: 'BEINGFLAGGER', discountPercent: 3, enabled: true },
  { code: 'AHBIIFLAGGER1', discountPercent: 2, enabled: true },
  { code: 'VECTORIZEGG', discountPercent: 5, enabled: true },
  { code: 'FLAGGEROFFER', discountPercent: 1, enabled: true },
  { code: 'PIXELOFFER', discountPercent: 10, enabled: true },
  { code: 'OPOFFERFLAGGER', discountPercent: 25, enabled: true },
];

export const PLANS = {
  intel: [
    { id: 'starter', name: 'Starter', pricePerGB: 45, cpu: 'Intel Core i5-12600K', color: 'gray', ram: 4, slots: 20, desc: 'Essential power for small servers' },
    { id: 'pro', name: 'Pro', pricePerGB: 90, cpu: 'Intel Core i9-12900K', color: 'red', ram: 8, slots: 60, desc: 'Balanced performance for growing communities' },
    { id: 'ultimate', name: 'Ultimate', pricePerGB: 180, cpu: 'Intel Core i9-14900K', color: 'yellow', ram: 16, slots: 120, desc: 'Maximum power for large networks' },
  ],
  ryzen: [
    { id: 'starter', name: 'Starter', pricePerGB: 55, cpu: 'Ryzen 7 5800X', color: 'orange', ram: 4, slots: 20, desc: 'High frequency entry-level hosting' },
    { id: 'pro', name: 'Pro', pricePerGB: 110, cpu: 'Ryzen 9 5950X', color: 'cyan', ram: 8, slots: 60, desc: 'Extreme multitasking capabilities' },
    { id: 'ultimate', name: 'Ultimate', pricePerGB: 210, cpu: 'Ryzen 9 7950X', color: 'purple', ram: 16, slots: 120, desc: 'Top-tier hardware for demanding loads' },
  ]
};

export const CURRENCIES: Record<string, { code: string; symbol: string; rate: number }> = {
  INR: { code: 'INR', symbol: '₹', rate: 1 },
  NPR: { code: 'NPR', symbol: 'Rs.', rate: 1.6 },
  USD: { code: 'USD', symbol: '$', rate: 0.012 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.011 }
};
