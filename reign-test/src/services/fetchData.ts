export const fetchData = async(category: string) => {
    const url = `https://hn.algolia.com/api/v1/search_by_date?query=${category}&page=0&hitsPerPage=8`;
    const resp = await fetch(url);
    const { hits } = await resp.json();

    return hits;
}