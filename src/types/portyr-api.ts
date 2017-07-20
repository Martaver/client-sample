/* tslint:disable */
// This is a generated file - do not edit.
// Last generated: Thu Jul 20 2017 14:36:17 GMT+0300 (FLE Summer Time).

/* Options:
Date: 2017-07-20 14:36:17
Version: 1.043
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturnVoid
{
    createResponse() : void;
}

export interface IReturn<T>
{
    createResponse() : T;
}

export class QueryBase
{
    // @DataMember(Order=1)
    skip: number;

    // @DataMember(Order=2)
    take: number;

    // @DataMember(Order=3)
    orderBy: string;

    // @DataMember(Order=4)
    orderByDesc: string;

    // @DataMember(Order=5)
    include: string;

    // @DataMember(Order=6)
    fields: string;

    // @DataMember(Order=7)
    meta: { [index:string]: string; };
}

export class QueryDb<T> extends QueryBase
{
}

export class Purpose
{
    name: string;
    description: string;
    dataTypeIds: number[];
}

export class Policy
{
    id: number;
    name: string;
    // @References(typeof(Company))
    companyId: number;

    purposes: Purpose[];
    description: string;
}

export class Company
{
    id: number;
    name: string;
    services: Policy[];
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    errorCode: string;

    // @DataMember(Order=2)
    message: string;

    // @DataMember(Order=3)
    stackTrace: string;

    // @DataMember(Order=4)
    errors: ResponseError[];

    // @DataMember(Order=5)
    meta: { [index:string]: string; };
}

export class PiiType
{
    id: number;
    name: string;
}

export class MultiplyIntegersResponse
{
    product: number;
}

export class HelloWorldResponse
{
    hello: string;
    someOtherProperty: string;
    numberOfEyesAkaHas: number;
}

// @DataContract
export class QueryResponse<T>
{
    // @DataMember(Order=1)
    offset: number;

    // @DataMember(Order=2)
    total: number;

    // @DataMember(Order=3)
    results: T[];

    // @DataMember(Order=4)
    meta: { [index:string]: string; };

    // @DataMember(Order=5)
    responseStatus: ResponseStatus;
}

// @Route("/multiply")
export class MultiplyIntegers implements IReturn<MultiplyIntegersResponse>
{
    first: number;
    second: number;
    createResponse() { return new MultiplyIntegersResponse(); }
    getTypeName() { return "MultiplyIntegers"; }
}

// @Route("/hello/{Name}")
export class HelloWorld implements IReturn<HelloWorldResponse>
{
    name: string;
    times: number;
    joasInfo: string;
    createResponse() { return new HelloWorldResponse(); }
    getTypeName() { return "HelloWorld"; }
}

// @Route("/company")
export class QueryCompany extends QueryDb<Company> implements IReturn<QueryResponse<Company>>
{
    name: string;
    createResponse() { return new QueryResponse<Company>(); }
    getTypeName() { return "QueryCompany"; }
}

// @Route("/piiType")
export class QueryPiiType extends QueryDb<PiiType> implements IReturn<QueryResponse<PiiType>>
{
    id: number;
    createResponse() { return new QueryResponse<PiiType>(); }
    getTypeName() { return "QueryPiiType"; }
}
