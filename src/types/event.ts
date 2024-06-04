export type Event = {
    id: number;
    title: string;
    date: string;
    desc: string;
    weather: Weather;
};

export type Weather = {
    temperature: string;
    wind?: string;
}