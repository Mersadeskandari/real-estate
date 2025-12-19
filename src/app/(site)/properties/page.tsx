import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | real-estate mersad",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="خانه‌های طراحی‌شده‌ی الهام‌بخش را کشف کنید."
                description="با ویلاهای لوکس و اختصاصی ما که برای زندگی مرفه طراحی شده‌اند، ظرافت و راحتی را تجربه کنید."
                badge="املاک"
            />
            <PropertiesListing />
        </>
    );
};

export default page;
