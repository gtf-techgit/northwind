import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8">
      <button
        type="button"
        className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-[16px] tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/20 font-heading"
      >
        Menu
      </button>

      <Link href="/" className="flex flex-col items-center">
      <Logo variant="white" />
      </Link>

      <button
        type="button"
        className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-[16px] tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/20 font-heading"
      >
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
