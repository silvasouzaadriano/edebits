import Debit from '../infra/typeorm/entities/Debit';
import ICreateDebitDTO from '../dtos/ICreateDebitDTO';
import IUpdateDebitDTO from '../dtos/IUpdateDebitDTO';
import IDeleteDebitDTO from '../dtos/IDeleteDebitDTO';

export default interface IDebitsRepository {
  create(data: ICreateDebitDTO): Promise<Debit>;
  update(data: IUpdateDebitDTO): Promise<Debit>;
  delete(data: IDeleteDebitDTO): Promise<Debit>;
  findAll(): Promise<Debit[] | undefined>;
  findByClient(client_id: number): Promise<Debit[] | undefined>;
}