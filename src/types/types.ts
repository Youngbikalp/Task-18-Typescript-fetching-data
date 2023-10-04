interface IAddress {
  city: string;
  zipcode: string;
}

interface IUsers {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
}

export type { IUsers };
