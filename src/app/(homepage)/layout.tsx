"use client";
import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { CompanyLogo } from "../../ui/media/company-logo";
import Link from "next/link";
import { cn } from "../../ui/utils/cn";
import { routes } from "../routes";
import { X as XIcon, Menu as MenuIcon } from "lucide-react";

const navigation = [
  { name: "How It Works", href: routes.home() },
  { name: "Who Is Penny?", href: routes.whoIsPenny() },
  { name: "Contact Us", href: routes.contact() },
];

export default function HomeLayout({ children }: { children: React.ReactNode }) {
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
                    <Link href={routes.home()}>
                      <CompanyLogo />
                    </Link>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        item.href === pathname
                          ? "underline text-primary font-bold"
                          : "text-primary hover:underline hover:text-primary",
                        "rounded-md px-2 py-1 text-sm sm:px-3 sm:py-2 md:text-lg lg:text-2xl"
                      )}
                      aria-current={item.href === pathname ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="mx-2 text-text-900 relative inline-flex items-center justify-center rounded-md bg-primary p-2 hover:bg-primary hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={cn(
                      item.href === pathname
                        ? "bg-primary bg-opacity-25 text-white"
                        : "text-primary hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium text-xs"
                    )}
                    aria-current={item.href === pathname ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>

            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <main className="flex grow">
        <div className="grow">{children}</div>
      </main>
    </div>
  );
}
