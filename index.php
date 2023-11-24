<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coming Soon |
        <?= $_SERVER['HTTP_HOST']; ?> | Powered by Infinity Internet
    </title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background-image: url('https://www.infinityinternet.com/images/pexels-panumas-nikhomkhai-1148820-1.jpg');
            background-size: 100% 100%;
            background-position: center;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: flex-end;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 2.5vh;
            max-width: 100vw;
            max-height: 100vw;
            overflow: hidden;
        }

        .content {
            width: 40%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            padding: 0 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5vh;
            align-items: flex-start;
        }

        h2,
        h3 {
            font-weight: normal;
        }

        h1 {
            font-size: 3.2em;
        }

        .hr {
            width: 80%;
            height: 2px;
            background-color: #1A3262;
        }

        a {
            color: #000;
        }

        @media (max-width: 1024px) {
            body {
                font-size: 20px;
                background-size: auto 100%;
            }

            .content {
                width: 100%;
                align-items: center;
            }

            h1 {
                font-size: 2.5em;
            }

            p {
                text-align: center;
            }
        }
    </style>
</head>

<body>
    <div class="content">
        <h3>
            <?= $_SERVER['HTTP_HOST']; ?>
        </h3>
        <h1>Coming Soon</h1>
        <div class="hr"></div>
        <img src="https://www.infinityinternet.com/images/Infinity-Logo-dkorange-blue.gif" />
        <h3>Powered by <a href="https://www.infinityinternet.com/" target="_blank">Infinity Internet</a></h3>
        <p>PO Box 873116<br />Vancouver WA 98687-3116<br />(360) 735-3700</p>
        <p>8:00 AM - 5:00 PM<br />Monday - Friday</p>
        <p><a href="https://www.infinityinternet.com/" target="_blank">Home</a><br /><a
                href="https://www.infinityinternet.com/about/" target="_blank">About</a><br /><a
                href="https://www.infinityinternet.com/contact-us/" target="_blank">Contact Us</a></p>
    </div>
</body>

</html>
