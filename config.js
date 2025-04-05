const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7zqOQrIpa3qqkFAERFU8IJT5yFCgCg3Q4DGLv99Cru7uh/mnOnhKZWQtVfWWnu/gizHJVqgFoxfQUFwDSnqlrQtEBiDSRWGiIA+CCCFYAxGy5oTk5ulzKPjYm1YXGwo7oE+WVtqtiStpY1yDGeqamXlM7j3QVGdEuz/AfCy4Ld4NM/aLMtuUygyw2OuRGQ+aZWdzZJdtFMU14xxoPrP4N4hQkxwFmlFjFJEYLJA7Qpi8j36eCUb2HZyxWb828A06sF22YP+IA/dm5hKYlO9LEb5fj/YN9+jf/BNZZQmU41z57qZTJvyRnu5vuJzetttTPfgDDfelQaCLL/RL3GUoWAeoIxi2n5b97V5bI1g35zq0SDcNGUsq8zCFvVjZCr2YEm2KGBNLj5Xqf894qutst7zEReWSzuNz5Idy3mURJuoDKbWTEmxke58w8tabvmV+Ip8ZOXyf3TfW6fDzK6uPtezzhZdhkioB7p744l3nUkWG8C2ucyl4pjMv0c/aNaedvXgPDp7Pusc1DSVhXk29yL9zN6W58Ldrb1068Wz5pM+pBX5E8vE5QYn9+iihVcdz7BaNhtxm10nI0c/5rY9WGn6VcCs7j4dNIctDPgiw/OlZtLeZmWvM/GkTRs9oLZT2ecpqqOmxVSRnx8vuqB2HoAxc+8DgiJcUgIpzrPHHiv0AQxqB/kE0Ye8wGTr5toe3HnkeKPDanU9X+uhQBym5PPdEO/pwbmRNW9W1/IZ9EFBch+VJQp0XNKctEtUljBCJRj//asPMvRC34zrynFMH4SYlHSbVUWSw+DD1Y9D6Pt5lVGnzXylWyACxsPPbUQpzqKy07HKIPFjXCMlhrQE4xAmJbr3QYBq7KMODwQnS1a5kNnsr8aVmUdifsu5dUc5zrO3XwQYhMETj374SEQ/Rj5kf5yQEP5gTj7L84E/YkMf9AF+75nuzm8tLPRLpOb2ZB+NjMkebmaFq+rCbD8dRg8b3rRHBAVgTEmF+uAE/UtVuPkFZX/AvfEqzV5ULTR2Z01oOW/AYYclwfUif8F98xSMXz/nlJIHHZ6+3suaPhJAH6SPCOLu5SwviJLIsizDMmPmr/Jn0+kIi+JnhmgH+655dyFAFOKkBGOgrPbHtl5r2uLMNqI0m8laJCuRDD49+gj7W5jyMtVv2YSojO/UN6mQQ0VQbW+9OG4v9k3tQUGIaxRt3dZ7/heQTg7ZCcr1iXANNVciblVfk4fsWhR7ldTO0hOT9F4qXyaLVY8po9pvXAMTPd+17vVcl8s4ebInllXnxyfONCnj0JnYqOvnrtpbVr4Wc9wCVaLFnUNbtCrH1Jdc8KR6Oc9MSSyySTicSIlxkDUeriSUv6jGxWMkdDygU2WxXpkWUoWb2oFnO5Mtd8773nLy3oaPMZC8j1/8aJDX92SFGD2mWQY7h/7Dm68ZH977XyDex+NvcjSBphFLfAObp4NGpMFirTdVdEs1Jd0ZatkM0qrKT1w+1aQU3O+/+qBIIA1zkoIxgFlAchyAPkhgSeXPNnVxikoK0wKMGXHESSOBHTJ9kLZyUTgU0o/uBnL3LfYiuP8DepHYyPkHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

