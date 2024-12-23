import Image from 'next/image'
import React from 'react'

export default function UserChat() {
    return (
        <div className="w-full overflow-hidden transition-all duration-150 bg-white user-chat dark:bg-zinc-800">
            <div className="lg:flex">

                <div className="relative w-full overflow-hidden ">
                    <div className="p-4 border-b border-gray-100 lg:p-6 dark:border-zinc-600">
                        <div className="grid items-center grid-cols-12">
                            <div className="col-span-8 sm:col-span-4">
                                <div className="flex items-center">
                                    <div className="block mr-2 rtl:ml-2 lg:hidden">
                                        <a href="javascript: void(0);" className="p-2 text-gray-500 user-chat-remove text-16"><i className="ri-arrow-left-s-line"></i></a>
                                    </div>
                                    <div className="rtl:ml-3 mr-3">
                                        <Image width={20} height={20} src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" className="rounded-full h-9 w-9" alt="" />
                                    </div>
                                    <div className="flex-grow overflow-hidden">
                                        <h5 className="mb-0 truncate text-16 block rtl:hidden"><a href="#" className="text-gray-800 dark:text-gray-50">Võ Tấn Phú</a> <i className="text-green-500 ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i></h5>
                                        <h5 className="mb-0 truncate text-16 rtl:block hidden"><i className="text-green-500 ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i> <a href="#" className="text-gray-800 dark:text-gray-50">Võ Tấn Phú</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 sm:col-span-8">
                                <ul className="flex items-center justify-end lg:gap-4">
                                    <li className="px-3">
                                        <div className="relative dropstart">
                                            <button className="p-0 text-xl text-gray-500 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton10" data-tw-auto-close="outside">
                                                <i className="ri-search-line"></i>
                                            </button>
                                            <ul className="absolute z-50 hidden mt-2 text-left list-none bg-white border rounded-lg shadow-lg w-fit border-gray-50 dropdown-menu top-8 dark:bg-zinc-700 bg-clip-padding dark:border-gray-700" aria-labelledby="dropdownMenuButton10">
                                                <li className="p-2">
                                                    <input type="text" className="text-gray-500 border-0 rounded bg-gray-50 placeholder:text-14 text-14 dark:bg-zinc-600 dark:text-gray-300 placeholder:dark:text-gray-300 focus:ring-0" placeholder="Search.." />
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <button type="button" className="hidden text-xl text-gray-500 border-0 btn dark:text-gray-300 lg:block" data-tw-toggle="modal" data-tw-target="#audiCallModal">
                                            <i className="ri-phone-line"></i>
                                        </button>
                                    </li>

                                    <li className="relative z-50 hidden modal" id="audiCallModal">
                                        <div className="fixed inset-0 z-50 overflow-hidden">
                                            <div className="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                                            <div className="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                                                <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                                                    <div className="group-data-[theme-color=violet]:bg-violet-800/10 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                        <div className="p-4">
                                                            <div className="p-6">
                                                                <div className="p-4 text-center">
                                                                    <div className="mb-6">
                                                                        <img src="assets/images/avatar-4.jpg" alt="" className="w-24 h-24 mx-auto rounded-full" />
                                                                    </div>

                                                                    <h5 className="mb-1 text-gray-800 truncate dark:text-gray-50">Doris Brown</h5>
                                                                    <p className="text-gray-500 dark:text-gray-300">Start Audio Call</p>

                                                                    <div className="mt-10">
                                                                        <ul className="flex justify-center mb-1">
                                                                            <li className="px-2 ml-0 mr-2">
                                                                                <button type="button" className="w-12 h-12 text-white bg-red-500 border-transparent rounded-full btn hover:bg-red-600" data-tw-dismiss="modal">
                                                                                    <span className="text-xl bg-transparent">
                                                                                        <i className="ri-close-fill"></i>
                                                                                    </span>
                                                                                </button>
                                                                            </li>
                                                                            <li className="px-2">
                                                                                <button type="button" className="w-12 h-12 text-white bg-green-500 border-transparent rounded-full btn hover:bg-green-600">
                                                                                    <span className="text-xl bg-transparent">
                                                                                        <i className="ri-phone-fill"></i>
                                                                                    </span>
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <button type="button" className="hidden text-xl text-gray-500 border-0 btn dark:text-gray-300 lg:block" data-tw-toggle="modal" data-tw-target="#videoCallModal">
                                            <i className="ri-vidicon-line"></i>
                                        </button>
                                    </li>

                                    <li className="relative z-50 hidden modal dark:text-gray-300" id="videoCallModal">
                                        <div className="fixed inset-0 z-50 overflow-hidden">
                                            <div className="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                                            <div className="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                                                <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                                                    <div className="group-data-[theme-color=violet]:bg-violet-800/10 group-data-[theme-color=green]:bg-green-50/50 group-data-[theme-color=red]:bg-red-50/50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                                                        <div className="p-4">
                                                            <div className="p-6">
                                                                <div className="p-4 text-center">
                                                                    <div className="mb-6">
                                                                        <img src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="" className="w-24 h-24 mx-auto rounded-full" />
                                                                    </div>

                                                                    <h5 className="mb-1 truncate dark:text-gray-50">Doris Brown</h5>
                                                                    <p className="text-gray-500 dark:text-gray-300">Start Video Call</p>

                                                                    <div className="mt-10">
                                                                        <ul className="flex justify-center mb-1">
                                                                            <li className="px-2 ml-0 mr-2">
                                                                                <button type="button" className="w-12 h-12 text-white bg-red-500 border-transparent rounded-full btn hover:bg-red-600" data-tw-dismiss="modal">
                                                                                    <span className="text-xl bg-transparent">
                                                                                        <i className="ri-close-fill"></i>
                                                                                    </span>
                                                                                </button>
                                                                            </li>
                                                                            <li className="px-2">
                                                                                <button type="button" className="w-12 h-12 text-white bg-green-500 border-transparent rounded-full btn hover:bg-green-600">
                                                                                    <span className="text-xl bg-transparent">
                                                                                        <i className="ri-vidicon-fill"></i>
                                                                                    </span>
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="px-3">
                                        <a href="#" className="hidden text-gray-500 dark:text-gray-300 lg:block profileTab">
                                            <i className="text-xl ri-group-line"></i>
                                        </a>
                                    </li>

                                    <li className="px-3">
                                        <div className="relative dropdown">
                                            <button className="p-0 text-xl text-gray-500 border-0 btn dropdown-toggle dark:text-gray-300" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton11">
                                                <i className="ri-more-fill"></i>
                                            </button>
                                            <ul className="absolute z-50 hidden w-40 py-2 mx-4 mt-2 text-left list-none bg-white border rounded shadow-lg -right-4 border-gray-50 dropdown-menu top-8 dark:bg-zinc-600 bg-clip-padding dark:border-gray-600/50 rtl:-left-5" aria-labelledby="dropdownMenuButton11">
                                                <li className="block lg:hidden">
                                                    <a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent profileTab dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 text-left rtl:text-right" href="#">View profile <i className="text-gray-500 rtl:float-left float-right dark:text-gray-300 ri-user-2-line text-16"></i></a>
                                                </li>
                                                <li className="block lg:hidden"><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 text-left rtl:text-right" href="#" data-tw-toggle="modal" data-tw-target="#audiCallModal">Audio <i className="text-gray-500 rtl:float-left float-right dark:text-gray-300 ri-phone-line text-16"></i></a>
                                                </li>
                                                <li className="block lg:hidden"><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 text-left rtl:text-right" href="#" data-tw-toggle="modal" data-tw-target="#videoCallModal">Video <i className="text-gray-500 rtl:float-left float-right dark:text-gray-300 ri-vidicon-line text-16"></i></a>
                                                </li>
                                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 text-left rtl:text-right" href="#">Archive <i className="text-gray-500 rtl:float-left float-right dark:text-gray-300 ri-archive-line text-16"></i></a>
                                                </li>
                                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 text-left rtl:text-right" href="#">Muted <i className="text-gray-500 rtl:float-left float-right dark:text-gray-300 ri-volume-mute-line text-16"></i></a>
                                                </li>
                                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 dark:hover:bg-zinc-700 text-left rtl:text-right" href="#">Delete <i className="text-gray-500 rtl:float-left float-right dark:text-gray-300 ri-delete-bin-line text-16"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="h-[80vh] p-4 lg:p-6" data-simplebar>

                        <ul className="mb-0">
                            <li className="clear-both py-4">
                                <div className="relative mt-3 mb-6 text-center">
                                    <div className="before:content-['] before:absolute before:w-full before:h-[1px] before:left-0 before:right-0 before:bg-gray-50 before:top-[10px] dark:before:bg-zinc-600"></div>
                                    <span className="relative bg-gray-50 text-13 py-[6px] px-3 rounded dark:bg-zinc-600 dark:text-gray-50">Hôm nay</span>
                                </div>
                            </li>
                            <li className="clear-both py-4">
                                <div className="flex  gap-3">
                                    <div>
                                        <Image width={20} height={20} src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="" className="rounded-full h-9 w-9" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-700 rtl:text-left text-14 dark:text-gray-300">Nguyễn Văn A</div>
                                        <div className="flex gap-2 mb-2 justify-end rtl:justify-start">
                                            <div className="relative order-2 px-5 py-3 text-gray-700 rounded-lg rounded-br-none rtl:rounded-bl-none bg-gray-50 dark:bg-zinc-700 dark:text-gray-50">
                                                <p className="mb-0 break-words">
                                                    ?
                                                </p>
                                                <p className="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300"><i className="align-middle ri-time-line"></i> <span className="align-middle">10:02</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="clear-both py-4">
                                <div className="flex  gap-3  flex-row-reverse">
                                    <div>
                                       <Image width={20} height={20} src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="" className="rounded-full h-9 w-9" />
                                    </div>
                                    <div>

                                        <div className="font-medium text-gray-700 text-right text-14 dark:text-gray-300">Võ Tấn Phú</div>
                                        <div className="flex gap-2 mb-2 ">
                                            <div className="relative order-2 px-5 py-3 text-gray-700 rounded-lg rounded-br-none rtl:rounded-bl-none bg-gray-50 dark:bg-zinc-700 dark:text-gray-50">
                                                <p className="mb-0">
                                                    Good morning, How are you? What about our next meeting?
                                                </p>
                                                <p className="mt-1 mb-0 text-xs text-left text-gray-500 dark:text-gray-300"><i className="align-middle ri-time-line"></i> <span className="align-middle">10:02</span></p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="z-40 w-full p-6 mb-0 bg-white border-t lg:mb-1 border-gray-50 dark:bg-zinc-800 dark:border-zinc-700">

                        <div className="flex gap-2">

                            <div className="flex-grow">
                                <input type="text" className="w-full border-transparent rounded bg-gray-50 placeholder:text-14 text-14 dark:bg-zinc-700 dark:placeholder:text-gray-300 dark:text-gray-300" placeholder="Enter Message..." />
                            </div>
                            <div>
                                <div>
                                    <ul className="mb-0">
                                        <li className="inline-block" title="Emoji">
                                            <button type="button" className="border-transparent group/tooltip btn relative group-data-[theme-color=violet]:dark:text-violet-200 group-data-[theme-color=green]:dark:text-green-200 group-data-[theme-color=red]:dark:text-red-200 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 text-16">
                                                <div className="absolute items-center hidden -top-10 -left-2 group-hover/tooltip:flex rtl:-right-2">
                                                    <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Emoji</span>
                                                </div>
                                                <i className="ri-emotion-happy-line"></i>
                                            </button>
                                        </li>
                                        <li className="inline-block" title="Attached File">
                                            <button type="button" className="border-transparent btn group/tooltip group-data-[theme-color=violet]:dark:text-violet-200 group-data-[theme-color=green]:dark:text-green-200 group-data-[theme-color=red]:dark:text-red-200 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 text-16">
                                                <div className="absolute items-center hidden -top-10 -left-2 group-hover/tooltip:flex rtl:-right-2">
                                                    <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                                                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Attached File</span>
                                                </div>
                                                <i className="ri-attachment-line"></i>
                                            </button>
                                        </li>
                                        <li className="inline-block">
                                            <button type="submit" className="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=violet]:hover:bg-violet-600 group-data-[theme-color=green]:hover:bg-green-600">
                                                <i className="ri-send-plane-2-fill"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="user-profile-sidebar h-[100vh] bg-white shadow overflow-y-hidden mb-[85px] lg:mb-0 group-data-[theme-color=violet]:dark:bg-zinc-800 border-l-4 border-gray-50 dark:border-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-700 group-data-[theme-color=red]:dark:bg-zinc-700 absolute xl:relative top-0 bottom-0" >

                    <div className="px-6 pt-6">
                        <div className="text-end">
                            <button type="button" className="text-2xl text-gray-500 border-0 btn dark:text-gray-200" id="user-profile-hide">
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    </div>

                    <div className="p-6 text-center border-b border-gray-100 dark:border-zinc-600">
                        <div className="mb-4">
                            <img src="assets/images/avatar-1.jpg" className="w-24 h-24 p-1 mx-auto border border-gray-100 rounded-full dark:border-zinc-800" alt="" />
                        </div>

                        <h5 className="mb-1 text-16 dark:text-gray-50">Doris Brown</h5>
                        <h5 className="mb-0 truncate text-14 block rtl:hidden"><a href="#" className="text-gray-500 dark:text-gray-50"><i className="text-green-500 ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i> Active</a></h5>
                        <h5 className="mb-0 truncate text-14 hidden rtl:block"><a href="#" className="text-gray-500 dark:text-gray-50">Active <i className="text-green-500 ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i></a></h5>
                    </div>

                    <div className="p-6 h-[550px]" data-simplebar>
                        <div>
                            <p className="mb-6 text-gray-500 dark:text-gray-300">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                        </div>

                        <div data-tw-accordion="collapse">
                            <div className="text-gray-700 accordion-item">
                                <h2>
                                    <button type="button" className="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded-t accordion-header group active dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600">
                                        <span className="m-0 text-[14px] dark:text-gray-50 font-semibold block rtl:hidden">
                                            <i className="mr-2 align-middle ri-user-2-line d-inline-block"></i> About
                                        </span>
                                        <span className="m-0 text-[14px] dark:text-gray-50 font-semibold hidden rtl:block">
                                            About <i className="ml-2 align-middle ri-user-2-line d-inline-block"></i>
                                        </span>
                                        <i className="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                                    </button>
                                </h2>

                                <div className="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                    <div className="p-5">
                                        <div>
                                            <p className="mb-1 text-gray-500 dark:text-gray-300">Name</p>
                                            <h5 className="text-sm dark:text-gray-50">Doris Brown</h5>
                                        </div>
                                        <div className="mt-5">
                                            <p className="mb-1 text-gray-500 dark:text-gray-300">Email</p>
                                            <h5 className="text-sm dark:text-gray-50">adc@123.com</h5>
                                        </div>
                                        <div className="mt-5">
                                            <p className="mb-1 text-gray-500 dark:text-gray-300">Time</p>
                                            <h5 className="text-sm dark:text-gray-50">11:40 AM</h5>
                                        </div>
                                        <div className="mt-5">
                                            <p className="mb-1 text-gray-500 dark:text-gray-300">Location</p>
                                            <h5 className="text-sm dark:text-gray-50">California, USA</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
