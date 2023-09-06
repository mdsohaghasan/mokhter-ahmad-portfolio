
const getBlogDetails = async (id) => {
    const res = await fetch(`https://test.mashqulquran.com/blog/${id}`);
    return res.json();
}

export default getBlogDetails;