import PocketBase from 'pocketbase';

export function createPocketBase() {
  return new PocketBase('http://0.0.0.0:8090');
}
