import { glob } from "glob"
export async function scanDirectoryTree({ pattern, options = {} }) {
    return await glob(pattern, options)
}
