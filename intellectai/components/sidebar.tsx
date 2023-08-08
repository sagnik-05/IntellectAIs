"use client"
import { cn } from "@/lib/utils";

import { Home, Settings } from "lucide-react";
import { Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const routes = [
        {
            icon: Home,
            href: "/",
            label: "Home",
            pro: false
        },
        {
            icon: Plus,
            href: "/companion/new",
            label: "Create",
            pro: true
        },
        {
            icon: Settings,
            href: "/settings",
            label: "settings",
            pro: false
        },

    ];
    const onNavigate = (url: string, pro: boolean) =>{
        return router.push(url)
    }
    return ( 
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
            <div className="flex flex-1 p-3 justify-center">
                <div className="space-y-2">
                    {routes.map((route)=>(
                       <div 
                       onClick={()=>onNavigate(route.href, route.pro)}   
                       key={route.href}
                       className={cn("p-3 text-muted-foreground text-xs w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",pathname === route.href && "bg-primary/10 text-primary")
                       
                       }>
                        <div className="flex flex-col gap-y-2 items-center flex-1">
                            <route.icon className="h-6 w-6"/>
                            {route.label}


                        </div>

                       </div> 
                    ))}
                </div>
            </div>
            
        </div>
     );
}
 
export default Sidebar;