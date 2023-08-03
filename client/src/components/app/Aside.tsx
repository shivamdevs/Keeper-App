import React from 'react';
import { ReactComponent as KeepIcon } from '../../assets/app/Icon.svg';
import AsideBars from '../../core/types/AsideBars';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineStar, HiOutlineShare, HiOutlineTrash, HiOutlineHome, HiOutlineCollection } from 'react-icons/hi';
import { RiSafe2Line, RiHistoryLine } from 'react-icons/ri';
import { PiPlusBold } from 'react-icons/pi';
import { useToggle, useUpdateEffect } from 'react-unique-hooks';

export const asideBar: AsideBars[] = [
    {
        icon: HiOutlineHome,
        name: "Home",
        link: "/keeper",
    },
    {
        icon: HiOutlineCollection,
        name: "Groups",
        link: "/keeper/groups",
    },
    {
        icon: HiOutlineStar,
        name: "Favorites",
        link: "/keeper/favorites",
    },
    {
        icon: HiOutlineShare,
        name: "Shared with me",
        link: "/keeper/shared",
    },
    {
        icon: RiSafe2Line,
        name: "Vault",
        link: "/keeper/vault",
    },
    {
        icon: RiHistoryLine,
        name: "Activity",
        link: "/keeper/activity",
    },
    {
        icon: HiOutlineTrash,
        name: "Trash",
        link: "/keeper/trash",
    },
];

function Aside() {
    return (
        <aside className="max-w-[320px] min-w-[240px] flex-[1] flex flex-col flex-nowrap">
            <header className="w-full px-6 py-2">
                <Link to="/keeper" className="items-center gap-2 inline-flex flex-nowrap">
                    <KeepIcon className="w-12" />
                    <span className="font-family-comfortaa text-3xl text-gray-700 font-bold">Keeper</span>
                </Link>
            </header>
            <div className="flex w-full flex-nowrap px-10 py-1">
                <button type="button" className="w-full flex items-center flex-nowrap justify-center p-3 font-medium bg-white rounded-xl transition-all border border-gray-200 shadow-md gap-3 hover:shadow-lg hover:bg-blue-50 hover:text-blue-700 focus-visible:shadow-lg focus-visible:bg-blue-50 focus-visible:text-blue-700">
                    <span className="scale-125"><PiPlusBold /></span>
                    <span>New</span>
                </button>
            </div>
            <div className="flex-1 relative">
                <div className="absolute w-full h-full inset-0 overflow-auto">
                    <ul className="p-5 w-full">
                        {asideBar.map((bar: AsideBars) => (<Bars key={bar.name} {...bar} />))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Aside;

function Bars({ icon: Icon, link, name }: AsideBars) {
    const location = useLocation();
    const [active, toggle] = useToggle(location.pathname === link);

    useUpdateEffect(() => {
        toggle(location.pathname === link);
    }, [location]);
    return (
        <li className="mb-2 w-full last-of-type:mb-0">
            <Link to={link} className="w-full flex gap-5 font-medium text-sm flex-nowrap items-center data-[active=true]:bg-blue-200 py-2 px-5 rounded-3xl data-[active=true]:shadow-md transition-all data-[active=true]:text-blue-700 hover:bg-[#0001] hover:text-blue-700 focus-visible:bg-[#0001] focus-visible:text-blue-700 whitespace-nowrap" data-active={active}>
                <span className="scale-125">{Icon && <Icon />}</span>
                <span className=" text-medium">{name}</span>
            </Link>
        </li>
    );
}