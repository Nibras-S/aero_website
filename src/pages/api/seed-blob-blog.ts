import { db, BlogPosts } from 'astro:db';
import { list } from '@vercel/blob';

export async function GET() {
  try {
    const { blobs } = await list({
      token: import.meta.env.BLOB_READ_WRITE_TOKEN,
    });

    if (blobs.length === 0) {
      return new Response(
        'No images found in Vercel Blob. Upload one first via /admin/media.',
        { status: 400 }
      );
    }

    const image = blobs[0];

    const post = {
      id: 'sample-blob-post',
      title: 'Sample Post Using Vercel Blob Media',
      excerpt:
        'A demonstration blog post that pulls its featured image directly from Vercel Blob Storage, showing the end-to-end media pipeline in action.',
      featuredImage: image.url,
      author: 'Flyger Editorial Team',
      category: 'Company Updates',
      featured: false,
      body: `### End-to-End Media Pipeline

This post is a live demonstration of the Flyger CRM media pipeline. The featured image above is not bundled with the site — it was uploaded through the admin Media Library and now lives on Vercel Blob Storage.

### Why it matters

Hosting images on Vercel Blob instead of the repo means:

- **Faster deploys** — no large binary files committed to git
- **Global CDN** — images are served from the edge, close to every visitor
- **Elastic storage** — upload as many images as you need without bloating the build

### How the flow works

1. An admin uploads an image via **/admin/media**
2. The file streams through **/api/upload** and lands in Vercel Blob
3. The returned public URL is stored in the blog post's \`featuredImage\` field
4. Every visitor gets the image straight from Vercel's CDN — zero server round-trip

> This is the same image reference every reader will see. If you delete it from the Media Library, the post will lose its hero image.

Welcome to the unified Flyger content pipeline.`,
      createdAt: new Date(),
    };

    try {
      await db.insert(BlogPosts).values(post);
    } catch (e) {
      return new Response(
        `Sample post already exists. Delete 'sample-blob-post' from /admin/blog first, then re-run this endpoint. Image URL used: ${image.url}`,
        { status: 409 }
      );
    }

    return new Response(
      `Sample blog post created successfully!\n\nUsed image: ${image.url}\nPost URL: /blog/sample-blob-post`,
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Seed blob blog failed:', error);
    return new Response(error.message || 'Failed to seed sample blog post.', {
      status: 500,
    });
  }
}
