const stylish = (data, level = 0, space = '  ') => {
    const identificators = {'added': '  + ', 'removed': '  - ', 'same': '    '};
    let result = '{';
    for (const item of data) {
        switch (item.status) {
            case 'added':
            case 'removed':
            case 'same':
                result += "\n" + space.repeat(level * 2) + identificators[item.status] + item.key + ': ';
                if (item.isParent) {
                    result += stylish(item.children, level + 1, space);
                } else {
                    result += (item.status === 'removed' ? item.old : item.new);
                }
                break;
            case 'changed':
                result += "\n" + space.repeat(level * 2) + identificators['removed'] + item.key + ': ' + item.old;
                result += "\n" + space.repeat(level * 2) + identificators['added'] + item.key + ': ' + item.new;
                break;
        }
    }
    result += "\n" + space.repeat(level * 2) + '}';
    return result;
};

export { stylish };