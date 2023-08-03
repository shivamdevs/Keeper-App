import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useToggle, useUpdateEffect } from 'react-unique-hooks';

export interface PathType {
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    link: string;
    name: string;
    path: string;
}

export interface PathBarProps {
    path: PathType[];
};

function PathBar({ path = [] }: PathBarProps) {
    console.log(path);
    return (
        <div className="flex flex-nowrap items-center gap-3 px-5">
            {path.map(item => (<Path key={item.name} {...item} />))}
        </div>
    );
}

export default PathBar;

function Path({ name, icon: Icon, link }: PathType) {

    const location = useLocation();
    const [active, setActive] = useToggle(false);

    useUpdateEffect(() => {
        setActive(link === location.pathname);
    }, []);
    return (
        <Link to={link} className="inline-flex text-sm flex-nowrap items-center gap-2 px-4 py-2 rounded-full hover:bg-[#0002] data-[active]:bg-blue-100 data-[active]:shadow-md data-[active]:text-blue-700" data-active={active}>
            {Icon && <span className="scale-125">{<Icon />}</span>}
            <span className="font-medium">{name}</span>
        </Link>
    );
}