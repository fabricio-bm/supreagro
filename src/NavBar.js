import {Container, Nav, Navbar} from "react-bootstrap";

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect fixed={"top"}
                    expand={'sm'} bg={'dark'}
                    variant={"dark"}>
                <Container>
                    <Navbar.Toggle aria-controls={'responsive-navbar-nav'}/>
                    <Navbar.Collapse id={'responsive-navbar-nav'}></Navbar.Collapse>
                    <Nav className={'me-auto'}>
                        <Nav.Link href={'#home'}> Home</Nav.Link>
                        <Nav.Link href={'/incluirproduto'}> AcessaJsonServer</Nav.Link>
                    </Nav>
                </Container>



            </Navbar>
        </div>
    );
}

export default Navbar;