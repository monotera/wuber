import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Trip} from "../../trip/models/trip.entity";


@Entity()
export class Rider {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({nullable: true})
    creditCardPaymentSource: number;
    @Column({nullable: true})
    acceptanceToken: string;
    @Column()
    email: string;
    @Column({default: true})
    isAvailable: boolean

    @OneToMany(() => Trip, trip => trip.rider)
    trips: Trip[];
}