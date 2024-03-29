import PocketBase from 'pocketbase'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      pb: PocketBase
      user: ?User
    }
    interface PageData {
      user: ?User
    }
    // interface Platform {}
  }
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
}
