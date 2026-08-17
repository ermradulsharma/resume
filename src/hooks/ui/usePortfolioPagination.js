import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePortfolioPagination = (projectsList = [], projectsPerPage = 8) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") || "All";
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    const updateParams = useCallback((newParams) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            Object.entries(newParams).forEach(([key, value]) => {
                params.set(key, value);
            });
            return params;
        });
        window.scrollTo(0, 0);
    }, [setSearchParams]);

    const filteredProjects = useMemo(() => {
        return projectsList.filter((p) =>
            filter === "All" ? true : p.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()))
        );
    }, [projectsList, filter]);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

    return {
        filter,
        currentPage,
        updateParams,
        totalPages,
        currentProjects
    };
};
