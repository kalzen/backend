import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Settings, UserRound, Cuboid  } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Bài Viết',
        href: '/posts',
        icon: BookOpen,
    },
    {
        title: 'Danh Mục',
        href: '/categories',
        icon: Folder,
    },
    {
        title: 'Cài Đặt',
        href: '/configs',
        icon: Settings,
    }
    ,
    {
        title: 'Thành Viên',
        href: '/members',
        icon: UserRound,
    }
    ,
    {
        title: 'Slider',
        href: '/sliders',
        icon: LayoutGrid,
    },
    {
        title: 'Quản lý Block',
        href: '/blocks',
        icon: Cuboid,
    }
];

const footerNavItems: NavItem[] = [
   
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
