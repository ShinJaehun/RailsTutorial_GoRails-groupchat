import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomsChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
  }
});
