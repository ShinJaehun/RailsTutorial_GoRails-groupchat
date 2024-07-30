class ChatroomsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stop_all_streams
    current_user.chatrooms.each do |chatroom|
      stream_for chatroom #오히려 이게 더 깔끔했따... 굳이 이렇게 string을 사용하지 않아도 되는 듯
      #아마 난수가 발생해서 각 chatroom channel을 구분하는 듯?
      #stream_from "chatrooms:#{chatroom.id}"
    end
    #
    #생각대로 동작하지 않음: params[:id]가 현재 들어와 있는 chatroom id일텐데...
    #이게 그냥 null 상태로 존재할 때가 많음.... 그와 관련한 connection은 전부 다 통신불가이고...
    #puts '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
    #puts params
    #puts '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
    #@chatroom_user = current_user.chatroom_users.find_by(chatroom_id: params[:id])
    #@chatroom = @chatroom_user.channel
    #stream_for @chatroom

  end

  def unsubscribed
    stop_all_streams
  end
end
