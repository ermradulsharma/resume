import { useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useBlogPagination = (posts = [], postsPerPage = 16) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedCategory = searchParams.get("category") || "All";
    const currentPage = parseInt(searchParams.get("page") || "1", 10);
    const [viewMode, setViewMode] = useState("grid");
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const updateParams = useCallback((newParams) => {
        setSearchParams({ category: selectedCategory, page: currentPage, ...newParams });
        window.scrollTo(0, 0);
    }, [selectedCategory, currentPage, setSearchParams]);

    const filteredPosts = useMemo(() => {
        const filtered = selectedCategory === "All" 
            ? posts.filter(post => post.published) 
            : posts.filter(post => post.published && post.category === selectedCategory);
        return filtered.sort((a, b) => b.id - a.id);
    }, [posts, selectedCategory]);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    return {
        selectedCategory,
        currentPage,
        viewMode,
        setViewMode,
        isLoadingMore,
        setIsLoadingMore,
        updateParams,
        currentPosts,
        totalPages
    };
};
