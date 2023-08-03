// import React from 'react';

export default interface KeeperContext {
    setting: KeeperSetting;
    setSetting: (key: string, value: any) => void;
}

export interface KeeperSetting {
    listView: boolean;
    panelView: "help" | "profile" | "setting" | false;
}