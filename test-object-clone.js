let a = {
    name: 'Vova',
    info: {
        bd: '20.03.1991'
    },
    f: function() {
      return this.name
    }
}

function deepCopyObj(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepCopyObj(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = deepCopyObj(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj this object.");
}
let clone = structuredClone(a)
let clone1 = deepCopyObj(a)

clone.name = 'Andrii'

console.table(a)
console.table(clone)


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();
