export const h = ({name, attributes = {}, children = ''}, indent) => {
    const getChildren = children => Array.isArray(children) ? `${children.join('')}` : children;
    const getTrailingNewline = () => Array.isArray(children) ? '\n' : '';
    const getAttributes = attributes => {
        let attributesString = '';

        for (const key in attributes) {
            attributesString += ` ${key}="${attributes[key]}"`;
        };

        return attributesString;
    };

    const parsedChildren = getChildren(children);

    // console.log(parsedChildren);

    return (
        `\n\t<${name}${getAttributes(attributes)}>${getChildren(children)}${getTrailingNewline()}</${name}>`
    );
};

