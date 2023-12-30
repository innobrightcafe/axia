// This file contains type definitions of data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type RegistrationError =
  | { type: 'passwordMismatch'; message: string } 
  | { type: 'signupFailed'; message: string }
  | { type: 'emailExists'; message: string }
  | { type: 'unknownError'; message: string }; 

  export type Error = {
    type: 'unknownError';
    message: string;
  };

export type signupEndpoint = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};


export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  error: null;
};


export type Referer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Investment = {
  id: string;
  customer_id: string;
  amount: number;
  date: string; 
  // It means that the "status" property can only be one of the two strings: 'inactive' or 'active'.
  status: 'inactive' | 'active';
};

export type Roi = {
  month: string;
  revenue: number;
};

export type LatestInvestment = {
  id: string;
  pkgname: string;
  image_url: string;
  email: string;
  amount: string;
};

//format number to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvestment, 'amount'> & {
  amount: number;
};

export type InvestmentTable = {
  id: string; 
  pkgname: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'inactive' | 'active';
};

export type RefererTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_incestment: number;
  is_inactive: string;
  is_active: string;
};

export type FormattedRefererTable = {
  id: string;
  pkgname: string;
  email: string;
  image_url: string;
  total_investment: number;
  total_inactive: string;
  total_active: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'inactive' | 'active';
};
