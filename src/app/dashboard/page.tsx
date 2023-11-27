/* eslint-disable react/function-component-definition */
import { auth } from '@clerk/nextjs';
import Dropzone from '@/c/Dropzone'

export default function Dashboard() {
  const { userId } = auth();

  return (
    <div className='items-center justify-center'>
      <Dropzone />
    </div>
  )
}
