import { redirect } from "next/navigation";

const Home= async()=> {
  const defaultCategoryId = '01';
  redirect(`/category/${defaultCategoryId}`);
}

export default Home;