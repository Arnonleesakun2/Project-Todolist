import { Button } from "../ui/button"
import Menu from "./Menu"
import Mode from "./Mode"


const Navbar = () => {
  return (
    <section className="flex justify-between items-center py-3">
      <div className=""></div>
      <Menu/>
      <Mode/>
    </section>
  )
}

export default Navbar
