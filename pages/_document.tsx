import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&display=swap" />
            <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
            <link rel="stylesheet" href="assets/css/Features-Image-icons.css" />
            <link rel="stylesheet" href="assets/css/Features-Image-images.css" />
            <link rel="stylesheet" href="assets/css/Form-Input.css" />
            <link rel="stylesheet" href="assets/css/Multiple-Input-Select-Pills.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/js/bold-and-bright.js"></script>
      </body>
    </Html>
  )
}
