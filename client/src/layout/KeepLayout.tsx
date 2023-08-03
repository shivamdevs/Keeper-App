import React from 'react';
import Aside from '../components/app/Aside';
import Header from '../components/app/Header';
import NavBar from '../components/app/NavBar';
import KeeperContext from '../core/context/KeeperContext';
import useKeeperState from '../core/context/useKeeperState';
import Container from '../components/app/Container';
import RightSide from '../components/app/RightSide';
// import WallpaperLoader from '../components/common/WallpaperLoader';

function KeepLayout() {

    const context = useKeeperState();

    return (
        <KeeperContext.Provider value={context}>
            <section className="w-full h-[100dvh] flex flex-col flex-nowrap relative">
                <section className="w-full flex-1 flex flex-row relative z-10 dark:bg-[#0009] backdrop-blur">
                    <Aside />
                    <section className="flex flex-nowrap flex-col flex-[4]">
                        <Header />
                        <section className="flex flex-1 flex-nowrap">
                            <section className="flex flex-col flex-1 flex-nowrap">
                                <NavBar />
                                <Container />
                            </section>
                            <RightSide />
                        </section>
                    </section>
                </section>
                {/* <WallpaperLoader /> */}
            </section>
        </KeeperContext.Provider>
    );
}

export default KeepLayout;
