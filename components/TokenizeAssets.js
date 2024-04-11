// TokenizeAssets.js

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const TokenizeAssets = () => {
  return (
    <div className="tokenize-assets-container" >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <Image
              src="https://ipfs.io/ipfs/QmP3bRs9R1rANmTK5kRyih11znYJHo881c99n8YBA2h8Xh"
              alt="Optimization of DeFi"
              fluid
	      className="rounded-image"
            />
          </Col>
          <Col lg={6} xs={12}>
            <h1 className="display-5 mb-2 text-black">Optimization (slippage, and costs)</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TokenizeAssets;

