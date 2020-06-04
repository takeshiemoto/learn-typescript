"use strict";
/**
 * コンパニオンオブジェクトパターン
 * 型と値は別々の名前空間に存在する
 */
exports.__esModule = true;
exports.Shoe = exports.Currency = void 0;
exports.Currency = {
    from: function (value, unit) {
        return {
            unit: unit,
            value: value
        };
    }
};
var BalletFlat = /** @class */ (function () {
    function BalletFlat() {
        this.purpose = 'dancing';
    }
    return BalletFlat;
}());
var Boot = /** @class */ (function () {
    function Boot() {
        this.purpose = 'woodcutting';
    }
    return Boot;
}());
var Sneaker = /** @class */ (function () {
    function Sneaker() {
        this.purpose = 'walking';
    }
    return Sneaker;
}());
/**
 * Shoe Factory
 */
exports.Shoe = {
    create: function (type) {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat;
            case 'boot':
                return new Boot;
            case 'sneaker':
                return new Sneaker;
        }
    }
};
