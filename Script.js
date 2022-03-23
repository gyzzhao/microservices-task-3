// JavaScript source code created George Zhao for Microservices Training (Beginner)
const uri = 'https://jsonplaceholder.typicode.com/users';

function getItems() {
    fetch(uri)   //This is to fetch data from the above API
        .then(response => response.json())
        .then(data => _displayItems(data))   // This is to call the display function below
        .catch(error => console.error('Unable to get items.', error));
}

function _displayItems(data) {
    const tbody = document.getElementById('userInfo');
    tbody.innerHTML = '';
    data.forEach(item => {
        let tr = tbody.insertRow();

        let td1 = tr.insertCell(0);
        let textIdNode = document.createTextNode(item.id);
        td1.appendChild(textIdNode);

        let td2 = tr.insertCell(1);
        let textNameNode = document.createTextNode(item.name);
        td2.appendChild(textNameNode);

        let td3 = tr.insertCell(2);
        let textUserNode = document.createTextNode(item.username);
        td3.appendChild(textUserNode);

        let td4 = tr.insertCell(3);
        let textEmailNode = document.createTextNode(item.email);
        td4.appendChild(textEmailNode);

	let td5 = tr.insertCell(4);
        let (textAddressNode);= document.createTextNode(item.address);
        td5.appendChild(textAddressNode);

        let td6 = tr.insertCell(5);
        let (textPhoneNode);= document.createTextNode(item.phone);
        td6.appendChild(textPhoneNode);
    });
    items = data;
}
