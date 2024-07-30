// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"


console.log("넌 뒤졌어~");
//const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
//const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//console.log(popoverList)

//document.addEventListener("turbolinks:load", function() {
//}) 이거 동작하지 않음....;;
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
import "channels"
