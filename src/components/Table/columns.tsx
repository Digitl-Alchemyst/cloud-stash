/* eslint-disable import/prefer-default-export */
'use client';

import { FileType } from '#/typings';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import prettyBytes from 'pretty-bytes';
import { FileIcon, defaultStyles } from 'react-file-icon';
import { COLOR_EXTENSION_MAP } from '#/constants';

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split('/')[1];
      return (
        <div className='w-10'>
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            // @ts-ignore
            {...defaultStyles[extension]}
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'filename',
    header: 'Filename',
  },
  {
    accessorKey: 'timestamp',
    header: 'Date Added',
  },
  {
    accessorKey: 'size',
    header: 'Size',
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: 'downloadURL',
    header: 'Download Link',
    cell: ({ renderValue, ...props }) => {
      const url = renderValue() as string;
      const filename = renderValue(__filename) as string;
      return (
        <Link
          href={url}
          target='_blank'
          download={filename}
          rel='noopener noreferrer'
          className='text-azure-500 underline hover:text-azure-600'
        >
          Download File
        </Link>
      );
    },
  },
];
