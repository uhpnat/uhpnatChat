import Image from 'next/image'
import React from 'react'
import ListUserChats from './Chats/ListUserChats'

export default function Chats({children}:any) {
  return (
    <div className="">
    <div>
        <div className="px-6 pt-6">
            <h4 className="mb-0 text-gray-700 dark:text-gray-50">Chats</h4>
    
            <div className="py-1 mt-5 mb-5 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                <span className="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 pe-1 ps-3 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600" id="basic-addon1">
                    <i className="text-lg text-gray-400 ri-search-line search-icon dark:text-gray-200"></i>
                </span>
                <input type="text" className="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-gray-400" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon1"/>
            </div>
        </div>
    
        <div className="px-6 pb-6" dir="ltr">
        
            <div className="owl-carousel owl-theme" id="user-status-carousel">
                <div className="text-center">
                    <a href="#" className="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                        <div className="absolute inset-0 text-center">
                            <img src="assets/images/avatar-2.jpg" alt="user-img" className="mx-auto rounded-full w-9 h-9"/>
                            <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                        </div>
        
                        <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">Patrick</h5>
                    </a>
                </div>
                <div className="text-center">
                    <a href="#" className="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                        <div className="absolute inset-0 block text-center">
                            <img src="assets/images/avatar-4.jpg" alt="user-img" className="mx-auto rounded-full w-9 h-9"/>
                            <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                        </div>
        
                        <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">Doris</h5>
                    </a>
                </div>
        
                <div className="text-center">
                    <a href="#" className="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                        <div className="absolute inset-0 block text-center">
                            <img src="assets/images/avatar-5.jpg" alt="user-img" className="mx-auto rounded-full w-9 h-9"/>
                            <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                        </div>
        
                        <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">Emily</h5>
                    </a>
                </div>
        
                <div className="text-center">
                    <a href="#" className="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                        <div className="absolute inset-0 block text-center">
                            <img src="assets/images/avatar-6.jpg" alt="user-img" className="mx-auto rounded-full w-9 h-9"/>
                            <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                        </div>
        
                        <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">Steve</h5>
                    </a>
                </div>
        
                <div className="text-center">
                    <a href="#" className="block p-2 mt-4 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                        <div className="absolute inset-0 block mx-auto rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                            <span className="font-medium leading-9 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                T
                            </span>
                            <span className="absolute w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full top-7 lg:right-1 dark:border-zinc-600"></span>
                        </div>
                        <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">Teresa</h5>
                    </a>
                </div>
        
            </div>
        </div>
        {children}
       
    </div>

</div>

  )
}
