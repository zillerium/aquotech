// DeFiBuildingBlocks.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DeFiBuildingBlocks = () => {
  return (
    <div >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <h1 className="display-5 mb-2">Advanced Fintech DeFi Optimization Systems</h1>
            <p className="lead mb-3">For DEXs, Yield Aggregators and Liquidity Pools </p>
            <div>
            </div>
          </Col>
          <Col lg={6} xs={12} className="mt-4 mt-lg-0">
            <img src="https://ipfs.io/ipfs/QmNhpfx9u5NQesLbPKe6Z3HFHpryynRNuueVr3P5757nvp"
	  alt="AquoTech" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeFiBuildingBlocks;

