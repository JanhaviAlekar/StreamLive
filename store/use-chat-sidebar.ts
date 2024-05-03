import {create } from "zustand"

export enum ChatVariant {
    CHAT="CHAT",
    COMMUNITY="COMMUNITY"
}

interface ChatSidebarStore {
    isCollapse : boolean,
    variant : ChatVariant,
    onExpand : () => void,
    onCollapse : () => void,
    onChangeVariant : (variant :ChatVariant) => void
};
export const useChatSidebarStore = create<ChatSidebarStore>((set) => ({
    isCollapse :false,
    variant : ChatVariant.CHAT,
    onExpand: () => set(() => ({isCollapse : false })),
    onCollapse: () => set(() => ({isCollapse : true })),
    onChangeVariant : (variant :ChatVariant) => set(() => ({variant}))
}));