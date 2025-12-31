import {ReactElement} from "react";

export type RetroWindow = {
    id: string,
    title: string,
    icon: string,
    content: ReactElement,
    maximized?: boolean
}

export const openWindow = (
    window: RetroWindow,
    windows: RetroWindow[],
    setWindows: (windows: RetroWindow[]) => void,
    setActiveWindowId: (windowId: string) => void) => {

    const copyOfWindows = [...windows]
    const maybeFoundWindow = copyOfWindows.find(w => w.id === window.id)

    if (!maybeFoundWindow) {
        copyOfWindows.push(window)
        setWindows(copyOfWindows)
    }

    setActiveWindowId(window.id)
}

export const getActiveWindow = (windows: RetroWindow[], activeWindowId: string | null) => {
    if (!activeWindowId) return null
    return windows.find(w => w.id === activeWindowId)
}

export const closeWindow = (
    windowId: string | null,
    windows: RetroWindow[],
    setWindows: (windows: RetroWindow[]) => void,
    setActiveWindowId: (windowId: string | null) => void) => {
    if (!windowId) return

    const copyOfWindows = [...windows]
    const index = copyOfWindows.findIndex(w => w.id === windowId)
    copyOfWindows.splice(index, 1)
    setWindows(copyOfWindows)

    setActiveWindowId(null)
}

export const maximizeWindow = (windowId: string | null, windows: RetroWindow[], setWindows: (windows: RetroWindow[]) => void) => {
    if (!windowId) return

    const copyOfWindows = [...windows]
    copyOfWindows.forEach(w => {
        if (w.id === windowId) {
            w.maximized = !w.maximized
        }
    })
    setWindows(copyOfWindows)
}


