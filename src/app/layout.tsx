"use client"
import { Provider } from 'react-redux';
import store from '../store/store';
import Script from 'next/script';
import SidebarMenu from '@/components/layouts/SidebarMenu';
// import '../styles/globals.css';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Chat - Uhpnat</title>
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      <link rel="stylesheet" href="assets/css/tailwind2.css"></link>
      </head>
      <body>
      <Provider store={store}>
      <div className="lg:flex h-screen">
         <SidebarMenu></SidebarMenu>
        {children}
        </div>
      </Provider>
      <Script src="assets/libs/jquery/jquery.min.js" strategy="beforeInteractive" />
        <Script src="assets/libs/%40popperjs/core/umd/popper.min.js" strategy="afterInteractive" />
        <Script src="assets/libs/simplebar/simplebar.min.js" strategy="afterInteractive" />
        <Script src="assets/libs/magnific-popup/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="assets/libs/owl.carousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="assets/js/pages/index.init.js" strategy="afterInteractive" />
        <Script src="assets/js/pages/profile.init.js" strategy="afterInteractive" />
        <Script src="assets/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
