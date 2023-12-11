import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/util/util';
import Image from 'next/image';

function UserAvatar({
  name,
  image,
  className,
}: {
  name?: string;
  image?: string;
  className?: string;
}) {
  return (
    <Avatar
      className={cn(
        'bg-cslight-300 text-csdark-700 dark:bg-csdark-700 dark:text-cslight-400',
        className,
      )}
    >
      {image && (
        <Image
          src={image}
          alt={name || ''}
          width={40}
          height={40}
          referrerPolicy='no-referrer'
          className='rounded-full'
        />
      )}
      {/* <AvatarImage src='./alch.jpg' /> */}
      <AvatarFallback delayMs={1000} className='text-lg text-csdark-700 dark:bg-csdark-700 dark:text-cslight-400'>
        {name
          ?.split(' ')
          .map((n) => n[0])
          .join('')}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
