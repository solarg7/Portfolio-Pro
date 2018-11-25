import React from "react";
import "./Gallery.css";
import { Grid, Row, Thumbnail, Button, Col, Modal} from 'react-bootstrap';
// import {Bar, Line, Pie} from "react-chartjs-2";
import { LineChart, Line } from 'recharts';
import data from "../../data.json";

const Starter_01 = props => (
  <header className="header_01">
    <h1>SKILLS</h1>
    {/* <Grid> */}
    <Row className="show-grid">
      <Col xs={6} sm={4}>
        <LineChart width={200} height={100} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        {/* <Line data={this.state.dataTrend} /> */}
      </Col>
      <Col xs={6} sm={4}>
        <Thumbnail href="https://github.com/solarg7/" target="_blank" alt="171x180" src="/assets/images/github.png" height={50}className="iconClass"/>
      </Col>
      <Col xs={6} sm={4}>
        <Thumbnail href="https://www.linkedin.com/in/m-del-solar/" target="_blank" alt="171x180" src="/assets/images/linkedin.png" className="iconClass"/>
      </Col>

    </Row>  
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
    {/* </Grid>;  */}

    <Row className="show-grid">
      <Col xs={6} sm={4}>
      <Thumbnail href="http://stackoverflow.com/u/8926027/" target="_blank" alt="130x180" src="/assets/images/stackoverflow.png" height="40"/>
     
      </Col>
      <Col xs={6} sm={4}>
        <Thumbnail href="https://github.com/solarg7/" target="_blank" alt="171x180" src="/assets/images/github.png" height={50}/>
      </Col>
      <Col xs={6} sm={4}>
        <Thumbnail href="https://www.linkedin.com/in/m-del-solar/" target="_blank" alt="171x180" src="/assets/images/linkedin.png" />
      </Col>

    </Row> 
    <Row className="show-grid">
      <Col xs={6} sm={4}>
        <LineChart width={200} height={100} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        {/* <Line data={this.state.dataTrend} /> */}
      </Col>
      <Col xs={6} sm={4}>
        <Thumbnail href="https://github.com/solarg7/" target="_blank" alt="171x180" src="/assets/images/github.png" height={50}className="iconClass"/>
      </Col>
      <Col xs={6} sm={4}>
        <Thumbnail href="https://www.linkedin.com/in/m-del-solar/" target="_blank" alt="171x180" src="/assets/images/linkedin.png" className="iconClass"/>
      </Col>

    </Row>
    <h2>
      Click on an image to earn points, but don't click on any more than once!
    </h2>
  </header>
);

export default Starter_01;
