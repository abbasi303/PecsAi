"use client"
import React, { use, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet,SheetContent, SheetTrigger } from './ui/sheet';
import SideBar from './sidebar';

const MobileSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        setIsOpen(true);
    }, []);
    if (!isOpen) {return null};
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
