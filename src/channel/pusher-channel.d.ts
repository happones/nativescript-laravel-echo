import { EventFormatter } from './../util';
import { Channel } from './channel';
export declare class PusherChannel extends Channel {
    pusher: any;
    name: any;
    options: any;
    eventFormatter: EventFormatter;
    subscription: any;
    constructor(pusher: any, name: any, options: any);
    subscribe(): any;
    unsubscribe(): void;
    listen(event: string, callback: Function): PusherChannel;
    stopListening(event: string): PusherChannel;
    on(event: string, callback: Function): PusherChannel;
}
