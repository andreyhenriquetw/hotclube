import {
  BellIcon,
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
} from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start">
              <LogInIcon size={16} />
              Fazer Login
            </Button>

            <Button variant="outline" className="w-full justify-start">
              <HomeIcon size={16} />
              Inicio
            </Button>

            <Button variant="outline" className="w-full justify-start">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start">
              <ListOrderedIcon size={16} />
              Catálago
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-bold">
        <span className="bg-gradient-to-r from-[rgb(202,5,5)] to-[hsl(0,95%,58%)] bg-clip-text text-transparent">
          HOT
        </span>{" "}
        CLUBE
      </h1>

      <Button size="icon" variant="outline">
        <BellIcon />
      </Button>
    </Card>
  )
}

export default Header
