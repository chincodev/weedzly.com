import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import Error from './_error'
import jQuery from 'jquery'
import $ from 'jquery'
if(process.browser){
    window.jQuery = jQuery;
    window.$ = jQuery;
}

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage();
        const styles = flush();
        return { html, head, errorHtml, chunks, styles };
    }
  
    render() {
        if(this.props.html=="<p>An error 404 occurred on server</p>"){
            return <Error statusCode={404} />
        }
        return (
            <html>
                
                <Head>
                
                    <link rel="stylesheet" type="text/css" href="/static/css/ReactToastify.min.css" />
                    <link rel="stylesheet" type="text/css" href="/static/css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="/static/css/style.min.css" />
                    <link rel="stylesheet" type="text/css" href="/static/css/custom.css" />
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                    <link rel="stylesheet" type="text/css" href="../static/css/slick.theme.min.css" />
                    <link rel="stylesheet" href="/static/vendor/fontawesome-free/css/all.min.css" />
                    <script defer type="text/javascript" src="/static/js/jquery.min.js"></script>
                    <script defer type="text/javascript" src="/static/js/plugins.min.js"></script>
                    <script defer type="text/javascript" src="/static/js/plugins/isotope-docs.min.js"></script> 
                   
                
                    <link rel="icon" href="/favicon.ico" />
                    <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
                </Head>

            <body>
            <Main />
            <NextScript />
            </body>
        </html>
    );
  }
}