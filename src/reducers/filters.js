export function exclude(entity) {
  return ({ id }) => id !== entity.id
}
