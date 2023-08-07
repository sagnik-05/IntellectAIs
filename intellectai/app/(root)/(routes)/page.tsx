import { UserButton } from "@clerk/nextjs"
const RootPage = () => {
    return ( 
        <div > 
            <UserButton class="w-100 h-100" afterSignOutUrl="/"/>
        </div>
     );
}
 
export default RootPage;