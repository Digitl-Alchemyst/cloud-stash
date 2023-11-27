import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DLToggle from '@/c/Global/DLToggle'

const Header = () => {
  return (
    <header className='flex items-center justify-between py-3 bg-azure-800 px-5'>
        <Link href='/' className='flex space-x-4 items-center'>

            <Image src='/logo.png' alt='logo' width={50} height={50}/>
            <Image src='/text.png' alt='logo' width={250} height={50}/>

        </Link>
        <div className='flex space-x-4'>
            {/* Theme Toggle  */}
            <DLToggle />
            {/* User Button / Login Functions  */}
            <UserButton afterSignOutUrl="/"/>
            <SignedOut>
                <SignInButton afterSignInUrl='/dashboard' mode='modal' />
            </SignedOut>
        </div>
    </header>
  )
}

export default Header