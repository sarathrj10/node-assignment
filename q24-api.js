
class Area{
    circle(radius){
        let area = radius*radius;
        return area;
    }
    rectangle(length,breadth){
        let area = length * breadth;
        return area;
    }
    square(side){
        let area = side * side;
        return area;
    }
    triangle(height,base){
        let area =(height * base)/2;
        return area;
    }
}
module.exports = Area;