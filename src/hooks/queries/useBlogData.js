import { useQuery } from '@tanstack/react-query';
import { getBlogPosts, getBlogPostBySlug } from '../../api/blogApi';

export const useBlogPosts = () => {
    return useQuery({
        queryKey: ['blogs', 'posts'],
        queryFn: getBlogPosts,
        staleTime: 5 * 60 * 1000,
    });
};

export const useBlogPost = (slug) => {
    return useQuery({
        queryKey: ['blogs', 'post', slug],
        queryFn: () => getBlogPostBySlug(slug),
        enabled: !!slug,
        staleTime: 5 * 60 * 1000,
    });
};
