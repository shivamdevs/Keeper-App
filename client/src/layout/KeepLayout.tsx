import React from 'react';
import { useEffectOnce } from 'react-unique-hooks';
import Aside from '../components/app/Aside';
import Header from '../components/app/Header';
import NavBar from '../components/app/NavBar';
import KeeperContext from '../core/context/KeeperContext';
import useKeeperState from '../core/context/useKeeperState';
import Container from '../components/app/Container';

function KeepLayout() {

    useEffectOnce(() => {
        (window as any).loadingOverlayRemove();
    });

    const context = useKeeperState();

    return (
        <KeeperContext.Provider value={context}>
            <section className="w-full h-[100dvh] flex flex-col flex-nowrap">
                <section className="w-full flex-1 flex flex-row">
                    <Aside />
                    <section className="flex flex-col flex-1 flex-nowrap">
                        <Header />
                        <NavBar />
                        <Container />
                    </section>
                </section>
            </section>
        </KeeperContext.Provider>
    );
}

export default KeepLayout;
