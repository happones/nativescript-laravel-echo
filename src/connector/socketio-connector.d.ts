import { Connector } from './connector';
import { SocketIoChannel, SocketIoPrivateChannel, SocketIoPresenceChannel } from './../channel';
export declare class SocketIoConnector extends Connector {
    socket: any;
    channels: any;
    connect(): void;
    listen(name: string, event: string, callback: Function): SocketIoChannel;
    channel(name: string): SocketIoChannel;
    privateChannel(name: string): SocketIoPrivateChannel;
    presenceChannel(name: string): SocketIoPresenceChannel;
    leave(name: string): void;
    leaveChannel(name: string): void;
    socketId(): string;
    disconnect(): void;
}
