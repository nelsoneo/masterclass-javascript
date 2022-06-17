const areas = new WeakMap();
const rectagle1 = {
    x: 10,
    y: 2
};
const rectagle2 = {
    x: 5,
    y: 3
};

function calculateRectagle(rectangle){
    if (areas.has(rectangle)){
        console.log('Using cache ...')
        return areas.get(rectangle);
    }
    const area = rectangle.x * rectangle.y;
    areas.set(rectangle, area);
    return area;
}

console.log(calculateRectagle(rectagle1));
console.log(calculateRectagle(rectagle1));
console.log(calculateRectagle(rectagle2));