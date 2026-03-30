import styles from './layer.css';
export const LAYER_MARKER_CLASS_NAME = styles.layerMarker;
export function insertLayerIntoParent(layer, parent) {
    const lastLayerMarker = findLastLayerMarker(parent);
    if (lastLayerMarker != null) lastLayerMarker.after(layer);
    else parent.prepend(layer);
}
function findLastLayerMarker(parent) {
    for(let i = parent.children.length - 1; i >= 0; i--){
        const parentLayerChild = parent.children.item(i);
        if (parentLayerChild && parentLayerChild.classList.contains(LAYER_MARKER_CLASS_NAME)) return parentLayerChild;
    }
    return null;
}
