import React from 'react';
import Search from './Search';
import RoundButton, { RoundButtonRaw } from '../../common/RoundButton';
import { LuHelpCircle, LuSettings } from 'react-icons/lu';
import { PiUserCircleGearFill } from 'react-icons/pi';
import { OasisMenu, OasisMenuTrigger } from 'oasismenu';
import Tippy from '@tippyjs/react';
import { useKeeperContext } from '../../../core/context/KeeperContext';

function Header() {
    const { setSetting } = useKeeperContext();

    return (
        <header className="w-full px-5 py-3 flex flex-nowrap items-center">
            <Search />
            <div className="flex flex-nowrap items-center gap-2 ml-auto">
                <RoundButton content="Help" onClick={() => setSetting("panelView", (val: string | false) => (val === "help" ? false : "help"))}>
                    <LuHelpCircle />
                </RoundButton>
                <RoundButton content="Setting" onClick={() => setSetting("panelView", (val: string | false) => (val === "setting" ? false : "setting"))}>
                    <LuSettings />
                </RoundButton>
                <span className="flex-1"></span>
                <OasisMenuTrigger name="user-popup" placement="bottom-right">
                    <Tippy content="Username">
                        <RoundButtonRaw>
                            <PiUserCircleGearFill />
                        </RoundButtonRaw>
                    </Tippy>
                </OasisMenuTrigger>
                <OasisMenu name="user-popup">
                    some content
                </OasisMenu>
            </div>
        </header>
    );
}

export default Header;
