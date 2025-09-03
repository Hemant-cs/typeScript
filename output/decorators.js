"use strict";
// decorators
// in typeScript Decorators are special type of declartion that can be attached to any class, method, properties and parameters to modify 
// there behavior
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// for accessing to class
function getClass(constructor) {
    console.log(constructor.name); //GetInc
}
//for accessing property name
function getPropName(target, key) {
    console.log(key.name);
}
let GetInc = (() => {
    let _classDecorators = [getClass];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _incId_decorators;
    let _incId_initializers = [];
    let _incId_extraInitializers = [];
    var GetInc = _classThis = class {
        constructor(x, y, z) {
            this.incId = __runInitializers(this, _incId_initializers, void 0);
            this.incReq = __runInitializers(this, _incId_extraInitializers);
            this.incId = x;
            this.incReq = y;
            this.incSLA = z;
        }
    };
    __setFunctionName(_classThis, "GetInc");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _incId_decorators = [getPropName];
        __esDecorate(null, null, _incId_decorators, { kind: "field", name: "incId", static: false, private: false, access: { has: obj => "incId" in obj, get: obj => obj.incId, set: (obj, value) => { obj.incId = value; } }, metadata: _metadata }, _incId_initializers, _incId_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GetInc = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GetInc = _classThis;
})();
const inc1 = new GetInc("INC123", "Hemant", 3);
