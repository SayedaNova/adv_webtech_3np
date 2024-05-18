import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated} from 'typeorm';
@Entity("guardian")
export class GuardianEntity{
@PrimaryGeneratedColumn()
id: number;

@Column({ length: 150, default: () => 'uuid_generate_v4()' })
uniqueId: string;

@CreateDateColumn({ type: 'timestamp', default: () =>'CURRENT_TIMESTAMP' })
joiningDate: Date;

@Column({ default: 'Unknown', length: 30 })
country: string;
}