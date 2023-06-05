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
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
        >;

    const src: string;
    export default src;
}

import 'react';

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number;
    }
}
