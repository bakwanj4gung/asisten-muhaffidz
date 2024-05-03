'use client';

import * as React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
  } from '@szhsin/react-menu';
  import '@szhsin/react-menu/dist/index.css';
import IconSidebarActive from './IconSidebarActive';
import Link from 'next/link';

export default function MiniMenu({ className="" }) {

    return (
        <div className={className}>
            <Menu 
                direction='top'
                align='center'
                arrow={true}
                menuButton={
                    <MenuButton className="w-full truncate flex gap-3 py-2 px-2 items-center transition duration-500 hover:bg-slate-100 text-sm font-semibold rounded-lg">
                        <IconSidebarActive href="/dashboard/profile" className="fas fa-user mr-1 border-2 p-2 rounded-full" />
                            Muhammad Faqih Ali
                        <IconSidebarActive href="/dashboard/profile" className="fas fa-ellipsis text-lg ms-auto" />
                    </MenuButton>}
            >   
                <MenuItem>
                    <Link href="/dashboard/profile" className='w-full'>
                        <div className='w-full flex items-center justify-between'>
                            <i className='fas fa-gear mr-auto' />
                            Edit Profile
                        </div>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <i className='fas fa-right-from-bracket mr-3'/>
                    Log out
                </MenuItem>
            </Menu>
        </div>
    );
}
