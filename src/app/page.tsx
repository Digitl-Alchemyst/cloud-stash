/* eslint-disable react/function-component-definition */
import Image from 'next/image';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { IoMdArrowForward } from 'react-icons/io';

export default function Home() {
  return (
    <main className=''>
      <div className='flex flex-col items-center bg-cslight-600 p-8 dark:bg-csdark-500 xl:flex-row'>
        <div className='flex w-3/5 flex-col space-y-8 px-4'>
          <h1 className='text-6xl font-bold'>
            Your Complete Business Toolbox for Seamless Collaboration and
            Efficiency
          </h1>
          <p className='text-lg'>
            With Cloud Stash Pro, you can securely store your content,
            effortlessly edit PDFs, share videos, sign documents, and keep a
            close eye on file engagement—all within the intuitive confines of
            Cloud Stash. Say goodbye to juggling multiple tools; Cloud Stash Pro
            is your all-in-one solution for streamlined, efficient work. Embrace
            the future of business productivity—try Cloud Stash Pro today.
          </p>
          <div className='flex space-x-4'>
            <Link href='/dashboard'>
              <Button className='py-4'>
                Try it for free <IoMdArrowForward />
              </Button>
            </Link>
            <Link href='/dashboard'>
              <Button>
                Purchase full plan <IoMdArrowForward />
              </Button>
            </Link>
          </div>
        </div>

        <div className='h-full rounded-md bg-cslight-900 p-10 dark:bg-csdark-900'>
          <video autoPlay loop muted className='rounded-lg'>
            <source
              src='https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4'
              type='video/mp4'
            />
            If you are seeing this message your browser does not support the
            video HTML tag.
          </video>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-y-5 bg-cslight-700 p-8 dark:bg-csdark-600'>
        <h2 className='text-2xl font-bold'>
          All of the document management tools you need in one custom plan.
        </h2>
        <p className='text-lg text-csdark-700 dark:text-cslight-700'>
          Stash and share files. Sign and colaborate on documents. Encrypt,
          sign, and verify with cryptographic signatures. All in one
          application, on desktop or mobile.
        </p>
        <button className='flex items-center gap-x-2 underline'>
          View Custom Plans <IoMdArrowForward />
        </button>
      </div>

      <div className='flex flex-col items-center justify-center gap-y-16 px-10 py-12'>
        <h1 className='text-4xl font-bold'>
          Cloud Stash can support your every need, from personal to enterprise
          solutions
        </h1>
        <div className='flex flex-col items-center justify-evenly space-x-26 space-y-16 2xl:flex-row'>
          <div className='flex w-66 flex-col items-center justify-center space-y-6'>
            <Image
              src='/ProtectFilesLight.png'
              alt='clip art image'
              width={150}
              height={150}
            />
            <h6 className='text-xl font-semibold'>
              Store and protect your files
            </h6>
            <p className='text-csdark-700 dark:text-cslight-700'>
              Starting at 3 TB of team storage and backup, with security
              features like file recovery, password protection, watermarking,
              and viewer history.
            </p>
          </div>
          <div className='flex w-66 flex-col items-center justify-center space-y-6'>
            <Image
              src='/SharedContentLight.png'
              alt='clip art image'
              width={150}
              height={150}
            />
            <h6 className='text-xl font-semibold'>Share your content</h6>
            <p className='text-csdark-700 dark:text-cslight-700'>
              Forget email attachments. With Dropbox, you can deliver large
              files and share trackable links with real-time document analytics
              to help make data-driven decisions.
            </p>
          </div>
          <div className='flex w-66 flex-col items-center justify-center space-y-6'>
            <Image
              src='/CollaborateLight.png'
              alt='clip art image'
              width={150}
              height={150}
            />
            <h6 className='text-xl font-semibold'>Collaborate on your work</h6>
            <p className='text-csdark-700 dark:text-cslight-700'>
              Reduce meetings with Capture and use Replay to streamline feedback
              and approval processes on video projects.
            </p>
          </div>
          <div className='flex w-66 flex-col items-center justify-center space-y-6'>
            <Image
              src='/ManageBusinessLight.png'
              alt='clip art image'
              width={150}
              height={150}
            />
            <h6 className='text-xl font-semibold'>Manage your business</h6>
            <p className='text-csdark-700 dark:text-cslight-700'>
              Make it easy to prepare, send, and eSign your most important
              contracts. Automate manual processes with tools like eSignature
              templates, which let you reuse documents in seconds.
            </p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center space-x-6 bg-cslight-700 p-8 dark:bg-csdark-600'>
        <h1 className='text-6xl font-bold'>
          Get organized. Get Secure. Get Cloud Stash.
        </h1>
        <Button>
          Start a free trial <IoMdArrowForward />
        </Button>
      </div>
    </main>
  );
}
