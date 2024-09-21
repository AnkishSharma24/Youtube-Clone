
const ChatMessage = ({name, message})=>{

    return(
        <div className="flex items-center mt-2 ">
            <img 
            className="h-[30px] w-[30px]  mt-3 rounded-[50%] border border-black mr-1" 
            src="https://logowik.com/content/uploads/images/discord-new-20218785.jpg" 
            alt="user-logo">
            </img>
            <span className="mt-2 font-bold px-2">{name }</span>
            <span className="mt-2">{message}</span>
        </div>
    )

}

export default ChatMessage;