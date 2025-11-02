import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <div className="bg-blue-500 p-4 flex justify-between items-center">
      <Logo text="Logo" />
      <Search text="Search" />
    </div>
  );
};

export default Header;