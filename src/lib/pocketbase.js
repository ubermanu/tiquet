import PocketBase from 'pocketbase';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

export function createPocketBase() {
  return new PocketBase(PUBLIC_POCKETBASE_URL);
}

export function getImageUrl(collectionId, recordId, filename, size = '0x0') {
  return `${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${filename}?thumb=${size}`;
}

export function getUserAvatarUrl(user, size = '0x0') {
  return user.avatar
    ? getImageUrl('users', user.id, user.avatar, size)
    : `https://ui-avatars.com/api/?name=${user.email}&size=${size}`;
}
