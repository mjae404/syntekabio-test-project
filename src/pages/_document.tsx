import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#fff' />
        <meta name='description' content='신테카바이오 면접과제 프로젝트' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='신테카바이오 면접과제 프로젝트' />
        <meta property='og:url' content='https://github.com/mjae404/syntekabio-test-project' />
        <meta property='og:image' content='./og-image.jpg' />
        <link rel='icon' type='image/svg+xml' href='./favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
