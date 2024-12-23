import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function UserChats({users,onSelectUser }:any) {
  
    

    return (
        <>
            {users.map((user:any) => (
                <li
                    key={user.id}
                    onClick={() => onSelectUser(user)}
                    className={`px-5 py-[15px] transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 ${user.status === "unread"
                            ? "unread"
                            : user.status === "typing"
                                ? "typing"
                                : ""
                        }`}
                >
                        <div className="flex cursor-pointer">
                            <div className="relative self-center ltr:mr-3 rtl:ml-3">
                                {user.avatar ? (
                                    <Image width={20} height={20}
                                        src={user.avatar}
                                        className="rounded-full w-9 h-9"
                                        alt={user.name}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 bg-gray-200">
                                        <span className="text-gray-600">{user.name[0]}</span>
                                    </div>
                                )}
                                {user.status === "typing" && (
                                    <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                                )}
                                
                                <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                            </div>

                            <div className="flex-grow overflow-hidden ml-2">
                                <h5 className="mb-1 text-base truncate dark:text-gray-50"> {user.name}</h5>
                                <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">{user.message}</p>

                            </div>
                            <div className="text-gray-500 text-11 dark:text-gray-300 ml-auto w-auto flex-shrink-0"> {user.time}</div>
                            
                        </div>
                </li>
            ))}

        </>
    )
}
