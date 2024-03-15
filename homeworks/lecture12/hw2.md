![layout](https://tutorial.techaltum.com/images/css-layout.jpg)

Implement the layout shown above in React component.



styles.css
        .header {
            width: 600px;
            height: 200px;
            border: 2px solid #333;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px auto;
        }
        .Nav {
            width: 600px;
            height: 50px;
            border: 2px solid #333;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px auto;
        }
        .table-container {
            width: 600px;
            border: 2px solid #333;
            margin: 10px auto;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            height: 100px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }

        th {
            background-color: #f2f2f2;
        }
        .one-third {
            width: 33.33%;
        }

        .two-thirds {
            width: 66.66%;
        }

        /* Style for split text in the data cells */
        .split-text {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .Footer {
            width: 600px;
            height: 50px;
            border: 2px solid #333;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px auto;
        }


import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      <div className="table-container">
        <table>
          <tr>
            <td className="one-third">Aside</td>
            <td className="two-thirds">section</td>
          </tr>
        </table>
      </div>

      <div className="Footer">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;

   


![image](https://github.com/chuwa-fullstack-training/fullstack-training-0212/assets/47225065/f7fdcde8-9cf6-4696-88bd-77191becbdaf)
