import { getCollection } from "astro:content";
import { db, BlogPosts } from 'astro:db';

export async function GET({ request }: { request: Request }) {
  const cookieHeader = request.headers.get('cookie') || '';
  if (!cookieHeader.includes('flyger_admin_auth=')) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const posts = await getCollection('blog');
    
    for (const post of posts) {
      try {
        await db.insert(BlogPosts).values({
          id: post.id,
          title: post.data.title,
          excerpt: post.data.excerpt,
          featuredImage: post.data.featuredImage || '/images/default-blog.jpg',
          author: post.data.author || 'Flyger Editorial Team',
          category: post.data.category || 'Company Updates',
          featured: post.data.featured || false,
          body: post.body,
          createdAt: post.data.date
        });
      } catch (e) {
        // likely already exists
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Migrated ${posts.length} posts into Astro DB.` 
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: String(error) }), { status: 500 });
  }
}
