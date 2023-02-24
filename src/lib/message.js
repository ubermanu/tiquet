import { writable } from 'svelte/store';

const messages = writable([]);

/**
 * Add a message to the message store
 * @param message
 */
export const addMessage = (message) => {
  messages.update((messages) => {
    return [...messages, message];
  });
};

/**
 * Clear all messages from the message store
 */
export const clearMessages = () => {
  messages.set([]);
};

/**
 * Add a success message to the message store
 * @param message
 */
export const addSuccessMessage = (message) => {
  addMessage({ type: 'success', message, timestamp: Date.now(), seen: false });
};

/**
 * Add an error message to the message store
 * @param message
 */
export const addErrorMessage = (message) => {
  addMessage({ type: 'error', message, timestamp: Date.now(), seen: false });
};

export default messages;
