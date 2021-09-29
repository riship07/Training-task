function rishi(opts) {
    console.log(obj);
    console.log(opts.x);
    console.log(opts.y);
}
var obj = { r: 60 };
rishi({ obj: obj });
rishi({ obj: obj, x: 100 });
rishi({ obj: obj, y: 100 });
rishi({ obj: obj, x: 100, y: 100 });
