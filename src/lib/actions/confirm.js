export default function confirmAction(node, message) {
  function handler(event) {
    if (!confirm(message)) {
      event.preventDefault();
    }
  }

  node.addEventListener('click', handler);

  return {
    destroy() {
      node.removeEventListener('click', handler);
    }
  };
}
