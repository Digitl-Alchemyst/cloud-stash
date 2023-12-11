/* eslint-disable import/prefer-default-export */
'use client';

import { db, storage } from '#/firebase';
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
import { useAppStore } from '@/store/store';
import { useUser } from '@clerk/nextjs';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

export function DeleteModal() {
  const { user } = useUser();

  const [
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    fileId,
    setFileId,
    setFilename,
  ] = useAppStore((state) => [
    state.isDeleteModalOpen,
    state.setIsDeleteModalOpen,
    state.fileId,
    state.setFileId,
    state.setFilename,
  ]);

  async function deleteFile() {
    if (!user || !fileId) return;

    const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);

    try {
      await deleteObject(fileRef)
        .then(async () => {
          deleteDoc(doc(db, 'users', user.id, 'files', fileId)).then(() => {
            console.log('File has been deleted.');
          });
        })
        .finally(() => {
          setIsDeleteModalOpen(false);
        });
    } catch (error) {
      console.log('An Error has occured', error);
      setIsDeleteModalOpen(false);
    }
  }

  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen);
      }}
    >
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this file?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This file will be permanently deleted!
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='flex space-x-2 py-3'>
          <Button
            size='sm'
            className='flex-1 border px-3'
            variant='ghost'
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <span className='sr-only'>Cancel</span>
            <span>Cancel</span>
          </Button>
          <Button
            size='sm'
            className='flex-1 border px-3'
            variant='ghost'
            onClick={() => deleteFile()}
          >
            <span className='sr-only'>Confirm & Delete</span>
            <span>Confirm & Delete</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
