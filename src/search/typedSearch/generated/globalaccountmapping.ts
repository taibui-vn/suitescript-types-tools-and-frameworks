// This file is automatically generated - don't edit it. 
// Search Types for record Global Account Mapping (globalaccountmapping)

// Search Columns

/** Global Account Mapping (globalaccountmapping) Search Columns definition */
export interface globalaccountmappingSearchColumn {
  /** Accounting Book (accountingbook: select) */
      accountingbook?: string;
  /** Class (class: select) */
      class?: string;
  /** Custom Dimension (customdimension: select) */
      customdimension?: string;
  /** Department (department: select) */
      department?: string;
  /** Destination Account (destinationaccount: select) */
      destinationaccount?: string;
  /** Effective Date (effectivedate: date) */
      effectivedate?: string;
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
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Location (location: select) */
      location?: string;
  /** Source Account (sourceaccount: select) */
      sourceaccount?: string;
  /** Subsidiary (subsidiary: select) */
      subsidiary?: string;
}


// Search Filters

/** Global Account Mapping (globalaccountmapping) Search Filters definition */
export interface globalaccountmappingSearchFilter {
/** Accounting Book (accountingbook: select) */
  accountingbook?: string;
  /** Class (class: select) */
  class?: string;
  /** Custom Dimension (customdimension: select) */
  customdimension?: string;
  /** Department (department: select) */
  department?: string;
  /** Destination Account (destinationaccount: select) */
  destinationaccount?: string;
  /** Effective Date (effectivedate: date) */
  effectivedate?: string;
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
  /** Location (location: select) */
  location?: string;
  /** Source Account (sourceaccount: select) */
  sourceaccount?: string;
  /** Subsidiary (subsidiary: select) */
  subsidiary?: string;
}


// Search Joins

/** Global Account Mapping (globalaccountmapping) Search Joins definitions. */
export interface globalaccountmappingSearchJoinTypes {
/** globalaccountmapping's accountingbook search filter. Accounting Book. Actual name: Accounting Book. */
  accountingbook: 'accountingbook';
  /** globalaccountmapping's department search filter. Department. Actual name: Department. */
  department: 'department';
  /** globalaccountmapping's destinationaccount search filter. Destination Account. Actual name: Account. */
  destinationaccount: 'destinationaccount';
  /** globalaccountmapping's location search filter. Location. Actual name: Location. */
  location: 'location';
  /** globalaccountmapping's sourceaccount search filter. Source Account. Actual name: Account. */
  sourceaccount: 'sourceaccount';
  /** globalaccountmapping's subsidiary search filter. Subsidiary. Actual name: Subsidiary. */
  subsidiary: 'subsidiary';
}


// Search Filter Types

/** Global Account Mapping (globalaccountmapping) Search Filter Type definitions. */
export interface globalaccountmappingSearchFilterTypes {
accountingbook: 'select';
  class: 'select';
  customdimension: 'select';
  department: 'select';
  destinationaccount: 'select';
  effectivedate: 'date';
  enddate: 'date';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  location: 'select';
  sourceaccount: 'select';
  subsidiary: 'select';
}


// Search Column Types

/** Global Account Mapping (globalaccountmapping) Search Column Type definitions. */
export interface globalaccountmappingSearchColumnTypes {
accountingbook: 'select';
  class: 'select';
  customdimension: 'select';
  department: 'select';
  destinationaccount: 'select';
  effectivedate: 'date';
  enddate: 'date';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  location: 'select';
  sourceaccount: 'select';
  subsidiary: 'select';
}