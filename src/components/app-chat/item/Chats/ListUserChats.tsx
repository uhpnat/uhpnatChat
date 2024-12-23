import React from 'react'
import UserChats from './UserChats'

export default function ListUserChats() {
  return (
    <div>
    <h5 className="px-6 mb-4 text-16 dark:text-gray-50">Recent</h5>

    <div className="h-[610px] px-2" data-simplebar>
        <ul className="chat-user-list">
       
        <UserChats></UserChats>

        </ul>
    </div>
</div>
  )
}
