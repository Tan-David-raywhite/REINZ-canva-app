export function combineAllowedTouchActions(actionSets) {
    let resultingActions = [
        'auto'
    ];
    for (const actionSet of actionSets){
        if (actionSet.includes('none')) return [
            'none'
        ];
        if (actionSet.includes('auto'))
            continue;
        if (resultingActions.includes('auto')) resultingActions = actionSet;
        resultingActions = resultingActions.filter((action)=>actionSet.includes(action));
    }
    if (resultingActions.length === 0) return [
        'none'
    ];
    return resultingActions;
}
