export function fixPathsBackSlashes(paths) {
    return paths.map((path) => path.replace(/\\/g, "/"))
}
