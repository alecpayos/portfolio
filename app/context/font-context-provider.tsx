import { createContext, type ReactNode } from "react"
import "@fontsource/inika/400.css"

const inika = { className: "font-inika" }
const FontContext = createContext(inika)

export const FontContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <FontContext.Provider value={inika}>{children}</FontContext.Provider>
  )
}

export default FontContext
