export default function (date: Date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
};