'use client';

import { FileType } from '#/typings';
import { Button } from '../ui/button';
import { DataTable } from '@/c/Table/Table';
import { Input } from '@/c/ui/input';
import { columns } from './columns';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '#/firebase';
import { Skeleton } from '@/components/ui/skeleton';

function TableWrapper({ fileSkeleton }: { fileSkeleton: FileType[] }) {
  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');

  const [docs, load, error] = useCollection(
    user &&
      query(
        collection(db, 'users', user.id, 'files'),
        orderBy('timestamp', sort),
      ),
  );

  useEffect(() => {
    if (!docs) return;

    const files: FileType[] = docs.docs.map((doc) => ({
      id: doc.id,
      filename: doc.data().filename || doc.id,
      timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
      fullName: doc.data().fullName,
      downloadURL: doc.data().downloadURL,
      type: doc.data().type,
      size: doc.data().size,
    }));

    setInitialFiles(files);
  }, [docs]);

  if (docs?.docs.length === undefined)
    return (
      <div className='flex flex-col'>
        <div className='flex flex-row items-center justify-center space-x-4 px-3'>
          <Button variant='outline' className='mb-5 h-10 w-42'>
            <Skeleton className='h-5 w-full' />
          </Button>
          <Button variant='outline' className='mb-5 h-10 w-36'>
            <Skeleton className='h-5 w-full' />
          </Button>
          <Button variant='outline' className='mb-5 h-10 w-32'>
            <Skeleton className='h-5 w-full' />
          </Button>
          <Button variant='outline' className='mb-5 h-10 w-38'>
            <Skeleton className='h-5 w-full' />
          </Button>
          <Button variant='outline' className='mb-5 h-10 w-36'>
            <Skeleton className='h-5 w-full' />
          </Button>
          <Button variant='outline' className='mb-5 h-10 w-36'>
            <Skeleton className='h-5 w-full' />
          </Button>
          <Button variant='outline' className='mb-5 h-10 w-full'>
            <Skeleton className='h-5 w-full' />
          </Button>
        </div>

        <div className='rounded-lg border'>
          <div className='h-10 border-b' />
          {fileSkeleton.map((file) => (
            <div
              key={file.id}
              className='flex w-full items-center space-x-3 p-3'
            >
              <Skeleton className='h-10 w-8' />
              <Skeleton className='h-10 w-10' />
              <Skeleton className='h-10 w-full' />
              <Skeleton className='h-10 w-38' />
              <Skeleton className='h-10 w-18' />
              <Skeleton className='h-10 w-26' />
            </div>
          ))}

          {fileSkeleton.length === 0 && (
            <div
              className='flex w-full items-center space-x-3 p-3'
            >
              <Skeleton className='h-10 w-8' />
              <Skeleton className='h-10 w-10' />
              <Skeleton className='h-10 w-full' />
              <Skeleton className='h-10 w-38' />
              <Skeleton className='h-10 w-18' />
              <Skeleton className='h-10 w-26' />
            </div>
          )}
        </div>
      </div>
    );

  return (
    <div className='flex flex-col space-y-4 pb-10'>
      <div className='flex flex-row space-x-4 px-3'>
        <Button onClick={() => setSort(sort === 'desc' ? 'asc' : 'desc')}>
          Sort By {sort === 'desc' ? 'Newest' : 'Oldest'}
        </Button>
        <Button>Filter File Type</Button>
        <Button>Starred</Button>
        <Button>Recently Added</Button>
        <Button>Move File</Button>
        <Button>New Folder</Button>
        <Input type='search' placeholder='Search for files.' />
      </div>

      <DataTable columns={columns} data={initialFiles} />
    </div>
  );
}

export default TableWrapper;
