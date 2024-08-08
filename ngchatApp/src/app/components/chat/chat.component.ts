import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faXmark, faMessage } from '@fortawesome/free-solid-svg-icons';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msg: string = "";
  msglist: any = [];
  faCoffee: any = faMessage;
  faplane = faPaperPlane;
  len = 2;
  show: any = false;
  prop: any = "out";
  constructor(private service: ChatService) { }
  ngOnInit(): void {
    this.Listmsg();
  }
  sendMsg() {
    var time = new Date();
    var fulltime = `${time.getHours()}:${time.getMinutes()}`
    this.service.SendMsg(this.msg);
    this.msglist.push({ msg: this.msg, type: "sender", time: fulltime });
    this.msg = "";
  }
  Listmsg() {
    this.service.ListMsg().subscribe((data: any) => {
      console.log("data", data);
      this.msglist.push({ msg: data.data, type: "receiver", time: data.time })
    })
  }
  onclick() {
    this.faCoffee = this.show ? faMessage : faXmark;
    this.show = !this.show;
  }
}
