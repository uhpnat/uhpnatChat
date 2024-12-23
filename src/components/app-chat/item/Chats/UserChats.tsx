import Image from 'next/image';
import React from 'react'

export default function UserChats() {
    const users = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            message: "Chào bạn! Mình đang sẵn sàng",
            time: "5 phút trước",
            avatar: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
            status: "online",
        },
        {
            id: 2,
            name: "Trần Thị B",
            message: "Hình ảnh",
            time: "12 phút trước",
            avatar: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
            status: "unread",
            notifications: 2,
        },
        {
            id: 3,
            name: "Lê Minh C",
            message: "Cuộc họp tiếp theo vào ngày mai lúc 10h00",
            time: "12:01 PM",
            avatar: null,
            status: "unread",
            notifications: 1,
        },
        {
            id: 4,
            name: "Phạm Hoàng D",
            message: "Đang gõ",
            time: "04:56 PM",
            avatar: null,
            status: "typing",
        },
    ];
    

    return (
        <>
            {users.map((user) => (
                <li
                    key={user.id}
                    className={`px-5 py-[15px] transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 ${user.status === "unread"
                            ? "unread"
                            : user.status === "typing"
                                ? "typing"
                                : ""
                        }`}
                >
                    <a href="#">
                        <div className="flex">
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
                    </a>
                </li>
            ))}
            {/* <li className="unread px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div className="relative flex">
                        <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <img src="assets/images/avatar-3.jpg" className="rounded-full w-9 h-9" alt="" />
                            <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">Mark Messer</h5>
                            <p className="mb-0 text-gray-800 truncate dark:text-gray-300 text-14"><i className="align-middle ri-image-fill me-1 ms-0"></i> Images</p>
                        </div>
                        <div className="text-gray-500 text-11 dark:text-gray-300">12 min</div>
                        <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
                            <span className="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-11">02</span>
                        </div>
                    </div>
                </a>
            </li>

            <li className="unread px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div className="relative flex ">
                        <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                <span className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    D
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">Designer</h5>
                            <p className="mb-0 text-gray-800 truncate dark:text-gray-300 text-14">Next meeting tomorrow 10.00AM</p>
                        </div>
                        <div className="text-gray-500 text-11 dark:text-gray-300">12:01 PM</div>
                        <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
                            <span className="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-11">01</span>
                        </div>
                    </div>
                </a>
            </li>*/}

            <li className="typing px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 dark:hover:border-zinc-700">
                <a href="#">
                    <div className="flex">
                        <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                <span className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                    A
                                </span>
                            </div>
                            <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                        </div>
                        <div className="flex-grow overflow-hidden ">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">Albert Rodarte</h5>
                            <div className="flex items-end gap-2 mb-0 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 text-14">
                                <p className="mb-0">typing</p>

                                <div className="animate-typing flex gap-0.5">
                                    <p className="w-1 h-1 mb-1 rounded-full dot group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 animate-bounce"></p>
                                    <p className="w-1 h-1 mb-1 rounded-full dot-2 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 "></p>
                                    <p className="w-1 h-1 mb-1 rounded-full dot-3 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 animate-bounce"></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-11 dark:text-gray-300">04:56 PM</div>
                    </div>
                </a>
            </li>
        </>
    )
}
