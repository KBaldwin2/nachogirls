"use client";

import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { CompanyLogo } from "../ui/media/company-logo";
import Link from "next/link";
import { cn } from "../ui/utils/cn";

const navigation = [
  { name: "Launching Soon", href: "/coming-soon" },

  { name: "Contact", href: "/contact" },
  { name: "How It Works", href: "/" },
];

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Disclosure as="nav" className="shadow-sm flex-none">
        {({ open }) => (
          <>
            <div className="px-2 lg:py-10 sm:px-6 lg:px-10 py-2 sm:py-4">
              <div className="flex items-center justify-between h-12 sm:h-20">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CompanyLogo />
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        item.href === pathname
                          ? "underline text-primary font-bold"
                          : "text-primary hover:underline hover:text-primary",
                        "rounded-md px-2 py-1 text-sm sm:px-3 sm:py-2 md:text-2xl"
                      )}
                      aria-current={item.href === pathname ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <main className="flex grow">
        <div className="grow">{children}</div>
      </main>
    </div>
  );
}
