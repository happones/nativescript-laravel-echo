import { EventFormatter } from './../util';
import { Channel } from './channel';
export declare class SocketIoChannel extends Channel {
    socket: any;
    name: any;
    options: any;
    eventFormatter: EventFormatter;
    events: any;
    constructor(socket: any, name: string, options: any);
    subscribe(): any;
    unsubscribe(): void;
    listen(event: string, callback: Function): SocketIoChannel;
    on(event: string, callback: Function): void;
    configureReconnector(): void;
    bind(event: string, callback: Function): void;
    unbind(): void;
}
