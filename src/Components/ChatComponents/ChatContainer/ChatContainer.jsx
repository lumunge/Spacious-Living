import "./chatcontainer.css";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SendIcon from "@mui/icons-material/Send";

const ChatContainer = () => {
	const chats = [
		{
			user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
			message: "Hello",
			time: "13:01",
			sender: false,
		},
		{
			user: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
			message: "Hello",
			time: "13:01",
			sender: true,
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
			message: "Are you looking to share a space?",
			time: "13:01",
			sender: true,
		},
		{
			user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
			message: "As a matter of fact i am, do you know of any place?",
			time: "13:01",
			sender: false,
		},
		{
			user: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
			message: "Yeah, there are apartments, near x, they go for Ksh y per month, so y/2 per month if we decide to share.",
			time: "13:01",
			sender: true,
		},
		{
			user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
			message: "That's convenient, when can we meet?",
			time: "13:01",
			sender: false,
		},
		{
			user: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
			message: "Am busy at the moment maybe tommorow?",
			time: "13:01",
			sender: true,
		},
		{
			user: "https://static.billygraham.org/sites/billygraham.org/uploads/pro/2013/06/29153327/IMG_4285-Version-2-1024x682.jpg",
			message: "Sure, ",
			time: "13:01",
			sender: false,
		},
	];
	return (
		<div className="chatMainContainer">
			<div className="profileContainer">
				<p className="chatTitle">Chat With User</p>
				<div className="chatProfile">
					<div className="profileImg">
						<img
							src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg"
							alt="user_profile"
						/>
					</div>
					<div className="profileDetails">
						<p className="profileName">Susan Doe</p>
						<span className="userRank">Host</span>
					</div>
				</div>
			</div>
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
			<div className="chatDetails">
				<p className="chatsTitle">Chats</p>
				<div className="chatName">Chat 1</div>
				<div className="chatName">Chat 2</div>
				<div className="chatName">Chat 3</div>
				<div className="chatName">Chat 4</div>
			</div>
		</div>
	);
};

export default ChatContainer;
