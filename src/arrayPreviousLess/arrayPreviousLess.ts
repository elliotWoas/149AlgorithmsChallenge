function arrayPreviousLess(items) {
    const stack = [];  
    const result = [];

    for (let i = 0; i < items.length; i++) {
     
        while (stack.length > 0 && stack[stack.length - 1] >= items[i]) {
            stack.pop();
        }

       
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }

        
        stack.push(items[i]);
    }

    return result;
}
