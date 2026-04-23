import { Home, LucideIcon, Package, Settings, ShoppingCart, Users } from "lucide-react";

type SidebarItem = {
    id: number
    title: string;
    path: string;
    icon: LucideIcon
};

export const sidebarItems: SidebarItem[] = [
    {
        id: 1,
        title: 'Dashboard',
        path: '/dashboard',
        icon: Home
    },
    {
        id: 2,
        title: 'Orders',
        path: '/orders',
        icon: ShoppingCart
    },
    {
        id: 3,
        title: 'Products',
        path: '/products',
        icon: Package
    },
    {
        id: 4,
        title: 'Customers',
        path: '/customers',
        icon: Users
    },
    {
        id: 5,
        title: 'Settings',
        path: '/settings',
        icon: Settings
    }
];