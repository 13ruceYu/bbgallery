import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default function TopNav() {
  return (
    <nav className="font-semibold text-xl flex items-center justify-between flex-wrap p-6 border-b">
      <div>gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}