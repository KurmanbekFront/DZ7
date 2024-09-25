class Cars {
    constructor(options) {
        this.model = options.model;
        this.color = options.color;
        this.wheels = options.wheels
    }

    carInfo() {
        console.log(`Model: ${this.model}, Color: ${this.color}, Wheels: ${this.wheels}, fuel: ${this.fuel === undefined ? `Неизвестно` : this.fuel}`);
    }

    start() {
        console.log('Машина заведена');
    }
}

class Toyota extends Cars {
    constructor(options) {
        super(options);
        this.fuel = options.fuel;
    }
}

class Bmw extends Cars {
    constructor(options) {
        super(options);
        this.fuel = options.fuel;
    }
}

class Audi extends Cars {
    constructor(options) {
        super(options);
        this.fuel = options.fuel;
    }
}

const toyota = new Toyota({
    model: 'Toyota RAV4', 
    color: 'Black',
    wheels: 4,
    fuel: 60
});

const bmw = new Bmw({
    model: 'BMW 5 Series', 
    color: 'Red',
    wheels: 4,
    fuel: 50,
});

const audi = new Audi({
    model: 'Audi Q7', 
    color: 'Blue',
    wheels: 4,
    fuel: 70,
});

toyota.carInfo()
toyota.start();

bmw.carInfo()
bmw.start();

audi.carInfo()
audi.start();

// Задание 2
const trafficLightBtn = document.querySelector(".trafficLightBtn")

class TrafficLight {
    constructor() {
        this.states = {
            "красный": 'STOP',
            "жёлтый": 'WAIT',
            "зелёный": 'GO'
        };
        this.currentColor = null;
    }

    changeColor(color) {
        if (this.states[color]) {
            this.currentColor = color;
            this.display()
        } else {
            alert("Введите цвета");
        }
    }

    display() {
        alert(this.currentColor)
    }
}

const trafficLight = new TrafficLight();
const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")

trafficLightBtn.addEventListener("click", () => {
const userInput = prompt("Введите цвет светофора").toLowerCase().trim();

red.style.background = "none"
yellow.style.background = "none"
green.style.background = "none"
if (userInput === "красный") {
        trafficLight.changeColor("красный");
        red.style.background = "red"
    } else if (userInput === "жёлтый") {
        trafficLight.changeColor("жёлтый");
        yellow.style.background = "yellow"
    } else if (userInput === "зелёный") {
        trafficLight.changeColor("зелёный");
        green.style.background = "green"
    } else {
        alert("Пожалуйста, Введите цвета!");
    }
})
