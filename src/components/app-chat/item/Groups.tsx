import React from 'react'

export default function Groups() {
  return (
    <div className="">
    
    <div className="h-screen lg:h-auto">
        <div className="p-6">
            <div className="ltr:float-right rtl:float-left">
                <div className="relative">
                    <button type="button" className="px-4 text-lg text-gray-500 group/tag dark:text-gray-300" data-tw-toggle="modal" data-tw-target="#modal-id">
                        <i className="ri-group-line me-1 ms-0"></i>
                        <span className="absolute items-center hidden mb-6 top-8 group-hover/tag:flex ltr:-left-8 rtl:-right-8">
                            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">Create groups</span>
                            <span className="w-3 h-3 -mt-6 rotate-45 bg-black ltr:-ml-12 rtl:-mr-12"></span>
                        </span>
                    </button>
                    
                </div>
            </div>
            <h4 className="mb-6 dark:text-gray-50">Groups</h4>
            <div className="relative z-50 hidden modal" id="modal-id">
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <div className="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                    <div className="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                        <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                            <div className="group-data-[theme-color=violet]:bg-violet-800/10 group-data-[theme-color=green]:bg-green-800/10 group-data-[theme-color=red]:bg-red-800/10 group-data-[theme-color=violet]:dark:bg-zinc-700 group-data-[theme-color=red]:dark:bg-zinc-700 group-data-[theme-color=green]:dark:bg-zinc-700">
                                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-zinc-500">
                                    <h5 className="mb-0 text-gray-800 text-16 dark:text-gray-50" id="addgroup-exampleModalLabel">Create New Group</h5>
                                    <button type="button" className="absolute top-3 ltr:right-2.5 rtl:left-2.5 text-gray-400 border-transparent hover:bg-gray-50/50/50 hover:text-gray-900 rounded-lg text-sm px-2 py-1 ml-auto inline-flex items-center dark:hover:bg-zinc-600 dark:text-gray-100" data-tw-dismiss="modal">
                                        <i className="text-xl text-gray-500 mdi mdi-close dark:text-zinc-100/60"></i>
                                    </button>
                                </div>
                                <div className="p-4">
                                    <form>
                                        <div className="mb-8">
                                            <label className="block mb-2 ltr:text-left dark:text-gray-200 rtl:text-right">Group Name</label>
                                            <input type="text" className="py-1.5 bg-transparent border-gray-100 rounded placeholder:text-13 w-full focus:border-violet-500 focus:ring-0 focus:ring-offset-0 placeholder:dark:text-gray-200 dark:border-zinc-500" id="addgroupname-input" placeholder="Enter Group Name"/>
                                        </div>
                                        <div className="mb-8 ltr:text-left rtl:text-right">
                                            <label className="dark:text-gray-300 ">Group Members</label>
                                            <div className="mt-2 mb-3">
                                                <button className="group-data-[theme-color=violet]:bg-slate-200 group-data-[theme-color=green]:bg-white group-data-[theme-color=red]:bg-white border-0 btn group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 dark:text-gray-50" type="button" id="toggleButton">
                                                    Select Members
                                                </button>
                                            </div>
                                        
                                            <div className="hidden" id="collapseElement">
                                                <div className="border border-gray-100 rounded dark:border-zinc-500">
                                                    <div className="px-3 py-2 rounded bg-gray-100/50 dark:bg-zinc-600">
                                                        <h5 className="mb-0 text-base text-gray-800 dark:text-gray-50">Contacts</h5>
                                                    </div>
                                                    <div className="p-2 bg-white dark:bg-zinc-800">
                                                        <div data-simplebar className="h-[150px]">
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    A
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck1" checked/>
                                                                            <label  className="dark:text-gray-300">Albert Rodarte</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck2"/>
                                                                            <label  className="dark:text-gray-300">Allison Etter</label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                        
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    C
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck3"/>
                                                                            <label  className="dark:text-gray-300">Craig Smiley</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                </ul>
                                                            </div>
                                        
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    D
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck4"/>
                                                                            <label  className="dark:text-gray-300">Daniel Clay</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                </ul>
                                                            </div>
                                        
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    I
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck5"/>
                                                                            <label  className="dark:text-gray-300">Iris Wells</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                </ul>
                                                            </div>
                                        
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    J
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck6"/>
                                                                            <label  className="dark:text-gray-300">Juan Flakes</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck7"/>
                                                                            <label  className="dark:text-gray-300">John Hall</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck8"/>
                                                                            <label  className="dark:text-gray-300">Joy Southern</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                </ul>
                                                            </div>
                                        
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    M
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck9"/>
                                                                            <label  className="dark:text-gray-300">Michael Hinton</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck10"/>
                                                                            <label  className="dark:text-gray-300">Mary Farmer</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                </ul>
                                                            </div>
                                        
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    P
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck11"/>
                                                                            <label className="dark:text-gray-300">Phillis Griffin</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                </ul>
                                                            </div>
                                        
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    R
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck12"/>
                                                                            <label  className="dark:text-gray-300">Rocky Jackson</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                </ul>
                                                            </div>
                                        
                                                            <div>
                                                                <div className="p-3 font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                                                    S
                                                                </div>
                                        
                                                                <ul>
                                                                    <li className="px-5 py-[10px]">
                                                                        <div className="flex items-center gap-3">
                                                                            <input type="checkbox" className="border-gray-100 rounded group-data-[theme-color=violet]:bg-violet-50 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 focus:ring-1 group-data-[theme-color=violet]:focus:ring-violet-500/20 group-data-[theme-color=green]:focus:ring-green-500/20 group-data-[theme-color=red]:focus:ring-red-500/20 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=red]:checked:bg-red-500 checked:ring-1 group-data-[theme-color=red]:checked:ring-violet-500/20 focus:ring-offset-0 focus:outline-0 group-data-[theme-color=violet]:dark:border-zinc-500 group-data-[theme-color=green]:dark:border-zinc-500 group-data-[theme-color=red]:dark:border-zinc-500" id="memberCheck13"/>
                                                                            <label  className="dark:text-gray-300">Simon Velez</label>
                                                                        </div>
                                                                    </li>
                                        
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-5 ltr:text-left rtl:text-right">
                                            <label  className="block mb-2 dark:text-gray-50">Description</label>
                                            <textarea className="w-full bg-transparent border-gray-100 rounded placeholder:text-13 focus:border-violet-500 focus:ring-0 focus:ring-offset-0 dark:border-zinc-500 dark:text-gray-200 dark:placeholder:text-gray-200" id="addgroupdescription-input"  placeholder="Enter Description"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex p-4 border-t border-gray-100 ltr:justify-end dark:border-zinc-500 rtl:justify-start">
                                    <div>
                                        <button type="button" className="border-0 btn hover:underline group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500" data-tw-dismiss="modal">Close</button>
                                        <button type="button" className="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=violet]:hover:bg-violet-600 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=green]:hover:bg-green-600 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=red]:hover:bg-red-600">Create Groups</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="py-1 mt-5 mb-5 rounded group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600">
                <span className="group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 pe-1 ps-3 " id="basic-addon2">
                    <i className="text-lg text-gray-700 ri-search-line search-icon dark:text-gray-200"></i>
                </span>
                <input type="text" className="border-0 group-data-[theme-color=violet]:bg-slate-100 group-data-[theme-color=green]:bg-green-50 group-data-[theme-color=red]:bg-red-50 group-data-[theme-color=violet]:dark:bg-zinc-600 group-data-[theme-color=green]:dark:bg-zinc-600 group-data-[theme-color=red]:dark:bg-zinc-600 placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 dark:text-gray-400" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon2"/>
            </div>

            <div className="chat-message-list chat-group-list" data-simplebar>
            
            
                <ul>
                    <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                        <a href="#">
                            <div className="flex items-center">
                                <div className="ltr:mr-5 rtl:ml-5">
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                        <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                            G
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#General</h5>
                                </div>
                            </div>
                        </a>
                    </li>
            
                    <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                        <a href="#">
                            <div className="flex items-center">
                                <div className="ltr:mr-5 rtl:ml-5">
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                        <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                            R
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Reporting <span className="rtl:float-left ltr:float-right px-1.5 py-0.5 text-red-500 rounded-full bg-red-500/20 text-11">+23</span></h5>
                                </div>
                            </div>
                        </a>
                    </li>
            
                    <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                        <a href="#">
                            <div className="flex items-center">
                                <div className="ltr:mr-5 rtl:ml-5">
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                        <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                            D
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Designers</h5>
                                </div>
                            </div>
                        </a>
                    </li>
            
                    <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                        <a href="#">
                            <div className="flex items-center">
                                <div className="ltr:mr-5 rtl:ml-5">
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                        <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                            D
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Developers <span className="rtl:float-left ltr:float-right px-1.5 py-0.5 text-red-500 rounded-full bg-red-500/20 text-11">New</span></h5>
                                </div>
                            </div>
            
                        </a>
                    </li>
            
                    <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                        <a href="#">
                            <div className="flex items-center">
                                <div className="ltr:mr-5 rtl:ml-5">
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                        <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                            P
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Project-alpha</h5>
                                </div>
                            </div>
                        </a>
                    </li>
            
                    <li className="px-5 py-[15px] group-data-[theme-color=violet]:hover:bg-slate-100 group-data-[theme-color=green]:hover:bg-green-50/50 group-data-[theme-color=red]:hover:bg-red-50/50 group-data-[theme-color=violet]:dark:hover:bg-zinc-600 group-data-[theme-color=green]:dark:hover:bg-zinc-600 group-data-[theme-color=red]:dark:hover:bg-zinc-600 transition-all ease-in-out rounded">
                        <a href="#">
                            <div className="flex items-center">
                                <div className="ltr:mr-5 rtl:ml-5">
                                    <div className="flex items-center justify-center rounded-full w-9 h-9 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=red]:bg-red-500/20">
                                        <span className="font-medium group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
                                            B
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow overflow-hidden">
                                    <h5 className="mb-0 text-gray-700 truncate text-14 dark:text-gray-50">#Snacks</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
