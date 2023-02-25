/**
 * @returns {string}
 */
export const generateUsername = () => {
  const random =
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return `user_${random}`;
};
