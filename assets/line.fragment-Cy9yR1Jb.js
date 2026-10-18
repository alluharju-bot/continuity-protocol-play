import{S as e}from"./index-BxVoepUI.js";import{c as t,a as o}from"./clipPlaneFragment-B8O5d_p_.js";import{l}from"./logDepthDeclaration-6LYa4BY-.js";import{l as i}from"./logDepthFragment-DmVpvG8_.js";const r="linePixelShader",a=`#include<clipPlaneFragmentDeclaration>
uniform color: vec4f;
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=a);const c=[t,l,i,o];for(const n of c)e.IncludesShadersStoreWGSL[n.name]||(e.IncludesShadersStoreWGSL[n.name]=n.shader);const f={name:r,shader:a};export{f as linePixelShaderWGSL};
