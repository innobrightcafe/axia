'use client';

import {
  UserGroupIcon,
  CurrencyDollarIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BanknotesIcon,
  BriefcaseIcon,
  ClipboardDocumentIcon,
  UserPlusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation. Each link has a name, href, and icon.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Account', href: '/dashboard/account', icon: CurrencyDollarIcon },
  {
    name: 'Deposit/ Withdraw',
    href: '/dashboard/depositWithdrawal',
    icon: BanknotesIcon,
  },
  {
    name: 'Investment Packages',
    href: '/dashboard/packages',
    icon: BriefcaseIcon,
  },
  {
    name: 'Transaction History',
    href: '/dashboard/transactionHistory',
    icon: ClipboardDocumentIcon,
  },
  { name: 'Referer', href: '/dashboard/referer', icon: UserPlusIcon },
  { name: 'Support', href: '/dashboard/support', icon: QuestionMarkCircleIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#343A40] hover:text-[#FF4300] md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-[#FF4308] text-gray-100': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
