class Game {
    constructor() {
        this.map = null;
        this.bots = [];
        this.buffs = [];
        this.counter = 0;
    }

    plusCounter() {
        this.counter = this.counter + 1;
    }

    initMap() {
        let map = {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            color: '#f5f5f5',
            border: '#f1f1f1'
        }

        this.map = map;
    }

    getMap() {
        return this.map;
    }

    pushBot() {
        let bot = {
            id: this.plusCounter,
            x: 0,
            y: 0,
            width: 56,
            height: 56,
            trnstn: .25,
            step: 56,
            color: 'yellow'
        }
        
        this.bots.push(bot);
    }

    getBots() {
        return this.bots;
    }

    pushBuff() {
        let buff = {
            id: this.plusCounter,
            x: 200,
            y: 200,
            width: 56,
            height: 56,
            trnstn: .25,
            color: 'purple'
        }
        
        this.buffs.push(buff);
    }

    getBuffs() {
        return this.buffs;
    }
}