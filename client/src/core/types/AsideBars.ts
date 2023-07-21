import React from 'react';

export default interface AsideBars {
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    name: string;
    link: string;
}