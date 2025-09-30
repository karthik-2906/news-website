export const fetchData = async (endpoint, params = {}) => {
    try {
        const queryString = new URLSearchParams(params).toString();
        const url = queryString ? `${endpoint}?${queryString}` : endpoint;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
};