export const siteConfig = {
    name: "BDAN",
    title: "Bitcoin Design Adoption Network",
    description: "Transforming African designers to create sovereign, human-centred Bitcoin experiences for the next wave of users through open, decentralized design.",
    url: process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.NEXT_PUBLIC_SITE_URL
}
