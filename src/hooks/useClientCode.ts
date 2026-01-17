import { useParams } from 'react-router';

import { useAppStore } from '@/stores/useAppStore';
import { getClientCodeFromHost } from '@/utils/env';

export function useClientCode() {
  const { clientCode } = useAppStore();
  const params = useParams();
  return params.clientCode ?? clientCode ?? getClientCodeFromHost();
}
