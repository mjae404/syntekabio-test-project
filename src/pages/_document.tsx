import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initiainclude-htmll-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi'
        />
        <meta name='theme-color' content='#fff' />
        <meta name='description' content='신테카바이오 면접과제 프로젝트' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='신테카바이오 면접과제 프로젝트' />
        <meta property='og:url' content='https://github.com/mjae404/syntekabio-test-project' />
        <meta property='og:image' content='./og-image.jpg' />

        <link rel='icon' type='image/svg+xml' href='./favicon.ico' />
        <title>신테카바이오</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
