// import React from 'react';

export default interface DataType {
    id: string;
    name?: string;
    link: string;
    username: string;
    updated: number;
    strength: 0 | 1 | 2 | 3 | 4;
}
