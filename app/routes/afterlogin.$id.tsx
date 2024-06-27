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

export default function AfterLogin() {
  const userData = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-200 rounded-lg shadow-md space-y-6">
        <h1 className="text-3xl font-bold">Welcome, {userData.email}</h1>
        <p className="text-lg">User ID: {userData.id}</p>
        {/* Add additional user details here */}
      </div>
    </div>
  );
}
