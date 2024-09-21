import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [LiveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // Api polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(15) + "👍",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (LiveMessage.trim()) { // avoid empty messages to be send
      dispatch(
        addMessage({
          name: "Ankish Sharma", // You can dynamically replace this with user input or authentication data
          message: LiveMessage,
        })
      );
      setLiveMessage(""); // Clear the input field after sending
    }
  };

  return (
    <>
      <div className="ml-1 p-1 border-2 border-black h-[500px] bg-slate-100 rounded-lg overflow-y-scroll">
        <div>
          <h2 className="font-bold">Live Chat</h2>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="border border-black p-1 ml-1 w-full mt-1 rounded-lg"
          placeholder="Comment"
          type="text"
          value={LiveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-600 rounded-lg mt-1 ml-[1px] px-1 font-bold"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
