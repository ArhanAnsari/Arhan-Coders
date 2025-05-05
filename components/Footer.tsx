import Link from 'next/link';
import { FaGithub, FaYoutube, FaDiscord, FaGlobe, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-muted text-sm py-6 px-4 text-center border-t border-border">
            <p className="text-muted-foreground">
                © {new Date().getFullYear()} Arhan Coders. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center gap-6">
                <Link
                    href="https://github.com/ArhanAnsari"
                    target="_blank"
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-primary transition"
                >
                    <FaGithub size={20} />
                </Link>
                <Link
                    href="https://x.com/codewitharhan"
                    target="_blank"
                    aria-label="Twitter"
                    className="text-muted-foreground hover:text-primary transition"
                >
                    <FaXTwitter size={20} />
                </Link>
                <Link
                    href="https://www.youtube.com/@codewitharhanofficial"
                    target="_blank"
                    aria-label="YouTube"
                    className="text-muted-foreground hover:text-primary transition"
                >
                    <FaYoutube size={20} />
                </Link>
                <Link
                    href="https://discord.com/invite/bwjCXVwS8k"
                    target="_blank"
                    aria-label="Discord"
                    className="text-muted-foreground hover:text-primary transition"
                >
                    <FaDiscord size={20} />
                </Link>
                <Link
                    href="https://arhanansari.vercel.app"
                    target="_blank"
                    aria-label="Portfolio"
                    className="text-muted-foreground hover:text-primary transition"
                >
                    <FaGlobe size={20} />
                </Link>
                <Link
                    href="https://codewitharhan.infinityfreeapp.com/"
                    target="_blank"
                    aria-label="CodeWithArhan"
                    className="text-muted-foreground hover:text-primary transition"
                >
                    <FaGlobe size={20} />
                </Link>
            </div>
        </footer>
    );
}
