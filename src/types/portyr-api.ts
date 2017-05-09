/* tslint:disable */
// This is a generated file - do not edit.
// Last generated: Tue May 09 2017 18:25:29 GMT+0300 (FLE Summer Time).

/* Options:
Date: 2017-05-09 18:25:29
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
}

// @Route("/hello/{Name}")
export class HelloWorld implements IReturn<HelloWorldResponse>
{
    name: string;
    times: number;
    createResponse() { return new HelloWorldResponse(); }
    getTypeName() { return "HelloWorld"; }
}
