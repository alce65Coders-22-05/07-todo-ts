// export interface iTask {
//     id: string;
//     name: string;
//     responsible: string;
//     isComplete: boolean;
// }
// (false);implements iTask
export class Task {
    name;
    responsible;
    id;
    isComplete;
    constructor(name, responsible) {
        this.name = name;
        this.responsible = responsible;
        this.id = this.generateId();
        this.isComplete = false;
    }
    generateId() {
        // error
        // return uuid();
        return String(Math.floor(Math.random() * 10_000_000));
    }
}