import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export let navShow=false

export const navRef={current:null} 

export const onToggleNav = () => {
    if (navShow) {
        enableBodyScroll(navRef.current)
    } else {
        disableBodyScroll(navRef.current)
    }
    navShow=!navShow
}

export let activeTab:string=""

export function setActiveTab(tab:string) {
    activeTab=tab
}

export let openDrawer=false

export function setOpenDrawer(st) {
    openDrawer = st
}
