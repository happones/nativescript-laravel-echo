import { Channel, PresenceChannel } from './../channel';
export declare abstract class Connector {
    private _defaultOptions;
    options: any;
    constructor(options: any);
    protected setOptions(options: any): any;
    abstract connect(): void;
    abstract channel(channel: string): Channel;
    abstract privateChannel(channel: string): Channel;
    abstract presenceChannel(channel: string): PresenceChannel;
    abstract leave(channel: string): void;
    abstract leaveChannel(channel: string): void;
    abstract socketId(): string;
    abstract disconnect(): void;
}
