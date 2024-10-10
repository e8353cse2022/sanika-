// Sample data for the ERP system
let inventory = [
   { id: 1, name: "Product 1", stock: 100, price: 10 },
   { id: 2, name: "Product 2", stock: 50, price: 20 },
   { id: 3, name: "Product 3", stock: 200, price: 15 }];

// Switch between tabs (Inventory, Employees, Finance)
document.getElementById('inventoryTab').addEventListener('click', showInventory);

function showInventory() {
   let content = `
      <h2>Inventory Management</h2>
      <table>
         <thead>
            <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Stock</th>
               <th>Price</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>
            ${inventory.map(item => `
               <tr>
                  <td>${item.id}</td>
                  <td>${item.name}</td>
                  <td>${item.stock}</td>
                  <td>${item.price}</td>
                  <td><button onclick="deleteProduct(${item.id})">Delete</button></td>
               </tr>
            `).join('')}
         </tbody>
      </table>
      <h3>Add New Product</h3>
      <form id="addProductForm">
         <input type="text" id="productName" placeholder="Product Name" required />
         <input type="number" id="productStock" placeholder="Stock" required />
         <input type="number" id="productPrice" placeholder="Price" required />
         <button type="submit">Add Product</button>
      </form>
   `;
   document.getElementById('content').innerHTML = content;
   document.getElementById('addProductForm').addEventListener('submit', addProduct);
}

function addProduct(e) {
   e.preventDefault();
   const name = document.getElementById('productName').value;
   const stock = document.getElementById('productStock').value;
   const price = document.getElementById('productPrice').value;

   const newProduct = {
      id: inventory.length + 1,
      name: name,
      stock: parseInt(stock),
      price: parseFloat(price)
   };

   inventory.push(newProduct);
   showInventory();
}

function deleteProduct(id) {
   inventory = inventory.filter(item => item.id !== id);
   showInventory();
}
function saveData() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
 }
 
 function loadData() {
    const storedData = localStorage.getItem('inventory');
    if (storedData) {
       inventory = JSON.parse(storedData);
    }
 }