/* eslint-disable react/function-component-definition */
'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { cn } from '@/util/util';
import DropzoneComponent from 'react-dropzone';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '#/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import toast from 'react-hot-toast';

function Dropzone() {

  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log('File reading was aborted.')
      reader.onerror = () => console.log('File reading has failed.')
      reader.onload = async () => {
        await uploadFile(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };
  
  const uploadFile = async (selectedFile: File) => {
    if (loading) return;
    if (!user) return;
    
    setLoading(true);
    const toastId = toast.loading('Uploading File...');

    //TODO: Implment Firebase Converters
    const docRef = await addDoc(collection(db, 'users', user.id, 'files'),{
      userId: user.id,
      filename:selectedFile.name,
      fullName:user.fullName,
      profileImg: user.imageUrl,
      timestamp: serverTimestamp(),
      type: selectedFile.type,
      size: selectedFile.size,
    });

    const fileRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

    uploadBytes(fileRef, selectedFile).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(fileRef);

      await updateDoc(doc(db, 'users', user.id, 'files', docRef.id), {
        downloadURL: downloadURL,
      });
    });
    toast.success('File has been Stashed', {
      id: toastId,
    });
    setLoading(false);
  };

  const maxSize = 20971520;

  return (
    <div>
      <DropzoneComponent
        minSize={0}
        maxSize={maxSize}
        onDrop={onDrop}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragReject,
          fileRejections,
        }) => {

          const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

          return (
            <section className='my-8 w-full flex items-center justify-center'>
              <div
                {...getRootProps()}
                className={cn( 
                  'flex items-center justify-center w-[350px] md:w-[500px] lg:w-[750px] h-52 text-center rounded-md border py-18', 
                  isDragActive ? 'border-dazure-500 bg-lazure-500  dark:border-azure-600 dark:bg-dazure-600' : 'border-dazure-600 bg-cslight-600  dark:border-azure-700 dark:bg-csdark-800'
                )}
              >
                <input {...getInputProps()} />
                {!isDragActive && 'Click here or drop a file to upload.'}
                {isDragActive && !isDragReject && 'Drop a file to upload.'}
                {isDragReject &&
                  'File type is not accepted, please try another.'}
                {isFileTooLarge && (
                  <div className='text-danger mt-2'>
                    Filesize is too large, Max 20mb
                  </div>
                )}
              </div>
            </section>
          );
        }}
      </DropzoneComponent>
    </div>
  );
}

export default Dropzone;
