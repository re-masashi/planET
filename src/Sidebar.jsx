import { 
  RxHeart, 
  RxEnvelopeClosed, 
  RxPerson, 
  RxGear, 
  RxPlus,
  RxMagnifyingGlass,
} from "react-icons/rx";

function Sidebar(){
  return (
  <nav
    id="full-screen-example"
    className="fixed top-0 left-0 z-[1035] h-screen w-[90px] -translate-x-full overflow-hidden bg-zinc-800 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] translate-x-0">
    <div className="mt-6 text-center">
      <a
        className="relative inline-block overflow-hidden rounded-full align-bottom"
        href="/profile">
        <img
          src="https://placekitten.com/g/200/200"
          alt="Avatar"
          className="h-auto max-w-[60px] rounded-full" />
      </a>
    </div>

    <hr className="my-4 border-gray-700" />
    <ul
      className="relative m-0 list-none px-[0.2rem]"
      data-te-sidenav-menu-ref>      
      <li className="relative my-4">
        <a
          href="/create"
          className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref>
          <span
            className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
            <RxPlus/>
          </span>
        </a>
      </li>
      <li className="relative my-4">
        <a
          href="/search"
          className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref>
          <span
            className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
            <RxMagnifyingGlass/>
          </span>
        </a>
      </li>
      <li className="relative my-4">
        <a
          href="/liked"
          className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref>
          <span
            className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
            <RxHeart/>
          </span>
        </a>
      </li>
      <li className="relative my-4">
        <a
          href="/profile"
          className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref>
          <span
            className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
            <RxPerson/>
          </span>
        </a>
      </li>
      <li className="relative my-4">
        <a
          href="/settings"
          className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-300 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none focus:bg-white/10 focus:outline-none active:bg-white/10 active:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
          data-te-sidenav-link-ref>
          <span
            className="mx-auto motion-reduce:transition-none [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-gray-300 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-white group-focus:[&>svg]:fill-white group-active:[&>svg]:fill-white group-data-[te-sidenav-state-focus]:[&>svg]:fill-white">
            <RxGear/>
          </span>
        </a>
      </li>

    </ul>
  </nav>
)
}

export {Sidebar};