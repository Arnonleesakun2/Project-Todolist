import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DeleteCard from "./DeleteCard";

const Todocard = ({ item }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative cursor-pointer">
      <Card onClick={handleDrawerToggle}>
        <CardHeader>
          <CardTitle>{item.title.substring(0, 30)}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {item.description.substring(0, 60)}{" "}
            <span className=" font-bold text-sm">ดูเพิ่มเติม</span>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Badge
            className={item.status === 0 ? "bg-yellow-500" : "bg-green-500"}
          >
            {item.status === 0 ? "กำลังทำ" : "เสร็จแล้ว"}
          </Badge>
        </CardFooter>
      </Card>
      <DeleteCard id={item.id} />
      {isDrawerOpen && (
        <Drawer open={isDrawerOpen} onOpenChange={handleDrawerToggle}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-2xl">{item.title}</DrawerTitle>
              <DrawerDescription className="text-lg">
                {item.description}
              </DrawerDescription>
              <DrawerDescription className="text-lg">
                {item.time}
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button onClick={handleDrawerToggle} variant="outline">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default Todocard;
