export declare abstract class Channel {
    options: any;
    abstract listen(event: string, callback: Function): Channel;
    notification(callback: Function): Channel;
    listenForWhisper(event: string, callback: Function): Channel;
}
