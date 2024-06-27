// app/routes/afterlogin.tsx
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSupabase } from "~/supabaseclient";

// The route should accept a userId parameter
export const loader: LoaderFunction = async ({ params }) => {
  const { userId } = params;

  // Fetch user data from Supabase using the user ID
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('users') // Replace with your table name if different
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error("User Fetch Error:", error.message); // Log the error
    return json({ error: error.message }, { status: 400 });
  }

  return json(data);
};

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xaHJqnQCRbZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import 'app/tailwind.css'; // Ensure you have Tailwind CSS configured

export default function Component() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative bg-gradient-to-r from-gray-700 to-gray-900 bg-[length:200%_200%] animate-gradient-xy rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-10 animate-noise" />
          <div className="relative z-10 p-8 text-white"> {/* Text color to white for dark background */}
            <h2 className="text-3xl font-bold mb-6">Add a New Resource</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="image-url">Image URL</Label>
                <Input id="image-url" type="url" placeholder="https://example.com/image.jpg" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" type="text" placeholder="My Awesome Resource" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="library">Library</Label>
                <Input id="library" type="text" placeholder="React, Vue, etc." className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="url">URL</Label>
                <Input id="url" type="url" placeholder="https://example.com" className="bg-gray-800 text-white" />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
