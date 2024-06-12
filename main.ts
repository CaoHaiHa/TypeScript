import fetch from 'node-fetch';

const catsAPI: string = 'https://api.thecatapi.com/v1/breeds';

const weightMetric = (metric: string): string[] => {
    const pattern: RegExp = /\d/g;
    const metricArray: string[] | null = metric.match(pattern);
    return metricArray ? metricArray : [];
}

const fetchData = async (): Promise<void> => {
    try {
        const response = await fetch(catsAPI);
        const data: any = await response.json();
        const catTable: any[][] = [];
        const catNameTable: string[] = [];
        let a: number = 0;
        let b: number = 0;

        for (let i of data) {
            let temp: any[] = [];
            let temp2: string[] = weightMetric(i.weight.metric);
            a += +temp2[0];
            b += +temp2[1];
            temp.push(i.name);
            temp.push(i.id);
            temp.push(i.weight);
            catTable.push(temp);
            catNameTable.push(i.name);
        }

        a /= data.length;
        b /= data.length;

        console.log(`%cCat Table:`, 'color:blue');
        console.table(catTable);
        console.log(`%cCat Name Table:`, `color:blue`);
        console.table(catNameTable);
        console.log(`%cThe average weight of cat in metric unit: (${Math.round(a)}-${Math.round(b)})`, 'color:blue');
    } catch (err) {
        console.error(err);
    }
}

fetchData();