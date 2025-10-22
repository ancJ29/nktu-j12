export function isNewMessage(type: 'PO' | 'DR', targetId: string, lastMessageAt?: Date) {
  if (!lastMessageAt) {
    return false;
  }
  const key = `${type === 'PO' ? 'purchase-order' : 'delivery-request'}-${targetId}-last-accessed`;
  const lastAccessed = Number(localStorage.getItem(key));
  if (Number.isNaN(lastAccessed)) {
    localStorage.removeItem(key);
    return false;
  }
  return lastMessageAt.getTime() > lastAccessed;
}

export function logLastAccessed(type: 'PO' | 'DR', targetId: string, messages: unknown[]) {
  const key = `${type === 'PO' ? 'purchase-order' : 'delivery-request'}-${targetId}-last-accessed`;
  if (messages.length > 0) {
    // delay 5 seconds to make sure that server has updated the last message at
    const timestamp = Date.now() + 5e3;
    localStorage.setItem(key, timestamp.toString());
  } else {
    localStorage.removeItem(key);
  }
}
