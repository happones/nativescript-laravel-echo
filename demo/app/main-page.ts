import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onTap(args) {
    let page = args.object;
    page.bindingContext.connect();
}

export function onGetSocketId(args) {
    let page = args.object;
    let socketId = page.bindingContext.Echo.socketId();
    alert(socketId);
}
