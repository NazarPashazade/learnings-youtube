class Car {
    private _model: string;

    constructor(model: string) {
        this._model = model;
    }

    get model(): string {
        return this._model;
    }

    set model(model: string) {
        this._model = model;
    }
}

const myCar = new Car('Camry');

console.log(myCar.model); // Output: Camry

