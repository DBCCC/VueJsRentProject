import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    sidebarStatus: false
  }),
  actions: {
    toggleSidebar() {
      this.sidebarStatus = !this.sidebarStatus
    },
    openSidebar() {
      this.sidebarStatus = true
    },
    closeSidebar() {
      this.sidebarStatus = false
    }
  }
})
