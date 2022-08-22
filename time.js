const processor = (input) => {
    let hour = parseInt(input.substr(0, 2));
    let minute = parseInt(input.substr(3, 2));
    let second = parseInt(input.substr(6, 2));
    let noon = (input.substr(8, 2) == 'PM');
    
    if (noon) {
        hour = hour - 12;
    }
    second = second + 45;
    if(minute > 59) {
        second -= 60;
        minute++;
    }
    minute = minute + 45;
    if(minute > 59) {
        minute -= 60;
        hour++;
    }
   if(hour> 23) {
       hour = hour - 24;
   }
    
    console.log(`${hour}:${minute}:${second}`);
}

let input = "12:01:00PM";

processor(input); 
