import { Link, useSearchParams } from "react-router-dom"
import { Button } from "./ui/button"
import { Show, SignIn, SignInButton, SignUpButton, UserButton } from "@clerk/react"
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react"
import { useEffect, useState } from "react"

const Header = () => {

    const [showSignedIn, setShowSignedIn] = useState(false);
    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        if (search.get("sign-in")) {
            setShowSignedIn(true);
        }
    }, [search]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowSignedIn(false);
            setSearch({})
        }
    }


    return (
        <>
            <nav className=" flex justify-between items-center px-4 py-4 md:px-8 ">
                <Link>
                    <img src="/logo.png" alt="hirred" className="h-12 sm:h-16 md:h-20 w-auto" />
                </Link>


                <div className="flex gap-8 items-center">
                    < Show when="signed-out" >
                        <Button variant="outline" size="sm" className="sm:size-default" onClick={() => setShowSignedIn(true)}>Login</Button>
                    </Show >

                    <Show when="signed-in">
                        <Button variant="destructive" className="rounded-full">
                            <PenBox size={20} className="mr-2" />
                            Post a Job</Button>
                        <Link to='/post-job'>

                        </Link>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                },
                            }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="My Jobs"
                                    labelIcon={<BriefcaseBusiness size={15} />}
                                    href="/my-job"
                                />
                                <UserButton.Link
                                    label="Saved Jobs"
                                    labelIcon={<Heart size={15} />}
                                    href="/saved-job"
                                />
                            </UserButton.MenuItems>

                        </UserButton>
                    </Show>
                </div>


            </nav>

            {
                showSignedIn && (
                    <div className="flex inset-0 items-center justify-center bg-black bg-opacity-50"
                        onClick={handleOverlayClick}
                    >
                        <SignIn
                            signUpForceRedirectUrl="/onboarding"
                            signUpFallbackRedirectUrl="/onboarding"
                        />
                    </div>
                )}
        </>
    )
}

export default Header

//  