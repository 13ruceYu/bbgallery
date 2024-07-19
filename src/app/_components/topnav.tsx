'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { UploadButton } from '~/utils/uploadthing';


export default function TopNav() {
  const route = useRouter();
  return (
    <nav className="font-semibold text-xl flex items-center justify-between flex-wrap p-6 border-b">
      <div>gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className='flex items-center gap-2'>
            <UploadButton endpoint='imageUploader' onClientUploadComplete={() => route.refresh()}></UploadButton>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}