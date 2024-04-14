import {create } from "zustand"

interface sidebarStore {
    isCollapse : boolean,
    onExpand : () => void,
    onCollapse : () => void
};
export const useSidebarStore = create<sidebarStore>((set) => ({
    isCollapse :false,
    onExpand: () => set(() => ({isCollapse : false })),
    onCollapse: () => set(() => ({isCollapse : true }))

}));