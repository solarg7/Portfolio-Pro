import React from "react";
import "./Gallery.css";
import { Grid, Row, Thumbnail, Button, Col, Modal} from 'react-bootstrap';

const Starter_01 = props => (
  <header className="header_01">

    <Grid>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/images/seawater.jpg" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <div className="modal-container" style={{ height:200}}>
              <Button
                bsStyle="primary"
                onClick={() => this.setState ({ show: true})}
              >Button_1</Button>&nbsp;
              
              {/* <Modal
                show={this.state.show}
                onHide={this.handleHide}
                container={this}
                aria-labelledby="contained-modal-title">

                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title">
                    Contained Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Chart JS
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleHide}>Close</Button>
                </Modal.Footer> 
              </Modal> */}
            </div>
              <Button bsStyle="default">Button</Button>
           
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/images/seawater.jpg" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button-Modal</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/images/seawater.jpg" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>; 

    <Row className="show-grid">
      <Col xs={6} sm={4} className="columnaIcon">
      <Thumbnail href="http://stackoverflow.com/u/8926027/" target="_blank" alt="130x180" src="/assets/images/stackoverflow.png" height="40" className="iconClass"/>
     
      </Col>
      <Col xs={6} sm={4} className="columnaIcon">
        <Thumbnail href="https://github.com/solarg7/" target="_blank" alt="171x180" src="/assets/images/github.png" height={50}className="iconClass"/>
      </Col>
      <Col xs={6} sm={4} className="columnaIcon">
        <Thumbnail href="https://www.linkedin.com/in/m-del-solar/" target="_blank" alt="171x180" src="/assets/images/linkedin.png" className="iconClass"/>
      </Col>

    </Row> 
    <h2>
      Click on an image to earn points, but don't click on any more than once!
    </h2>
  </header>
);

export default Starter_01;
