import { Observable } from 'tns-core-modules/data/observable';
import { LaravelEcho } from 'nativescript-laravel-echo';

export class HelloWorldModel extends Observable {
  public message: string;
  private laravelEcho: LaravelEcho;

  constructor() {
    super();

    this.laravelEcho = new LaravelEcho();
    this.message = this.laravelEcho.message;
  }
}
