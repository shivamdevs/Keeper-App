import React from 'react';
import { useKeeperContext } from '../../../core/context/KeeperContext';
import classNames from 'classnames';
import Table from './Table';
import Grid from './Grid';

function Container() {
    const { setting: { listView } } = useKeeperContext();

    return (
        <section className={classNames(
            "w-full flex-1",
            {
                "p-5": listView,
                "py-5": !listView,
            },
        )}>
            <main className={classNames(
                "w-full h-full relative overflow-hidden",
                {
                    "bg-white rounded-lg shadow-xl": listView,
                }
            )}>
                <article className="absolute inset-0 overflow-x-auto overflow-y-scroll pb-10">
                    {listView ? <Table /> : <Grid />}
                </article>
            </main>
        </section>
    );
}

export default Container;
