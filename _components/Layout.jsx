import React, { useEffect, useLayoutEffect } from 'react'
import { Header } from './'
import { InstagramBox, FooterMiddle, FooterBottom } from './'
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
// import jQuery from 'jquery'
// if(process.browser){
//     window.jQuery = jQuery;
//     window.$ = window.jQuery;
// }

const Layout = (props) => {

   useEffect(() => {
       var element = document.getElementsByTagName("body")[0]
       element.classList.add("loaded");
   }, [])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <script defer type="text/javascript" src="/static/js/bootstrap.bundle.min.js"></script>
                <script type="text/javascript" src="/static/js/main.js"></script>
            </Head>
    
            <div className="page-wrapper">
                <Header />
                <ToastContainer
                    position="top-center"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                />
                {
                    props.children
                }
                <footer className="footer">
                    {/* <InstagramBox /> */}
                    <FooterMiddle />
                    <FooterBottom />
                </footer>
               
            </div>
           
        </>
    )
}
export { Layout }