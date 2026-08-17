import React from "react";
import { BsGrid3X3Gap, BsList } from "react-icons/bs";
import BrandButton from "../../../components/ui/BrandButton";

const BlogFilterHeader = ({ categories, selectedCategory, handleCategoryChange, viewMode, setViewMode }) => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-4 p-3 rounded-4" style={{ backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)' }}>
            <div className="d-flex flex-wrap align-items-center gap-2">
                <span className="fw-bold me-2 text-secondary small text-uppercase" style={{ letterSpacing: '1px' }}>Filter by:</span>
                <BrandButton variant={selectedCategory === "All" ? "brand" : "brand-outline"} size="sm" onClick={() => handleCategoryChange("All")}>All Posts</BrandButton>
                {categories.map((category) => (
                    <BrandButton key={category} variant={selectedCategory === category ? "brand" : "brand-outline"} size="sm" onClick={() => handleCategoryChange(category)}>{category}</BrandButton>
                ))}
            </div>

            <div className="d-flex align-items-center gap-2 border-start ps-md-3">
                <span className="fw-bold me-2 text-secondary small text-uppercase" style={{ letterSpacing: '1px' }}>View:</span>
                <div className="btn-group" role="group" aria-label="Blog layout view switcher">
                    <BrandButton variant={viewMode === "grid" ? "brand" : "brand-outline"} size="sm" onClick={() => setViewMode("grid")} aria-label="Grid View"><BsGrid3X3Gap /></BrandButton>
                    <BrandButton variant={viewMode === "list" ? "brand" : "brand-outline"} size="sm" onClick={() => setViewMode("list")} aria-label="List View"><BsList /></BrandButton>
                </div>
            </div>
        </div>
    );
};

export default BlogFilterHeader;
