"use client";

import { useEffect } from "react";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      console.log(`✅ Script already loaded: ${src}`);
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      // console.log(`✅ Loaded: ${src}`);
      resolve();
    };
    script.onerror = (err) => {
      console.error(`❌ Error loading: ${src}`, err);
      reject(err);
    };
    document.body.appendChild(script);
  });
};

const loadFooterScripts = async () => {
  try {
    // jQuery
    await loadScript("/assets/js/vendors/jquery-3.6.0.min.js");

    // Bootstrap Bundle
    await loadScript("/assets/js/vendors/bootstrap.bundle.min.js");

    // Swiper
    //await loadScript("/assets/js/vendors/swiper-bundle.min.js");
    // console.log("swipper js not loaded externally");
    // Other vendor scripts
    const otherScripts = [
      "/assets/js/vendors/jquery-migrate-3.3.0.min.js",
      "/assets/js/vendors/waypoints.js",
      "/assets/js/vendors/wow.js",
      "/assets/js/vendors/magnific-popup.js",
      "/assets/js/vendors/perfect-scrollbar.min.js",
      "/assets/js/vendors/select2.min.js",
      "/assets/js/vendors/isotope.js",
      "/assets/js/vendors/scrollup.js",
      "/assets/js/vendors/noUISlider.js",
      "/assets/js/vendors/slider.js",
      "/assets/js/vendors/counterup.js",
      "/assets/js/vendors/jquery.countdown.min.js",
      "/assets/js/vendors/jquery.elevatezoom.js",
      "/assets/js/vendors/slick.js",
      "/assets/js/main.js?v=3.0.0",
      "/assets/js/shop.js?v=1.2.1",
    ];

    await Promise.all(otherScripts.map(loadScript));
    // console.log("✅ All footer scripts loaded");
  } catch (err) {
    console.error("❌ Failed to load footer scripts", err);
  }
};

const FooterScripts = () => {
  useEffect(() => {
    let isMounted = true;

    loadFooterScripts().then(() => {
      if (isMounted) {
        // console.log("✅ Footer scripts executed");
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom mt-20">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-center text-lg-start">
              <span className="color-gray-900 font-sm">
                &copy; {new Date().getFullYear()} Gamma Scientific. All rights
                reserved.
              </span>
            </div>
            <div className="col-lg-6 col-md-12 text-center text-lg-end">
              <ul className="menu-bottom">
                <li>
                  <a className="font-sm color-gray-900" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterScripts;
