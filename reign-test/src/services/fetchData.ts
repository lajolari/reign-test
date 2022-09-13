export const fetchData = async(category: string, page: number) => {
    const url = `https://hn.algolia.com/api/v1/search_by_date?query=${category}&page=${page}&hitsPerPage=50`;
    const resp = await fetch(url);
    const { hits } = await resp.json();

    return hits;
}