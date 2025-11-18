'use client';

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

// SidebarLink component to handle active states
const SidebarLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <div className={`px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-200'}`}>
                {children}
            </div>
        </Link>
    );
};

export default function AdminLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();

    // Don't show layout on the login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        router.push("/admin/login");
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md flex flex-col p-4">
                <div className="text-center py-4 mb-4 border-b">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
                </div>

                <nav className="flex-grow space-y-2">
                    <SidebarLink href="/admin/dashboard">📊 Dashboard</SidebarLink>
                    <SidebarLink href="/admin/complaints">📩 Complaints</SidebarLink>
                    <SidebarLink href="/admin/manage-work">🏗️ Manage Work</SidebarLink>
                    <SidebarLink href="/admin/add-work">➕ Add New Work</SidebarLink>
                </nav>

                <div className="mt-4">
                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 lg:p-10">
                {children}
            </main>
        </div>
    );
}
