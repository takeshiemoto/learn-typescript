/**
 * Template
 * 大枠の流れだけをテンプレートで定義して
 * 細かい方法については実装側に任す
 */
abstract class Pitching {
  abstract stepOnPlate(): void;
  abstract raiseLegs(): void;
  abstract release(): void;

  doPitching() {
    this.stepOnPlate();
    this.raiseLegs();
    this.release();
  }
}

/**
 * 実装側
 */
export class Takahashi extends Pitching {
  stepOnPlate() {
    console.log('左端を踏む');
  }
  raiseLegs() {
    console.log('豪快に足を上げる');
  }
  release() {
    console.log('地面スレスレでボールを離す');
  }
}

export class Murata extends Pitching {
  stepOnPlate() {
    console.log('真ん中を踏む');
  }
  raiseLegs() {
    console.log('マサカリ');
  }
  release() {
    console.log('豪快にリリース');
  }
}

const myPitching = new Takahashi();
const murata = new Murata();

myPitching.doPitching();
murata.doPitching();
