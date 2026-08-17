import { fetchMockData } from './mockClient';
import portfolioData from '../data/portfolio.json';

export const getPortfolioProjects = async () => {
    const data = await fetchMockData(portfolioData);
    return data.projects.projectsList;
};

export const getPortfolioProjectBySlug = async (slug) => {
    const data = await fetchMockData(portfolioData);
    const projects = data.projects.projectsList;
    const project = projects.find(p => p.slug === slug);
    if (!project) throw new Error("Project not found");
    return project;
};
