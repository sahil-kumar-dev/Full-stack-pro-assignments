function calculateDeliveryTime(package) {
    let result = ''
    switch (package) {
        case 'standard':
            result = 'might take 3-5 days'
            break;

        case 'express':
            result = '1-2 days'
            break;

        case 'overnight':
            result = 'would be delivered the next day'
            break;

        default:
            result = 'please enter a valid package type'
            break;
    }
    return result
}

const result = calculateDeliveryTime('express')
console.log(result) //1-2 days