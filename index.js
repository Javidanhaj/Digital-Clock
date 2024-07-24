function clock_logic(){
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const clock = `${hours}:${minutes}:${seconds}`; 

    document.getElementById('clock').innerText = clock;
    
}

clock_logic();
setInterval(clock_logic, 1000);