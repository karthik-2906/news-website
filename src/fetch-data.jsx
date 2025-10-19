export const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            // console.warn(`Fetch failed: ${res.status} ${res.statusText} — URL: ${url}`);
            return null;
        }
        return await res.json();
    } catch (err) {
        // console.error("Error fetching data:", err);
        return null;
    }
};