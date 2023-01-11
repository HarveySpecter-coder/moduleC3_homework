function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    this.pluggedIn = true;
    console.log(this.name + " is plugged");
};

ElectricalAppliance.prototype.unplug = function() {
    this.pluggedIn = false;
    console.log(this.name + " is unplugged");
};

function Fridge(name, brand, power, madeIn) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.madeIn = madeIn;
    this.pluggedIn = false;
}

function Router(name, brand, power, wifi, module4G) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.wifi = wifi; //bool
    this.module4G = module4G; //bool
    this.pluggedIn = false;
}

Fridge.prototype = new ElectricalAppliance();
Router.prototype = new ElectricalAppliance();

const fridge = new Fridge("Fridge", "Indesit", 520, "China");
const router = new Router("Router", "Huawei", 60, true, false);

fridge.unplug();
router.plugIn();

console.log(router)
console.log(fridge)