import { app } from'./js/app';

const infoField = document.getElementById('info');

const charactersInfo = [
    
]
infoField.insertAdjacentHTML("afterbegin", charactersInfo.reduce((acc, value) => acc + '<p>' + value + '</p>', ""));