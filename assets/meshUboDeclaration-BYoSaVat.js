import{S as s}from"./index-Ch6vxP1o.js";const e="meshUboDeclaration",r=`struct Mesh {world : mat4x4<f32>,
visibility : f32,};var<uniform> mesh : Mesh;
#define WORLD_UBO
`;s.IncludesShadersStoreWGSL[e]||(s.IncludesShadersStoreWGSL[e]=r);const t={name:e,shader:r};export{t as m};
