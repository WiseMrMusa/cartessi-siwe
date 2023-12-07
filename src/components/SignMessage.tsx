import { useRef } from "react";
import { useSignMessage } from "wagmi";

export const SignMessage = () => {
    const messageRef = useRef<string | null>(null);
    const { data: signMessageData, signMessage, variables } = useSignMessage()
    const handleSignMessage = () => {
        const message = messageRef.current ?? " ";
        signMessage( { message } )
    }
    return(
        <div className="ring-1 ring-slate-600 w-3/4 mt-20 overflow-hidden">
        <div className="flex flex-col rounded-md ">

        <p>Write the message you want to sign here:</p>
        <input
            className="ring-1 ring-slate-400 w-full p-4 focus:outline-none"
            type="text"
            onChange={(e) => messageRef.current = e.target.value as unknown as string} 
            >
        </input>
            <button
                className="bg-slate-700 text-white p-4 "
            onClick={() => handleSignMessage()}>
            Sign Message
        </button>
            </div>

        {
            signMessageData ? (
            <div className=""> 
                <p>Message: {variables?.message}</p>
                <p className="">Signature: {signMessageData}</p>
            </div>
            ) : null
        }
        </div>
    )
}