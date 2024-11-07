import Kali from '../assets/projects/kali.png'
import Weather from '../assets/projects/weather.png'
import BiolinkImg1 from '../assets/projects/biolink1.png'
import BiolinkImg2 from '../assets/projects/biolink2.png'
import BiolinkImg3 from '../assets/projects/biolink3.png'
import BiolinkImg4 from '../assets/projects/biolink4.png'

export const data=[
    {
        id:1,
        name:"React TS Kali Terminal Portfolio",
        image:Kali,
        github:"https://github.com/conjurs/kaliportfolio",
        live:"https://axelparnoja2.vercel.app/",
        description: "This project is outdated."
    },
    {
        id:2,
        name:"React JS Weather Information",
        image:Weather,
        github:"https://github.com/conjurs/weather-checker",
    },
    {
        id:3,
        name:"React TS Twitter Remake",
        isIcon: true,
        iconName: "logos:twitter",
        github:"https://github.com/conjurs/Tewttr",
    },
    {
        id:4,
        name:"React JS Portfolio",
        isIcon: true,
        iconName: "carbon:portfolio",
        github:"https://github.com/conjurs/ReactPortfolio",
        live:"https://axelparnoja.vercel.app/"
    },
    {
        id:5,
        name:"Battleship Game against AI",
        isIcon: true,
        iconName: "game-icons:battleship",
        github:"https://github.com/conjurs/laevadepommitamineai",
    },
    {
        id:6,
        name:"Git Commit Abuser",
        isIcon: true,
        iconName: "mdi:github",
        iconClass: "text-white",
        github:"https://github.com/conjurs/git-commit-abuser",
    },
    {
        id:7,
        name:"Basic CRUD operations with Seeder Factory",
        isIcon: true,
        iconName: "logos:laravel",
        github:"https://github.com/conjurs/basic-crud-operations-with-seeder-factory",
        description: "First project with laravel after that started loving it."
    },
    {
        id:8,
        name:"Laravel Biolink Service, CRUD, 2FA, API etc.",
        isImageGrid: true,
        images: [BiolinkImg1, BiolinkImg2, BiolinkImg3, BiolinkImg4],
        github:"https://github.com/conjurs/blcklstd",
    }
]