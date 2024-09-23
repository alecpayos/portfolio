'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const renderNavButtons = (path: string) => {
  const navigations = [
    "area-51",
    "hobbies",
    "home",
    "projects",
    "tech",
  ];

  return navigations.map(nav => {
    const capitalized = nav[0].toUpperCase() + nav.slice(1, nav.length);
    const href = nav == 'home' ? '/' : `/${nav}`;
    const highlight = href == path ? 'text-yellow-500' : '';

    return <Link 
      key={nav}
      href={href}
      className={`header-button ${highlight}`} 
    >{capitalized}</Link>;
  });
};

export default function Header() {
  const path = usePathname();

  return (
    <div className={`
      fixed
      w-full
      h-28
      flex
      flex-wrap
      z-20
      justify-center
      items-center
      screen-primary
      shadow-md
      shadow-zinc-950

      sm:h-20
    `}>
      {renderNavButtons(path)}
    </div>
  );
}