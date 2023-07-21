// import React from 'react';
import KeeperContext, { KeeperSetting } from '../types/KeeperContext';
import { useLocalStorage } from 'react-unique-hooks';

export default function useKeeperState(): KeeperContext {
    const [setting, updateSetting] = useLocalStorage<KeeperSetting>("keeper:setting", {
        listView: false,
    });

    function setSetting(key: string, value: any) {
        updateSetting((old: KeeperSetting | undefined) => ({
            ...old,
            [key]: value,
        } as KeeperSetting));
    }

    const context = {
        setting: (setting as KeeperSetting),
        setSetting,
    };

    return context;
}
