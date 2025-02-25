// 从localStorage获取访问计数
let count = localStorage.getItem('visitorCount') || 0;
count = parseInt(count) + 1;

// 更新访问计数
localStorage.setItem('visitorCount', count);
document.getElementById('visitorCount').textContent = count; 