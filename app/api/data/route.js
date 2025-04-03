const token = "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";
const headers = {
    "Authorization": `Bearer ${token}`,
    "Notion-Version": "2021-05-13",
    "Content-Type": "application/json"
};

async function fetchData(databaseId) {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({})
    });
    return await response.json();
}

export async function GET(request) {
    const typeRes = await fetchData("1c657efa8a9b8038ac70f7eaec829ee3");
    const types = ["全部"];
    const typeIds = {};
    typeRes.results.forEach(item => {
        const name = item.properties["名稱"].title[0].text.content;
        types.push(name);
        typeIds[item.id] = name;
    });
    // console.log("Types:", types);

    const tagRes = await fetchData("1c657efa8a9b807a88dfc2263c7e3ae6");
    const tags = [];
    const tagIds = {};
    tagRes.results.forEach(item => {
        const name = item.properties["名稱"].title[0].text.content;
        tags.push(name);
        tagIds[item.id] = name;
    });
    // console.log("Tags:", tags);

    const linkRes = await fetchData("1c657efa8a9b806fad54fa32a6a32100");
    const links = [];

    linkRes.results.forEach(item => {
        const name = item.properties["name"].title[0].text.content;
        const typesList = item.properties["type"].relation.map(r => typeIds[r.id]);
        const tagsList = item.properties["tags"].relation.map(r => tagIds[r.id]);
        const url = item.properties["url"].url;
        const cover = item.properties["cover"].files[0].file.url;

        links.push({
            name: name,
            type: typesList[0],
            tags: tagsList,
            url: url,
            cover: cover
        });
    });

    // console.log("Links:", links);
    return Response.json({ 
        types: types,
        tags: tags,
        links: links,
    })
}