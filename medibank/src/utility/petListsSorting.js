
export const femSortedList = (pageData) => {
    const female = pageData.filter((female) => female.gender === 'Female').map((item) => item.pets.filter((pet) => pet.type === 'Cat'))
    let flatArrayFemale = [].concat.apply([], female);
    const resultFemale = flatArrayFemale.filter((ele) => ele.type === 'Cat')
    const newArr = [];
    resultFemale.forEach((item) => {
        newArr.push(item.name)
    })
    return newArr.sort();
}

export const maleSortedList = (pageData) => {
    const male = pageData.filter((male) => male.gender === 'Male').map((item) => item.pets).filter(Boolean)
    let flatArrayFemale = [].concat.apply([], male);
    const resultMale = flatArrayFemale.filter((ele) => ele.type === 'Cat')
    const newArrMale = [];
    resultMale.forEach((item) => {
        newArrMale.push(item.name)
    })
    return newArrMale.sort();
}