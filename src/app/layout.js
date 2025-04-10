// This is a Server Component (no 'use client')
import Footer from "@/components/layout/Footer";
import FooterScripts from "@/components/FooterScripts";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

// Optional but good for SEO
export const metadata = {
  title: "Your Website Title",
  description: "Your default description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Vendor CSS files */}
        <link rel="stylesheet" href="/assets/css/vendors/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendors/normalize.css" />
        <link rel="stylesheet" href="/assets/css/vendors/uicons-regular-rounded.css" />
        <link rel="stylesheet" href="/assets/css/vendors/uicons-regular-straight.css" />
        {/* <link rel="stylesheet" href="/assets/css/vendors/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/vendors/select2.min.css" />
        <link rel="stylesheet" href="/assets/css/vendors/slick.css" />
        <link rel="stylesheet" href="/assets/css/vendors/animate.min.css" /> */}

        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <Header />
        <Sidebar />
        <main>{children}</main>
        <Footer />
        <FooterScripts />
      </body>
    </html>
  );
}
