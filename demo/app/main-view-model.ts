import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { TnsEcho } from 'nativescript-laravel-echo';

export class HelloWorldModel extends Observable {
    private channel: string;
    private event: string;
    private types: any;
    private index: number;
    private broadcast: boolean;
    private endpoint: string;
    private token: string;
    private Echo: TnsEcho;
    private host: string;
    private key: string;

    constructor() {
        super();
        this.channel = 'orders';
        this.broadcast = true;
        this.event = 'OrderShipped';
        this.types = ['channel', 'private', 'join'];
    }

    connect() {
        this.Echo = new TnsEcho({
            host: this.host,
            authEndpoint: `${this.endpoint}/broadcasting/auth`,
            broadcaster: this.broadcast?'pusher':'socket.io',
            key: this.key,
            debug: false,
            auth: {
                headers: {
                    'Authorization': this.token
                }
            }
        });

        setTimeout(() => {
            this.Echo[this.types[this.index]](this.channel).listen(this.event, e => {
                console.dir(e)
            })
        }, 100) //Delay only with socket.io in ios
    }
}
