import React from 'react';
import RoundButton from '../../common/RoundButton';
import { IoMdClose } from 'react-icons/io';
import { useKeeperContext } from '../../../core/context/KeeperContext';
import { WidthAnimatedSection } from '../../common/AnimatedSection';

function RightSide() {
    const { setting: { panelView } } = useKeeperContext();
    return (
        <>
            <RightLayout title="Settings" toggle={panelView === "setting"} />
            <RightLayout title="Help" toggle={panelView === "help"} />
        </>
    );
}

export default RightSide;

export interface RightLayoutProps {
    title?: React.ReactNode;
    toggle?: boolean;
};

function RightLayout({ title, toggle }: RightLayoutProps) {
    const { setSetting } = useKeeperContext();
    return (
        <WidthAnimatedSection
            className="h-full overflow-hidden"
            toggle={toggle}
        >
            <section className="w-full h-full pb-5 pr-5 pl-2">
                <section className="w-80 h-full bg-white shadow-xl rounded-lg gap-3 p-3 flex flex-col flex-nowrap">
                    <header className="w-full flex items-center flex-nowrap justify-between">
                        <div className="flex-1 font-medium text-gray-700">{title}</div>
                        <RoundButton content="Close" onClick={() => setSetting("panelView", false)}>
                            <IoMdClose />
                        </RoundButton>
                    </header>
                    <section className="relative w-full flex-1 rounded-xl overflow-hidden">
                        <section className="bg-[#f7f9fc] overflow-auto absolute inset-0 w-full h-full">
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                            <h2>Hello</h2>
                        </section>
                    </section>
                </section>
            </section>
        </WidthAnimatedSection>
    );
}