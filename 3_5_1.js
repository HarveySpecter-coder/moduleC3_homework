class ElectricalAppliance {
    constructor(name,power){
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}
    plugged(){
        console.log(this.name + ' is plugged');
        this.pluggedIn = true;
    }
    unplug(){
        console.log(this.name + ' is unplugged')
        this.pluggedIn = false;
    }

}

class Fridge extends ElectricalAppliance{
    constructor(name, brand, power, madeIn){
    super(name, power);
    this.brand = brand;
    this.madeIn = madeIn;
    this.pluggedIn = false;
    }
}

class Router extends ElectricalAppliance{
    constructor(name, brand, power, wifi, module4g){
        super(name, power);
        this.brand = brand;
        this.wifi = wifi; //bool
        this.module4G = module4g;   //bool
        this.pluggedIn = true;
    }
}

const fridge = new Fridge("Fridge", "Indesit", 520, "China");
const router = new Router("Router", "Huawei", 60, true, false);

fridge.unplug();
router.plugged();

console.log(router)
console.log(fridge)