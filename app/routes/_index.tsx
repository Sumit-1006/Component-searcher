import { useState } from "react";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getSupabase } from "~/supabaseclient";
import { Button } from "~/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "~/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";

// Loader function to fetch data from Supabase
export const loader: LoaderFunction = async () => {
  const supabase = getSupabase();
  const { data, error } = await supabase.from("navigation_bars").select("*");
  console.log("Data fetched from Supabase:", data); // Add this line
  if (error) {
    console.error("Supabase error:", error); // Add this line
    throw new Error("Failed to fetch navigation bars data");
  }
  return json(data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function MountainIcon(props: any) {
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

function XIcon(props: any) {
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

function ArrowRightIcon(props: any) {
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigationBars = useLoaderData();
  const [showCode, setShowCode] = useState<any>({});
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleShowCodeClick = (id: string) => {
    setShowCode((prevState: any) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleLibrary = (library: string) => {
    setSelectedLibraries((prevSelected) =>
      prevSelected.includes(library)
        ? prevSelected.filter((item) => item !== library)
        : [...prevSelected, library]
    );
  };

  const filterByLibrary = (item: any) => {
    if (selectedLibraries.length === 0) {
      return true; // Show all if no filter selected
    }
    return selectedLibraries.includes(item.library);
  };

  const applyFilter = () => {
    // Logic to apply filter if needed (if filtering is not automatic)
    // This function can trigger any additional logic needed to update UI based on selected libraries
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white border-b flex justify-between items-center px-4 md:px-6 h-16">
        <Link
          to="#"
          className="flex items-center gap-2 text-white"
          prefetch="none"
        >
          <MountainIcon className="h-6 w-6" />
          <span className="font-bold text-xl">UI Components</span>
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
      </header>

      <main className="flex-1">
        <section className="relative bg-muted min-h-screen flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/video.mp4" type="video/mp4" />
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
              <div className="flex gap-2 justify-center text-white-800">
                <Button>Get Started</Button>
                <Button variant="outline" className="bg-gray-100 text-gray-800">
                  Explore Components
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-900">
          <div className="container">
            <div className="grid grid-cols-1 gap-6">
              {navigationBars.length > 0 ? (
                navigationBars
                  .filter(filterByLibrary) // Apply filter here
                  .map((item: any) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row bg-gray-800 p-4 rounded-lg"
                    >
                      <div className="sm:w-1/3">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-auto rounded"
                        />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-white border-white hover:bg-white hover:text-gray-800"
                        >
                          <Button variant="outline" size="icon">
                            <ArrowRightIcon className="h-5 w-5" />
                            <span className="sr-only">Go to URL</span>
                          </Button>
                        </a>
                      </div>
                      <div className="sm:w-2/3 sm:pl-4 mt-4 sm:mt-0">
                        <h2 className="text-white text-2xl font-bold">
                          {item.title}
                        </h2>
                        <p className="text-gray-400">{item.library}</p>
                        <Button
                          variant="outline"
                          className="mt-2 text-white border-white hover:bg-white hover:text-gray-800"
                          onClick={() => handleShowCodeClick(item.id)}
                        >
                          {showCode[item.id] ? "Hide Code" : "Show Code"}
                        </Button>
                        {showCode[item.id] && (
                          <pre className="bg-gray-700 text-gray-200 p-4 rounded mt-2 whitespace-pre-wrap break-all">
                            {item.code}
                          </pre>
                        )}
                      </div>
                    </div>
                  ))
              ) : (
                <p className="text-white">No navigation bars found.</p>
              )}
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
            <Link
              to="#"
              className="text-gray-400 hover:underline"
              prefetch="none"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:underline"
              prefetch="none"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:underline"
              prefetch="none"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
      <Sheet
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        className="w-full max-w-[500px]"
      >
        <SheetTrigger asChild>
          <button
            className="fixed top-4 right-4 z-50 rounded-full bg-background p-2 shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Close filter</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-background p-6 text-white">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Filter by Library</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="tailwind-css">
                <AccordionTrigger className="text-base text-white">
                  Tailwind CSS
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="tailwind-css-components"
                        checked={selectedLibraries.includes("Tailwind CSS")}
                        onCheckedChange={() => toggleLibrary("Tailwind CSS")}
                      />{" "}
                      Components
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="bootstrap">
                <AccordionTrigger className="text-base text-white">
                  Bootstrap
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="bootstrap-components"
                        checked={selectedLibraries.includes("Bootstrap")}
                        onCheckedChange={() => toggleLibrary("Bootstrap")}
                      />{" "}
                      Components
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="next-ui">
                <AccordionTrigger className="text-base text-white">
                  Next UI
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="next-ui-components"
                        checked={selectedLibraries.includes("Next UI")}
                        onCheckedChange={() => toggleLibrary("Next UI")}
                      />{" "}
                      Components
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent-hover"
              onClick={applyFilter}
            >
              Apply
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
