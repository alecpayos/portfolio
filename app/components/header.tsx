import { Link, useLocation } from "react-router"

const renderNavButtons = (path: string) => {
  const navigations = ["Home", "Projects", "Tech Skills", "Hobbies"]

  return navigations.map((nav) => {
    const slug = nav.toLowerCase().replace(" ", "-")
    const href = nav == "Home" ? "/" : `/${slug}`
    const highlight = href == path ? "text-yellow-500" : ""

    return (
      <Link key={nav} to={href} className={`header-button ${highlight}`}>
        {nav}
      </Link>
    )
  })
}

export default function Header() {
  const { pathname } = useLocation()

  return (
    <div
      className={`
      fixed
      z-20
      flex
      h-28
      w-full
      flex-wrap
      items-center
      justify-center
      shadow-md
      shadow-zinc-950
      screen-primary

      sm:h-20
    `}
    >
      {renderNavButtons(pathname)}
    </div>
  )
}
