import classNames from 'classnames';
import React from 'react';
import { HiStar } from 'react-icons/hi';

function StarColorCounter({ strength }: { strength: 0 | 1 | 2 | 3 | 4 }) {
    return (
        <div className={classNames(
            "flex flex-nowrap",
            {
                "text-red-600": strength === 0,
                "text-yellow-600": strength === 1,
                "text-orange-400": strength === 2,
                "text-green-600": strength === 3,
                "text-blue-600": strength === 4,
            }
        )}>{(new Array(strength + 1)).fill(null).map((item, index) => <HiStar key={index} data-fill={item} />)}</div>
    );
}

export default StarColorCounter;
