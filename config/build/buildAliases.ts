import path from 'path';
const cwd = process.cwd();

export const buildAliases = (aliases: Record<string, string>) => {
    const result: Record<string, string> = {};
    for (const name in aliases) {
        result[name] = path.join(cwd, aliases[name]);
    }

    return result;
}