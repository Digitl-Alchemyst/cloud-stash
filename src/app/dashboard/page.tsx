/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
import { auth } from '@clerk/nextjs';
import Dropzone from '@/c/Dashboard/Dropzone';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '#/firebase';
import { FileType } from '#/typings';
import TableWrapper from '@/components/Table/TableWrapper';

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, 'users', userId!, 'files'));
  const fileSkeleton: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <Dropzone />

      <section className='container mx-6 mb-8 w-full space-y-5'>
        <h2 className='border-b border-turq-500 pb-2 pt-3 text-4xl font-bold text-turq-400 dark:border-azure-500 dark:text-azure-600'>
          Your Stash
        </h2>
        <TableWrapper fileSkeleton={fileSkeleton}></TableWrapper>
      </section>
    </div>
  );
}

export default Dashboard;
