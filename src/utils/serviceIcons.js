import {
    BiCode, BiPlug, BiCloudUpload, BiGrid, BiBox, BiTachometer,
    BiGlobe, BiLock, BiTrendingUp, BiMicrochip, BiCloud, BiCog,
    BiPhone, BiLink, BiHdd, BiNetworkChart, BiSearch, BiBoltCircle,
    BiShield, BiBroadcast, BiIdCard, BiSync, BiWallet, BiGroup
} from "react-icons/bi";

export const serviceIconMap = {
    "bi-code-slash": BiCode,
    "bi-plug": BiPlug,
    "bi-cloud-upload": BiCloudUpload,
    "bi-kanban": BiGrid,
    "bi-boxes": BiBox,
    "bi-speedometer2": BiTachometer,
    "bi-globe": BiGlobe,
    "bi-shield-lock": BiLock,
    "bi-graph-up": BiTrendingUp,
    "bi-cpu": BiMicrochip,
    "bi-cloud-check": BiCloud,
    "bi-gear": BiCog,
    "bi-phone": BiPhone,
    "bi-link": BiLink,
    "bi-hdd-rack": BiHdd,
    "bi-diagram-3": BiNetworkChart,
    "bi-search": BiSearch,
    "bi-lightning-charge": BiBoltCircle,
    "bi-shield-shaded": BiShield,
    "bi-broadcast-pin": BiBroadcast,
    "bi-person-badge": BiIdCard,
    "bi-arrow-repeat": BiSync,
    "bi-wallet": BiWallet,
    "bi-people": BiGroup
};

export const getServiceIcon = (iconName) => {
    return serviceIconMap[iconName] || BiCode;
};
