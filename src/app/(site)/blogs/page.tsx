import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Blog | real-estate mersad ",
};

const Blog = () => {
    return (
        <>
            <HeroSub
                title="بینش‌های املاک و مستغلات."
                description="با مشاوره و اطلاعات تخصصی، در بازار املاک پیشرو باشید."
                badge="بلاگ"
            />
            <BlogList />
        </>
    );
};

export default Blog;
