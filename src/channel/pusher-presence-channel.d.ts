import { PusherChannel } from './pusher-channel';
import { PresenceChannel } from './presence-channel';
export declare class PusherPresenceChannel extends PusherChannel implements PresenceChannel {
    here(callback: any): PusherPresenceChannel;
    joining(callback: any): PusherPresenceChannel;
    leaving(callback: any): PusherPresenceChannel;
    whisper(eventName: any, data: any): PusherPresenceChannel;
}
