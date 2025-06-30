import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Nav, Badge, Collapse } from "react-bootstrap";
import menuData from "../../database/menuData.json";

const Sidebar = () => {
    const location = useLocation();
    const [now, setNow] = useState(new Date());
    const [openMenu, setOpenMenu] = useState({});
    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);
    const toggleMenu = (key) => { setOpenMenu((prev) => ({ ...prev, [key]: !prev[key], })); };
    const formatted = now.toLocaleString("en-US", {
        weekday: "short",    // Mon
        month: "short",      // Jun
        day: "2-digit",      // 30
        year: "numeric",     // 2025
        hour: "2-digit",     // 06
        minute: "2-digit",   // 38
        hour12: true         // AM
    }).replace(",", "");
    return (
        <aside className="vh-100 d-flex flex-column border-end" style={{ width: "17%"}}>
            <div className="d-flex align-items-center p-3 justify-content-center border-bottom flex-column">
                <Link to="/dashboard" className="d-flex align-items-center text-decoration-none justify-content-center">
                    <svg width="220" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6366F1" />
                                <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                        </defs>
                        <text x="0" y="24" fontFamily="Inter, sans-serif" fontSize="23" fontWeight="800" fill="url(#textGradient)">Mradul Sharma</text>
                        <text x="10" y="45" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B7280">Senior Full-Stack Developer</text>
                    </svg>
                </Link>
            </div>
            <div className="overflow-y-auto">
                <div className="text-white fw-semibold py-3 text-center border-bottom" style={{ fontSize: "12px" }}>{formatted}</div>
                <Nav className="flex-column px-3">
                {menuData.map((section, idx) => (
                    <React.Fragment key={idx}>
                        {section.header && (<div className="text-uppercase small text-muted fw-semibold mt-3 mb-2">{section.header} </div>)}
                        {section.items.map((item, i) => (<SidebarItem key={`${item.text}-${i}`} item={item} isOpen={openMenu[item.text]} toggle={() => toggleMenu(item.text)} currentPath={location.pathname}/>))}
                    </React.Fragment>
                ))}
                </Nav>
            </div>
        </aside>
    );
};

const SidebarItem = ({ item, isOpen, toggle, currentPath }) => {
    const isActive = currentPath === item.link;
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    if (hasSubmenu) {
        const isSubmenuActive = item.submenu.some((sub) => currentPath === sub.link);
        return (
        <>
            <div className={`d-flex align-items-center justify-content-between px-2 py-2 nav-link ${isSubmenuActive ? "active" : ""}`} onClick={toggle} style={{ cursor: "pointer" }}>
                <div className="d-flex align-items-center">
                    <i className={`me-2 bi ${item.icon}`} />
                    <span>{item.text}</span>
                </div>
                {!item.available && (<Badge bg="primary" pill className="ms-auto me-2">Pro</Badge>)}
                <i className={`bi ms-2 ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`} />
            </div>
            <Collapse in={isOpen}>
            <div className="ps-4">
                <Nav className="flex-column">
                    {item.submenu.map((subitem, index) => (<Nav.Link key={index} as={Link} to={subitem.link} className={`py-1 ${currentPath === subitem.link ? "active" : ""}`}>{subitem.text}</Nav.Link>))}
                </Nav>
            </div>
            </Collapse>
        </>
    );
}

  return (
    <Nav.Item>
      <Nav.Link
        as={Link}
        to={item.link}
        target={item.link.startsWith("http") ? "_blank" : undefined}
        className={`d-flex align-items-center ${isActive ? "active" : ""}`}
      >
        <i className={`me-2 bi ${item.icon}`} />
        <span>{item.text}</span>
        {!item.available && (
          <Badge bg="primary" pill className="ms-auto">
            Pro
          </Badge>
        )}
      </Nav.Link>
    </Nav.Item>
  );
};

export default Sidebar;
