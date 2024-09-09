import MaxWidthWrapper from './MaxWidthWrapper';
import { DownloadIcon, MailIcon, MenuIcon } from 'lucide-react';
import { buttonVariants } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
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
                                target="_blank"
                                href="mailto:james@co-axiom.co.nz"
                                className={buttonVariants({
                                    size: 'sm',
                                    variant: 'ghost',
                                    className:
                                        'hover:text-semibold hidden border border-primary hover:border-blue-400 hover:bg-blue-400 hover:text-white md:flex md:items-center',
                                })}
                            >
                                Contact
                                <MailIcon className="ml-2 size-4" />
                            </a>

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
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;
