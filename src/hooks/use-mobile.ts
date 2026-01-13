import * as React from "react" // imported for useEffect and useState

const MOBILE_BREAKPOINT = 768 // defining mobile breakpoint at 768px

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined) // Creates a state variable to track if the device is mobile. is undefined initially because we don't know the screen size yet.

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`) // creates a media query list to monitor screen width changes.
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT) // window.innerWidth is used for more accuracy
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
