export interface Base {
    name: string;
    label: string;
    icon: string;
    online: boolean;

    getLink: (config: AtcConfig) => string;
};