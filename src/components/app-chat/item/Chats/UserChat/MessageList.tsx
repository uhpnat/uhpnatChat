import Image from 'next/image';
import React from 'react';

export default function MessageList({ messages }: { messages: any[] }) {
    return (
            <>
            {messages.map((message:any) => (
                <li key={message.id} className={`clear-both py-4 ${message.isSender ? 'justify-end' : ''}`}>
                    <div className={`flex gap-3 ${message.isSender ? 'flex-row-reverse' : ''}`}>
                        {/* Avatar */}
                        <div>
                            <Image
                                width={20}
                                height={20}
                                src={message.avatar || '/path/to/default-avatar.png'}
                                alt={message.name}
                                className="rounded-full h-9 w-9"
                            />
                        </div>
                        <div>
                            {/* Tên */}
                            <div
                                className={`font-medium text-gray-700 ${
                                    message.isSender ? 'text-right' : 'text-left'
                                } text-14 dark:text-gray-300`}
                            >
                                {message.name}
                            </div>
                            {/* Nội dung */}
                            <div className={`flex gap-2 mb-2 ${message.isSender ? 'justify-end' : ''}`}>
                                <div
                                    className={`relative px-5 py-3 text-gray-700 rounded-lg ${
                                        message.isSender ? 'rounded-br-none' : 'rounded-bl-none'
                                    } bg-gray-50 dark:bg-zinc-700 dark:text-gray-50`}
                                >
                                    <p className="mb-0 break-words">{message.text}</p>
                                    <p className="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300">
                                        <i className="align-middle ri-time-line"></i>{' '}
                                        <span className="align-middle">{message.time}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}</>
    );
}
