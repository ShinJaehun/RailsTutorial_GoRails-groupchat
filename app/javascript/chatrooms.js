document.addEventListener("turbo:load", function() {
  console.log('염병')
  const target = document.querySelector("#new_message")
  target.addEventListener("keypress", function(e){
    console.log(e.keyCode) // enter 키는 13번
    if (e && e.keyCode == 13) {
      e.preventDefault()
      e.currentTarget.submit()
    }
  })
});
