function mix (...items) {
    if (!(typeof items[0] === 'function')) {
        throw new Error('all parameters type should be a function');
    };
    let result = items[0]();
   for (let i = 1; i < items.length; i++) {
    if (!(typeof items[i] === 'function')) {
        throw new Error('all parameters type should be a function');
    };
    result = items[i](result);
   };
   return result;
}