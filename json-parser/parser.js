const fs = require('fs');

fs.readFile('./icons.json', 'utf-8', (error, content) => {
    if (error) {
        throw error;
    }

    const iconsCollection = JSON.parse(content);

    const lessCollection = `@icons: ${Object.entries(iconsCollection).map(el => el.join(' ')).join(',\n')};`;
    const freemarkerCollection = `<#assign iconsParams = ${content}/>`;

    fs.writeFile('./icons.less', lessCollection, error => {error && console.log(error)});
    fs.writeFile('./iconsParams.ftl', freemarkerCollection, error => {error && console.log(error)});
});
