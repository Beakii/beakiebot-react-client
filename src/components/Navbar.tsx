import MaxWidthWrapper from './MaxWidthWrapper';
import { DownloadIcon, MenuIcon } from 'lucide-react';
import { buttonVariants } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
    let _twitchClientId = import.meta.env.VITE_TWITCH_CLIENT_ID;
    let _redirectUrl = import.meta.env.VITE_TWITCH_REDIRECT;

    return (
        <nav className="absolute inset-x-0 top-0 z-[100] h-14 w-full border-b-2 border-primary text-white backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between">
                    <a href="/" className="z-40 flex font-semibold">
                        <span className="px-2 text-2xl font-bold tracking-tight text-blue-400">
                            {'<'}
                        </span>
                        <span className="rounded-md bg-primary px-1 text-xl text-white">
                            BeakieBot
                        </span>
                        <span className="px-1 text-2xl font-bold tracking-tight text-blue-400">
                            {'/>'}
                        </span>
                    </a>

                    <div className="flex h-full items-center space-x-4">
                        <>
                            <a
                                target="_blank"
                                href="/James-Software-CV.pdf"
                                className={buttonVariants({
                                    size: 'sm',
                                    variant: 'ghost',
                                    className:
                                        'hidden hover:bg-blue-400 hover:text-white md:flex md:items-center',
                                })}
                            >
                                CV
                                <DownloadIcon className="ml-2 size-4" />
                            </a>

                            <div className="hidden h-8 w-px bg-primary md:block" />

                            <a
                                href={`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${_twitchClientId}&redirect_uri=${_redirectUrl}&scope=channel:manage:redemptions moderator:manage:banned_users user:read:email channel:bot`}
                                className={buttonVariants({
                                    size: 'sm',
                                    variant: 'ghost',
                                    className:
                                        'hover:text-semibold hidden bg-purple-600 rounded-lg hover:bg-purple-600/75 text-xl hover:text-white md:flex md:items-center',
                                })}
                            >
                                Twitch
                            </a>

                            {/* MOBILE MENU */}
                            <div className="md:hidden">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <MenuIcon className="mr-10 size-8 cursor-pointer" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="flex flex-col space-y-2 border-primary bg-stone-400 py-5">
                                        <a
                                            target="_blank"
                                            href="/James-Software-CV.pdf"
                                            className={buttonVariants({
                                                size: 'sm',
                                                variant: 'ghost',
                                                className: '',
                                            })}
                                        >
                                            CV
                                            <DownloadIcon className="ml-2 size-4" />
                                        </a>
                                        <a
                                            target="_blank"
                                            href="mailto:james@co-axiom.co.nz"
                                            className={buttonVariants({
                                                size: 'sm',
                                                variant: 'default',
                                                className: '',
                                            })}
                                        >
                                            Contact
                                        </a>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            {/* MOBILE MENU END */}
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;
