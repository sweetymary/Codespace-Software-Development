// tag all html elements by their IDs
const addItemtoList = document.getElementById('addItem');
const itemInput = document.getElementById('item');
const buyList = document.getElementById('shoplist');

addItemtoList.addEventListener('submit', function(event) {
   event.preventDefault();
   const item = itemInput.value.trim();
   if (item !== '') {
// when item is not empty we use addItemtoList() put the item into it
       addItemto(item);
       itemInput.value = '';
   }
});

function addItemto(item) {
   const listItem = document.createElement('li');
   listItem.textContent = item;
// tag the delete button
   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'clear';
   deleteButton.addEventListener('click', function() {
       listItem.remove();
   });
   listItem.append(deleteButton);
   shopList.append(listItem);
}
