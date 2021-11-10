class Matrix{
    constructor(){    
        this.innerMatrix = [
            [this.GetInt(),this.GetInt(),this.GetInt(),this.GetInt()],
            [this.GetInt(),this.GetInt(),this.GetInt(),this.GetInt()],
            [this.GetInt(),this.GetInt(),this.GetInt(),this.GetInt()],
            [this.GetInt(),this.GetInt(),this.GetInt(),this.GetInt()]
        ]
    }

    GetInt(){
        return Math.ceil(Math.random()*10 * (Math.random() < 0.25 ? -1 : 1));
    }

    SortByColumn(){
        for (let col = 0; col < 4; col++) {
            this.innerMatrix.flatMap(i => i[col]).sort(function(a, b) {
                return a - b;
              }).forEach((value, row) => this.innerMatrix[row][col] = value);
        }
    }

    Sum(sourceMatrix){
        this.innerMatrix.forEach((r, rId) =>{
            r.forEach((_, cId) => {
                this.innerMatrix[rId][cId] += sourceMatrix.innerMatrix[rId][cId];
            }
        )});
    }

    Mul(sourceMatrix){
        let result = new Array(this.innerMatrix.length).fill(0).map(row => new Array(sourceMatrix.innerMatrix[0].length).fill(0));

        result = result.map((row, i) => {
            return row.map((_, j) => {
                return this.innerMatrix[i].reduce((sum, elm, k) => sum + (elm*sourceMatrix.innerMatrix[k][j]),0)
            })
        })
        this.innerMatrix = result;
    }
}

console.log('New matrix A');
const mx = new Matrix();
mx.innerMatrix.forEach(row => console.log(row));

console.log('Sort column matrix A');
mx.SortByColumn();
mx.innerMatrix.forEach(row => console.log(row));

console.log('New matrix B');
const mx1 = new Matrix();
mx1.innerMatrix.forEach(row => console.log(row));

console.log('Sum matrix A+B');
mx.Sum(mx1);
mx.innerMatrix.forEach(row => console.log(row));

console.log('Mul matrix A*B');
mx.Mul(mx1);
mx.innerMatrix.forEach(row => console.log(row));