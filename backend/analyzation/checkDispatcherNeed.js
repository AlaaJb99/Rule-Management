
function checkErrorsForDispatcher(process) {
    const hightMessages = [];
    const mediumMessages = new Map();
    const resArray = [];
    let conditionsRes = false;

    for (let i = 0; i < process.length; i++) {
        const log_obj = process[i];
        
        if (log_obj.rank === 3) {
            hightMessages.push(log_obj);
        }
        else if (log_obj.rank === 2) {
            if (mediumMessages.has(log_obj.message)) {
                mediumMessages.get(log_obj.message).push(log_obj);
            } else {
                mediumMessages.set(log_obj.message, [log_obj]);
            }
        }
    }

    for (const [obj_message, messages_objects] of mediumMessages) {
        if (messages_objects.length >= 2) {
            for (let i = 0; i < messages_objects.length; i++) {
                resArray.push(messages_objects[i]);
            }
        }
    }

    for (let i = 0; i < hightMessages.length; i++) {
        resArray.push(hightMessages[i]);
    }
    
    if (resArray.length > 0)
    {
        conditionsRes = true;
    }
    

    return [conditionsRes, resArray];
}

module.exports = checkErrorsForDispatcher;