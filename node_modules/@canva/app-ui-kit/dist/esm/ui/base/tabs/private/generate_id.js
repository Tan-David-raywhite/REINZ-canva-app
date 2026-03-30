export function generateId(baseId, id, role) {
    return `${baseId}-${role}-${id.replace(/\s+/g, '')}`;
}
