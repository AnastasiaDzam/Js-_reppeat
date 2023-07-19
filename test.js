function GetName(number1, number2){
    return number1-number2
}

const Score = (number1, number2) => 
number1 === 0 ? 'Число не должно быть равно 0' : number1 - number2




function GetPrice(name){
    switch (name){
        case 'BMW':
            return '100 000'

        case 'Mercedes':
            return '150 000'

        case 'Audi':
            return '50 000'

        default:
            return 'Такой машины нет в каталоге'
    }
}

console.log (GetPrice('BMW'))
