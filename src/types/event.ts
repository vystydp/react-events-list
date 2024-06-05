export type Event = {
    id: string;
    title: string;
    date: string;
    description: string;
    weather?: Weather;
    location?: Location; 
};

export type Location = {
    long: number;
    lat: number;
}

export type Weather = {
    temperature: string;
    wind?: string;
}