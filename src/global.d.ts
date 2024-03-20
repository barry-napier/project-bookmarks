import type { Database as DB } from '@/database.types';

declare global {
  type Database = DB;
  type Bookmark = DB['public']['Tables']['bookmarks']['Row'];
  type Folder = DB['public']['Tables']['folders']['Row'];
}
