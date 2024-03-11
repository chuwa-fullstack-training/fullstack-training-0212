```html
<h2>What is Frontend?</h2>
<ul>
  <li>
    Frontend is the part of the website that users can see and interact with.
  </li>
  <li>Frontend is also called <strong>client-side</strong>.</li>
  <li>Frontend is built with HTML, CSS, and JavaScript.</li>
</ul>
```

Turn the HTML above into React components and display


import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <div>
      <h2>What is Frontend?</h2>
      <ul>
        <li>Frontend is the part of the website that users can see and interact with.</li>
        <li>Frontend is also called <strong>client-side</strong>.</li>
        <li>Frontend is built with HTML, CSS, and JavaScript.</li>
      </ul>
    </div>,
    document.getElementById('root')
  );
  

![image](https://github.com/chuwa-fullstack-training/fullstack-training-0212/assets/47225065/e8764807-75b3-4340-b456-b63396695cba)
