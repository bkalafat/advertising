import Document, { Head, Main, NextScript } from "next/document";
import Logo from "../public/assets/images/favicon.png";
import "react-multi-carousel/lib/styles.css";

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        return renderPage();
    }

    render() {
        return (
            <html>
                <Head>
                    <title>Oni Solutions - Business Solutions</title>
                    <link rel="shortcut icon" href={Logo} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
