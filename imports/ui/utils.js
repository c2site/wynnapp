import { ToastContainer, toast } from 'react-toastify';

const Notify = () => {
    toast("Wow so easy !")
}

function RandomNumber(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export {Notify, RandomNumber}

import { Cookies } from 'meteor/ostrio:cookies';
export const cookies = new Cookies();