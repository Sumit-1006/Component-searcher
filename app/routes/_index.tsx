import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "~/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Sheet, SheetTrigger, SheetContent } from "~/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "~/components/ui/accordion";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link
              to="#"
              className="flex items-center gap-2 text-white"
              prefetch="none"
            >
              <MountainIcon className="h-6 w-6" />
              <span className="font-bold text-xl">UI Components</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-lg flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="text-center flex-1">
                <NavigationMenuItem>
                  <NavigationMenuLink to="#" className="text-xl">
                    Navbar
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink to="#" className="text-xl">
                    Sidebar
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink to="#" className="text-xl">
                    Dropdown
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink to="#" className="text-xl">
                    Pagination
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="#" className="hover:underline" prefetch="none">
              Pricing
            </Link>
            <Link to="#" className="hover:underline" prefetch="none">
              Docs
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="text-gray-800 border-white"
              onClick={toggleSidebar}
            >
              <FilterIcon className="h-5 w-5" />
              <span className="sr-only text-gray-800">Filter</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative bg-muted min-h-screen flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source
              src="public/Y2meta.app-Coding _ Programming _ Background Video FHD-(720p).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="relative container flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="space-y-4 max-w-xl text-white">
              <h1 className="text-6xl font-bold tracking-tight">
                Discover the perfect UI components for your next project
              </h1>
              <p className="text-xl text-gray-300">
                Browse our collection of beautifully designed and customizable
                UI components to build your dream application.
              </p>
              <div className="flex gap-2 justify-center text-gray-800">
                <Button>Get Started</Button>
                <Button variant="outline">Explore Components</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-900">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Navbar</CardTitle>
                  <CardDescription className="text-gray-400">
                    Responsive and customizable navigation bar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={300}
                      alt="Navbar"
                      className="rounded-lg"
                    />
                    <div className="flex justify-end">
                      <Button variant="outline">Get Code</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Sidebar</CardTitle>
                  <CardDescription className="text-gray-400">
                    Vertical navigation menu with icons and labels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={300}
                      alt="Sidebar"
                      className="rounded-lg"
                    />
                    <div className="flex justify-end">
                      <Button variant="outline">Get Code</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Dropdown</CardTitle>
                  <CardDescription className="text-gray-400">
                    Customizable dropdown menu with various alignment options.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={300}
                      alt="Dropdown"
                      className="rounded-lg"
                    />
                    <div className="flex justify-end">
                      <Button variant="outline">Get Code</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Pagination</CardTitle>
                  <CardDescription className="text-gray-400">
                    Responsive and customizable pagination component.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={300}
                      alt="Pagination"
                      className="rounded-lg"
                    />
                    <div className="flex justify-end">
                      <Button variant="outline">Get Code</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-6 border-t border-gray-700">
        <div className="container flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; 2024 UI Components. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-gray-400 hover:underline" prefetch="none">
              Terms
            </Link>
            <Link to="#" className="text-gray-400 hover:underline" prefetch="none">
              Privacy
            </Link>
            <Link to="#" className="text-gray-400 hover:underline" prefetch="none">
              Contact
            </Link>
          </div>
        </div>
      </footer>
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen} className="w-full max-w-[400px] md:max-w-[500px]">
        <SheetTrigger asChild>
          <button
            className="fixed top-4 right-4 z-50 rounded-full bg-background p-2 shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Close filter</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-background p-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Filter by Library</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="material-ui">
                <AccordionTrigger className="text-base">Material UI</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label                       className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="material-ui-components" /> Components
                    </Label>
                    <Label
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="material-ui-hooks" /> Hooks
                    </Label>
                    <Label
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="material-ui-themes" /> Themes
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ant-design">
                <AccordionTrigger className="text-base">Ant Design</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="ant-design-components" /> Components
                    </Label>
                    <Label
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="ant-design-hooks" /> Hooks
                    </Label>
                    <Label
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="ant-design-themes" /> Themes
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tailwind-css">
                <AccordionTrigger className="text-base">Tailwind CSS</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="tailwind-css-components" /> Components
                    </Label>
                    <Label
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="tailwind-css-utilities" /> Utilities
                    </Label>
                    <Label
                      className="flex items-center gap-2 font-normal"
                    >
                      <Checkbox id="tailwind-css-themes" /> Themes
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

