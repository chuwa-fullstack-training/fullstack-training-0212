![layout](https://tutorial.techaltum.com/images/css-layout.jpg)

Implement the layout shown above in React component.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Line Example</title>

    <style>
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
    </style>

</head>
<body>
    <div class="header">
        <p>Header</p>
    </div>
    <div class="Nav">
        <p>Nav</p>
    </div>

    <div class="table-container">
        <table>
            <tr>
                <td class="one-third">Aside</td>
                <td class="two-thirds">section</td>
            </tr>
        </table>
    </div>

    <div class="Footer">
        <p>Footer</p>
    </div>
</body>
</html>


![image](https://github.com/chuwa-fullstack-training/fullstack-training-0212/assets/47225065/f7fdcde8-9cf6-4696-88bd-77191becbdaf)
