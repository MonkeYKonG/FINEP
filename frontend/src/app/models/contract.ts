export class Contract {
    public id: number;
    public author_id: number;
    public signs_id: Array<number>;
    public emit: Date;
    public duration: number;
    public body: string;
}
