import React from "react";
import KeeperContextType from "../types/KeeperContext";

const KeeperContext = React.createContext<KeeperContextType>({
    setting: {
        listView: false,
    },
    setSetting: () => {},
});

export default KeeperContext;

export const useKeeperContext = () => React.useContext(KeeperContext);