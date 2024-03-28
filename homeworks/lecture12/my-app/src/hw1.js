import React from 'react';

function FrontendExplanation() {
  return (
    <div>
      <WhatIsFrontend />
      <FrontendFeatures />
    </div>
  );
}

function WhatIsFrontend() {
  return <h2>What is Frontend?</h2>;
}

function FrontendFeatures() {
  return (
    <ul>
      <li>Frontend is the part of the website that users can see and interact with.</li>
      <li>Frontend is also called <strong>client-side</strong>.</li>
      <li>Frontend is built with HTML, CSS, and JavaScript.</li>
    </ul>
  );
}

export default FrontendExplanation;
