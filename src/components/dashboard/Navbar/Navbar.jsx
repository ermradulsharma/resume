import getGreetingMessage from "../../../utils/greetingHandler";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Image,
  Badge,
  Button,
} from "react-bootstrap";

const DashboardNavbar = () => {
  const userName = "John Doe";
  const role = "Admin";
  return (
    <Navbar expand="xl" className="py-4">
        <Container fluid className="container-xxl d-flex align-items-center">
            <div className="d-xl-none me-3">
                <Button variant="link" className="p-0 text-decoration-none">
                    <i className="bx bx-menu bx-sm" aria-label="toggle for sidebar" />
                </Button>
            </div>
            <div className="me-auto d-none d-md-block text-white">
                {getGreetingMessage("Mradul Sharma")}
                <span className="fw-bold fs-6"> Welcome back, Mradul Sharma!</span>
            </div>
            <Nav className="ms-auto">
                <Dropdown align="end">
                    <Dropdown.Toggle as="a" className="nav-link p-0 d-flex align-items-center" id="dropdown-user" aria-label="dropdown profile avatar">
                    <Image src="/admin/assets/img/avatars/1.png" roundedCircle height={40} className="avatar-online" alt="avatar-image" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                        <Dropdown.Item href="#" aria-label="go to profile">
                            <div className="d-flex align-items-center">
                                <Image src="/admin/assets/img/avatars/1.png" roundedCircle height={40} className="me-3 avatar-online" alt="avatar-image" />
                                <div>
                                    <div className="fw-medium">{userName}</div>
                                    <small className="text-muted">{role}</small>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" aria-label="go to profile"><i className="bx bx-user me-2"></i> My Profile</Dropdown.Item>
                        <Dropdown.Item href="#" aria-label="go to setting"><i className="bx bx-cog me-2"></i> Settings</Dropdown.Item>
                        <Dropdown.Item href="#" aria-label="go to billing"><i className="bx bx-credit-card me-2"></i>Billing<Badge bg="danger" pill className="ms-2">4</Badge></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" aria-label="click to log out"><i className="bx bx-power-off me-2"></i> Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  );
};
export default DashboardNavbar;
