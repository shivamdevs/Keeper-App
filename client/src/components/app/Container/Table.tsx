import React from 'react';
import data from '../../../core/data';
import moment from 'moment';
import StarColorCounter from '../../common/StarColorCounter';
import { useNavigate } from 'react-router-dom';
import { LuChevronRight } from 'react-icons/lu';
import FavIconImage from '../../common/FavIconImage';

function Table() {

    const columns: [string, string][] = [
        ["", "icon"],
        ["Name", "name"],
        ["Username", "username"],
        ["Updated", "updated"],
        ["Strength", "strength"],
        ["", "edit"],
    ];

    const navigate = useNavigate();

    return (
        <table className="border-collapse w-full text-left whitespace-nowrap text-sm text-gray-700 font-medium">
            <thead className="sticky top-0 bg-white z-10">
                <tr className="min-w-full">
                    {columns.map(col => (<th className="py-2 font-semibold text-black px-2" key={col[1]}>{col[0]}</th>))}
                </tr>
            </thead>
            <tbody className="">
                {data.map(row => (<tr className="min-w-full border-b border-b-gray-200 shadow-[0_0_0_1px_inset_transparent] hover:shadow-blue-400 hover:bg-blue-100 transition-all cursor-pointer hover:border-b-blue-400" key={row.id} onClick={() => navigate(`/keeper/_/${row.id}`)}>
                    <td className="px-2">
                        <FavIconImage link={row.link} className="flex justify-center items-center flex-nowrap w-6 h-6 mx-auto" />
                    </td>
                    <td className="min-w-[200px] px-2">
                        <div className="min-h-[40px] py-1">
                            <div className="font-semibold">{row.name || row.link}</div>
                            {row.name && <div className="w-full relative h-[1.5em] text-xs mt-1 text-gray-600">
                                <div className="absolute inset-0 overflow-hidden text-ellipsis pr-10 ">{row.link}</div>
                            </div>}
                        </div>
                    </td>
                    <td className="text-xs font-semibold px-2">{row.username}</td>
                    <td className="text-xs font-semibold text-gray-600 px-2">{moment(row.updated).fromNow()}</td>
                    <td className="px-2"><StarColorCounter strength={row.strength} /></td>
                    <td className="px-2">
                        <LuChevronRight className="scale-125 mx-3" />
                    </td>
                </tr>))}
            </tbody>
        </table>
    );
}

export default Table;
