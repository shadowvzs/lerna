export interface BaseDto {
    id: string;
    createAt: Date;
    createdBy: string;
    updatedAt?: Date;
    updatedBy?: string;
}