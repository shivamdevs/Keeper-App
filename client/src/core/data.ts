import DataType from "./types/DataType";
import { v4 as uuid } from 'uuid';

const data: DataType[] = [];

function randomURL() {
    const arr = [
        "https://accounts.google.com",
        "https://react-icons.github.io",
        "https://drive.google.com",
        "https://passwords.google.com",
        "https://tailwindcss.com",
        "https://stackoverflow.com",
        "https://chat.openai.com",
        "https://my.faviconkit.com",
        "https://codepen.io",
        "https://webbrowsertools.com",
    ];

    return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < 12; i++) data.push({
    id: uuid(),
    name: uuid().split("-")[0],
    link: randomURL(),
    // link: "https://" + uuid().split("-")[0] + "." + uuid().split("-")[4] + "." + uuid().split("-")[2] + "/" + uuid().split("-")[4],
    username: uuid().split("-")[0] + "@" + uuid().split("-")[4] + ".com",
    updated: Date.now(),
    strength: (Math.floor(Math.random() * 5) as (0 | 1 | 2 | 3 | 4)),
});

export default data;