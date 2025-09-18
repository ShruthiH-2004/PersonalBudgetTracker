// Get form and table body
const form = document.getElementById('expense-form');
const tableBody = document.getElementById('expense-table-body');

// Load saved expenses from localStorage
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Render expenses to the table
function renderExpenses() {
  tableBody.innerHTML = '';
  expenses.forEach((exp, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${exp.name}</td>
      <td>${exp.date}</td>
      <td>${exp.category}</td>
      <td>${parseFloat(exp.amount).toFixed(2)}</td>
      <td><button onclick="deleteExpense(${index})" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Handle form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newExpense = {
    name: document.getElementById('expense-name').value,
    date: document.getElementById('expense-date').value,
    category: document.getElementById('expense-category').value,
    amount: document.getElementById('expense-amount').value
  };

  expenses.push(newExpense);
  localStorage.setItem('expenses', JSON.stringify(expenses));

  renderExpenses();
  form.reset();
});

// Delete expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
}

// Initial load
renderExpenses();

// LOGIN SECTION
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close-btn');
const submitLogin = document.getElementById('submit-login');

// Open login modal
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Login logic
submitLogin.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  if (username.trim() !== '') {
    localStorage.setItem('username', username);
    alert(`Welcome, ${username}!`);
    loginModal.style.display = 'none';
    loginBtn.textContent = username; // Show username on navbar
  }
});
