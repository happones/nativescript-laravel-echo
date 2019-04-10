# NativeScript Laravel-Echo

[![npm](https://img.shields.io/npm/v/nativescript-laravel-echo.svg)](https://www.npmjs.com/package/nativescript-laravel-echo)
[![npm](https://img.shields.io/npm/dt/nativescript-laravel-echo.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-laravel-echo)

[![NPM](https://nodei.co/npm/nativescript-laravel-echo.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/nativescript-laravel-echo)

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

`$ tns plugin add nativescript-laravel-echo`

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
const TnsEcho = require('nativescript-laravel-echo').TnsEcho;

const token = 'Asdsd3dsdsTytf';//Your token

const options = {
    //....
    broadcaster: 'socket.io',// pusher,
    headers: {
        auth: {
            bearer: `Bearer ${token}`
        }
    }
}

const Echo = new TnsEcho(options)

Echo.channel('YourChannel').listen('Event', e => {
    console.dir(e)
})

//presence channel for others
const http = require('tns-core-modules/http');

http.request({
    //....
    headers: {
        //...
        'X-Socket-Id': Echo.socketId() // get socket id
    }
});
```
    
    
**TypeScript**	  
```typescript
import { TnsEcho } from 'nativescript-laravel-echo';

const token = 'Asdsd3dsdsTytf';//Your token

const options = {
    //....
    broadcaster: 'socket.io',// pusher,
    headers: {
        auth: {
            bearer: `Bearer ${token}`
        }
    }
}

this.Echo = new TnsEcho(options)

this.Echo.channel('YourChannel').listen('Event', e => {
    console.dir(e)
})

//presence channel for others
import * as http from 'tns-core-modules/http';

http.request({
    //....
    headers: {
        //...
        'X-Socket-Id': this.Echo.socketId() // get socket id
    }
})
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
| namespace | App.Events | The namespace backend events |
    
## License

Apache License Version 2.0, January 2004
