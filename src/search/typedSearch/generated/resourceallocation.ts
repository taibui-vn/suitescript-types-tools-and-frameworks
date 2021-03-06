// This file is automatically generated - don't edit it. 
// Search Types for record Resource Allocation (resourceallocation)

// Search Columns

/** Resource Allocation (resourceallocation) Search Columns definition */
export interface resourceallocationSearchColumn {
  /** Allocation Type (allocationtype: select) */
      allocationtype?: string;
  /** Allocate By (allocationunit: select) */
      allocationunit?: string;
  /** Approval Status (approvalstatus: select) */
      approvalstatus?: string;
  /** Project (company: select) */
      company?: string;
  /** Customer (customer: select) */
      customer?: string;
  /** End Date (enddate: date) */
      enddate?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Formula (Currency) (formulacurrency: currency) */
      formulacurrency?: string;
  /** Formula (Date) (formuladate: date) */
      formuladate?: string;
  /** Formula (Date/Time) (formuladatetime: datetime) */
      formuladatetime?: string;
  /** Formula (Numeric) (formulanumeric: float) */
      formulanumeric?: string;
  /** Formula (Percent) (formulapercent: percent) */
      formulapercent?: string;
  /** Formula (Text) (formulatext: text) */
      formulatext?: string;
  /** ID (id: integer) */
      id?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Next Approver (nextapprover: select) */
      nextapprover?: string;
  /** Notes (notes: text) */
      notes?: string;
  /** Number of Hours (numberhours: float) */
      numberhours?: string;
  /** Percentage of Time (percentoftime: percent) */
      percentoftime?: string;
  /** Requested By (requestedby: select) */
      requestedby?: string;
  /** Resource (resource: select) */
      resource?: string;
  /** Start Date (startdate: date) */
      startdate?: string;
}


// Search Filters

/** Resource Allocation (resourceallocation) Search Filters definition */
export interface resourceallocationSearchFilter {
/** Allocation Type (allocationtype: select) */
  allocationtype?: string;
  /** Allocate By (allocationunit: select) */
  allocationunit?: string;
  /** Approval Status (approvalstatus: select) */
  approvalstatus?: string;
  /** Customer (customer: select) */
  customer?: string;
  /** End Date (enddate: date) */
  enddate?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: string;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: string;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Next Approver (nextapprover: select) */
  nextapprover?: string;
  /** Notes (notes: text) */
  notes?: string;
  /** Number of Hours (numberhours: float) */
  numberhours?: string;
  /** Percentage of Time (percentoftime: percent) */
  percentoftime?: string;
  /** Project (project: select) */
  project?: string;
  /** Requested by (requestedby: select) */
  requestedby?: string;
  /** Resource (resource: select) */
  resource?: string;
  /** Start Date (startdate: date) */
  startdate?: string;
}


// Search Joins

/** Resource Allocation (resourceallocation) Search Joins definitions. */
export interface resourceallocationSearchJoinTypes {
/** resourceallocation's customer search filter. Customer. Actual name: Customer. */
  customer: 'customer';
  /** resourceallocation's employee search filter. Resource - Employee. Actual name: Employee. */
  employee: 'employee';
  /** resourceallocation's job search filter. Project. Actual name: Job. */
  job: 'job';
  /** resourceallocation's user search filter. User. Actual name: Employee. */
  user: 'user';
  /** resourceallocation's vendor search filter. Resource - Vendor. Actual name: Vendor. */
  vendor: 'vendor';
}


// Search Filter Types

/** Resource Allocation (resourceallocation) Search Filter Type definitions. */
export interface resourceallocationSearchFilterTypes {
allocationtype: 'select';
  allocationunit: 'select';
  approvalstatus: 'select';
  customer: 'select';
  enddate: 'date';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  nextapprover: 'select';
  notes: 'text';
  numberhours: 'float';
  percentoftime: 'percent';
  project: 'select';
  requestedby: 'select';
  resource: 'select';
  startdate: 'date';
}


// Search Column Types

/** Resource Allocation (resourceallocation) Search Column Type definitions. */
export interface resourceallocationSearchColumnTypes {
allocationtype: 'select';
  allocationunit: 'select';
  approvalstatus: 'select';
  company: 'select';
  customer: 'select';
  enddate: 'date';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  id: 'integer';
  internalid: 'select';
  nextapprover: 'select';
  notes: 'text';
  numberhours: 'float';
  percentoftime: 'percent';
  requestedby: 'select';
  resource: 'select';
  startdate: 'date';
}