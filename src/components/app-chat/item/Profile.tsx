import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <div>
        <div className="">
            <div>
                <div className="px-6 pt-6">
                    <div className="ltr:float-right rtl:float-left">
                        <div className="relative flex-shrink-0 dropdown">
                            <button className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButtonA">
                                <i className="text-lg ri-more-2-fill"></i>
                            </button>
                            <ul className="absolute z-50 block w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:right-auto rtl:left-0 ltr:left-auto ltr:right-0 my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600" aria-labelledby="dropdownMenuButtonA">
                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Action</a>
                                </li>
                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Another action</a>
                                </li>
                                <li className="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="mb-0 text-gray-700 dark:text-gray-50">My Profile</h4>
                </div>
            
                <div className="p-6 text-center border-b border-gray-100 dark:border-zinc-600">
                    <div className="mb-4">
                        <Image width={200} height={100} src="/assets/images/avatar-1.jpg" className="w-24 h-24 p-1 mx-auto border border-gray-100 rounded-full dark:border-zinc-800" alt=""/>
                    </div>
            
                    <h5 className="mb-1 text-16 dark:text-gray-50">Patricia Smith</h5>
                    
                    <h5 className="mb-0 truncate text-14 ltr:block rtl:hidden"><a href="#" className="text-gray-500 dark:text-gray-50"><i className="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i> Active</a></h5>
                    <h5 className="mb-0 truncate text-14 ltr:hidden rtl:block"><a href="#" className="text-gray-500 dark:text-gray-50">Active <i className="text-green-500 ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10 "></i></a></h5>
                </div>
                <div className="p-6 h-[550px]" data-simplebar>
                    <div>
                        <p className="mb-6 text-gray-500 dark:text-gray-300">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                    </div>
            
                    <div data-tw-accordion="collapse">
                        <div className="text-gray-700 accordion-item">
                            <h2>
                                <button type="button" className="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded-t accordion-header group active dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600">
                                    <span className="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:block rtl:hidden">
                                        <i className="mr-2 align-middle ri-user-2-line d-inline-block"></i> About
                                    </span>
                                    <span className="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:hidden rtl:block">
                                         About <i className="ml-2 align-middle ri-user-2-line d-inline-block"></i>
                                    </span>
                                    <i className="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                                </button>
                            </h2>
            
                            <div className="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                <div className="p-5">
                                    <div>
                                        <p className="mb-1 text-gray-500 dark:text-gray-300">Name</p>
                                        <h5 className="text-sm dark:text-gray-50">Patricia Smith</h5>
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
            
                        <div className="mt-2 text-gray-700 accordion-item">
                            <h2>
                                <button type="button" className="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded accordion-header group dark:border-b-zinc-600 dark:bg-zinc-600 dark:border-zinc-600">
                                    <span className="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:block rtl:hidden">
                                        <i className="mr-2 align-middle ri-attachment-line d-inline-block"></i> Attached Files
                                    </span>
                                    <span className="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:hidden rtl:block">
                                         Attached Files <i className="ml-2 align-middle ri-attachment-line d-inline-block"></i>
                                    </span>
                                    <i className="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                                </button>
                            </h2>
                            <div className="hidden bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                                <div className="p-5">
                                    <div className="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                <div className="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                    <i className="ri-file-text-fill"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="text-start">
                                                    <h5 className="mb-1 text-sm dark:text-gray-50">Admin-A.zip</h5>
                                                    <p className="mb-0 text-gray-500 text-13 dark:text-gray-300">12.5 MB</p>
                                                </div>
                                            </div>
            
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <ul className="flex items-center gap-3 mb-0 text-lg">
                                                    <li>
                                                        <a href="#" className="px-1 text-gray-500 dark:text-gray-300">
                                                            <i className="ri-download-2-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="relative flex-shrink-0 dropstart">
                                                        <a href="#!" className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton23">
                                                            <i className="text-lg ri-more-fill"></i>
                                                        </a>
                                                        <ul className="absolute z-50 block w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600" aria-labelledby="dropdownMenuButton23">
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Action</a>
                                                            </li>
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Another action</a>
                                                            </li>
                                                            <li className="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                <div className="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                    <i className="ri-file-text-fill"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="text-start">
                                                    <h5 className="mb-1 text-sm dark:text-gray-50">Image-1.jpg</h5>
                                                    <p className="mb-0 text-gray-500 text-13 dark:text-gray-300">4.2 MB</p>
                                                </div>
                                            </div>
                                    
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <ul className="flex items-center gap-3 mb-0 text-lg">
                                                    <li>
                                                        <a href="#" className="px-1 text-gray-500 dark:text-gray-300">
                                                            <i className="ri-download-2-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="relative flex-shrink-0 dropstart">
                                                        <a href="#!" className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton2">
                                                            <i className="text-lg ri-more-fill"></i>
                                                        </a>
                                                        <ul className="absolute z-50 block w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600" aria-labelledby="dropdownMenuButton2">
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Action</a>
                                                            </li>
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Another action</a>
                                                            </li>
                                                            <li className="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                <div className="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                    <i className="ri-file-text-fill"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="text-start">
                                                    <h5 className="mb-1 text-sm dark:text-gray-50">Image-2.jpg</h5>
                                                    <p className="mb-0 text-gray-500 text-13 dark:text-gray-300">3.1 MB</p>
                                                </div>
                                            </div>
                                    
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <ul className="flex items-center gap-3 mb-0 text-lg">
                                                    <li>
                                                        <a href="#" className="px-1 text-gray-500 dark:text-gray-300">
                                                            <i className="ri-download-2-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="relative flex-shrink-0 dropstart">
                                                        <a href="#!" className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton3">
                                                            <i className="text-lg ri-more-fill"></i>
                                                        </a>
                                                        <ul className="absolute z-50 block w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600" aria-labelledby="dropdownMenuButton3">
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Action</a>
                                                            </li>
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Another action</a>
                                                            </li>
                                                            <li className="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Delete</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 mb-2 border rounded border-gray-100/80 dark:bg-zinc-800 dark:border-transparent">
                                        <div className="flex items-center">
                                            <div className="flex items-center justify-center w-10 h-10 rounded ltr:mr-3 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20 rtl:ml-3">
                                                <div className="text-xl rounded-lg group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500 avatar-title ">
                                                    <i className="ri-file-text-fill"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="text-start">
                                                    <h5 className="mb-1 text-sm dark:text-gray-50">Landing-A.zip</h5>
                                                    <p className="mb-0 text-gray-500 text-13 dark:text-gray-300">6.7 MB</p>
                                                </div>
                                            </div>
                                    
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <ul className="flex items-center gap-3 mb-0 text-lg">
                                                    <li>
                                                        <a href="#" className="px-1 text-gray-500 dark:text-gray-300">
                                                            <i className="ri-download-2-line"></i>
                                                        </a>
                                                    </li>
                                                    <li className="relative flex-shrink-0 dropstart">
                                                        <a href="#!" className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" data-bs-toggle="dropdown" id="dropdownMenuButton4">
                                                            <i className="text-lg ri-more-fill"></i>
                                                        </a>
                                                        <ul className="absolute z-50 block w-40 py-2 text-left list-none bg-white border border-transparent rounded shadow-lg rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto my-7 dropdown-menu bg-clip-padding dark:bg-zinc-700 dark:shadow-sm dark:border-zinc-600" aria-labelledby="dropdownMenuButton4">
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Action</a>
                                                            </li>
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Another action</a>
                                                            </li>
                                                            <li className="my-2 border-b border-gray-100/20 dark:border-zinc-600"></li>
                                                            <li><a className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Delete</a>
                                                            </li>
                                                        </ul>
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
            </div>``
        </div>
    </div>
  )
}
