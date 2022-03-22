import { useContext } from 'react';

import { ToastContext } from '@contexts/Toast';

export function useToast() {
  return useContext(ToastContext);
}
