import { NullChannel } from './null-channel';
import { PresenceChannel } from './presence-channel';
export declare class NullPresenceChannel extends NullChannel implements PresenceChannel {
    here(callback: any): NullPresenceChannel;
    joining(callback: any): NullPresenceChannel;
    leaving(callback: any): NullPresenceChannel;
    whisper(eventName: any, data: any): NullPresenceChannel;
}
