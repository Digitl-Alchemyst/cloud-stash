import { FileType } from '#/typings'
import { Button } from '../ui/button'
import { DataTable } from '@/c/Table/Table';
import { columns } from './columns'


function TableWrapper(
    { fileSkeleton }: {fileSkeleton: FileType[]}
) {
  return (
    <div className=''>
      <Button>Sort By...</Button>

      <DataTable columns={columns} data={fileSkeleton} />
    </div>
  );
}

export default TableWrapper