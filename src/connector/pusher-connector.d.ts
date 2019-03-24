import { Connector } from './connector';
import { PusherChannel, PresenceChannel } from '../channel';
export declare class PusherConnector extends Connector {
    pusher: any;
    channels: any;
    connect(): void;
    listen(name: string, event: string, callback: Function): PusherChannel;
    channel(name: string): PusherChannel;
    privateChannel(name: string): PusherChannel;
    presenceChannel(name: string): PresenceChannel;
    leave(name: string): void;
    leaveChannel(name: string): void;
    socketId(): string;
    disconnect(): void;
}
