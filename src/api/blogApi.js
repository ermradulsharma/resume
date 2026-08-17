import { fetchMockData } from './mockClient';
import blogData from '../data/blogs.json';

const getPostsFromData = (data) => {
    const posts = data?.blogs?.posts;

    if (!Array.isArray(posts)) {
        throw new TypeError('Invalid blog data: expected blogs.posts to be an array');
    }

    return posts;
};

export const getBlogPosts = async () => {
    const data = await fetchMockData(blogData);
    return getPostsFromData(data);
};

export const getBlogPostBySlug = async (slug) => {
    const data = await fetchMockData(blogData);
    const post = getPostsFromData(data).find(candidate => candidate.slug === slug);

    if (!post) {
        throw new Error(`Blog post not found: ${slug}`);
    }

    return post;
};
