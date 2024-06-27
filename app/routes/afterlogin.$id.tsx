import { json, LoaderFunction, ActionFunction } from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";
import { getSupabase } from "~/supabaseclient";

// The loader function can be removed if not needed
export const loader: LoaderFunction = async ({ params }) => {
  return json({});
};

// Action function to handle form submission
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const imageUrl = formData.get("image-url");
  const title = formData.get("title");
  const library = formData.get("library");
  const url = formData.get("url");
  const code = formData.get("code");

  const supabase = getSupabase();

  const { data, error } = await supabase
    .from('navigation_bars')
    .insert([
      {
        image_url: imageUrl,
        title: title,
        library: library,
        url: url,
        code: code
      },
    ])
    .select();

  if (error) {
    console.error("Insert Error:", error.message); // Log the error
    return json({ error: error.message }, { status: 400 });
  }

  return json({ data });
};

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xaHJqnQCRbZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import 'app/tailwind.css'; // Ensure you have Tailwind CSS configured

export default function Component() {
  const actionData = useActionData();

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative bg-gradient-to-r from-gray-700 to-gray-900 bg-[length:200%_200%] animate-gradient-xy rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-10 animate-noise" />
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Add a New Resource</h2>
            <Form method="post" className="space-y-6">
              <div>
                <Label htmlFor="image-url">Image URL</Label>
                <Input id="image-url" name="image-url" type="url" placeholder="https://example.com/image.jpg" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" type="text" placeholder="My Awesome Resource" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="library">Library</Label>
                <Input id="library" name="library" type="text" placeholder="React, Vue, etc." className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="url">URL</Label>
                <Input id="url" name="url" type="url" placeholder="https://example.com" className="bg-gray-800 text-white" />
              </div>
              <div>
                <Label htmlFor="code">Code</Label>
                <Input id="code" name="code" type="text" placeholder="Enter your code snippet here" className="bg-gray-800 text-white" />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                  Submit
                </Button>
              </div>
            </Form>
            {actionData?.error && (
              <p className="mt-4 text-red-500">{actionData.error}</p>
            )}
            {actionData?.data && (
              <p className="mt-4 text-green-500">Resource added successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
