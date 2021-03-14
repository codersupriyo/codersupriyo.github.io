const checkTime = (t) => {
    if (t < 10) {
        t = '0' + t;
    }
    return t;
}

const timer = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    let s = today.getSeconds();
    s = checkTime(s);

    document.getElementById('clock').innerHTML = `${h}:${m}:${s}`;

    time = setTimeout(() => {
        timer()
    }, 500);

}

timer();