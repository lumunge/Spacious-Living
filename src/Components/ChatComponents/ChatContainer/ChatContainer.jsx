import "./chatcontainer.css";
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SendIcon from '@mui/icons-material/Send';

const ChatContainer = () => {
	const chats = [
		{
			user: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
			message: "Hello",
			time: "13:01",
			sender: true,
		},
		{
			user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
			message: "Hi",
			time: "13:01",
			sender: false,
		},
		{
			user: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
			message: "How are you doing",
			time: "13:01",
			sender: true,
		},
		{
			user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
			message: "I am doing good",
			time: "13:01",
			sender: false,
		},
        {
			user: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
			message: "How are you doing",
			time: "13:01",
			sender: true,
		},
		{
			user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
			message: "I am doing good",
			time: "13:01",
			sender: false,
		},
	];
	return (
		<div className="chatWrapper">
			<div className="chatsContainer">
				{chats.map((chat) => (
					<div className="chat">
						<div
							className={
								chat.sender
									? "messageWrapper senderWrapper"
									: "messageWrapper receiverWrapper"
							}
						>
							<div
								className={
									chat.sender
										? "userImage sender"
										: "userImage receiver"
								}
							>
								<img src={chat.user} alt="user_profile" />
							</div>
							<div
								className={
									chat.sender
										? "messageBubble senderBubble"
										: "messageBubble receiverBubble"
								}
							>
								<span
									className={
										chat.sender
											? "message sender"
											: "message receiver"
									}
								>
									{chat.message}
								</span>
							</div>
						</div>
						<div>
							<p
								className={
									chat.sender
										? "time senderTime"
										: "time receiverTime"
								}
							>
								{chat.time}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="messageInput">
                <SentimentSatisfiedIcon className="inputIcon emoji" />
				<input type="text" placeholder="Type something..." />
                <SendIcon className="inputIcon send" />
			</div>
		</div>
	);
};

export default ChatContainer;
