import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Dropdown({
  title,
  id,
  items,
}: {
  title: string;
  id: string;
  items: [string, string][];
}) {
  return (
    <NavDropdown title={title} id={`collapsible-nav-dropdown-${id}`}>
      {items.map((item) => (
        <NavDropdown.Item href={item[1]}> {item[0]} </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default function Header() {
  return (
    <div
      style={{
        marginBottom: `5%`,
      }}
    >
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav title="Give" id="collapsible-nav-dropdown">
            <Dropdown
              title="About"
              id="info"
              items={[
                ['About', '/about'],
                ['History', '/history'],
                ['Contact Us', '/feedback'],
              ]}
            />
            <Dropdown
              title="Giving"
              id="donate-receive"
              items={[
                ['Donate', '/donate'],
                ['Receive', '/receive'],
              ]}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
