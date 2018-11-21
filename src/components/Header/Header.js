import React from "react";
import "./Header.css";
import { Row, Col, Thumbnail, Grid} from 'react-bootstrap';

const Header = props => (
  <header className="header_02">

  <Grid>
    <div className="portada01">
      <Row className="show-grid">
        <Col xs={12} sm={12} className="fila1">
          <h1>MARCELO DEL SOLAR G</h1>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} sm={12} className="fila1">
          <h2>ELECTRICAL ENGINEER + FULL STACK WEB DEVELOPER</h2>
        </Col>        
      </Row>
    </div>
    {/* <Row className="show-grid">
      <Col xs={6} sm={4} className="columnaIcon">
      <Thumbnail href="http://stackoverflow.com/u/8926027/" target="_blank" alt="130x180" src="/assets/images/stackoverflow.png" height="40" className="iconClass"/>
     
      </Col>
      <Col xs={6} sm={4} className="columnaIcon">
        <Thumbnail href="https://github.com/solarg7/" target="_blank" alt="171x180" src="/assets/images/github.png" height={50}className="iconClass"/>
      </Col>
      <Col xs={6} sm={4} className="columnaIcon">
        <Thumbnail href="https://www.linkedin.com/in/m-del-solar/" target="_blank" alt="171x180" src="/assets/images/linkedin.png" className="iconClass"/>
      </Col>

    </Row> */}
  </Grid>     

  </header>
);

export default Header;
