'use client';
import { useState } from 'react';
import styles from './pricing.module.css';

import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Monthly', priceSuffix: '/month' },
  { id: '2', value: '2', label: 'Annually', priceSuffix: '/year' },
];

export const tiers: PricingTier[] = [
  {
    name: 'Basic',
    id: '0',
    href: '/subscribe',
    price: { '1': '$10', '2': '$100' },
    discountPrice: { '1': '', '2': '' },
    description: `Enjoy a free trial of our premium features for 24 hours.`,
    features: [
      `Create personalized avatars based on body type, height, and style preferences.`,
      `Try on clothes virtually with your avatar in real-time.`,
      `Access a curated selection of clothing items from top online stores.`,
      `Save favorite outfits and items for quick access and future purchases.`,
      `Receive updates on new arrivals, sales, and promotions from your favorite brands.`,
      `Secure checkout process with multiple payment options.`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Sign up`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-6 h-6', className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const cn = (...args: Array<string | boolean | undefined | null>) =>
  args.filter(Boolean).join(' ');

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  const tier = tiers[0];
  const bannerText = "";

  return (
    <div
      className={cn('flex flex-col w-full items-center', styles.fancyOverlay)}
    >
      <div className="w-full flex flex-col items-center mb-24">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
              Pricing
            </h1>
            <p className="text-black dark:text-white mt-6 md:text-xl max-w-prose">
              Start your trial or subscribe now to elevate your online shopping experience.
            </p>
          </div>

          {bannerText ? (
            <div className="flex justify-center my-4">
              <p className="px-4 py-3 text-xs bg-slate-100 text-black dark:bg-slate-300/30 dark:text-white/80 rounded-xl">
                {bannerText}
              </p>
            </div>
          ) : null}

          {frequencies.length > 1 ? (
            <div className="mt-16 flex justify-center">
              <RadioGroup
                defaultValue={frequency.value}
                onValueChange={(value: string) => {
                  setFrequency(frequencies.find((f) => f.value === value)!);
                }}
                className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-green-200/30 dark:ring-green-800"
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                }}
              >
                <Label className="sr-only">Payment frequency</Label>
                {frequencies.map((option) => (
                  <Label
                    className={cn(
                      frequency.value === option.value
                        ? 'bg-slate-500/90 text-white dark:bg-slate-900/70 dark:text-white/70'
                        : 'bg-transparent text-green-500 hover:bg-slate-500/10',
                      'cursor-pointer rounded-full px-2.5 py-2 transition-all',
                    )}
                    key={option.value}
                    htmlFor={option.value}
                  >
                    {option.label}

                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="hidden"
                    />
                  </Label>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className="mt-12" aria-hidden="true"></div>
          )}

          <div className="flex flex-wrap xl:flex-nowrap items-center bg-white dark:bg-green-900/80 backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-green-300/70 dark:ring-green-700 xl:mx-0 xl:flex xl:max-w-none">
            <div className="p-8 sm:p-10 xl:flex-auto">
              <h3 className="text-black dark:text-white text-2xl font-bold tracking-tight">{tier.name}</h3>
              <p className="mt-6 text-base leading-7 text-green-700 dark:text-green-400">
                {tier.description}
              </p>
              <div className="mt-12 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-black dark:text-white">
                  Included features
                </h4>
                <div className="h-px flex-auto bg-green-100 dark:bg-green-700" />
              </div>

              <ul className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-black-700 dark:text-black-400">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-2 text-sm"
                  >
                    <CheckIcon
                      className="h-6 w-6 flex-none text-slate-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0">
              <div
                className={cn(
                  'rounded-2xl py-10 text-center ring-1 ring-inset ring-green-300/50 dark:ring-green-800/50 xl:flex xl:flex-col xl:justify-center xl:py-16',
                  styles.fancyGlass,
                )}
              >
                <div className="mx-auto max-w-xs px-8">
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span
                      className={cn(
                        'text-5xl font-bold tracking-tight text-black dark:text-white',
                        tier.discountPrice &&
                          (tier.discountPrice as Record<string, string>)[frequency.value]
                          ? 'line-through'
                          : '',
                      )}
                    >
                      {typeof tier.price === 'string'
                        ? tier.price
                        : (tier.price as Record<string, string>)[frequency.value]}
                    </span>

                    <span className="text-black dark:text-white">
                      {typeof tier.discountPrice === 'string'
                        ? tier.discountPrice
                        : (tier.discountPrice as Record<string, string>)[frequency.value]}
                    </span>

                    <span className="text-sm font-semibold leading-6 tracking-wide text-green-700 dark:text-green-400">
                      {frequency.priceSuffix}
                    </span>
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center mt-8 flex-shrink-0"
                  >
                    <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-300/70 text-slate-foreground hover:bg-slate-300/90 dark:bg-slate-700 dark:hover:bg-slate-700/90 text-black dark:text-white border-0 h-12 rounded-md px-6 sm:px-10 text-md">
                      {tier.cta}
                    </button>
                  </a>
                  <p className="mt-2 text-xs leading-5 text-green-700 dark:text-green-400">
                    Sign up in seconds, no credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}