// This file is automatically generated - don't edit it. 
// Search Types for record Phone Call (phonecall)

// Search Columns

/** Phone Call (phonecall) Search Columns definition */
export interface phonecallSearchColumn {
  /** Private (accesslevel: text) */
      accesslevel?: string;
  /** Organizer (assigned: select) */
      assigned?: string;
  /** Company (company: select) */
      company?: string;
  /** Date Completed (completeddate: date) */
      completeddate?: Date;
  /** Contact (contact: select) */
      contact?: string;
  /** Date Created (createddate: datetime) */
      createddate?: Date;
  /** End Date (enddate: date) */
      enddate?: Date;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Formula (Currency) (formulacurrency: currency) */
      formulacurrency?: number;
  /** Formula (Date) (formuladate: date) */
      formuladate?: Date;
  /** Formula (Date/Time) (formuladatetime: datetime) */
      formuladatetime?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
      formulanumeric?: number;
  /** Formula (Percent) (formulapercent: percent) */
      formulapercent?: number;
  /** Formula (Text) (formulatext: text) */
      formulatext?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Last Modified (lastmodifieddate: datetime) */
      lastmodifieddate?: Date;
  /** Last Viewed (lastviewed: datetime) */
      lastviewed?: Date;
  /** Mark (markdone: text) */
      markdone?: string;
  /** Comment (message: text) */
      message?: string;
  /** Created By (owner: select) */
      owner?: string;
  /** Phone Number (phone: phone) */
      phone?: string;
  /** Priority (priority: select) */
      priority?: string;
  /** Phone Call Date (startdate: date) */
      startdate?: Date;
  /** Start Time (starttime: timeofday) */
      starttime?: string;
  /** Status (status: select) */
      status?: string;
  /** Subject (title: text) */
      title?: string;
  /** Transaction (transaction: select) */
      transaction?: string;
}


// Search Filters

/** Phone Call (phonecall) Search Filters definition */
export interface phonecallSearchFilter {
/** Organizer (assigned: select) */
  assigned?: string;
  /** Company (company: select) */
  company?: string;
  /** Date Completed (completeddate: date) */
  completeddate?: Date;
  /** Contact (contact: select) */
  contact?: string;
  /** Created By (createdby: select) */
  createdby?: string;
  /** Date Created (createddate: datetime) */
  createddate?: Date;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: number;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Is Private (isprivate: checkbox) */
  isprivate?: boolean;
  /** Last Modified Date (lastmodifieddate: datetime) */
  lastmodifieddate?: Date;
  /** Owner (owner: checkbox) */
  owner?: boolean;
  /** Phone Number (phone: phone) */
  phone?: string;
  /** Priority (priority: select) */
  priority?: string;
  /** Phone Call Date (startdate: date) */
  startdate?: Date;
  /** Status (status: select) */
  status?: string;
  /** Subject (title: text) */
  title?: string;
}


// Search Joins

/** Phone Call (phonecall) Search Joins definitions. */
export interface phonecallSearchJoinTypes {
/** phonecall's companycustomer search filter. Company (Customer). Actual name: Customer. */
  companycustomer: 'companycustomer';
  /** phonecall's contact search filter. Contact. Actual name: Contact. */
  contact: 'contact';
  /** phonecall's employee search filter. Employee. Actual name: Employee. */
  employee: 'employee';
  /** phonecall's originatinglead search filter. Originating Lead. Actual name: Lead. */
  originatinglead: 'originatinglead';
}


// Search Filter Types

/** Phone Call (phonecall) Search Filter Type definitions. */
export interface phonecallSearchFilterTypes {
assigned: 'select';
  company: 'select';
  completeddate: 'date';
  contact: 'select';
  createdby: 'select';
  createddate: 'datetime';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isprivate: 'checkbox';
  lastmodifieddate: 'datetime';
  owner: 'checkbox';
  phone: 'phone';
  priority: 'select';
  startdate: 'date';
  status: 'select';
  title: 'text';
}


// Search Column Types

/** Phone Call (phonecall) Search Column Type definitions. */
export interface phonecallSearchColumnTypes {
accesslevel: 'text';
  assigned: 'select';
  company: 'select';
  completeddate: 'date';
  contact: 'select';
  createddate: 'datetime';
  enddate: 'date';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  lastmodifieddate: 'datetime';
  lastviewed: 'datetime';
  markdone: 'text';
  message: 'text';
  owner: 'select';
  phone: 'phone';
  priority: 'select';
  startdate: 'date';
  starttime: 'timeofday';
  status: 'select';
  title: 'text';
  transaction: 'select';
}