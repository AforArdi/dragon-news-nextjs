export const getCategory= async ()=>{
    const res = await fetch('http://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data.news_category;
}