import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }
  public SendMsg(msg: any) {
    this.socket.emit("message", msg)
  }
  public ListMsg() {
   return this.socket.fromEvent('received').pipe(map((data)=>data))
  }
}
