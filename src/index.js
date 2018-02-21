// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let currentCost = [ 50, 25, 10, 5,  1 ]
    let coins =       ["H","Q","D","N","P"]
    let answer = {}

    if (currency >= 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    else {
        for (let i = 0; i < currentCost.length; i++){
            let count = ~~(currency / currentCost[i])
            if (count > 0){
                answer[coins[i]] = count
                currency %= currentCost[i]
            }
    }
    return answer
    }
}
