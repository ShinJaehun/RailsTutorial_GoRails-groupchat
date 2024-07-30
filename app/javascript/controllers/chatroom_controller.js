import { Controller } from "@hotwired/stimulus"
import consumer from "channels/consumer"

// Connects to data-controller="chatroom"
export default class extends Controller {
//static target = ["messages", "newMessage"] //이런거 오타 때문에 문제가 생기는거 개짜증
  static targets = ["messages", "newMessage"]

  connect() {
    //console.log('chatroom_controller.js')
    //console.log(    this.data.get("id"))
    this.subscription = consumer.subscriptions.create({channel: "ChatroomsChannel", id: this.data.get("id")}, {
      connected: this._connected.bind(this),
      disconnected: this._disconnected.bind(this),
      received: this._received.bind(this)
    })
  }

  disconnected(){
    consumer.subscriptions.remove(this.subscription)
  }

  _connected(){}

  _disconnected(){}

  _received(data){
    console.log(data)
    //if(data){
      //this.messagesTarget.insertAdjacentHTML('beforeend',
        //"<div><strong><%= #{data.username} %>:</strong><%= #{data.body} %></div>")
    //}
    if (data.message){
      this.messagesTarget.insertAdjacentHTML('beforeend', data.message)
    }
  }


  clearMessage(e) {
    console.log('enter 키가 눌렸어요.')
    //console.log(this.newMessageTarget.value)
    //e.preventDefault()
    //e.currentTarget.submit()
    this.newMessageTarget.value = ''
  }
}
//document.addEventListener("turbo:load", function() {
//  console.log('염병')
//  const target = document.querySelector("#new_message")
//  target.addEventListener("keypress", function(e){
//    console.log(e.keyCode) // enter 키는 13번
//    if (e && e.keyCode == 13) {
//      e.preventDefault()
//      e.currentTarget.submit()
//    }
//  })
//});
