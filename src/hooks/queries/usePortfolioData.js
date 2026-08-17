import { useQuery } from '@tanstack/react-query';
import { getPortfolioProjects, getPortfolioProjectBySlug } from '../../api/portfolioApi';

export const usePortfolioProjects = () => {
    return useQuery({
        queryKey: ['portfolio', 'projects'],
        queryFn: getPortfolioProjects,
        staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    });
};

export const usePortfolioProject = (slug) => {
    return useQuery({
        queryKey: ['portfolio', 'project', slug],
        queryFn: () => getPortfolioProjectBySlug(slug),
        enabled: !!slug,
        staleTime: 5 * 60 * 1000,
    });
};
