import { getCollection } from 'astro:content';

/**
 * Gets all blog posts, filtered by published status and sorted by date (newest first)
 */
export async function getSortedPosts() {
  const posts = await getCollection('blog');
  
  return posts
    .filter((post) => post.data.published)
    .toSorted((x, y) => y.data.date.getTime() - x.data.date.getTime());
}

/**
 * Gets all blog posts, filtered by published status and sorted by date (oldest first)
 */
export async function getSortedPostsChronological() {
  const posts = await getSortedPosts();
  return [...posts].reverse();
}
