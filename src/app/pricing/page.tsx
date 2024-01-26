import PricingCards from '@/components/Cards/PricingCards';
import React from 'react';

function PricingPage() {
  return (
    <div className='isolate overflow-hidden  bg-cslight-200 dark:bg-csdark-900'>
      <div className='mx-auto max-w-7xl px-6 pb-96 pt-22 text-center sm:pt-32 lg:px-8'>
        <div className='max-w-4-xl mx-auto'>
          <h2 className='text-2xl font-semibold leading-7 text-azure-600'>
            Pricing
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight sm:text-lg'>
            The perfect plan to fit your file stash needs,{' '}
            <br className='hidden sm:inline lg:hidden' />
            business or personal.
          </p>
        </div>
        <div className='relative mt-6 h-full'>
          <p className='mx-auto max-w-2xl text-lg leading-8 text-cslight-400'>
            If one of our standard plans do not fit your needs schedule a
            consultation for a custom plan with our sales team.
          </p>
          <svg
            viewBox='0 0 1200 1024'
            className='[mask-image:radical-gradient (closest-side,white,transparent)] absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'
          >
            <ellipse
              cx={604}
              cy={512}
              fill='url(#radial-gradient-pricing)'
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id='radial-gradient-pricing'>
                <stop stopColor='#33b5ae' />
                <stop offset={1} stopColor='#2586b3' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className='flow-root bg-cslight-300 pb-24 sm:pb-32'>
        <div className='mt-80'>
          <PricingCards />{' '}
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
