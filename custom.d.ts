declare module '*.svg?react' {
  import type React from 'react';
  const svg: React.FC<React.SVGAttributes<SVGSVGElement>>;
  export default svg;
}

declare module '*.svg' {
  import type React from 'react';
  const svg: React.FC<React.SVGAttributes<SVGSVGElement>>;
  export default svg;
}

declare module '*.png' {
  const value: {
    src: string; // 🔥 실제 구조 반영
    height: number;
    width: number;
    blurDataURL?: string;
  };
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.mov' {
  const src: string;
  export default src;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
