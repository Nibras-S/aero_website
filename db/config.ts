import { defineDb, defineTable, column, NOW } from 'astro:db';

export const Inquiries = defineTable({
  columns: {
    id: column.number({ primaryKey: true }), // Auto-increment by default
    name: column.text(),
    email: column.text(),
    phone: column.text({ optional: true }),
    serviceArea: column.text({ optional: true }),
    message: column.text(),
    status: column.text({ default: 'New' }), // 'New', 'In Progress', 'Closed'
    createdAt: column.date({ default: NOW }),
  }
});

export const BlogPosts = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // slug string representation
    title: column.text(),
    excerpt: column.text(),
    featuredImage: column.text(),
    author: column.text(),
    category: column.text(),
    featured: column.boolean({ default: false }),
    body: column.text(),
    createdAt: column.date({ default: NOW }),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Inquiries,
    BlogPosts
  }
});
