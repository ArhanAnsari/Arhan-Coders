import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted text-sm py-6 px-4 text-center border-t border-border">
      <p>© {new Date().getFullYear()} Arhan Coders. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4 text-muted-foreground">
        <Link href="https://x.com/codewitharhan" target="_blank">X</Link>
        <Link href="https://github.com/ArhanAnsari" target="_blank">GitHub</Link>
        <Link href="https://arhanansari.vercel.app" target="_blank">Portfolio</Link>
      </div>
    </footer>
  );
}
