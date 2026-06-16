import fs from 'fs';
import { parse } from 'csv-parse/sync';


export interface TestData {
    testName: string;
    email: string;
    password: string;
    expected: string;
}

export class DataProvider {
    static getTestDataFromJson(filePath: string): TestData[] {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        return data as TestData[];
    }

    static getTestDataFromCsv(filePath: string): TestData[] {
        const data = parse(fs.readFileSync(filePath), { columns: true, skip_empty_lines: true });
        return data as TestData[];
    }


}