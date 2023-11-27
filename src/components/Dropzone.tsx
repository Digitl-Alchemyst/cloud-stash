/* eslint-disable react/function-component-definition */
'use client';
import { cn } from '@/util/util';
import React from 'react';
import DropzoneComponent from 'react-dropzone';

function Dropzone() {
  const maxSize = 20971520;

  return (
    <div>
      <DropzoneComponent
        minSize={0}
        maxSize={maxSize}
        onDrop={(acceptedFiles) => console.log(acceptedFiles)}
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
            <section className='mx-24 my-8'>
              <div
                {...getRootProps()}
                className={cn( 
                  'flex items-center justify-center w-full h-52 text-center rounded-md border py-18 ', 
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
