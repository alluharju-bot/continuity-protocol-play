import{S as e}from"./index-Ch6vxP1o.js";import{b as t,a as o,c as a,d as c}from"./bakedVertexAnimation-kuJ-eVDy.js";import{c as d,i as s,a as f}from"./clipPlaneVertex-Z-toAbJw.js";import{f as l,a as S,v as x}from"./vertexColorMixing-F4LTcYDB.js";import{i as u}from"./instancesDeclaration-msJ731vG.js";const i="colorVertexShader",r=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[i]||(e.ShadersStoreWGSL[i]=r);const V=[t,o,d,l,u,s,a,c,f,S,x];for(const n of V)e.IncludesShadersStoreWGSL[n.name]||(e.IncludesShadersStoreWGSL[n.name]=n.shader);const E={name:i,shader:r};export{E as colorVertexShaderWGSL};
