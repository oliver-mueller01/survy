import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = () => {
    return(
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link 
                    href="/"
                    className="flex z-14 font-semibold" >
                        <span>survy.</span>
                    </Link>

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })} href={""}>
                                Tarife
                            </Link>
                            <LoginLink className={buttonVariants({
                                variant: "ghost",
                                size: "sm"  })}>
                             Anmelden
                             </LoginLink>   
                             <RegisterLink className={buttonVariants({
                                size: "sm"
                            })} href={""}>
                                Jetzt beginnen
                            </RegisterLink>                   
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;