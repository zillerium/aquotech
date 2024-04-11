import React, { useState, useContext } from "react";
import AssetManager from "../components/AssetManager";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";

function GettingStarted() {


  return (
<Container>
      <div>
        <h1 className="mt-5">About Us</h1>
        <p>
	  AquoTech is a new startup looking to solve key problems in optimization for DeFi Composition, using the following:
	   <ul>
        <li>Cost Function Market Making Optimization</li>
        <li>Slippage</li>
        <li>Liqudity</li>
        <li>Transaction Costs</li>
      </ul>
	  </p>
        <h2>Technology</h2>
        <p>
	  AquoTech receives a wallet based transaction and then optimizes an execution path via DeFi protocols.
        </p>
	  <p align="center">
<img src="https://ipfs.io/ipfs/QmRgEn6WcJcBZvkxP9CQiJK11EJ6cquSdCSQwkbCRFAMkR" style={{ maxWidth: '50%', maxHeight: '100vh' }} />
	  </p>
	  </div>
    </Container>
  );
}

export default GettingStarted;

