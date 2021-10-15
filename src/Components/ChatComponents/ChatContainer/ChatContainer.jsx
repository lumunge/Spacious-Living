const ChatContainer = () => {
    const chats = [
        {   
            user: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
            message: "Hi",
            time: "13:01",
            sender: true
        },
        {   
            user: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
            message: "Hi",
            time: "13:01",
            sender: true
        },
        {   
            user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
            message: "Hi",
            time: "13:01",
            sender: false
        },
        {   
            user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
            message: "Hi",
            time: "13:01",
            sender: false
        },
    ]
    return(
        <div className="chatWrapper">
            <div className="chatsContainer">
                {chats.map((chat) => (
                    <div className="chat">
                        <div className="sender">
                            {chat.user}
                        </div>
                        <div className="message">
                            {chat.message}
                        </div>
                        <span>{chat.time}</span>
                    </div>
                ))}
            </div>
            <div className="inputField">
                <input type="text" placeholder="Type something..." />
                <button>Send</button>
            </div>
        </div>
    )
}

export default ChatContainer;