import React from 'react';
import RoundButton from '../common/RoundButton';
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu';
import { BiArrowBack } from 'react-icons/bi';
import { useKeeperContext } from '../../core/context/KeeperContext';
import { Route, Routes, useNavigate } from 'react-router-dom';

function NavBar() {
    const { setting: { listView }, setSetting } = useKeeperContext();

    const navigate = useNavigate();
    return (
        <div className="w-full px-5">
            <nav className="bg-white rounded-lg p-2 shadow flex flex-nowrap items-center">
                <Routes>
                    <Route path="/" element={null} />
                    <Route path="*" element={<RoundButton content="Back" onClick={() => navigate(-1)}><BiArrowBack /></RoundButton>} />
                </Routes>
                <RoundButton className="ml-auto" content={listView ? "Grid View" : "List view"} onClick={() => { setSetting("listView", !listView) }}>
                    {listView ? <LuLayoutGrid /> : <LuLayoutList />}
                </RoundButton>
            </nav>
        </div>
    );
}

export default NavBar;
