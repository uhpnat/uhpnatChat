import Image from 'next/image';
import React from 'react';
import moment from 'moment';
export default function MessageList( {message,user} : any) {
    console.log(user);
    
    return (
        <li
        key={message?._id}
        className={`clear-both py-4 ${message?.sender == user?.user ? 'justify-end' : ''}`}
    >
        <div className={`flex gap-3 ${message?.sender == user?.user ? 'flex-row-reverse' : ''}`}>
            {/* Avatar */}
            <div>
                <Image
                    width={20}
                    height={20}
                    src='https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg'
                    alt={message?.message}
                    className="rounded-full h-9 w-9"
                />
            </div>
            <div>
                {/* Tên */}
                <div
                    className={`font-medium text-gray-700 ${
                        message?.sender == user?.user ? 'text-right' : 'text-left'
                    } text-14 dark:text-gray-300`}
                >
                    {/* {message.name} */}
                </div>
                {/* Nội dung */}
                <div className={`flex gap-2 mb-2 ${message?.sender == user?.user ? 'justify-end' : ''}`}>
                    <div
                        className={`relative px-5 py-3 text-gray-700 rounded-lg ${
                            message?.sender == user?.user ? 'rounded-br-none' : 'rounded-bl-none'
                        } bg-gray-50 dark:bg-zinc-700 dark:text-gray-50`}
                    >
                        <p className="mb-0 break-words">{message?.message}</p>
                        <p className="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300">
                            <i className="align-middle ri-time-line"></i>{' '}
                            <span className="align-middle">{moment(message.timestamp).format('hh:mm: A')}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </li>
    );
}
