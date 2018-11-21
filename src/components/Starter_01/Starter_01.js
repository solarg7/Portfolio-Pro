import React from "react";
import "./Starter_01.css";
import { Grid, Carousel} from 'react-bootstrap';

const Starter_01 = props => (
  <header className="header">

        <Grid>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/assets/images/seawater.jpg" height= "500"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/assets/images/seawater.jpg" height= "500"/>
              <Carousel.Caption>
                <h3>Paolita Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/assets/images/seawater.jpg" height= "500"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>;
        </Grid>  
  
    <h2>
      Click on an image to earn points, but don't click on any more than once!
    </h2>
  </header>
);

export default Starter_01;
