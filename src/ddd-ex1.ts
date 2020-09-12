const barth = new Date(1986, 5, 22);

class DateOfBarth {
  private readonly YEARS_DATE_TIME = 1000 * 60 * 60 * 24 * 365;
  private readonly CURRENT_DATE_TIME = new Date().getTime();
  private readonly CURRENT_MONTH = new Date().getMonth() + 1;

  constructor(private readonly barthDate: Date) {}

  getAge(): number {
    const yearsMilliSeconds = this.getYearsMilliSeconds();
    return Math.floor(yearsMilliSeconds / this.YEARS_DATE_TIME);
  }

  private getYearsMilliSeconds() {
    return this.CURRENT_DATE_TIME - this.barthDate.getTime();
  }

  checkBarthMonth(): boolean {
    return this.barthDate.getMonth() === this.CURRENT_MONTH;
  }
}

const dateOfBarth = new DateOfBarth(barth);

console.log(dateOfBarth.getAge());
console.log(dateOfBarth.checkBarthMonth());
