/* tslint:disable */
// This is a generated file - do not edit.
// Last generated: Wed Jun 21 2017 15:52:56 GMT+0300 (FLE Summer Time).

/* Options:
Date: 2017-06-21 15:52:56
Version: 1.041
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
