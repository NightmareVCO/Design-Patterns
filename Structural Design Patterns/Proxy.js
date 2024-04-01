var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('RealSubject: Handling request.');
    };
    return RealSubject;
}());
var Proxy = /** @class */ (function () {
    /**
     * The Proxy maintains a reference to an object of the RealSubject class. It
     * can be either lazy-loaded or passed to the Proxy by the client.
     */
    function Proxy(realSubject) {
        this.realSubject = realSubject;
    }
    Proxy.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    Proxy.prototype.checkAccess = function () {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    };
    Proxy.prototype.logAccess = function () {
        console.log('Proxy: Logging the time of request.');
    };
    return Proxy;
}());
function clientCode(subject) {
    subject.request();
}
console.log('Client: Executing the client code with a real subject:');
var realSubject = new RealSubject();
clientCode(realSubject);
console.log('');
console.log('Client: Executing the same client code with a proxy:');
var proxy = new Proxy(realSubject);
clientCode(proxy);
