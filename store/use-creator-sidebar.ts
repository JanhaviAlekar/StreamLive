import {create } from "zustand"

interface creatorSidebarStore {
    isCollapse : boolean,
    onExpand : () => void,
    onCollapse : () => void
};
export const useCreatorSidebarStore = create<creatorSidebarStore>((set) => ({
    isCollapse :false,
    onExpand: () => set(() => ({isCollapse : false })),
    onCollapse: () => set(() => ({isCollapse : true }))

}));