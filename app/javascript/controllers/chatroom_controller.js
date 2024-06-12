import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="chatroom"
export default class extends Controller {
  static target = ["new_message"]

  connect() {
    console.log('chatroom_controller.js')
  }
  keypress(e) {
    console.log('enter 키가 눌렸어요.')
    e.preventDefault()
    e.currentTarget.submit()
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
