/* tslint:disable */
// This is a generated file - do not edit.
// Last generated: Wed May 17 2017 17:51:06 GMT+0300 (FLE Summer Time).

/* Options:
Date: 2017-05-17 17:51:05
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

export class HelloWorldResponse
{
    hello: string;
    someOtherProperty: string;
    joasInfo: string;
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
