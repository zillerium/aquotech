// LiquidityVoting.js

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const LiquidityVoting = () => {
  return (
    <div className="liquidity-voting-container"> {/* Class name for potential styling */}
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <h1 className="display-5 mb-2 text-black">DeFi Composition</h1>
          </Col>
          <Col lg={6} xs={12}>
            <Image
              src="https://ipfs.io/ipfs/QmcWHyySfyfTx3fUVvWr4QYn9ihqw6BCBB2MoFr1reCJHp"
              alt="DeFi Composition"
	  fluid
              className="rounded-image" // Ensure this class is defined in your CSS
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LiquidityVoting;

