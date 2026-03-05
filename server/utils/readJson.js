export default async function getJSON() {
    const res = await fetch("./DB/data.json");
    const json = await res.json();
    return json
}
