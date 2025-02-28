import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

interface NavbarProps {
    showButton?: boolean;
}

const NavbarExample: React.FC<NavbarProps> = ({ showButton = false }) => {
    return (
        <Navbar className="bg-body-secondary">
            <Container>
                <Navbar.Brand href="#home"><h2>Blog Website</h2></Navbar.Brand>
                {showButton && <Button variant="success" href="/create">Create your own  Post</Button>}
            </Container>
        </Navbar>
    );
}

export default NavbarExample;
