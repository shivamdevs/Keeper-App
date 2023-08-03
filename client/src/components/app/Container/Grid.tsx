import React from 'react';
import data from '../../../core/data';
import DataType from '../../../core/types/DataType';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import StarColorCounter from '../../common/StarColorCounter';
import FavIconImage from '../../common/FavIconImage';

function Grid() {
    return (
        <section className="full grid grid-container gap-5 pr-[6px] pl-5">
            {data.map(item => <Card key={item.id} {...item} />)}
        </section>
    );
}

export default Grid;

function Card({ id, name, link, username, updated, strength }: DataType) {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/keeper/_/${id}`)} className="p-4 bg-white shadow-md transition-all cursor-pointer rounded-xl border border-gray-200 hover:shadow-xl hover:bg-blue-100 hover:border-blue-400 whitespace-nowrap">
            <div className="w-full flex items-center flex-nowrap gap-3">
                <FavIconImage link={link} className="w-10 h-10 flex justify-center items-center flex-nowrap" />
                <div className="flex-1 leading-3">
                    <div className="w-full relative h-[1.5em] text-sm mt-1 text-gray-700">
                        <div className="absolute inset-0 overflow-hidden text-ellipsis font-semibold">{name || link}</div>
                    </div>
                    {name && <div className="w-full relative h-[1.5em] text-xs mt-1 text-gray-600">
                        <div className="absolute inset-0 overflow-hidden text-ellipsis">{link}</div>
                    </div>}
                    {/* <div className="text-ellipsis overflow-hidden whitespace-nowrap text-xs font-semibold text-gray-500">{link}</div> */}
                </div>
            </div>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap my-5 text-sm font-medium text-gray-800">{username}</div>
            <div className="flex flex-nowrap items-center justify-between">
                <StarColorCounter strength={strength} />
                <span className="text-[10px] font-semibold text-gray-500">{moment(updated).fromNow()}</span>
            </div>
        </div>
    );
}
