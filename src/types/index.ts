import { Database } from '@/database.types';

export type Bookmarks = {
  id: string;
  title: string;
  url: string;
  description: string;
  folderId: string;
  userId: string;
  clicks: number;
};
