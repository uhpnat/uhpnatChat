"use client"
import { Provider } from 'react-redux';
import store from '../store/store';
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
      <div className="lg:flex">
        {children}
        </div>
      </Provider>
      <script src="assets/libs/jquery/jquery.min.js"></script>
      <script src="assets/libs/%40popperjs/core/umd/popper.min.js"></script>
      {/* //fix */}

      <script src="assets/libs/simplebar/simplebar.min.js"></script>
      <script src="assets/libs/magnific-popup/jquery.magnific-popup.min.js"></script>
      <script src="assets/libs/owl.carousel/owl.carousel.min.js"></script>
      {/* //fix */}

      <script src="assets/js/pages/index.init.js"></script>
      <script src="assets/js/pages/profile.init.js"></script>
      {/* //fix */}
      <script src="assets/js/app.js"></script>
      </body>
    </html>
  );
}
