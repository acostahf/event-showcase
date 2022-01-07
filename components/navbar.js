const NavItem = (props) => (
  <li>
    <a
      className="text-sm font-bold tetxt-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300"
      href={props.href}
    >
      {props.text}
    </a>
  </li>
);

const navbar = () => (
  <div>
    <nav className="flex justify-between py-4 px-3">
      <div className="flex items-center ">
        <div className="inline-block h-6 w-6 rounded-full px-3 py-2 bg-gray-400" />
        <span className="ml-2">Events Showcase</span>
      </div>
      <div>
        <ul className="flex space-x-2">
          <NavItem href="/" text="Events" />
          <NavItem href="/" text="About" />
          <NavItem href="/" text="Contact" />
        </ul>
      </div>
    </nav>
  </div>
);

export default navbar;
