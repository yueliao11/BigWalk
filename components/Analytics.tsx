import Script from "next/script";

// Shared analytics snippets for every root layout (English site group + each locale).
export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WX2ZGFWH78"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WX2ZGFWH78');
        `}
      </Script>
      <Script
        src="https://app.pageview.app/js/script.js"
        data-domain="bigwalkredtowers.com"
        strategy="afterInteractive"
      />
    </>
  );
}
