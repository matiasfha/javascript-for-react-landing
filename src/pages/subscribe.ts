import { APIRoute } from "astro";

export const post: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const url = "https://api.convertkit.com/v3/sequences/812191/subscribe";
  try {

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: import.meta.env.CONVERKIT_API_KEY,
        email,
        first_name: name,
        tags: ["typescript"],
      }),
    });

    const json = await res.json();

    if (json.subscription) {
      return new Response(JSON.stringify({ success: "success" }), {
        status: 200,
      });
    }
    return new Response(null, { status: 400 });
  } catch (e) {
    console.error(e);
    return new Response(e, { status: 500 });
  }
};
