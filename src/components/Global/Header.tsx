import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DLToggle from '@/c/Global/DLToggle'
import { dark } from '@clerk/themes';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-azure-600 dark:bg-azure-800 px-5 py-3'>
      <Link href='/' className='flex items-center space-x-4'>
        <Image src='/logo.png' alt='logo' width={50} height={50} />
        <Image src='/text.png' alt='logo' width={250} height={50} />
      </Link>
      <div className='flex space-x-4 items-center'>
        {/* Theme Toggle  */}
        <DLToggle />
        {/* User Button / Login Functions  */}
        <UserButton
          afterSignOutUrl='/'
          
          appearance={{
            baseTheme: dark,
            elements: {
              avatarBox: 'h-12 w-12'
            }
          }}
        />
        <SignedOut>
          <SignInButton afterSignInUrl='/dashboard' mode='modal' />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header