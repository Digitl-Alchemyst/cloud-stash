/* eslint-disable import/prefer-default-export */
'use client';

import { db, storage } from '#/firebase';
import { useAppStore } from '@/store/store';
import { useUser } from '@clerk/nextjs';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { CopyIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import toast from 'react-hot-toast';

function RenameModal() {
  const { user } = useUser();

  const [input, setInput] = useState('');

  const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] =
    useAppStore((state) => [
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
      state.fileId,
      state.filename,
    ]);

  const renameFile = async () => {
        if (!user || !fileId) return;
        
        const toastId = toast.loading('Renaming File...');

        await updateDoc(doc(db, 'users', user.id, 'files', fileId), {
          filename: input,
        });

        toast.success('File Successfully Renamed', {
          id: toastId,
        });
        
        setInput(''),
        setIsRenameModalOpen(false);
  };

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className='sm:max-w-lg lg:max-w-4xl dark:bg-lazure-800 bg-azure-300 gap-y-8'>
        <DialogHeader>
          <DialogTitle className='pb-2'>Rename your File</DialogTitle>
          <div>

          <Input
          className='mb-8'
            id='Link'
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === 'Enter') {
                renameFile();
              }
            }}
          />

          <div className='flex justify-between px-8 lg:justify-center lg:space-x-12 mt-4'>
            <Button
              size='sm'
              className='px-3'

              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className='sr-only'>Cancel</span>
              <span>Cancel</span>
            </Button>
            <Button
              type='submit'
              size='sm'
              className='px-3'

              onClick={() => renameFile()}
            >
              <span className='sr-only'>Rename</span>
              <span>Rename</span>
            </Button>
          </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;