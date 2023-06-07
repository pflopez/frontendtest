import { type Square } from '@/types/square';

export interface Activity {
  id: number;
  square: Square;
  on: boolean;
}
