'use client'

import { useChat, Message } from "ai/react"



export default function ExplanationComponent() {
    // usechat -> handles messages for us, user input, handling user submits, etc.
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat()

    // console.log(input)
    return (
        <div>
            {/* Text Messages */}
            {/* {messages.map(message => <p key={message.id}>{message.content}</p>)} */}
            {messages.map((message: Message) => {
                return (
                    <div className="w-full" key={message.id}>
                        {/* Message (Formatting) */}

                        {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                            if (currentTextBlocks === "") {
                                return (
                                    <p key={message.id + index}>&nbsp;</p>
                                )
                            } else {
                                return (
                                    <div className="w-full grid grid-cols-1 " key={message.id}>
                                        {
                                            message.role == 'user'
                                                ?
                                                <></>
                                                :
                                                <p className="text-md text-black bg-green w-2/3 justify-self-start mt-2" key={message.id + index}>{currentTextBlocks}</p>
                                        }
                                    </div>
                                )
                            }
                        })}
                    </div>

                )
            })}
            <div className="h-full p-12">

            <form className="mx-24 mb-4 fixed inset-x-0 bottom-0" onSubmit={handleSubmit}>
                {/* <p>Messages</p> */}
                <input
                    className="mt-2 w-full bg-slate-800 p-2"
                    placeholder={'ask something'}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="rounded-md bg-[#041C32] border-2 border-blue-600 hover:bg-blue-600  transition-all p-2 mt-2">Send Message</button>
            </form>
            </div>


        </div>
    )
}   