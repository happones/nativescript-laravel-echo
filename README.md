# NativeScript Laravel-Echo

This is a [laravel-echo](https://github.com/laravel/echo/blob/master/src/channel/pusher-channel.ts) plugin for native applications made with nativescript

For more information read [Laravel Broadcast](https://laravel.com/docs/master/broadcasting). 

## Prerequisites / Requirements

Necesary api authentication in your laravel backend application.

**Modify the file where the following line `Broadcast::routes()`**

Example in `app/Providers/BroadcastServiceProvider.php`

```php
class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Broadcast::routes(['middleware' => 'auth:api']);
        require base_path('routes/channels.php');
    }
}
```

## Installation

Describe your plugin installation steps. Ideally it would be something like:

```javascript
tns plugin add nativescript-laravel-echo
```

## Usage 

```php
namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Event implements ShouldBroadcast
{
    /**
     * Information about the shipping status update.
     *
     * @var string
     */
    public $data; //data show in console.dir as data
}
```


**Javascript**	
```javascript
const TnsEcho = require('nativescript-laravel-echo').TnsEcho

const Echo = new TnsEcho(options)

Echo.channel('YourChannel').listen('Event', e => {
    console.dir(e)
})

setTimeout(() => {
    Echo.socketId();
}, 500)//half second for get socket id, only socket.io
```
    
    
**TypeScript**	  
```javascript
import { TnsEcho } from 'nativescript-laravel-echo';

private Echo: TnsEcho;

this.Echo = new TnsEcho(options)

Echo.channel('YourChannel').listen('Event', e => {
    console.dir(e)
})

setTimeout(() => {
    Echo.socketId();
}, 500)//half second for get socket id, only socket.io
```

## Options

These are each of the parameters that can go in the object options.
    
| Property | Default | Description |
| --- | --- | --- |
| broadcaster | pusher | Driver for broadcast pusher or socket.io |
| host | null | Your host only socket.io |
| authEndpoint | /broadcasting/auth | Your auth endpoint only for Pusher |
| key | null | Your api key of Pusher App |
| cluster | null | Your cluster of Pusher App |
| auth | auth:{headers:{}} | Necesary in private an presence channel's with Authorization header |
| debug | false | Enable debug only socket.io broadcaster |
| namespace | App.Events | The namespace backend events |
    
## License

Apache License Version 2.0, January 2004
