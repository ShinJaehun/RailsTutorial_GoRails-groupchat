class MessagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_chatroom


  def create
    @message = @chatroom.messages.create(message_params)
    #message.user = current_user
    #message.save
    #redirect_to @chatroom

    #MessageRelayJob.perform_later(message)
    #ChatroomsChannel.broadcast_to("chatrooms:#{message.chatroom.id}", {

    #이게 chatrooms:chatrooms:2 뭐 이런 식으로 해석되어버림....ㅠㅠ
    #ChatroomsChannel.broadcast_to("#{message.chatroom.id}", {
      #username: message.user.username,
      #body: message.body,
      #chatroom_id: message.chatroom.id
    #})
    ChatroomsChannel.broadcast_to @chatroom, { message: render_to_string(@message) }
  end

  private

  def set_chatroom
    @chatroom = Chatroom.find(params[:chatroom_id])
  end

  def message_params
    params.require(:message).permit(:body).merge(user: current_user)
  end
end
