import { useState, useMemo } from 'react';

export const useProjectFilter = (projects = []) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProjects = useMemo(() => {
        if (!searchTerm) return projects;
        
        const search = searchTerm.toLowerCase();
        return projects.filter(project =>
            project.title.toLowerCase().includes(search) ||
            project.technologies.some(tech => tech.toLowerCase().includes(search)) ||
            project.category.toLowerCase().includes(search)
        );
    }, [searchTerm, projects]);

    return {
        searchTerm,
        setSearchTerm,
        filteredProjects,
    };
};
