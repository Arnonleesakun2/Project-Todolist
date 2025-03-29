import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router";

const Menu = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent>
          <Link to="/">
            <MenubarItem>
              Home<MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link to="createtodo">
            <MenubarItem>
            Createtodo<MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Menu;
