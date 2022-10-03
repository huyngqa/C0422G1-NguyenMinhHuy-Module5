import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  gender?: boolean;
  customerType?: CustomerType;
}
