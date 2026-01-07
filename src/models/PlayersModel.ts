import { BaseEntity, Column, CreateDateColumn, 
    Entity, PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";

@Entity({name: "players"})
export class Players extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() first: string;
    @Column() last: string;
    @Column() age: number;
    @Column() info: string;
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date;
}



