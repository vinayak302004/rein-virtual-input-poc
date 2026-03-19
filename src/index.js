const koffi = require('koffi');

const lib = koffi.load('./libvmouse.so');

const setup = lib.func('int setup_device()');
const move = lib.func('void move_mouse(int fd, int dx, int dy)');
const scroll = lib.func('void scroll_mouse(int fd, int value)');

const fd = setup();

console.log("Virtual mouse started...");

let count = 0;

const interval = setInterval(() => {
    move(fd, 5, 0);
    count++;

    if (count > 50) {
        clearInterval(interval);
        console.log("Stopped movement");
    }
}, 100);