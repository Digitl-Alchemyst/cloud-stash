import { FileType } from '#/typings'
import { Button } from '../ui/button'
import { DataTable } from '@/c/Table/Table';
import { Input } from '@/components/ui/input';

import { columns } from './columns'


function TableWrapper(
    { fileSkeleton }: {fileSkeleton: FileType[]}
) {
  return (
    <div className='space-y-4'>
      <div className='space-x-4 flex flex-row px-3'>
        <Button>Sort By...</Button>
        <Button>Filter File Type</Button>
        <Button>Starred</Button>
        <Button>Recently Added</Button>
        <Input type='search' placeholder='Search for files.' />
      </div>

      <DataTable columns={columns} data={fileSkeleton} />
    </div>
  );
}

export default TableWrapper