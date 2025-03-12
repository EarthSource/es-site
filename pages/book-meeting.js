// pages/book-meeting.js
export default function RedirectPage() {
  return (
    <html>
    <head>
      <meta httpEquiv="refresh" content="0; URL=https://calendar.app.google/q4iYKU3ejmSLyafP6" />
      <title>Redirecting...</title>
    </head>
    <body>
    <p>
      Redirecting to <a href="https://calendar.app.google/q4iYKU3ejmSLyafP6">Google Calendar</a>.
      If you are not redirected automatically, click the link.
    </p>
    </body>
    </html>
  );
}


export const getStaticProps = () => {
  return {
    props: {}, // Required for static generation
  };
};