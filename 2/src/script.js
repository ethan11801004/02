// 設定帳號密碼
const accounts = [
{ username: '1', password: '1' },
];

// 存儲表單資料
let machineData = [];

// 登入功能
document.getElementById('login').addEventListener('submit', function(e) {e.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const account = accounts.find(acc => acc.username === username && acc.password === password);

if (account) {
document.getElementById('loginForm').style.display = 'none';
document.getElementById('maintenanceForm').style.display = 'block';
loadTable();
} else {
document.getElementById('loginError').textContent = '帳號或密碼錯誤！';
}
});

// 登出功能
document.getElementById('logoutBtn').addEventListener('click', function() {
document.getElementById('maintenanceForm').style.display = 'none';
document.getElementById('loginForm').style.display = 'block';
document.getElementById('username').value = '';
document.getElementById('password').value = '';
document.getElementById('loginError').textContent = '';
});

// 新增資料
document.getElementById('addBtn').addEventListener('click', function() {
const newData = {
machineId: '',
machineName: '',
inspectionTime: '',
inspectionMethod: '',
inspectionFrequency: ''
};
machineData.push(newData);
loadTable();
});

// 載入資料到表格
function loadTable() {
const tableBody = document.getElementById('machineTable');
tableBody.innerHTML = ''; // 清空現有資料

machineData.forEach((data, index) => {
const row = document.createElement('tr');

row.innerHTML = `
<td><input type="text" value="${data.machineId}" onchange="updateData(${index}, 'machineId', this.value)"></td>
<td><input type="text" value="${data.machineName}" onchange="updateData(${index}, 'machineName', this.value)"></td>
<td><textarea onchange="updateData(${index}, 'inspectionTime', this.value)">${data.inspectionTime}</textarea></td>
<td><textarea onchange="updateData(${index}, 'inspectionMethod', this.value)">${data.inspectionMethod}</textarea></td>
<td><textarea onchange="updateData(${index}, 'inspectionFrequency', this.value)">${data.inspectionFrequency}</textarea></td>
<td><button style="background-color: red; color: white;" class="fas fa-trash-alt" onclick="deleteData(${index})"> 移除</button></td>
`;

tableBody.appendChild(row);
});
}

// 更新資料
function updateData(index, field, value) {
machineData[index][field] = value;
}

// 刪除資料
function deleteData(index) {
machineData.splice(index, 1);
loadTable();
}
