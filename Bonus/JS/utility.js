/* Genera un elemento div all'interno di un elemento (position)
a cui al click vengono aggiunti:

-una classe specificata (styleName)
-numero del div, in caso di contatori (number)*/

function responsiveSquare(position,styleName,number){
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click',()=>{

        square.classList.add(styleName);
        square.innerHTML=`${number}`
    });
    return position.append(square);
}