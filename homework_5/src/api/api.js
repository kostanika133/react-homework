const url = "https://jsonplaceholder.typicode.com/posts";
async function fetch_data() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("could not get it");
    return;
  }
  const data = res.Json();
  return data;
}
