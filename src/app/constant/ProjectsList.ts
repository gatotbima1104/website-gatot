import Adobe from "../../../public/adobe.png"
import Dex from "../../../public/dexscreener.png"
import Gojek from "../../../public/gojek.png"
import Parfume from "../../../public/parfume.png"
import Runway from "../../../public/runway.png"
import Todo from "../../../public/todolist.png"


export const ProjectList = [
    {
        key: 1,
        title: "Desktop Application Adobe Scraping",
        image: Adobe,
        deployment: "https://youtu.be/tbYIGf3Hl_A",
        github: "https://github.com/gatotbima1104/adobe-scraper-electron",
        tags: ["Puppeteer", "NodeJS", "ElectronJS"],
        desc: "Desktop Application for scraping metadata images from Adobe, for further anaytics and research product images, Top Rated product of my application developement"
    },
    {
        key: 2,
        image: Runway,
        deployment: "https://www.loom.com/share/c9b27f19b38d43d88781f6e3e82d8525?sid=7c8561de-d63f-4a8b-b238-fa21c6054214",
        github: "https://github.com/gatotbima1104/runway-generate-automation",
        title: "Runway Prompt Autosender",
        tags: ["Puppeteer", "NodeJS", "ElectronJS", "tailwind"],
        desc: "Desktop Application for Automation send prompts from list, usually the using by the miscrostockers for bulk generating images by AI throgh proompt, Second Top Rated my application"
    },
    {
        key: 3,
        image: Dex,
        deployment: "https://www.loom.com/share/69196caa440043d48eb540508e94cbc4?sid=f4552bb9-a295-4064-883c-6d90e61e3de0",
        github: "https://github.com/gatotbima1104/dexscreener-wallet-scraper",
        title: "Scraping Wallet and Transaction from Dexscreener",
        tags: ["Puppeteer", "NodeJS", "Google APIs"],
        desc: "Scripting for automate scraping wallet and transaction for creating databases and further coin analysis."
    },
    {
        key: 4,
        image: Parfume,
        deployment: "https://www.loom.com/share/49d21f30aca7414aa8621723b49068bf?sid=8468cd43-bbc9-4196-abdc-7a19d72d2386",
        // github: "",
        title: "Automation Review Parfume",
        tags: ["Puppeteer", "NodeJS", "Google APIs"],
        desc: "Automation Leave review for creating bulk testimonies to a parfume."
    },
    {
        key: 5,
        image: Gojek,
        deployment: "https://slicing-gojek-purwadhika.vercel.app/",
        github: "https://github.com/gatotbima1104/slicing-gojek-purwadhika",
        title: "Gojek Webpage Slicing",
        tags: ["NextJS"],
        desc: "Slicing a modern webpage of Gojek app."
    },
    {
        key: 6,
        image: Todo,
        // deployment: "",
        // github: "",
        title: "Todo List app",
        tags: ["NextJS"],
        desc: "Making a simple app for TODO list with NextJS."
    },
]