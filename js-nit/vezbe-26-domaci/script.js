class Stopwatch{
    constructor(seconds,isRunning,intervalid){
        this.seconds = seconds,
        this.isRunning = isRunning,
        this.intervalid = intervalid
        this.laps = []
    }
    increment(){
        this.seconds++;
        console.log(this.seconds);
    }
    start(){
         if (this.isRunning) return;

        this.isRunning = true;    
        this.intervalid = setInterval(this.increment.bind(this),1000);
    }
    stop(){
        if (!this.isRunning) return;
        clearInterval(this.intervalid);
        this.isRunning = false;
    }
    lap(){
        this.laps.push(this.seconds);
         console.log(`Lap zabeležen: ${this.seconds}s`);
    }
    getLaps(){
        console.log(this.laps);
    }
    reset() {
        this.stop();
        this.seconds = 0;
        this.laps = [];
        this.start();
    }
}


let stopwatch = new Stopwatch(1,false,0)

stopwatch.start();
// stopwatch.reset();
// stopwatch.lap();


setTimeout(() => stopwatch.lap(),5000);
setTimeout(() => stopwatch.lap(),9000);

setTimeout(() => stopwatch.getLaps(),15000)
stopwatch.getLaps();