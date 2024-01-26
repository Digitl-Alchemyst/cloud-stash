import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DLToggle from '@/c/Global/DLToggle'
import { dark } from '@clerk/themes';
import UserMenu from '../User/UserMenu'

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-turq-600 dark:bg-azure-800 px-5 py-3'>
      <Link href='/' className='flex items-center space-x-4'>
        <Image src='/logo.png' alt='logo' width={35} height={35}  />
        <Image src='/text.png' alt='logo' width={150} height={40} />
      </Link>
      <div className='flex space-x-4 items-center'>
        {/* Theme Toggle  */}
        <DLToggle />
        {/* User Button / Login Functions  */}
        <UserMenu />
        <UserButton
          afterSignOutUrl='/'
          
          appearance={{
            baseTheme: dark,
            elements: {
              avatarBox: 'h-10 w-10'
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