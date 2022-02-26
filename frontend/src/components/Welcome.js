import React from "react";
import { Button } from "react-bootstrap";

const Welcome = () => (
  <div class="container-fluid bg-light text-dark p-5">
    <div class="container bg-light p-5">
      <h3 class="display-4 fw-bold">Images Gallery</h3>
      <hr></hr>
      <p>
        This is a simple application that retreives photos using Unspalash
        API.In order to start just enter any term in the input.
      </p>
      <p>
        <Button bsStyle="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  </div>
);

export default Welcome;
