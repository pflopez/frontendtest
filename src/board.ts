import { type Square } from '@/types/square';

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

export const boardSquares: Square[] = ranks.reduce((acc, rank) => {
  const newLine: Square[] = files.map((file) => ({ rank, file, key: file + rank }));
  return [...acc, ...newLine];
}, [] as Square[]);
