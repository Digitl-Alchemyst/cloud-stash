/* eslint-disable react/function-component-definition */
'use client'
import React from 'react'
import DropzoneComponent from 'react-dropzone';

function Dropzone() {
  return (
    <div>
      <DropzoneComponent onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              className='flex items-center justify-center border border-azure-700 py-18 mx-18'
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <p className='text-xl'>Drag &amp; drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </DropzoneComponent>
    </div>
  );
}

export default Dropzone