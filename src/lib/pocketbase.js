import PocketBase from 'pocketbase';

export function createPocketBase() {
  return new PocketBase('http://0.0.0.0:8090');
}

export function getImageUrl(collectionId, recordId, filename, size = '0x0') {
  return `http://0.0.0.0:8090/api/files/${collectionId}/${recordId}/${filename}?thumb=${size}`;
}

export function getUserAvatarUrl(user, size = '0x0') {
  return user.avatar
    ? getImageUrl('users', user.id, user.avatar, size)
    : `https://ui-avatars.com/api/?name=${user.email}&size=${size}`;
}
