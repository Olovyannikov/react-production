declare module '*.module.scss' {
    interface ClassNames {
        [className: string]: string;
    }

    const classNames: ClassNames;
    export = classNames;
}

declare module '*.module.css' {
    interface ClassNames {
        [className: string]: string;
    }

    const classNames: ClassNames;
    export = classNames;
}

declare module '*.svg' {
    import React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.webp";

declare const __IS_DEV__: boolean;