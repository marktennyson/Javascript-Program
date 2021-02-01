class QuardraticSolver{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    solve = () => {
        this.d = Math.pow(this.b, 2) - (4*this.a*this.c);
        this.e = Math.pow(this.d, 0.5);
        this.x1 = -(this.b-this.e)/2*this.a;
        this.x2 = -(this.b+this.e)/2*this.a;
        return [this.x1, this.x2];
    }
}

const a = 1;
const b = -10;
const c = 16;
const solver = new QuardraticSolver(a, b, c)
const res = solver.solve()
console.log(`Your ans is: ${res}`)