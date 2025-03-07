"use client";

import Link from "next/link";
import LogoSvg from "@/components/navigation/logo1";

import {
  // Square,
  Instagram,
  Dribbble,
  Twitter,
  DribbbleIcon as Behance,
  Package,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 py-12 md:px-6 lg:px-8 ">
      <div className="container  mx-auto max-w-7xl space-y-8 md:space-y-0 flex justify-between">
        {/* Top section with logo and description */}
        <div className="">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <LogoSvg></LogoSvg>
            </div>
            <div className="max-w-md space-y-2">
              <p className="text-lg">
                High-quality interface assets for designers and startup
                creatives
              </p>
              <p className="text-sm text-muted-foreground">Oikre Design</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Dribbble className="h-5 w-5" />
              <span className="sr-only">Dribbble</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Behance className="h-5 w-5" />
              <span className="sr-only">Behance</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              <span className="sr-only">Producthunt</span>
            </Link>
          </div>
        </div>

        {/* Footer links grid */}
        {/* Products Column */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Products</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="#"
                className="text-sm text-yellow-500 hover:underline"
              >
                All Access
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Bestsellers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Illustrations
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                UX/UI Kits
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Graphics
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Freebies
              </Link>
            </li>
          </ul>
        </div>

        {/* Craftwork Column */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Craftwork</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-sm hover:underline">
                Order illustrations
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Contact is
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                News
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Info Column */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Info</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-sm hover:underline">
                License
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Refund
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
