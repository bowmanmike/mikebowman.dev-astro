import { getCollection } from 'astro:content';

/**
 * Sort direction for blog posts
 */
export enum SortDirection {
  NEWEST_FIRST = 'newest_first',
  OLDEST_FIRST = 'oldest_first'
}

/**
 * Gets all blog posts, filtered by published status and sorted by date
 * @param direction - Sort direction (newest first by default)
 */
export async function getSortedPosts(direction: SortDirection = SortDirection.NEWEST_FIRST) {
  const posts = await getCollection('blog');
  
  const filteredPosts = posts.filter((post) => post.data.published);
  
  if (direction === SortDirection.NEWEST_FIRST) {
    return filteredPosts.toSorted((x, y) => y.data.date.getTime() - x.data.date.getTime());
  } else {
    return filteredPosts.toSorted((x, y) => x.data.date.getTime() - y.data.date.getTime());
  }
}

/**
 * Gets all blog posts, filtered by published status and sorted by date (oldest first)
 * @deprecated Use getSortedPosts(SortDirection.OLDEST_FIRST) instead
 */
export async function getSortedPostsChronological() {
  return getSortedPosts(SortDirection.OLDEST_FIRST);
}
