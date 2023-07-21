//array and objects

//добавим в массив новый город

const Cities = ['Moskow', 'Spb', 'Tokyo']

Cities.push ('Seoul')

//добавим его еще в начало массива

Cities.unshift ('Seoul')

// создадим еще один массив и обьединим наши массивы

const UsaCities = ['New-York', 'LA']



const AllCities = (Cities.concat(UsaCities))

// отрежем массив с 0 до 6 

const SlicedCities = (AllCities.slice(0,6))

// найдем нужный нам город

const Spb = Cities.find(City => City === 'Spb')

// оставляем все города кроме одного выбранного

const SelectedCities = (AllCities.filter(city=> city !== 'Tokyo'))

// если у нас массив внутри массива и мы хотим их превратить в один сплошной

const Cities1 = ['Moskow', 'Spb', 'Tokyo', ['New-York']]

const OneArray = Cities1.flat()

// суммируем сумму в корзине используя метод reduce

const cart = [
{
    name: 'BMW',
    price: '100000'
},

{
    name: 'Mercedes',
    price: '200000'
}
]

const sum = cart.reduce((acc,product) => {
    return acc += product.price},0)

// метод sort

const numbers = [1, 3, 20, 52, 2, 10]

const numbers2 = numbers.sort((a,b) => {
    return a-b
})

console.log (numbers2)