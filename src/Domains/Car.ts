import ICar from '../Interfaces/ICar';

class Car {
  private id?: string;
  private model: string;
  private year: number;
  private color: string;
  private status?: boolean;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    car:ICar,
  ) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

export default Car;