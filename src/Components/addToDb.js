import { json } from "react-router-dom";
import { toast } from "react-toastify";


// Mark As Read Button Functionality 
const getStoredList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToReadList = (id) => {
    const storedList = getStoredList();
    if(storedList.includes(id)){
        // already exists this item . Don't Add It.
        // console.log(id, 'already exists this item')

        toast.warn('Oops! Already exists this item!', {
            position: "top-center",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            });
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
        toast.success('Mark As Read Book.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
            });
    }
}




// Add To Whish List Functionality
 const getWhishStoredList = () => {
    const whishStoredList = localStorage.getItem('whish-list');
    if(whishStoredList){
        const storedWhishList = JSON.parse(whishStoredList);
        return storedWhishList;
    }
    else{
        return [] ;
    }
 }


 const addToWhishList = (id) => {
    const whishStoredList = getWhishStoredList();
    if(whishStoredList.includes(id)){
        // already exists this item . Don't Add It.
        console.log(id, 'already exists this item')
    }
    else{
        whishStoredList.push(id)
        const whishStoredListStr = JSON.stringify(whishStoredList);
        localStorage.setItem('whish-list', whishStoredListStr)
    }
 }
export {addToReadList,addToWhishList,getStoredList}