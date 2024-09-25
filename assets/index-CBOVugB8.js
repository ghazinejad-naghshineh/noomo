(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="167",z_=0,ch=1,k_=2,pp=1,V_=2,Pi=3,dr=0,En=1,gi=2,lr=0,Ps=1,uh=2,fh=3,hh=4,H_=5,Dr=100,G_=101,W_=102,X_=103,Y_=104,q_=200,$_=201,K_=202,j_=203,eu=204,tu=205,Z_=206,J_=207,Q_=208,eg=209,tg=210,ng=211,ig=212,rg=213,sg=214,og=0,ag=1,lg=2,ml=3,cg=4,ug=5,fg=6,hg=7,mp=0,dg=1,pg=2,cr=0,mg=1,_g=2,gg=3,xg=4,vg=5,Mg=6,yg=7,_p=300,Vs=301,Hs=302,nu=303,iu=304,Hl=306,_l=1e3,tr=1001,gl=1002,kn=1003,gp=1004,mo=1005,Jn=1006,Za=1007,nr=1008,Vi=1009,xp=1010,vp=1011,Go=1012,df=1013,Xr=1014,Oi=1015,na=1016,pf=1017,mf=1018,Gs=1020,Mp=35902,yp=1021,Sp=1022,Qn=1023,Ep=1024,Tp=1025,Ls=1026,Ws=1027,bp=1028,_f=1029,Ap=1030,gf=1031,xf=1033,Ja=33776,Qa=33777,el=33778,tl=33779,ru=35840,su=35841,ou=35842,au=35843,lu=36196,cu=37492,uu=37496,fu=37808,hu=37809,du=37810,pu=37811,mu=37812,_u=37813,gu=37814,xu=37815,vu=37816,Mu=37817,yu=37818,Su=37819,Eu=37820,Tu=37821,nl=36492,bu=36494,Au=36495,wp=36283,wu=36284,Ru=36285,Cu=36286,Sg=2300,Eg=2301,Tg=3200,bg=3201,Ag=0,wg=1,Ii="",$n="srgb",gr="srgb-linear",vf="display-p3",Gl="display-p3-linear",xl="linear",bt="srgb",vl="rec709",Ml="p3",es=7680,dh=519,Rg=512,Cg=513,Pg=514,Rp=515,Lg=516,Dg=517,Ig=518,Ug=519,ph=35044,mh="300 es",Fi=2e3,yl=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const wo=Math.PI/180,Wo=180/Math.PI;function Qs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function xn(r,e,t){return Math.max(e,Math.min(t,r))}function Mf(r,e){return(r%e+e)%e}function Ng(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Og(r,e,t){return r!==e?(t-r)/(e-r):0}function Ro(r,e,t){return(1-t)*r+t*e}function Fg(r,e,t,n){return Ro(r,e,1-Math.exp(-t*n))}function Bg(r,e=1){return e-Math.abs(Mf(r,e*2)-e)}function zg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Vg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Hg(r,e){return r+Math.random()*(e-r)}function Gg(r){return r*(.5-Math.random())}function Wg(r){r!==void 0&&(_h=r);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xg(r){return r*wo}function Yg(r){return r*Wo}function qg(r){return(r&r-1)===0&&r!==0}function $g(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Kg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jg(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*h,a*c);break;case"YXY":r.set(l*h,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Pu={DEG2RAD:wo,RAD2DEG:Wo,generateUUID:Qs,clamp:xn,euclideanModulo:Mf,mapLinear:Ng,inverseLerp:Og,lerp:Ro,damp:Fg,pingpong:Bg,smoothstep:zg,smootherstep:kg,randInt:Vg,randFloat:Hg,randFloatSpread:Gg,seededRandom:Wg,degToRad:Xg,radToDeg:Yg,isPowerOfTwo:qg,ceilPowerOfTwo:$g,floorPowerOfTwo:Kg,setQuaternionFromProperEuler:jg,normalize:hn,denormalize:ys};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,i,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],m=i[0],p=i[3],_=i[6],y=i[1],v=i[4],x=i[7],w=i[2],b=i[5],T=i[8];return s[0]=o*m+a*y+l*w,s[3]=o*p+a*v+l*b,s[6]=o*_+a*x+l*T,s[1]=c*m+u*y+f*w,s[4]=c*p+u*v+f*b,s[7]=c*_+u*x+f*T,s[2]=d*m+h*y+g*w,s[5]=d*p+h*v+g*b,s[8]=d*_+h*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new $e;function Cp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zg(){const r=Xo("canvas");return r.style.display="block",r}const gh={};function Co(r){r in gh||(gh[r]=!0,console.warn(r))}function Jg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const xh=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vh=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[gr]:{transfer:xl,primaries:vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[$n]:{transfer:bt,primaries:vl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Gl]:{transfer:xl,primaries:Ml,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(vh),fromReference:r=>r.applyMatrix3(xh)},[vf]:{transfer:bt,primaries:Ml,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(vh),fromReference:r=>r.applyMatrix3(xh).convertLinearToSRGB()}},Qg=new Set([gr,Gl]),pt={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Qg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=io[e].toReference,i=io[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return io[r].primaries},getTransfer:function(r){return r===Ii?xl:io[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(io[e].luminanceCoefficients)}};function Ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function rc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ts;class e0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Xo("canvas")),ts.width=e.width,ts.height=e.height;const n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t0=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(sc(i[o].image)):s.push(sc(i[o]))}else s=sc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function sc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?e0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n0=0;class tn extends Js{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=tr,i=tr,s=Jn,o=nr,a=Qn,l=Vi,c=tn.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Qs(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=_p;tn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,i=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(h+1)/2,w=(_+1)/2,b=(u+d)/4,T=(f+m)/4,R=(g+p)/4;return v>x&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=T/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=R/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=R/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-m)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i0 extends Js{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends i0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pp extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class r0 extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],h=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==d||c!==h||u!==g){let p=1-a;const _=l*d+c*h+u*g+f*m,y=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const w=Math.sqrt(v),b=Math.atan2(w,_*y);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w}const x=a*y;if(l=l*p+d*x,c=c*p+h*x,u=u*p+g*x,f=f*p+m*x,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new V,Mh=new eo;class ia{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),ca.subVectors(this.max,ro),ns.subVectors(e.a,ro),is.subVectors(e.b,ro),rs.subVectors(e.c,ro),$i.subVectors(is,ns),Ki.subVectors(rs,is),vr.subVectors(ns,rs);let t=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-vr.z,vr.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,vr.z,0,-vr.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-vr.y,vr.x,0];return!ac(t,ns,is,rs,ca)||(t=[1,0,0,0,1,0,0,0,1],!ac(t,ns,is,rs,ca))?!1:(ua.crossVectors($i,Ki),t=[ua.x,ua.y,ua.z],ac(t,ns,is,rs,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new V,new V,new V,new V,new V,new V,new V,new V],ai=new V,la=new ia,ns=new V,is=new V,rs=new V,$i=new V,Ki=new V,vr=new V,ro=new V,ca=new V,ua=new V,Mr=new V;function ac(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Mr.fromArray(r,s);const a=i.x*Math.abs(Mr.x)+i.y*Math.abs(Mr.y)+i.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const s0=new ia,so=new V,lc=new V;class ra{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(so,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(lc)),this.expandByPoint(so.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new V,cc=new V,fa=new V,ji=new V,uc=new V,ha=new V,fc=new V;class Wl{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cc.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(cc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=ji.dot(this.direction),l=-ji.dot(fa),c=ji.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const m=1/u;f*=m,d*=m,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(cc).addScaledVector(fa,d),h}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,s){uc.subVectors(t,e),ha.subVectors(n,e),fc.crossVectors(uc,ha);let o=this.direction.dot(fc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(ha.crossVectors(ji,ha));if(l<0)return null;const c=a*this.direction.dot(uc.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(fc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,i,s,o,a,l,c,u,f,d,h,g,m,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,d,h,g,m,p)}set(e,t,n,i,s,o,a,l,c,u,f,d,h,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=d,_[3]=h,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,m=c*f;t[0]=d+m*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,m=c*f;t[0]=d-m*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+m,t[1]=l*f,t[5]=m*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-m*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+m,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o0,e,a0)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Zi.crossVectors(n,Dn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Zi.crossVectors(n,Dn)),Zi.normalize(),da.crossVectors(Dn,Zi),i[0]=Zi.x,i[4]=da.x,i[8]=Dn.x,i[1]=Zi.y,i[5]=da.y,i[9]=Dn.y,i[2]=Zi.z,i[6]=da.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],m=n[6],p=n[10],_=n[14],y=n[3],v=n[7],x=n[11],w=n[15],b=i[0],T=i[4],R=i[8],S=i[12],M=i[1],C=i[5],I=i[9],O=i[13],z=i[2],H=i[6],B=i[10],Y=i[14],G=i[3],ie=i[7],L=i[11],oe=i[15];return s[0]=o*b+a*M+l*z+c*G,s[4]=o*T+a*C+l*H+c*ie,s[8]=o*R+a*I+l*B+c*L,s[12]=o*S+a*O+l*Y+c*oe,s[1]=u*b+f*M+d*z+h*G,s[5]=u*T+f*C+d*H+h*ie,s[9]=u*R+f*I+d*B+h*L,s[13]=u*S+f*O+d*Y+h*oe,s[2]=g*b+m*M+p*z+_*G,s[6]=g*T+m*C+p*H+_*ie,s[10]=g*R+m*I+p*B+_*L,s[14]=g*S+m*O+p*Y+_*oe,s[3]=y*b+v*M+x*z+w*G,s[7]=y*T+v*C+x*H+w*ie,s[11]=y*R+v*I+x*B+w*L,s[15]=y*S+v*O+x*Y+w*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*h-n*l*h)+m*(+t*l*h-t*c*d+s*o*d-i*o*h+i*c*u-s*l*u)+p*(+t*c*f-t*a*h-s*o*f+n*o*h+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],m=e[13],p=e[14],_=e[15],y=f*p*c-m*d*c+m*l*h-a*p*h-f*l*_+a*d*_,v=g*d*c-u*p*c-g*l*h+o*p*h+u*l*_-o*d*_,x=u*m*c-g*f*c+g*a*h-o*m*h-u*a*_+o*f*_,w=g*f*l-u*m*l-g*a*d+o*m*d+u*a*p-o*f*p,b=t*y+n*v+i*x+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=y*T,e[1]=(m*d*s-f*p*s-m*i*h+n*p*h+f*i*_-n*d*_)*T,e[2]=(a*p*s-m*l*s+m*i*c-n*p*c-a*i*_+n*l*_)*T,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*h-n*l*h)*T,e[4]=v*T,e[5]=(u*p*s-g*d*s+g*i*h-t*p*h-u*i*_+t*d*_)*T,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*_-t*l*_)*T,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*h+t*l*h)*T,e[8]=x*T,e[9]=(g*f*s-u*m*s-g*n*h+t*m*h+u*n*_-t*f*_)*T,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*_+t*a*_)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*h-t*a*h)*T,e[12]=w*T,e[13]=(u*m*i-g*f*i+g*n*d-t*m*d-u*n*p+t*f*p)*T,e[14]=(g*a*i-o*m*i-g*n*l+t*m*l+o*n*p-t*a*p)*T,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,m=o*u,p=o*f,_=a*f,y=l*c,v=l*u,x=l*f,w=n.x,b=n.y,T=n.z;return i[0]=(1-(m+_))*w,i[1]=(h+x)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(h-x)*b,i[5]=(1-(d+_))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(g+v)*T,i[9]=(p-y)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ss.set(i[0],i[1],i[2]).length();const o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],li.copy(this);const c=1/s,u=1/o,f=1/a;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,t.setFromRotationMatrix(li),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Fi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let h,g;if(a===Fi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===yl)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Fi){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),d=(t+e)*c,h=(n+i)*u;let g,m;if(a===Fi)g=(o+s)*f,m=-2*f;else if(a===yl)g=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new V,li=new Et,o0=new V(0,0,0),a0=new V(1,1,1),Zi=new V,da=new V,Dn=new V,yh=new Et,Sh=new eo;class Hi{constructor(e=0,t=0,n=0,i=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l0=0;const Eh=new V,os=new eo,wi=new Et,pa=new V,oo=new V,c0=new V,u0=new eo,Th=new V(1,0,0),bh=new V(0,1,0),Ah=new V(0,0,1),wh={type:"added"},f0={type:"removed"},as={type:"childadded",child:null},hc={type:"childremoved",child:null};class Xt extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new V,t=new Hi,n=new eo,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new $e}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(oo,pa,this.up):wi.lookAt(pa,oo,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),os.setFromRotationMatrix(wi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0),hc.child=e,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xt.DEFAULT_UP=new V(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new V,Ri=new V,dc=new V,Ci=new V,ls=new V,cs=new V,Rh=new V,pc=new V,mc=new V,_c=new V;class xi{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ci.subVectors(e,t),i.cross(ci);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ci.subVectors(i,t),Ri.subVectors(n,t),dc.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(Ri),l=ci.dot(dc),c=Ri.dot(Ri),u=Ri.dot(dc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,t,n,i){return ci.subVectors(n,t),Ri.subVectors(e,t),ci.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ci.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ls.subVectors(i,n),cs.subVectors(s,n),pc.subVectors(e,n);const l=ls.dot(pc),c=cs.dot(pc);if(l<=0&&c<=0)return t.copy(n);mc.subVectors(e,i);const u=ls.dot(mc),f=cs.dot(mc);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ls,o);_c.subVectors(e,s);const h=ls.dot(_c),g=cs.dot(_c);if(g>=0&&h<=g)return t.copy(s);const m=h*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(cs,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return Rh.subVectors(s,i),a=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(Rh,a);const _=1/(p+m+d);return o=m*_,a=d*_,t.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ma={h:0,s:0,l:0};function gc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Mf(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gc(o,s,e+1/3),this.g=gc(o,s,e),this.b=gc(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=$n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const n=Lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=rc(e.r),this.g=rc(e.g),this.b=rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return pt.fromWorkingColorSpace(rn.copy(this),e),Math.round(xn(rn.r*255,0,255))*65536+Math.round(xn(rn.g*255,0,255))*256+Math.round(xn(rn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=$n){pt.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,i=rn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ma);const n=Ro(Ji.h,ma.h,t),i=Ro(Ji.s,ma.s,t),s=Ro(Ji.l,ma.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new rt;rt.NAMES=Lp;let h0=0;class to extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Ps,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eu&&(n.blendSrc=this.blendSrc),this.blendDst!==tu&&(n.blendDst=this.blendDst),this.blendEquation!==Dr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ml&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Xl extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new V,_a=new ft;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Co("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_a.fromBufferAttribute(this,t),_a.applyMatrix3(e),this.setXY(t,_a.x,_a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ys(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}}class Dp extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ip extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d0=0;const Yn=new Et,xc=new Xt,us=new V,In=new ia,ao=new ia,$t=new V;class Rn extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?Ip:Dp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ao.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(In.min,ao.min),In.expandByPoint($t),$t.addVectors(In.max,ao.max),In.expandByPoint($t)):(In.expandByPoint(ao.min),In.expandByPoint(ao.max))}In.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),$t.add(us)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new V,l[R]=new V;const c=new V,u=new V,f=new V,d=new ft,h=new ft,g=new ft,m=new V,p=new V;function _(R,S,M){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(C),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(m),a[S].add(m),a[M].add(m),l[R].add(p),l[S].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,S=y.length;R<S;++R){const M=y[R],C=M.start,I=M.count;for(let O=C,z=C+I;O<z;O+=3)_(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new V,x=new V,w=new V,b=new V;function T(R){w.fromBufferAttribute(i,R),b.copy(w);const S=a[R];v.copy(S),v.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(b,S);const C=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,C)}for(let R=0,S=y.length;R<S;++R){const M=y[R],C=M.start,I=M.count;for(let O=C,z=C+I;O<z;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?h=l[m]*a.data.stride+a.offset:h=l[m]*u;for(let _=0;_<u;_++)d[g++]=c[h++]}return new Wt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ch=new Et,yr=new Wl,ga=new ra,Ph=new V,fs=new V,hs=new V,ds=new V,vc=new V,xa=new V,va=new ft,Ma=new ft,ya=new ft,Lh=new V,Dh=new V,Ih=new V,Sa=new V,Ea=new V;class ei extends Xt{constructor(e=new Rn,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(vc.fromBufferAttribute(f,e),o?xa.addScaledVector(vc,u):xa.addScaledVector(vc.sub(t),u))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(ga.containsPoint(yr.origin)===!1&&(yr.intersectSphere(ga,Ph)===null||yr.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Ch.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Ch),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){const p=d[g],_=o[p.materialIndex],y=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let x=y,w=v;x<w;x+=3){const b=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=Ta(this,_,e,n,c,u,f,b,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),m=Math.min(a.count,h.start+h.count);for(let p=g,_=m;p<_;p+=3){const y=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);i=Ta(this,o,e,n,c,u,f,y,v,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){const p=d[g],_=o[p.materialIndex],y=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let x=y,w=v;x<w;x+=3){const b=x,T=x+1,R=x+2;i=Ta(this,_,e,n,c,u,f,b,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),m=Math.min(l.count,h.start+h.count);for(let p=g,_=m;p<_;p+=3){const y=p,v=p+1,x=p+2;i=Ta(this,o,e,n,c,u,f,y,v,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function p0(r,e,t,n,i,s,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===dr,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ea);return c<t.near||c>t.far?null:{distance:c,point:Ea.clone(),object:r}}function Ta(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,fs),r.getVertexPosition(l,hs),r.getVertexPosition(c,ds);const u=p0(r,e,t,n,fs,hs,ds,Sa);if(u){i&&(va.fromBufferAttribute(i,a),Ma.fromBufferAttribute(i,l),ya.fromBufferAttribute(i,c),u.uv=xi.getInterpolation(Sa,fs,hs,ds,va,Ma,ya,new ft)),s&&(va.fromBufferAttribute(s,a),Ma.fromBufferAttribute(s,l),ya.fromBufferAttribute(s,c),u.uv1=xi.getInterpolation(Sa,fs,hs,ds,va,Ma,ya,new ft)),o&&(Lh.fromBufferAttribute(o,a),Dh.fromBufferAttribute(o,l),Ih.fromBufferAttribute(o,c),u.normal=xi.getInterpolation(Sa,fs,hs,ds,Lh,Dh,Ih,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};xi.getNormal(fs,hs,ds,f.normal),u.face=f}return u}class sa extends Rn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function g(m,p,_,y,v,x,w,b,T,R,S){const M=x/T,C=w/R,I=x/2,O=w/2,z=b/2,H=T+1,B=R+1;let Y=0,G=0;const ie=new V;for(let L=0;L<B;L++){const oe=L*C-O;for(let Ie=0;Ie<H;Ie++){const ze=Ie*M-I;ie[m]=ze*y,ie[p]=oe*v,ie[_]=z,c.push(ie.x,ie.y,ie.z),ie[m]=0,ie[p]=0,ie[_]=b>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(Ie/T),f.push(1-L/R),Y+=1}}for(let L=0;L<R;L++)for(let oe=0;oe<T;oe++){const Ie=d+oe+H*L,ze=d+oe+H*(L+1),$=d+(oe+1)+H*(L+1),Q=d+(oe+1)+H*L;l.push(Ie,ze,Q),l.push(ze,$,Q),G+=6}a.addGroup(h,G,S),h+=G,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){const e={};for(let t=0;t<r.length;t++){const n=Xs(r[t]);for(const i in n)e[i]=n[i]}return e}function m0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Up(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const _0={clone:Xs,merge:pn};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Np extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new V,Uh=new ft,Nh=new ft;class Fn extends Np{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Nh),t.subVectors(Nh,Uh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class v0 extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fn(ps,ms,e,t);i.layers=this.layers,this.add(i);const s=new Fn(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new Fn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new Fn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new Fn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new Fn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Op extends tn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M0 extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Op(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new sa(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:lr});s.uniforms.tEquirect.value=t;const o=new ei(i,s),a=t.minFilter;return t.minFilter===nr&&(t.minFilter=Jn),new v0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Mc=new V,y0=new V,S0=new $e;class wr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mc.subVectors(n,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||S0.getNormalMatrix(e),i=this.coplanarPoint(Mc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new ra,ba=new V;class Ef{constructor(e=new wr,t=new wr,n=new wr,i=new wr,s=new wr,o=new wr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],h=i[8],g=i[9],m=i[10],p=i[11],_=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,p-h,x-_).normalize(),n[1].setComponents(l+s,d+c,p+h,x+_).normalize(),n[2].setComponents(l+o,d+u,p+g,x+y).normalize(),n[3].setComponents(l-o,d-u,p-g,x-y).normalize(),n[4].setComponents(l-a,d-f,p-m,x-v).normalize(),t===Fi)n[5].setComponents(l+a,d+f,p+m,x+v).normalize();else if(t===yl)n[5].setComponents(a,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ba.x=i.normal.x>0?e.max.x:e.min.x,ba.y=i.normal.y>0?e.max.y:e.min.y,ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function E0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,a),f.count===-1&&d.length===0&&r.bufferSubData(c,0,u),d.length!==0){for(let h=0,g=d.length;h<g;h++){const m=d[h];r.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}f.count!==-1&&(r.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class oa extends Rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const y=_*d-o;for(let v=0;v<c;v++){const x=v*f-s;g.push(x,-y,0),m.push(0,0,1),p.push(v/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const v=y+c*_,x=y+c*(_+1),w=y+1+c*(_+1),b=y+1+c*_;h.push(v,x,b),h.push(x,w,b)}this.setIndex(h),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(m,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_x=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_v=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ev=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$v=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:T0,alphahash_pars_fragment:b0,alphamap_fragment:A0,alphamap_pars_fragment:w0,alphatest_fragment:R0,alphatest_pars_fragment:C0,aomap_fragment:P0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:I0,begin_vertex:U0,beginnormal_vertex:N0,bsdfs:O0,iridescence_fragment:F0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:H0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:Y0,common:q0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:K0,displacementmap_pars_vertex:j0,displacementmap_vertex:Z0,emissivemap_fragment:J0,emissivemap_pars_fragment:Q0,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:rx,envmap_pars_vertex:sx,envmap_physical_pars_fragment:_x,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:ux,gradientmap_pars_fragment:fx,lightmap_pars_fragment:hx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:gx,lights_toon_pars_fragment:xx,lights_phong_fragment:vx,lights_phong_pars_fragment:Mx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:bx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Lx,map_particle_fragment:Dx,map_particle_pars_fragment:Ix,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ox,morphcolor_vertex:Fx,morphnormal_vertex:Bx,morphtarget_pars_vertex:zx,morphtarget_vertex:kx,normal_fragment_begin:Vx,normal_fragment_maps:Hx,normal_pars_fragment:Gx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:jx,opaque_fragment:Zx,packing:Jx,premultiplied_alpha_fragment:Qx,project_vertex:ev,dithering_fragment:tv,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:rv,shadowmap_pars_fragment:sv,shadowmap_pars_vertex:ov,shadowmap_vertex:av,shadowmask_pars_fragment:lv,skinbase_vertex:cv,skinning_pars_vertex:uv,skinning_vertex:fv,skinnormal_vertex:hv,specularmap_fragment:dv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:_v,transmission_fragment:gv,transmission_pars_fragment:xv,uv_pars_fragment:vv,uv_pars_vertex:Mv,uv_vertex:yv,worldpos_vertex:Sv,background_vert:Ev,background_frag:Tv,backgroundCube_vert:bv,backgroundCube_frag:Av,cube_vert:wv,cube_frag:Rv,depth_vert:Cv,depth_frag:Pv,distanceRGBA_vert:Lv,distanceRGBA_frag:Dv,equirect_vert:Iv,equirect_frag:Uv,linedashed_vert:Nv,linedashed_frag:Ov,meshbasic_vert:Fv,meshbasic_frag:Bv,meshlambert_vert:zv,meshlambert_frag:kv,meshmatcap_vert:Vv,meshmatcap_frag:Hv,meshnormal_vert:Gv,meshnormal_frag:Wv,meshphong_vert:Xv,meshphong_frag:Yv,meshphysical_vert:qv,meshphysical_frag:$v,meshtoon_vert:Kv,meshtoon_frag:jv,points_vert:Zv,points_frag:Jv,shadow_vert:Qv,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},pe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},_i={basic:{uniforms:pn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:pn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:pn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:pn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:pn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:pn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:pn([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:pn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:pn([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:pn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:pn([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:pn([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:pn([pe.lights,pe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};_i.physical={uniforms:pn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Aa={r:0,b:0,g:0},Er=new Hi,iM=new Et;function rM(r,e,t,n,i,s,o){const a=new rt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function m(y){let v=!1;const x=g(y);x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Hl)?(u===void 0&&(u=new ei(new sa(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Xs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Er.copy(v.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Er)),u.material.toneMapped=pt.getTransfer(x.colorSpace)!==bt,(f!==x||d!==x.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,h=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ei(new oa(2,2),new Gi({name:"BackgroundMaterial",uniforms:Xs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=pt.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,h=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function _(y,v){y.getRGB(Aa,Up(r)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,_(a,l)},render:m,addToRenderList:p}}function sM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,C,I,O,z){let H=!1;const B=f(O,I,C);s!==B&&(s=B,c(s.object)),H=h(M,O,I,z),H&&g(M,O,I,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(M,C,I,O),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function f(M,C,I){const O=I.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let H=z[C.id];H===void 0&&(H={},z[C.id]=H);let B=H[O];return B===void 0&&(B=d(l()),H[O]=B),B}function d(M){const C=[],I=[],O=[];for(let z=0;z<t;z++)C[z]=0,I[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:O,object:M,attributes:{},index:null}}function h(M,C,I,O){const z=s.attributes,H=C.attributes;let B=0;const Y=I.getAttributes();for(const G in Y)if(Y[G].location>=0){const L=z[G];let oe=H[G];if(oe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),L===void 0||L.attribute!==oe||oe&&L.data!==oe.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function g(M,C,I,O){const z={},H=C.attributes;let B=0;const Y=I.getAttributes();for(const G in Y)if(Y[G].location>=0){let L=H[G];L===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(L=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(L=M.instanceColor));const oe={};oe.attribute=L,L&&L.data&&(oe.data=L.data),z[G]=oe,B++}s.attributes=z,s.attributesNum=B,s.index=O}function m(){const M=s.newAttributes;for(let C=0,I=M.length;C<I;C++)M[C]=0}function p(M){_(M,0)}function _(M,C){const I=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;I[M]=1,O[M]===0&&(r.enableVertexAttribArray(M),O[M]=1),z[M]!==C&&(r.vertexAttribDivisor(M,C),z[M]=C)}function y(){const M=s.newAttributes,C=s.enabledAttributes;for(let I=0,O=C.length;I<O;I++)C[I]!==M[I]&&(r.disableVertexAttribArray(I),C[I]=0)}function v(M,C,I,O,z,H,B){B===!0?r.vertexAttribIPointer(M,C,I,z,H):r.vertexAttribPointer(M,C,I,O,z,H)}function x(M,C,I,O){m();const z=O.attributes,H=I.getAttributes(),B=C.defaultAttributeValues;for(const Y in H){const G=H[Y];if(G.location>=0){let ie=z[Y];if(ie===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const L=ie.normalized,oe=ie.itemSize,Ie=e.get(ie);if(Ie===void 0)continue;const ze=Ie.buffer,$=Ie.type,Q=Ie.bytesPerElement,ue=$===r.INT||$===r.UNSIGNED_INT||ie.gpuType===df;if(ie.isInterleavedBufferAttribute){const le=ie.data,Ee=le.stride,we=ie.offset;if(le.isInstancedInterleavedBuffer){for(let Te=0;Te<G.locationSize;Te++)_(G.location+Te,le.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Te=0;Te<G.locationSize;Te++)p(G.location+Te);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let Te=0;Te<G.locationSize;Te++)v(G.location+Te,oe/G.locationSize,$,L,Ee*Q,(we+oe/G.locationSize*Te)*Q,ue)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)_(G.location+le,ie.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<G.locationSize;le++)p(G.location+le);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let le=0;le<G.locationSize;le++)v(G.location+le,oe/G.locationSize,$,L,oe*Q,oe/G.locationSize*le*Q,ue)}}else if(B!==void 0){const L=B[Y];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(G.location,L);break;case 3:r.vertexAttrib3fv(G.location,L);break;case 4:r.vertexAttrib4fv(G.location,L);break;default:r.vertexAttrib1fv(G.location,L)}}}}y()}function w(){R();for(const M in n){const C=n[M];for(const I in C){const O=C[I];for(const z in O)u(O[z].object),delete O[z];delete C[I]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const I in C){const O=C[I];for(const z in O)u(O[z].object),delete O[z];delete C[I]}delete n[M.id]}function T(M){for(const C in n){const I=n[C];if(I[M.id]===void 0)continue;const O=I[M.id];for(const z in O)u(O[z].object),delete O[z];delete I[M.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:p,disableUnusedAttributes:y}}function oM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m];for(let m=0;m<d.length;m++)t.update(g,n,d[m])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Qn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const T=b===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Vi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Oi&&!T)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:x,maxSamples:w}}function lM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new wr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let x=_.clippingState||null;l.value=x,x=u(g,d,v,h);for(let w=0;w!==v;++w)x[w]=t[w];_.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=h+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let v=0,x=h;v!==m;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function cM(r){let e=new WeakMap;function t(o,a){return a===nu?o.mapping=Vs:a===iu&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===nu||a===iu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new M0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bp extends Np{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,Oh=[.125,.215,.35,.446,.526,.582],Ir=20,yc=new Bp,Fh=new rt;let Sc=null,Ec=0,Tc=0,bc=!1;const Rr=(1+Math.sqrt(5))/2,_s=1/Rr,Bh=[new V(-Rr,_s,0),new V(Rr,_s,0),new V(-_s,0,Rr),new V(_s,0,Rr),new V(0,Rr,-_s),new V(0,Rr,_s),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Ec,Tc),this._renderer.xr.enabled=bc,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:na,format:Qn,colorSpace:gr,depthBuffer:!1},i=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(s)),this._blurMaterial=fM(s,e,t)}return i}_compileMaterial(e){const t=new ei(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,i){const a=new Fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Fh),u.toneMapping=cr,u.autoClear=!1;const h=new Xl({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new ei(new sa,h);let m=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,m=!0):(h.color.copy(Fh),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;wa(i,y*v,_>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vs||e.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bh[(i-s-1)%Bh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ei(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ir-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):Ir;p>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ir}`);const _=[];let y=0;for(let T=0;T<Ir;++T){const R=T/m,S=Math.exp(-R*R/2);_.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<_.length;T++)_[T]=_[T]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[i],w=3*x*(i>v-bs?i-v+bs:0),b=4*(this._cubeSize-x);wa(t,w,b,3*x,2*x),l.setRenderTarget(t),l.render(f,yc)}}function uM(r){const e=[],t=[],n=[];let i=r;const s=r-bs+1+Oh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-bs?l=Oh[o-r+bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,m=3,p=2,_=1,y=new Float32Array(m*g*h),v=new Float32Array(p*g*h),x=new Float32Array(_*g*h);for(let b=0;b<h;b++){const T=b%3*2/3-1,R=b>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(S,m*g*b),v.set(d,p*g*b);const M=[b,b,b,b,b,b];x.set(M,_*g*b)}const w=new Rn;w.setAttribute("position",new Wt(y,m)),w.setAttribute("uv",new Wt(v,p)),w.setAttribute("faceIndex",new Wt(x,_)),e.push(w),i>bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kh(r,e,t){const n=new Yr(r,e,t);return n.texture.mapping=Hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fM(r,e,t){const n=new Float32Array(Ir),i=new V(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Vh(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Hh(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Tf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===nu||l===iu,u=l===Vs||l===Hs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new zh(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new zh(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function dM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Co("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pM(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const m=d.morphAttributes[g];for(let p=0,_=m.length;p<_;p++)e.remove(m[p])}d.removeEventListener("dispose",o),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const m=h[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],r.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let m=0;if(h!==null){const y=h.array;m=h.version;for(let v=0,x=y.length;v<x;v+=3){const w=y[v+0],b=y[v+1],T=y[v+2];d.push(w,b,b,T,T,w)}}else if(g!==void 0){const y=g.array;m=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const w=v+0,b=v+1,T=v+2;d.push(w,b,b,T,T,w)}}else return;const p=new(Cp(d)?Ip:Dp)(d,1);p.version=m;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function mM(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*o),t.update(h,n,1)}function c(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*o,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let p=0;for(let _=0;_<g;_++)p+=h[_];t.update(p,n,1)}function f(d,h,g,m){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d.length;_++)c(d[_]/o,h[_],m[_]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,m,0,g);let _=0;for(let y=0;y<g;y++)_+=h[y];for(let y=0;y<m.length;y++)t.update(_,n,m[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function _M(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gM(r,e,t){const n=new WeakMap,i=new Gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;h===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let x=a.attributes.position.count*v,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const b=new Float32Array(x*w*4*f),T=new Pp(b,x,w,f);T.type=Oi,T.needsUpdate=!0;const R=v*4;for(let M=0;M<f;M++){const C=p[M],I=_[M],O=y[M],z=x*w*4*M;for(let H=0;H<C.count;H++){const B=H*R;h===!0&&(i.fromBufferAttribute(C,H),b[z+B+0]=i.x,b[z+B+1]=i.y,b[z+B+2]=i.z,b[z+B+3]=0),g===!0&&(i.fromBufferAttribute(I,H),b[z+B+4]=i.x,b[z+B+5]=i.y,b[z+B+6]=i.z,b[z+B+7]=0),m===!0&&(i.fromBufferAttribute(O,H),b[z+B+8]=i.x,b[z+B+9]=i.y,b[z+B+10]=i.z,b[z+B+11]=O.itemSize===4?i.w:1)}}d={count:f,texture:T,size:new ft(x,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let h=0;for(let m=0;m<c.length;m++)h+=c[m];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function xM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class zp extends tn{constructor(e,t,n,i,s,o,a,l,c,u=Ls){if(u!==Ls&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ls&&(n=Xr),n===void 0&&u===Ws&&(n=Gs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kp=new tn,Gh=new zp(1,1),Vp=new Pp,Hp=new r0,Gp=new Op,Wh=[],Xh=[],Yh=new Float32Array(16),qh=new Float32Array(9),$h=new Float32Array(4);function no(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wh[i];if(s===void 0&&(s=new Float32Array(i),Wh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Yl(r,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function MM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),qt(t,e)}}function yM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),qt(t,e)}}function SM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),qt(t,e)}}function EM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;$h.set(n),r.uniformMatrix2fv(this.addr,!1,$h),qt(t,n)}}function TM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;qh.set(n),r.uniformMatrix3fv(this.addr,!1,qh),qt(t,n)}}function bM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Yh.set(n),r.uniformMatrix4fv(this.addr,!1,Yh),qt(t,n)}}function AM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),qt(t,e)}}function RM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),qt(t,e)}}function CM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),qt(t,e)}}function PM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function LM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),qt(t,e)}}function DM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),qt(t,e)}}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),qt(t,e)}}function UM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gh.compareFunction=Rp,s=Gh):s=kp,t.setTexture2D(e||s,i)}function NM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hp,i)}function OM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gp,i)}function FM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vp,i)}function BM(r){switch(r){case 5126:return vM;case 35664:return MM;case 35665:return yM;case 35666:return SM;case 35674:return EM;case 35675:return TM;case 35676:return bM;case 5124:case 35670:return AM;case 35667:case 35671:return wM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return PM;case 36294:return LM;case 36295:return DM;case 36296:return IM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return FM}}function zM(r,e){r.uniform1fv(this.addr,e)}function kM(r,e){const t=no(e,this.size,2);r.uniform2fv(this.addr,t)}function VM(r,e){const t=no(e,this.size,3);r.uniform3fv(this.addr,t)}function HM(r,e){const t=no(e,this.size,4);r.uniform4fv(this.addr,t)}function GM(r,e){const t=no(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function WM(r,e){const t=no(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function XM(r,e){const t=no(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function YM(r,e){r.uniform1iv(this.addr,e)}function qM(r,e){r.uniform2iv(this.addr,e)}function $M(r,e){r.uniform3iv(this.addr,e)}function KM(r,e){r.uniform4iv(this.addr,e)}function jM(r,e){r.uniform1uiv(this.addr,e)}function ZM(r,e){r.uniform2uiv(this.addr,e)}function JM(r,e){r.uniform3uiv(this.addr,e)}function QM(r,e){r.uniform4uiv(this.addr,e)}function ey(r,e,t){const n=this.cache,i=e.length,s=Yl(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||kp,s[o])}function ty(r,e,t){const n=this.cache,i=e.length,s=Yl(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hp,s[o])}function ny(r,e,t){const n=this.cache,i=e.length,s=Yl(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Gp,s[o])}function iy(r,e,t){const n=this.cache,i=e.length,s=Yl(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),qt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Vp,s[o])}function ry(r){switch(r){case 5126:return zM;case 35664:return kM;case 35665:return VM;case 35666:return HM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return YM;case 35667:case 35671:return qM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return jM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}class sy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=BM(t.type)}}class oy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ry(t.type)}}class ay{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function Kh(r,e){r.seq.push(e),r.map[e.id]=e}function ly(r,e,t){const n=r.name,i=n.length;for(Ac.lastIndex=0;;){const s=Ac.exec(n),o=Ac.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kh(t,c===void 0?new sy(a,r,e):new oy(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new ay(a),Kh(t,f)),t=f}}}class il{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ly(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function jh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const cy=37297;let uy=0;function fy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function hy(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===Ml&&t===vl?n="LinearDisplayP3ToLinearSRGB":e===vl&&t===Ml&&(n="LinearSRGBToLinearDisplayP3"),r){case gr:case Gl:return[n,"LinearTransferOETF"];case $n:case vf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Zh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+fy(r.getShaderSource(e),o)}else return i}function dy(r,e){const t=hy(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function py(r,e){let t;switch(e){case mg:t="Linear";break;case _g:t="Reinhard";break;case gg:t="OptimizedCineon";break;case xg:t="ACESFilmic";break;case Mg:t="AgX";break;case yg:t="Neutral";break;case vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ra=new V;function my(){pt.getLuminanceCoefficients(Ra);const r=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _y(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function gy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function _o(r){return r!==""}function Jh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(r){return r.replace(vy,yy)}const My=new Map;function yy(r,e){let t=qe[e];if(t===void 0){const n=My.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lu(t)}const Sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(r){return r.replace(Sy,Ey)}function Ey(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function td(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ty(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function by(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ay(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function wy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mp:e="ENVMAP_BLENDING_MULTIPLY";break;case dg:e="ENVMAP_BLENDING_MIX";break;case pg:e="ENVMAP_BLENDING_ADD";break}return e}function Ry(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ty(t),c=by(t),u=Ay(t),f=wy(t),d=Ry(t),h=_y(t),g=gy(s),m=i.createProgram();let p,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),_.length>0&&(_+=`
`)):(p=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),_=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?qe.tonemapping_pars_fragment:"",t.toneMapping!==cr?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,dy("linearToOutputTexel",t.outputColorSpace),my(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),o=Lu(o),o=Jh(o,t),o=Qh(o,t),a=Lu(a),a=Jh(a,t),a=Qh(a,t),o=ed(o),a=ed(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=y+p+o,x=y+_+a,w=jh(i,i.VERTEX_SHADER,v),b=jh(i,i.FRAGMENT_SHADER,x);i.attachShader(m,w),i.attachShader(m,b),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function T(C){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(b).trim();let H=!0,B=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,w,b);else{const Y=Zh(i,w,"vertex"),G=Zh(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+Y+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||z==="")&&(B=!1);B&&(C.diagnostics={runnable:H,programLog:I,vertexShader:{log:O,prefix:p},fragmentShader:{log:z,prefix:_}})}i.deleteShader(w),i.deleteShader(b),R=new il(i,m),S=xy(i,m)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(m,cy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=b,this}let Py=0;class Ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dy(e),t.set(e,n)),n}}class Dy{constructor(e){this.id=Py++,this.code=e,this.usedTimes=0}}function Iy(r,e,t,n,i,s,o){const a=new Sf,l=new Ly,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,C,I,O){const z=I.fog,H=O.geometry,B=S.isMeshStandardMaterial?I.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),G=Y&&Y.mapping===Hl?Y.image.height:null,ie=g[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const L=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=L!==void 0?L.length:0;let Ie=0;H.morphAttributes.position!==void 0&&(Ie=1),H.morphAttributes.normal!==void 0&&(Ie=2),H.morphAttributes.color!==void 0&&(Ie=3);let ze,$,Q,ue;if(ie){const et=_i[ie];ze=et.vertexShader,$=et.fragmentShader}else ze=S.vertexShader,$=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const le=r.getRenderTarget(),Ee=O.isInstancedMesh===!0,we=O.isBatchedMesh===!0,Te=!!S.map,Ke=!!S.matcap,D=!!Y,Ue=!!S.aoMap,Fe=!!S.lightMap,Xe=!!S.bumpMap,ge=!!S.normalMap,X=!!S.displacementMap,Re=!!S.emissiveMap,Be=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,q=S.clearcoat>0,ee=S.dispersion>0,ne=S.iridescence>0,j=S.sheen>0,be=S.transmission>0,re=E&&!!S.anisotropyMap,de=q&&!!S.clearcoatMap,Ne=q&&!!S.clearcoatNormalMap,se=q&&!!S.clearcoatRoughnessMap,_e=ne&&!!S.iridescenceMap,Pe=ne&&!!S.iridescenceThicknessMap,ke=j&&!!S.sheenColorMap,me=j&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,We=!!S.specularColorMap,ct=!!S.specularIntensityMap,N=be&&!!S.transmissionMap,K=be&&!!S.thicknessMap,Z=!!S.gradientMap,J=!!S.alphaMap,ae=S.alphaTest>0,Ae=!!S.alphaHash,Ye=!!S.extensions;let gt=cr;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(gt=r.toneMapping);const xt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:ze,fragmentShader:$,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:we,batchingColor:we&&O._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&O.instanceColor!==null,instancingMorph:Ee&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:gr,alphaToCoverage:!!S.alphaToCoverage,map:Te,matcap:Ke,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:G,aoMap:Ue,lightMap:Fe,bumpMap:Xe,normalMap:ge,displacementMap:d&&X,emissiveMap:Re,normalMapObjectSpace:ge&&S.normalMapType===wg,normalMapTangentSpace:ge&&S.normalMapType===Ag,metalnessMap:Be,roughnessMap:P,anisotropy:E,anisotropyMap:re,clearcoat:q,clearcoatMap:de,clearcoatNormalMap:Ne,clearcoatRoughnessMap:se,dispersion:ee,iridescence:ne,iridescenceMap:_e,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:ke,sheenRoughnessMap:me,specularMap:Ve,specularColorMap:We,specularIntensityMap:ct,transmission:be,transmissionMap:N,thicknessMap:K,gradientMap:Z,opaque:S.transparent===!1&&S.blending===Ps&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ae,alphaHash:Ae,combine:S.combine,mapUv:Te&&m(S.map.channel),aoMapUv:Ue&&m(S.aoMap.channel),lightMapUv:Fe&&m(S.lightMap.channel),bumpMapUv:Xe&&m(S.bumpMap.channel),normalMapUv:ge&&m(S.normalMap.channel),displacementMapUv:X&&m(S.displacementMap.channel),emissiveMapUv:Re&&m(S.emissiveMap.channel),metalnessMapUv:Be&&m(S.metalnessMap.channel),roughnessMapUv:P&&m(S.roughnessMap.channel),anisotropyMapUv:re&&m(S.anisotropyMap.channel),clearcoatMapUv:de&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(S.sheenRoughnessMap.channel),specularMapUv:Ve&&m(S.specularMap.channel),specularColorMapUv:We&&m(S.specularColorMap.channel),specularIntensityMapUv:ct&&m(S.specularIntensityMap.channel),transmissionMapUv:N&&m(S.transmissionMap.channel),thicknessMapUv:K&&m(S.thicknessMap.channel),alphaMapUv:J&&m(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ge||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Te||J),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gi,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ye&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function _(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),S.push(a.mask)}function x(S){const M=g[S.type];let C;if(M){const I=_i[M];C=_0.clone(I.uniforms)}else C=S.uniforms;return C}function w(S,M){let C;for(let I=0,O=u.length;I<O;I++){const z=u[I];if(z.cacheKey===M){C=z,++C.usedTimes;break}}return C===void 0&&(C=new Cy(r,M,S,s),u.push(C)),C}function b(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:x,acquireProgram:w,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:R}}function Uy(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ny(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function id(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,h,g,m,p){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},r[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=h,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=p),e++,_}function a(f,d,h,g,m,p){const _=o(f,d,h,g,m,p);h.transmission>0?n.push(_):h.transparent===!0?i.push(_):t.push(_)}function l(f,d,h,g,m,p){const _=o(f,d,h,g,m,p);h.transmission>0?n.unshift(_):h.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,d){t.length>1&&t.sort(f||Ny),n.length>1&&n.sort(d||nd),i.length>1&&i.sort(d||nd)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Oy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new id,r.set(n,[o])):i>=s.length?(o=new id,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Fy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new rt};break;case"SpotLight":t={position:new V,direction:new V,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function By(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zy=0;function ky(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vy(r){const e=new Fy,t=By(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const i=new V,s=new Et,o=new Et;function a(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,m=0,p=0,_=0,y=0,v=0,x=0,w=0,b=0,T=0;c.sort(ky);for(let S=0,M=c.length;S<M;S++){const C=c[S],I=C.color,O=C.intensity,z=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*O,f+=I.g*O,d+=I.b*O;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],O);T++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[h]=G,n.directionalShadowMap[h]=H,n.directionalShadowMatrix[h]=C.shadow.matrix,y++}n.directional[h]=B,h++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(I).multiplyScalar(O),B.distance=z,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[m]=B;const Y=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,Y.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[m]=Y.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[m]=G,n.spotShadowMap[m]=H,x++}m++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(I).multiplyScalar(O),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=B,p++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=B,g++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(O),B.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[_]=B,_++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==m||R.rectAreaLength!==p||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=m,n.rectArea.length=p,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,R.directionalLength=h,R.pointLength=g,R.spotLength=m,R.rectAreaLength=p,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=T,n.version=zy++)}function l(c,u){let f=0,d=0,h=0,g=0,m=0;const p=u.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const v=c[_];if(v.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(v.isSpotLight){const x=n.spot[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const x=n.hemi[m];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function rd(r){const e=new Vy(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Hy(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new rd(r),e.set(i,[a])):s>=o.length?(a=new rd(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Gy extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wy extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qy(r,e,t){let n=new Ef;const i=new ft,s=new ft,o=new Gt,a=new Gy({depthPacking:bg}),l=new Wy,c={},u=t.maxTextureSize,f={[dr]:En,[En]:dr,[gi]:gi},d=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Xy,fragmentShader:Yy}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ei(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pp;let _=this.type;this.render=function(b,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),I=r.state;I.setBlending(lr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=_!==Pi&&this.type===Pi,z=_===Pi&&this.type!==Pi;for(let H=0,B=b.length;H<B;H++){const Y=b[H],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ie=G.getFrameExtents();if(i.multiply(ie),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ie.x),i.x=s.x*ie.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ie.y),i.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||O===!0||z===!0){const oe=this.type!==Pi?{minFilter:kn,magFilter:kn}:{};G.map!==null&&G.map.dispose(),G.map=new Yr(i.x,i.y,oe),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const L=G.getViewportCount();for(let oe=0;oe<L;oe++){const Ie=G.getViewport(oe);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),I.viewport(o),G.updateMatrices(Y,oe),n=G.getFrustum(),x(T,R,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Pi&&y(G,R),G.needsUpdate=!1}_=this.type,p.needsUpdate=!1,r.setRenderTarget(S,M,C)};function y(b,T){const R=e.update(m);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Yr(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,m,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,R,h,m,null)}function v(b,T,R,S){let M=null;const C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=M.uuid,O=T.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let H=z[O];H===void 0&&(H=M.clone(),z[O]=H,T.addEventListener("dispose",w)),M=H}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Pi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=r.properties.get(M);I.light=R}return M}function x(b,T,R,S,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Pi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const O=e.update(b),z=b.material;if(Array.isArray(z)){const H=O.groups;for(let B=0,Y=H.length;B<Y;B++){const G=H[B],ie=z[G.materialIndex];if(ie&&ie.visible){const L=v(b,ie,S,M);b.onBeforeShadow(r,b,T,R,O,L,G),r.renderBufferDirect(R,null,O,L,b,G),b.onAfterShadow(r,b,T,R,O,L,G)}}}else if(z.visible){const H=v(b,z,S,M);b.onBeforeShadow(r,b,T,R,O,H,null),r.renderBufferDirect(R,null,O,H,b,null),b.onAfterShadow(r,b,T,R,O,H,null)}}const I=b.children;for(let O=0,z=I.length;O<z;O++)x(I[O],T,R,S,M)}function w(b){b.target.removeEventListener("dispose",w);for(const R in c){const S=c[R],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function $y(r){function e(){let N=!1;const K=new Gt;let Z=null;const J=new Gt(0,0,0,0);return{setMask:function(ae){Z!==ae&&!N&&(r.colorMask(ae,ae,ae,ae),Z=ae)},setLocked:function(ae){N=ae},setClear:function(ae,Ae,Ye,gt,xt){xt===!0&&(ae*=gt,Ae*=gt,Ye*=gt),K.set(ae,Ae,Ye,gt),J.equals(K)===!1&&(r.clearColor(ae,Ae,Ye,gt),J.copy(K))},reset:function(){N=!1,Z=null,J.set(-1,0,0,0)}}}function t(){let N=!1,K=null,Z=null,J=null;return{setTest:function(ae){ae?ue(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(ae){K!==ae&&!N&&(r.depthMask(ae),K=ae)},setFunc:function(ae){if(Z!==ae){switch(ae){case og:r.depthFunc(r.NEVER);break;case ag:r.depthFunc(r.ALWAYS);break;case lg:r.depthFunc(r.LESS);break;case ml:r.depthFunc(r.LEQUAL);break;case cg:r.depthFunc(r.EQUAL);break;case ug:r.depthFunc(r.GEQUAL);break;case fg:r.depthFunc(r.GREATER);break;case hg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ae}},setLocked:function(ae){N=ae},setClear:function(ae){J!==ae&&(r.clearDepth(ae),J=ae)},reset:function(){N=!1,K=null,Z=null,J=null}}}function n(){let N=!1,K=null,Z=null,J=null,ae=null,Ae=null,Ye=null,gt=null,xt=null;return{setTest:function(et){N||(et?ue(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(et){K!==et&&!N&&(r.stencilMask(et),K=et)},setFunc:function(et,Oe,Se){(Z!==et||J!==Oe||ae!==Se)&&(r.stencilFunc(et,Oe,Se),Z=et,J=Oe,ae=Se)},setOp:function(et,Oe,Se){(Ae!==et||Ye!==Oe||gt!==Se)&&(r.stencilOp(et,Oe,Se),Ae=et,Ye=Oe,gt=Se)},setLocked:function(et){N=et},setClear:function(et){xt!==et&&(r.clearStencil(et),xt=et)},reset:function(){N=!1,K=null,Z=null,J=null,ae=null,Ae=null,Ye=null,gt=null,xt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,g=!1,m=null,p=null,_=null,y=null,v=null,x=null,w=null,b=new rt(0,0,0),T=0,R=!1,S=null,M=null,C=null,I=null,O=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=B>=2);let G=null,ie={};const L=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Ie=new Gt().fromArray(L),ze=new Gt().fromArray(oe);function $(N,K,Z,J){const ae=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(N,Ae),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<Z;Ye++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(K+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return Ae}const Q={};Q[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(r.DEPTH_TEST),s.setFunc(ml),Xe(!1),ge(ch),ue(r.CULL_FACE),Ue(lr);function ue(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function le(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function Ee(N,K){return u[N]!==K?(r.bindFramebuffer(N,K),u[N]=K,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=K),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=K),!0):!1}function we(N,K){let Z=d,J=!1;if(N){Z=f.get(K),Z===void 0&&(Z=[],f.set(K,Z));const ae=N.textures;if(Z.length!==ae.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Ye=ae.length;Ae<Ye;Ae++)Z[Ae]=r.COLOR_ATTACHMENT0+Ae;Z.length=ae.length,J=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,J=!0);J&&r.drawBuffers(Z)}function Te(N){return h!==N?(r.useProgram(N),h=N,!0):!1}const Ke={[Dr]:r.FUNC_ADD,[G_]:r.FUNC_SUBTRACT,[W_]:r.FUNC_REVERSE_SUBTRACT};Ke[X_]=r.MIN,Ke[Y_]=r.MAX;const D={[q_]:r.ZERO,[$_]:r.ONE,[K_]:r.SRC_COLOR,[eu]:r.SRC_ALPHA,[tg]:r.SRC_ALPHA_SATURATE,[Q_]:r.DST_COLOR,[Z_]:r.DST_ALPHA,[j_]:r.ONE_MINUS_SRC_COLOR,[tu]:r.ONE_MINUS_SRC_ALPHA,[eg]:r.ONE_MINUS_DST_COLOR,[J_]:r.ONE_MINUS_DST_ALPHA,[ng]:r.CONSTANT_COLOR,[ig]:r.ONE_MINUS_CONSTANT_COLOR,[rg]:r.CONSTANT_ALPHA,[sg]:r.ONE_MINUS_CONSTANT_ALPHA};function Ue(N,K,Z,J,ae,Ae,Ye,gt,xt,et){if(N===lr){g===!0&&(le(r.BLEND),g=!1);return}if(g===!1&&(ue(r.BLEND),g=!0),N!==H_){if(N!==m||et!==R){if((p!==Dr||v!==Dr)&&(r.blendEquation(r.FUNC_ADD),p=Dr,v=Dr),et)switch(N){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.ONE,r.ONE);break;case fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case fh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,y=null,x=null,w=null,b.set(0,0,0),T=0,m=N,R=et}return}ae=ae||K,Ae=Ae||Z,Ye=Ye||J,(K!==p||ae!==v)&&(r.blendEquationSeparate(Ke[K],Ke[ae]),p=K,v=ae),(Z!==_||J!==y||Ae!==x||Ye!==w)&&(r.blendFuncSeparate(D[Z],D[J],D[Ae],D[Ye]),_=Z,y=J,x=Ae,w=Ye),(gt.equals(b)===!1||xt!==T)&&(r.blendColor(gt.r,gt.g,gt.b,xt),b.copy(gt),T=xt),m=N,R=!1}function Fe(N,K){N.side===gi?le(r.CULL_FACE):ue(r.CULL_FACE);let Z=N.side===En;K&&(Z=!Z),Xe(Z),N.blending===Ps&&N.transparent===!1?Ue(lr):Ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);const J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(N){S!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),S=N)}function ge(N){N!==z_?(ue(r.CULL_FACE),N!==M&&(N===ch?r.cullFace(r.BACK):N===k_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),M=N}function X(N){N!==C&&(H&&r.lineWidth(N),C=N)}function Re(N,K,Z){N?(ue(r.POLYGON_OFFSET_FILL),(I!==K||O!==Z)&&(r.polygonOffset(K,Z),I=K,O=Z)):le(r.POLYGON_OFFSET_FILL)}function Be(N){N?ue(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function P(N){N===void 0&&(N=r.TEXTURE0+z-1),G!==N&&(r.activeTexture(N),G=N)}function E(N,K,Z){Z===void 0&&(G===null?Z=r.TEXTURE0+z-1:Z=G);let J=ie[Z];J===void 0&&(J={type:void 0,texture:void 0},ie[Z]=J),(J.type!==N||J.texture!==K)&&(G!==Z&&(r.activeTexture(Z),G=Z),r.bindTexture(N,K||Q[N]),J.type=N,J.texture=K)}function q(){const N=ie[G];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){Ie.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ie.copy(N))}function me(N){ze.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ze.copy(N))}function Ve(N,K){let Z=l.get(K);Z===void 0&&(Z=new WeakMap,l.set(K,Z));let J=Z.get(N);J===void 0&&(J=r.getUniformBlockIndex(K,N.name),Z.set(N,J))}function We(N,K){const J=l.get(K).get(N);a.get(K)!==J&&(r.uniformBlockBinding(K,J,N.__bindingPointIndex),a.set(K,J))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,ie={},u={},f=new WeakMap,d=[],h=null,g=!1,m=null,p=null,_=null,y=null,v=null,x=null,w=null,b=new rt(0,0,0),T=0,R=!1,S=null,M=null,C=null,I=null,O=null,Ie.set(0,0,r.canvas.width,r.canvas.height),ze.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ue,disable:le,bindFramebuffer:Ee,drawBuffers:we,useProgram:Te,setBlending:Ue,setMaterial:Fe,setFlipSided:Xe,setCullFace:ge,setLineWidth:X,setPolygonOffset:Re,setScissorTest:Be,activeTexture:P,bindTexture:E,unbindTexture:q,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:_e,texImage3D:Pe,updateUBOMapping:Ve,uniformBlockBinding:We,texStorage2D:Ne,texStorage3D:se,texSubImage2D:j,texSubImage3D:be,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:ke,viewport:me,reset:ct}}function sd(r,e,t,n){const i=Ky(n);switch(t){case yp:return r*e;case Ep:return r*e;case Tp:return r*e*2;case bp:return r*e/i.components*i.byteLength;case _f:return r*e/i.components*i.byteLength;case Ap:return r*e*2/i.components*i.byteLength;case gf:return r*e*2/i.components*i.byteLength;case Sp:return r*e*3/i.components*i.byteLength;case Qn:return r*e*4/i.components*i.byteLength;case xf:return r*e*4/i.components*i.byteLength;case Ja:case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case el:case tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case su:case au:return Math.max(r,16)*Math.max(e,8)/4;case ru:case ou:return Math.max(r,8)*Math.max(e,8)/2;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case yu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Su:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case nl:case bu:case Au:return Math.ceil(r/4)*Math.ceil(e/4)*16;case wp:case wu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ru:case Cu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ky(r){switch(r){case Vi:case xp:return{byteLength:1,components:1};case Go:case vp:case na:return{byteLength:2,components:1};case pf:case mf:return{byteLength:2,components:4};case Xr:case df:case Oi:return{byteLength:4,components:1};case Mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function jy(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return h?new OffscreenCanvas(P,E):Xo("canvas")}function m(P,E,q){let ee=1;const ne=Be(P);if((ne.width>q||ne.height>q)&&(ee=q/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const j=Math.floor(ee*ne.width),be=Math.floor(ee*ne.height);f===void 0&&(f=g(j,be));const re=E?g(j,be):f;return re.width=j,re.height=be,re.getContext("2d").drawImage(P,0,0,j,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+be+")."),re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==kn&&P.minFilter!==Jn}function _(P){r.generateMipmap(P)}function y(P,E,q,ee,ne=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=E;if(E===r.RED&&(q===r.FLOAT&&(j=r.R32F),q===r.HALF_FLOAT&&(j=r.R16F),q===r.UNSIGNED_BYTE&&(j=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(j=r.R8UI),q===r.UNSIGNED_SHORT&&(j=r.R16UI),q===r.UNSIGNED_INT&&(j=r.R32UI),q===r.BYTE&&(j=r.R8I),q===r.SHORT&&(j=r.R16I),q===r.INT&&(j=r.R32I)),E===r.RG&&(q===r.FLOAT&&(j=r.RG32F),q===r.HALF_FLOAT&&(j=r.RG16F),q===r.UNSIGNED_BYTE&&(j=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(j=r.RG8UI),q===r.UNSIGNED_SHORT&&(j=r.RG16UI),q===r.UNSIGNED_INT&&(j=r.RG32UI),q===r.BYTE&&(j=r.RG8I),q===r.SHORT&&(j=r.RG16I),q===r.INT&&(j=r.RG32I)),E===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),E===r.RGBA){const be=ne?xl:pt.getTransfer(ee);q===r.FLOAT&&(j=r.RGBA32F),q===r.HALF_FLOAT&&(j=r.RGBA16F),q===r.UNSIGNED_BYTE&&(j=be===bt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(P,E){let q;return P?E===null||E===Xr||E===Gs?q=r.DEPTH24_STENCIL8:E===Oi?q=r.DEPTH32F_STENCIL8:E===Go&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xr||E===Gs?q=r.DEPTH_COMPONENT24:E===Oi?q=r.DEPTH_COMPONENT32F:E===Go&&(q=r.DEPTH_COMPONENT16),q}function x(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==kn&&P.minFilter!==Jn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&u.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),S(E)}function T(P){const E=n.get(P);if(E.__webglInit===void 0)return;const q=P.source,ee=d.get(q);if(ee){const ne=ee[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(ee).length===0&&d.delete(q)}n.remove(P)}function R(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const q=P.source,ee=d.get(q);delete ee[E.__cacheKey],o.memory.textures--}function S(P){const E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ne=0;ne<E.__webglFramebuffer[ee].length;ne++)r.deleteFramebuffer(E.__webglFramebuffer[ee][ne]);else r.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)r.deleteFramebuffer(E.__webglFramebuffer[ee]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=P.textures;for(let ee=0,ne=q.length;ee<ne;ee++){const j=n.get(q[ee]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(q[ee])}n.remove(P)}let M=0;function C(){M=0}function I(){const P=M;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),M+=1,P}function O(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function z(P,E){const q=n.get(P);if(P.isVideoTexture&&X(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(q,P,E);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function H(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ze(q,P,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function B(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ze(q,P,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function Y(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){$(q,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const G={[_l]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[gl]:r.MIRRORED_REPEAT},ie={[kn]:r.NEAREST,[gp]:r.NEAREST_MIPMAP_NEAREST,[mo]:r.NEAREST_MIPMAP_LINEAR,[Jn]:r.LINEAR,[Za]:r.LINEAR_MIPMAP_NEAREST,[nr]:r.LINEAR_MIPMAP_LINEAR},L={[Rg]:r.NEVER,[Ug]:r.ALWAYS,[Cg]:r.LESS,[Rp]:r.LEQUAL,[Pg]:r.EQUAL,[Ig]:r.GEQUAL,[Lg]:r.GREATER,[Dg]:r.NOTEQUAL};function oe(P,E){if(E.type===Oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jn||E.magFilter===Za||E.magFilter===mo||E.magFilter===nr||E.minFilter===Jn||E.minFilter===Za||E.minFilter===mo||E.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,G[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,G[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,G[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ie[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kn||E.minFilter!==mo&&E.minFilter!==nr||E.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const ee=E.source;let ne=d.get(ee);ne===void 0&&(ne={},d.set(ee,ne));const j=O(E);if(j!==P.__cacheKey){ne[j]===void 0&&(ne[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[j].usedTimes++;const be=ne[P.__cacheKey];be!==void 0&&(ne[P.__cacheKey].usedTimes--,be.usedTimes===0&&R(E)),P.__cacheKey=j,P.__webglTexture=ne[j].texture}return q}function ze(P,E,q){let ee=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=r.TEXTURE_3D);const ne=Ie(P,E),j=E.source;t.bindTexture(ee,P.__webglTexture,r.TEXTURE0+q);const be=n.get(j);if(j.version!==be.__version||ne===!0){t.activeTexture(r.TEXTURE0+q);const re=pt.getPrimaries(pt.workingColorSpace),de=E.colorSpace===Ii?null:pt.getPrimaries(E.colorSpace),Ne=E.colorSpace===Ii||re===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let se=m(E.image,!1,i.maxTextureSize);se=Re(E,se);const _e=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type);let ke=y(E.internalFormat,_e,Pe,E.colorSpace,E.isVideoTexture);oe(ee,E);let me;const Ve=E.mipmaps,We=E.isVideoTexture!==!0,ct=be.__version===void 0||ne===!0,N=j.dataReady,K=x(E,se);if(E.isDepthTexture)ke=v(E.format===Ws,E.type),ct&&(We?t.texStorage2D(r.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,ke,se.width,se.height,0,_e,Pe,null));else if(E.isDataTexture)if(Ve.length>0){We&&ct&&t.texStorage2D(r.TEXTURE_2D,K,ke,Ve[0].width,Ve[0].height);for(let Z=0,J=Ve.length;Z<J;Z++)me=Ve[Z],We?N&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,me.width,me.height,_e,Pe,me.data):t.texImage2D(r.TEXTURE_2D,Z,ke,me.width,me.height,0,_e,Pe,me.data);E.generateMipmaps=!1}else We?(ct&&t.texStorage2D(r.TEXTURE_2D,K,ke,se.width,se.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,_e,Pe,se.data)):t.texImage2D(r.TEXTURE_2D,0,ke,se.width,se.height,0,_e,Pe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,K,ke,Ve[0].width,Ve[0].height,se.depth);for(let Z=0,J=Ve.length;Z<J;Z++)if(me=Ve[Z],E.format!==Qn)if(_e!==null)if(We){if(N)if(E.layerUpdates.size>0){const ae=sd(me.width,me.height,E.format,E.type);for(const Ae of E.layerUpdates){const Ye=me.data.subarray(Ae*ae/me.data.BYTES_PER_ELEMENT,(Ae+1)*ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Ae,me.width,me.height,1,_e,Ye,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,me.width,me.height,se.depth,_e,me.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,ke,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,me.width,me.height,se.depth,_e,Pe,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,ke,me.width,me.height,se.depth,0,_e,Pe,me.data)}else{We&&ct&&t.texStorage2D(r.TEXTURE_2D,K,ke,Ve[0].width,Ve[0].height);for(let Z=0,J=Ve.length;Z<J;Z++)me=Ve[Z],E.format!==Qn?_e!==null?We?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,ke,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,me.width,me.height,_e,Pe,me.data):t.texImage2D(r.TEXTURE_2D,Z,ke,me.width,me.height,0,_e,Pe,me.data)}else if(E.isDataArrayTexture)if(We){if(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,K,ke,se.width,se.height,se.depth),N)if(E.layerUpdates.size>0){const Z=sd(se.width,se.height,E.format,E.type);for(const J of E.layerUpdates){const ae=se.data.subarray(J*Z/se.data.BYTES_PER_ELEMENT,(J+1)*Z/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,_e,Pe,ae)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Pe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,_e,Pe,se.data);else if(E.isData3DTexture)We?(ct&&t.texStorage3D(r.TEXTURE_3D,K,ke,se.width,se.height,se.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Pe,se.data)):t.texImage3D(r.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,_e,Pe,se.data);else if(E.isFramebufferTexture){if(ct)if(We)t.texStorage2D(r.TEXTURE_2D,K,ke,se.width,se.height);else{let Z=se.width,J=se.height;for(let ae=0;ae<K;ae++)t.texImage2D(r.TEXTURE_2D,ae,ke,Z,J,0,_e,Pe,null),Z>>=1,J>>=1}}else if(Ve.length>0){if(We&&ct){const Z=Be(Ve[0]);t.texStorage2D(r.TEXTURE_2D,K,ke,Z.width,Z.height)}for(let Z=0,J=Ve.length;Z<J;Z++)me=Ve[Z],We?N&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,_e,Pe,me):t.texImage2D(r.TEXTURE_2D,Z,ke,_e,Pe,me);E.generateMipmaps=!1}else if(We){if(ct){const Z=Be(se);t.texStorage2D(r.TEXTURE_2D,K,ke,Z.width,Z.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e,Pe,se)}else t.texImage2D(r.TEXTURE_2D,0,ke,_e,Pe,se);p(E)&&_(ee),be.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function $(P,E,q){if(E.image.length!==6)return;const ee=Ie(P,E),ne=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+q);const j=n.get(ne);if(ne.version!==j.__version||ee===!0){t.activeTexture(r.TEXTURE0+q);const be=pt.getPrimaries(pt.workingColorSpace),re=E.colorSpace===Ii?null:pt.getPrimaries(E.colorSpace),de=E.colorSpace===Ii||be===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Ne&&!se?_e[J]=m(E.image[J],!0,i.maxCubemapSize):_e[J]=se?E.image[J].image:E.image[J],_e[J]=Re(E,_e[J]);const Pe=_e[0],ke=s.convert(E.format,E.colorSpace),me=s.convert(E.type),Ve=y(E.internalFormat,ke,me,E.colorSpace),We=E.isVideoTexture!==!0,ct=j.__version===void 0||ee===!0,N=ne.dataReady;let K=x(E,Pe);oe(r.TEXTURE_CUBE_MAP,E);let Z;if(Ne){We&&ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,K,Ve,Pe.width,Pe.height);for(let J=0;J<6;J++){Z=_e[J].mipmaps;for(let ae=0;ae<Z.length;ae++){const Ae=Z[ae];E.format!==Qn?ke!==null?We?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,0,0,Ae.width,Ae.height,ke,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,Ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,0,0,Ae.width,Ae.height,ke,me,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,Ve,Ae.width,Ae.height,0,ke,me,Ae.data)}}}else{if(Z=E.mipmaps,We&&ct){Z.length>0&&K++;const J=Be(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,K,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(se){We?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,ke,me,_e[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,_e[J].width,_e[J].height,0,ke,me,_e[J].data);for(let ae=0;ae<Z.length;ae++){const Ye=Z[ae].image[J].image;We?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,0,0,Ye.width,Ye.height,ke,me,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,Ve,Ye.width,Ye.height,0,ke,me,Ye.data)}}else{We?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ke,me,_e[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,ke,me,_e[J]);for(let ae=0;ae<Z.length;ae++){const Ae=Z[ae];We?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,0,0,ke,me,Ae.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,Ve,ke,me,Ae.image[J])}}}p(E)&&_(r.TEXTURE_CUBE_MAP),j.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Q(P,E,q,ee,ne,j){const be=s.convert(q.format,q.colorSpace),re=s.convert(q.type),de=y(q.internalFormat,be,re,q.colorSpace);if(!n.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>j),_e=Math.max(1,E.height>>j);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,de,se,_e,E.depth,0,be,re,null):t.texImage2D(ne,j,de,se,_e,0,be,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ge(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,ne,n.get(q).__webglTexture,0,Xe(E)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,ne,n.get(q).__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(P,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const ee=E.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,j=v(E.stencilBuffer,ne),be=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=Xe(E);ge(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,j,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,j,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,j,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,P)}else{const ee=E.textures;for(let ne=0;ne<ee.length;ne++){const j=ee[ne],be=s.convert(j.format,j.colorSpace),re=s.convert(j.type),de=y(j.internalFormat,be,re,j.colorSpace),Ne=Xe(E);q&&ge(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,de,E.width,E.height):ge(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ne,de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,ne=Xe(E);if(E.depthTexture.format===Ls)ge(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Ws)ge(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,P)}else if(q){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=r.createRenderbuffer(),ue(E.__webglDepthbuffer[ee],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),ue(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(P,E,q){const ee=n.get(P);E!==void 0&&Q(ee.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ee(P)}function Te(P){const E=P.texture,q=n.get(P),ee=n.get(E);P.addEventListener("dispose",b);const ne=P.textures,j=P.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,o.memory.textures++),j){q.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[re]=[];for(let de=0;de<E.mipmaps.length;de++)q.__webglFramebuffer[re][de]=r.createFramebuffer()}else q.__webglFramebuffer[re]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)q.__webglFramebuffer[re]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(be)for(let re=0,de=ne.length;re<de;re++){const Ne=n.get(ne[re]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&ge(P)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let re=0;re<ne.length;re++){const de=ne[re];q.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[re]);const Ne=s.convert(de.format,de.colorSpace),se=s.convert(de.type),_e=y(de.internalFormat,Ne,se,de.colorSpace,P.isXRRenderTarget===!0),Pe=Xe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,_e,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,q.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ue(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(r.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Q(q.__webglFramebuffer[re][de],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,de);else Q(q.__webglFramebuffer[re],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(E)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let re=0,de=ne.length;re<de;re++){const Ne=ne[re],se=n.get(Ne);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),oe(r.TEXTURE_2D,Ne),Q(q.__webglFramebuffer,P,Ne,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,0),p(Ne)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,ee.__webglTexture),oe(re,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Q(q.__webglFramebuffer[de],P,E,r.COLOR_ATTACHMENT0,re,de);else Q(q.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,re,0);p(E)&&_(re),t.unbindTexture()}P.depthBuffer&&Ee(P)}function Ke(P){const E=P.textures;for(let q=0,ee=E.length;q<ee;q++){const ne=E[q];if(p(ne)){const j=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,be=n.get(ne).__webglTexture;t.bindTexture(j,be),_(j),t.unbindTexture()}}}const D=[],Ue=[];function Fe(P){if(P.samples>0){if(ge(P)===!1){const E=P.textures,q=P.width,ee=P.height;let ne=r.COLOR_BUFFER_BIT;const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=n.get(P),re=E.length>1;if(re)for(let de=0;de<E.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let de=0;de<E.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[de]);const Ne=n.get(E[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,q,ee,0,0,q,ee,ne,r.NEAREST),l===!0&&(D.length=0,Ue.length=0,D.push(r.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(j),Ue.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ue)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let de=0;de<E.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,be.__webglColorRenderbuffer[de]);const Ne=n.get(E[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Xe(P){return Math.min(i.maxSamples,P.samples)}function ge(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Re(P,E){const q=P.colorSpace,ee=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==gr&&q!==Ii&&(pt.getTransfer(q)===bt?(ee!==Qn||ne!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=C,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ge}function Zy(r,e){function t(n,i=Ii){let s;const o=pt.getTransfer(i);if(n===Vi)return r.UNSIGNED_BYTE;if(n===pf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===mf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===xp)return r.BYTE;if(n===vp)return r.SHORT;if(n===Go)return r.UNSIGNED_SHORT;if(n===df)return r.INT;if(n===Xr)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===na)return r.HALF_FLOAT;if(n===yp)return r.ALPHA;if(n===Sp)return r.RGB;if(n===Qn)return r.RGBA;if(n===Ep)return r.LUMINANCE;if(n===Tp)return r.LUMINANCE_ALPHA;if(n===Ls)return r.DEPTH_COMPONENT;if(n===Ws)return r.DEPTH_STENCIL;if(n===bp)return r.RED;if(n===_f)return r.RED_INTEGER;if(n===Ap)return r.RG;if(n===gf)return r.RG_INTEGER;if(n===xf)return r.RGBA_INTEGER;if(n===Ja||n===Qa||n===el||n===tl)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ru||n===su||n===ou||n===au)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===au)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lu||n===cu||n===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lu||n===cu)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fu||n===hu||n===du||n===pu||n===mu||n===_u||n===gu||n===xu||n===vu||n===Mu||n===yu||n===Su||n===Eu||n===Tu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_u)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Su)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tu)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===bu||n===Au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===nl)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wp||n===wu||n===Ru||n===Cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Jy extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ca extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qy={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(c,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ca;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const eS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new tn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gi({vertexShader:eS,fragmentShader:tS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ei(new oa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iS extends Js{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const m=new nS,p=t.getContextAttributes();let _=null,y=null;const v=[],x=[],w=new ft;let b=null;const T=new Fn;T.layers.enable(1),T.viewport=new Gt;const R=new Fn;R.layers.enable(2),R.viewport=new Gt;const S=[T,R],M=new Jy;M.layers.enable(1),M.layers.enable(2);let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=v[$];return Q===void 0&&(Q=new wc,v[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=v[$];return Q===void 0&&(Q=new wc,v[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=v[$];return Q===void 0&&(Q=new wc,v[$]=Q),Q.getHandSpace()};function O($){const Q=x.indexOf($.inputSource);if(Q===-1)return;const ue=v[Q];ue!==void 0&&(ue.update($.inputSource,$.frame,c||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let $=0;$<v.length;$++){const Q=x[$];Q!==null&&(x[$]=null,v[$].disconnect(Q))}C=null,I=null,m.reset(),e.setRenderTarget(_),h=null,d=null,f=null,i=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Yr(h.framebufferWidth,h.framebufferHeight,{format:Qn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ue=null,le=null;p.depth&&(le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Ws:Ls,ue=p.stencil?Gs:Xr);const Ee={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Yr(d.textureWidth,d.textureHeight,{format:Qn,type:Vi,depthTexture:new zp(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H($){for(let Q=0;Q<$.removed.length;Q++){const ue=$.removed[Q],le=x.indexOf(ue);le>=0&&(x[le]=null,v[le].disconnect(ue))}for(let Q=0;Q<$.added.length;Q++){const ue=$.added[Q];let le=x.indexOf(ue);if(le===-1){for(let we=0;we<v.length;we++)if(we>=x.length){x.push(ue),le=we;break}else if(x[we]===null){x[we]=ue,le=we;break}if(le===-1)break}const Ee=v[le];Ee&&Ee.connect(ue)}}const B=new V,Y=new V;function G($,Q,ue){B.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(ue.matrixWorld);const le=B.distanceTo(Y),Ee=Q.projectionMatrix.elements,we=ue.projectionMatrix.elements,Te=Ee[14]/(Ee[10]-1),Ke=Ee[14]/(Ee[10]+1),D=(Ee[9]+1)/Ee[5],Ue=(Ee[9]-1)/Ee[5],Fe=(Ee[8]-1)/Ee[0],Xe=(we[8]+1)/we[0],ge=Te*Fe,X=Te*Xe,Re=le/(-Fe+Xe),Be=Re*-Fe;Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(Re),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const P=Te+Re,E=Ke+Re,q=ge-Be,ee=X+(le-Be),ne=D*Ke/E*P,j=Ue*Ke/E*P;$.projectionMatrix.makePerspective(q,ee,ne,j,P,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ie($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;m.texture!==null&&($.near=m.depthNear,$.far=m.depthFar),M.near=R.near=T.near=$.near,M.far=R.far=T.far=$.far,(C!==M.near||I!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,I=M.far,T.near=C,T.far=I,R.near=C,R.far=I,T.updateProjectionMatrix(),R.updateProjectionMatrix(),$.updateProjectionMatrix());const Q=$.parent,ue=M.cameras;ie(M,Q);for(let le=0;le<ue.length;le++)ie(ue[le],Q);ue.length===2?G(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),L($,M,Q)};function L($,Q,ue){ue===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(M)};let oe=null;function Ie($,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const ue=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let le=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let we=0;we<ue.length;we++){const Te=ue[we];let Ke=null;if(h!==null)Ke=h.getViewport(Te);else{const Ue=f.getViewSubImage(d,Te);Ke=Ue.viewport,we===0&&(e.setRenderTargetTextures(y,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(y))}let D=S[we];D===void 0&&(D=new Fn,D.layers.enable(we),D.viewport=new Gt,S[we]=D),D.matrix.fromArray(Te.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Te.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),we===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(D)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const we=f.getDepthInformation(ue[0]);we&&we.isValid&&we.texture&&m.init(e,we,i.renderState)}}for(let ue=0;ue<v.length;ue++){const le=x[ue],Ee=v[ue];le!==null&&Ee!==void 0&&Ee.update(le,Q,c||o)}oe&&oe($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ze=new Fp;ze.setAnimationLoop(Ie),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const Tr=new Hi,rS=new Et;function sS(r,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,Up(r)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function i(p,_,y,v,x){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(p,_):_.isMeshToonMaterial?(s(p,_),f(p,_)):_.isMeshPhongMaterial?(s(p,_),u(p,_)):_.isMeshStandardMaterial?(s(p,_),d(p,_),_.isMeshPhysicalMaterial&&h(p,_,x)):_.isMeshMatcapMaterial?(s(p,_),g(p,_)):_.isMeshDepthMaterial?s(p,_):_.isMeshDistanceMaterial?(s(p,_),m(p,_)):_.isMeshNormalMaterial?s(p,_):_.isLineBasicMaterial?(o(p,_),_.isLineDashedMaterial&&a(p,_)):_.isPointsMaterial?l(p,_,y,v):_.isSpriteMaterial?c(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===En&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===En&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const y=e.get(_),v=y.envMap,x=y.envMapRotation;v&&(p.envMap.value=v,Tr.copy(x),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(rS.makeRotationFromEuler(Tr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function o(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function a(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,y,v){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*y,p.scale.value=v*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function c(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function f(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function d(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function h(p,_,y){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===En&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,_){_.matcap&&(p.matcap.value=_.matcap)}function m(p,_){const y=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oS(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(g(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",p));const w=v.program;n.updateUBOMapping(y,w);const b=e.render.frame;s[y.id]!==b&&(d(y),s[y.id]=b)}function u(y){const v=f();y.__bindingPointIndex=v;const x=r.createBuffer(),w=y.__size,b=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],x=y.uniforms,w=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,T=x.length;b<T;b++){const R=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,M=R.length;S<M;S++){const C=R[S];if(h(C,b,S,w)===!0){const I=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let H=0;H<O.length;H++){const B=O[H],Y=m(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,I+z,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(y,v,x,w){const b=y.value,T=v+"_"+x;if(w[T]===void 0)return typeof b=="number"||typeof b=="boolean"?w[T]=b:w[T]=b.clone(),!0;{const R=w[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return w[T]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(y){const v=y.uniforms;let x=0;const w=16;for(let T=0,R=v.length;T<R;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,C=S.length;M<C;M++){const I=S[M],O=Array.isArray(I.value)?I.value:[I.value];for(let z=0,H=O.length;z<H;z++){const B=O[z],Y=m(B),G=x%w,ie=G%Y.boundary,L=G+ie;x+=ie,L!==0&&w-L<Y.storage&&(x+=w-L),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=Y.storage}}}const b=x%w;return b>0&&(x+=w-b),y.__size=x,y.__cache={},this}function m(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function _(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}class Wp{constructor(e={}){const{canvas:t=Zg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=cr,this.toneMappingExposure=1;const v=this;let x=!1,w=0,b=0,T=null,R=-1,S=null;const M=new Gt,C=new Gt;let I=null;const O=new rt(0);let z=0,H=t.width,B=t.height,Y=1,G=null,ie=null;const L=new Gt(0,0,H,B),oe=new Gt(0,0,H,B);let Ie=!1;const ze=new Ef;let $=!1,Q=!1;const ue=new Et,le=new V,Ee=new Gt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function Ke(){return T===null?Y:1}let D=n;function Ue(A,U){return t.getContext(A,U)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vl}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const U="webgl2";if(D=Ue(U,A),D===null)throw Ue(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Fe,Xe,ge,X,Re,Be,P,E,q,ee,ne,j,be,re,de,Ne,se,_e,Pe,ke,me,Ve,We,ct;function N(){Fe=new dM(D),Fe.init(),Ve=new Zy(D,Fe),Xe=new aM(D,Fe,e,Ve),ge=new $y(D),X=new _M(D),Re=new Uy,Be=new jy(D,Fe,ge,Re,Xe,Ve,X),P=new cM(v),E=new hM(v),q=new E0(D),We=new sM(D,q),ee=new pM(D,q,X,We),ne=new xM(D,ee,q,X),Pe=new gM(D,Xe,Be),Ne=new lM(Re),j=new Iy(v,P,E,Fe,Xe,We,Ne),be=new sS(v,Re),re=new Oy,de=new Hy(Fe),_e=new rM(v,P,E,ge,ne,d,l),se=new qy(v,ne,Xe),ct=new oS(D,X,Xe,ge),ke=new oM(D,Fe,X),me=new mM(D,Fe,X),X.programs=j.programs,v.capabilities=Xe,v.extensions=Fe,v.properties=Re,v.renderLists=re,v.shadowMap=se,v.state=ge,v.info=X}N();const K=new iS(v,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(H,B,!1))},this.getSize=function(A){return A.set(H,B)},this.setSize=function(A,U,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,B=U,t.width=Math.floor(A*Y),t.height=Math.floor(U*Y),W===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(H*Y,B*Y).floor()},this.setDrawingBufferSize=function(A,U,W){H=A,B=U,Y=W,t.width=Math.floor(A*W),t.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,U,W,k){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,U,W,k),ge.viewport(M.copy(L).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,U,W,k){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,U,W,k),ge.scissor(C.copy(oe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){ge.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(A=!0,U=!0,W=!0){let k=0;if(A){let F=!1;if(T!==null){const te=T.texture.format;F=te===xf||te===gf||te===_f}if(F){const te=T.texture.type,fe=te===Vi||te===Xr||te===Go||te===Gs||te===pf||te===mf,ve=_e.getClearColor(),he=_e.getClearAlpha(),xe=ve.r,Ce=ve.g,De=ve.b;fe?(h[0]=xe,h[1]=Ce,h[2]=De,h[3]=he,D.clearBufferuiv(D.COLOR,0,h)):(g[0]=xe,g[1]=Ce,g[2]=De,g[3]=he,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),W&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),re.dispose(),de.dispose(),Re.dispose(),P.dispose(),E.dispose(),ne.dispose(),We.dispose(),ct.dispose(),j.dispose(),K.dispose(),K.removeEventListener("sessionstart",Se),K.removeEventListener("sessionend",ot),ce.stop()};function Z(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=X.autoReset,U=se.enabled,W=se.autoUpdate,k=se.needsUpdate,F=se.type;N(),X.autoReset=A,se.enabled=U,se.autoUpdate=W,se.needsUpdate=k,se.type=F}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ae(A){const U=A.target;U.removeEventListener("dispose",Ae),Ye(U)}function Ye(A){gt(A),Re.remove(A)}function gt(A){const U=Re.get(A).programs;U!==void 0&&(U.forEach(function(W){j.releaseProgram(W)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,k,F,te){U===null&&(U=we);const fe=F.isMesh&&F.matrixWorld.determinant()<0,ve=yt(A,U,W,k,F);ge.setMaterial(k,fe);let he=W.index,xe=1;if(k.wireframe===!0){if(he=ee.getWireframeAttribute(W),he===void 0)return;xe=2}const Ce=W.drawRange,De=W.attributes.position;let at=Ce.start*xe,_t=(Ce.start+Ce.count)*xe;te!==null&&(at=Math.max(at,te.start*xe),_t=Math.min(_t,(te.start+te.count)*xe)),he!==null?(at=Math.max(at,0),_t=Math.min(_t,he.count)):De!=null&&(at=Math.max(at,0),_t=Math.min(_t,De.count));const lt=_t-at;if(lt<0||lt===1/0)return;We.setup(F,k,ve,W,he);let kt,nt=ke;if(he!==null&&(kt=q.get(he),nt=me,nt.setIndex(kt)),F.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*Ke()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(F.isLine){let ye=k.linewidth;ye===void 0&&(ye=1),ge.setLineWidth(ye*Ke()),F.isLineSegments?nt.setMode(D.LINES):F.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else F.isPoints?nt.setMode(D.POINTS):F.isSprite&&nt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ye=F._multiDrawStarts,Qt=F._multiDrawCounts,dt=F._multiDrawCount,oi=he?q.get(he).bytesPerElement:1,Qr=Re.get(k).currentProgram.getUniforms();for(let Ln=0;Ln<dt;Ln++)Qr.setValue(D,"_gl_DrawID",Ln),nt.render(ye[Ln]/oi,Qt[Ln])}else if(F.isInstancedMesh)nt.renderInstances(at,lt,F.count);else if(W.isInstancedBufferGeometry){const ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qt=Math.min(W.instanceCount,ye);nt.renderInstances(at,lt,Qt)}else nt.render(at,lt)};function xt(A,U,W){A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,Mt(A,U,W),A.side=dr,A.needsUpdate=!0,Mt(A,U,W),A.side=gi):Mt(A,U,W)}this.compile=function(A,U,W=null){W===null&&(W=A),p=de.get(W),p.init(U),y.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),A!==W&&A.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return A.traverse(function(F){const te=F.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const ve=te[fe];xt(ve,W,F),k.add(ve)}else xt(te,W,F),k.add(te)}),y.pop(),p=null,k},this.compileAsync=function(A,U,W=null){const k=this.compile(A,U,W);return new Promise(F=>{function te(){if(k.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&k.delete(fe)}),k.size===0){F(A);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let et=null;function Oe(A){et&&et(A)}function Se(){ce.stop()}function ot(){ce.start()}const ce=new Fp;ce.setAnimationLoop(Oe),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(A){et=A,K.setAnimationLoop(A),A===null?ce.stop():ce.start()},K.addEventListener("sessionstart",Se),K.addEventListener("sessionend",ot),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,T),p=de.get(A,y.length),p.init(U),y.push(p),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(ue),Q=this.localClippingEnabled,$=Ne.init(this.clippingPlanes,Q),m=re.get(A,_.length),m.init(),_.push(m),K.enabled===!0&&K.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&He(te,U,-1/0,v.sortObjects)}He(A,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(G,ie),Te=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Te&&_e.addToRenderList(m,A),this.info.render.frame++,$===!0&&Ne.beginShadows();const W=p.state.shadowsArray;se.render(W,A,U),$===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const te=U.cameras;if(F.length>0)for(let fe=0,ve=te.length;fe<ve;fe++){const he=te[fe];Ge(k,F,A,he)}Te&&_e.render(A);for(let fe=0,ve=te.length;fe<ve;fe++){const he=te[fe];Le(m,A,he,he.viewport)}}else F.length>0&&Ge(k,F,A,U),Te&&_e.render(A),Le(m,A,U);T!==null&&(Be.updateMultisampleRenderTarget(T),Be.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,U),We.resetDefaultState(),R=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],$===!0&&Ne.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function He(A,U,W,k){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ze.intersectsSprite(A)){k&&Ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const fe=ne.update(A),ve=A.material;ve.visible&&m.push(A,fe,ve,W,Ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ze.intersectsObject(A))){const fe=ne.update(A),ve=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ee.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ee.copy(fe.boundingSphere.center)),Ee.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(ve)){const he=fe.groups;for(let xe=0,Ce=he.length;xe<Ce;xe++){const De=he[xe],at=ve[De.materialIndex];at&&at.visible&&m.push(A,fe,at,W,Ee.z,De)}}else ve.visible&&m.push(A,fe,ve,W,Ee.z,null)}}const te=A.children;for(let fe=0,ve=te.length;fe<ve;fe++)He(te[fe],U,W,k)}function Le(A,U,W,k){const F=A.opaque,te=A.transmissive,fe=A.transparent;p.setupLightsView(W),$===!0&&Ne.setGlobalState(v.clippingPlanes,W),k&&ge.viewport(M.copy(k)),F.length>0&&Rt(F,U,W),te.length>0&&Rt(te,U,W),fe.length>0&&Rt(fe,U,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ge(A,U,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Yr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?na:Vi,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const te=p.state.transmissionRenderTarget[k.id],fe=k.viewport||M;te.setSize(fe.z,fe.w);const ve=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(O),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),Te&&_e.render(W);const he=v.toneMapping;v.toneMapping=cr;const xe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),$===!0&&Ne.setGlobalState(v.clippingPlanes,k),Rt(A,W,k),Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let De=0,at=U.length;De<at;De++){const _t=U[De],lt=_t.object,kt=_t.geometry,nt=_t.material,ye=_t.group;if(nt.side===gi&&lt.layers.test(k.layers)){const Qt=nt.side;nt.side=En,nt.needsUpdate=!0,je(lt,W,k,kt,nt,ye),nt.side=Qt,nt.needsUpdate=!0,Ce=!0}}Ce===!0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te))}v.setRenderTarget(ve),v.setClearColor(O,z),xe!==void 0&&(k.viewport=xe),v.toneMapping=he}function Rt(A,U,W){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,te=A.length;F<te;F++){const fe=A[F],ve=fe.object,he=fe.geometry,xe=k===null?fe.material:k,Ce=fe.group;ve.layers.test(W.layers)&&je(ve,U,W,he,xe,Ce)}}function je(A,U,W,k,F,te){A.onBeforeRender(v,U,W,k,F,te),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.transparent===!0&&F.side===gi&&F.forceSinglePass===!1?(F.side=En,F.needsUpdate=!0,v.renderBufferDirect(W,U,k,F,A,te),F.side=dr,F.needsUpdate=!0,v.renderBufferDirect(W,U,k,F,A,te),F.side=gi):v.renderBufferDirect(W,U,k,F,A,te),A.onAfterRender(v,U,W,k,F,te)}function Mt(A,U,W){U.isScene!==!0&&(U=we);const k=Re.get(A),F=p.state.lights,te=p.state.shadowsArray,fe=F.state.version,ve=j.getParameters(A,F.state,te,U,W),he=j.getProgramCacheKey(ve);let xe=k.programs;k.environment=A.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(A.isMeshStandardMaterial?E:P).get(A.envMap||k.environment),k.envMapRotation=k.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,xe===void 0&&(A.addEventListener("dispose",Ae),xe=new Map,k.programs=xe);let Ce=xe.get(he);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===fe)return Tt(A,ve),Ce}else ve.uniforms=j.getUniforms(A),A.onBeforeCompile(ve,v),Ce=j.acquireProgram(ve,he),xe.set(he,Ce),k.uniforms=ve.uniforms;const De=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=Ne.uniform),Tt(A,ve),k.needsLights=Pn(A),k.lightsStateVersion=fe,k.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function zt(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=il.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Tt(A,U){const W=Re.get(A);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function yt(A,U,W,k,F){U.isScene!==!0&&(U=we),Be.resetTextureUnits();const te=U.fog,fe=k.isMeshStandardMaterial?U.environment:null,ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:gr,he=(k.isMeshStandardMaterial?E:P).get(k.envMap||fe),xe=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ce=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,_t=!!W.morphAttributes.color;let lt=cr;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(lt=v.toneMapping);const kt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nt=kt!==void 0?kt.length:0,ye=Re.get(k),Qt=p.state.lights;if($===!0&&(Q===!0||A!==S)){const Xn=A===S&&k.id===R;Ne.setState(k,A,Xn)}let dt=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Qt.state.version||ye.outputColorSpace!==ve||F.isBatchedMesh&&ye.batching===!1||!F.isBatchedMesh&&ye.batching===!0||F.isBatchedMesh&&ye.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ye.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ye.instancing===!1||!F.isInstancedMesh&&ye.instancing===!0||F.isSkinnedMesh&&ye.skinning===!1||!F.isSkinnedMesh&&ye.skinning===!0||F.isInstancedMesh&&ye.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ye.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ye.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ye.instancingMorph===!1&&F.morphTexture!==null||ye.envMap!==he||k.fog===!0&&ye.fog!==te||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ne.numPlanes||ye.numIntersection!==Ne.numIntersection)||ye.vertexAlphas!==xe||ye.vertexTangents!==Ce||ye.morphTargets!==De||ye.morphNormals!==at||ye.morphColors!==_t||ye.toneMapping!==lt||ye.morphTargetsCount!==nt)&&(dt=!0):(dt=!0,ye.__version=k.version);let oi=ye.currentProgram;dt===!0&&(oi=Mt(k,U,F));let Qr=!1,Ln=!1,ec=!1;const Nt=oi.getUniforms(),qi=ye.uniforms;if(ge.useProgram(oi.program)&&(Qr=!0,Ln=!0,ec=!0),k.id!==R&&(R=k.id,Ln=!0),Qr||S!==A){Nt.setValue(D,"projectionMatrix",A.projectionMatrix),Nt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Xn=Nt.map.cameraPosition;Xn!==void 0&&Xn.setValue(D,le.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Ln=!0,ec=!0)}if(F.isSkinnedMesh){Nt.setOptional(D,F,"bindMatrix"),Nt.setOptional(D,F,"bindMatrixInverse");const Xn=F.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Nt.setValue(D,"boneTexture",Xn.boneTexture,Be))}F.isBatchedMesh&&(Nt.setOptional(D,F,"batchingTexture"),Nt.setValue(D,"batchingTexture",F._matricesTexture,Be),Nt.setOptional(D,F,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",F._indirectTexture,Be),Nt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",F._colorsTexture,Be));const tc=W.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0)&&Pe.update(F,W,oi),(Ln||ye.receiveShadow!==F.receiveShadow)&&(ye.receiveShadow=F.receiveShadow,Nt.setValue(D,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(qi.envMap.value=he,qi.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(qi.envMapIntensity.value=U.environmentIntensity),Ln&&(Nt.setValue(D,"toneMappingExposure",v.toneMappingExposure),ye.needsLights&&mt(qi,ec),te&&k.fog===!0&&be.refreshFogUniforms(qi,te),be.refreshMaterialUniforms(qi,k,Y,B,p.state.transmissionRenderTarget[A.id]),il.upload(D,zt(ye),qi,Be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(il.upload(D,zt(ye),qi,Be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Nt.setValue(D,"center",F.center),Nt.setValue(D,"modelViewMatrix",F.modelViewMatrix),Nt.setValue(D,"normalMatrix",F.normalMatrix),Nt.setValue(D,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Xn=k.uniformsGroups;for(let nc=0,B_=Xn.length;nc<B_;nc++){const lh=Xn[nc];ct.update(lh,oi),ct.bind(lh,oi)}}return oi}function mt(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Pn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,U,W){Re.get(A.texture).__webglTexture=U,Re.get(A.depthTexture).__webglTexture=W;const k=Re.get(A);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=W===void 0,k.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const W=Re.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,W=0){T=A,w=U,b=W;let k=!0,F=null,te=!1,fe=!1;if(A){const he=Re.get(A);he.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):he.__webglFramebuffer===void 0?Be.setupRenderTarget(A):he.__hasExternalTextures&&Be.rebindTextures(A,Re.get(A.texture).__webglTexture,Re.get(A.depthTexture).__webglTexture);const xe=A.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const Ce=Re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?F=Ce[U][W]:F=Ce[U],te=!0):A.samples>0&&Be.useMultisampledRTT(A)===!1?F=Re.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[W]:F=Ce,M.copy(A.viewport),C.copy(A.scissor),I=A.scissorTest}else M.copy(L).multiplyScalar(Y).floor(),C.copy(oe).multiplyScalar(Y).floor(),I=Ie;if(ge.bindFramebuffer(D.FRAMEBUFFER,F)&&k&&ge.drawBuffers(A,F),ge.viewport(M),ge.scissor(C),ge.setScissorTest(I),te){const he=Re.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,W)}else if(fe){const he=Re.get(A.texture),xe=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,he.__webglTexture,W||0,xe)}R=-1},this.readRenderTargetPixels=function(A,U,W,k,F,te,fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){ge.bindFramebuffer(D.FRAMEBUFFER,ve);try{const he=A.texture,xe=he.format,Ce=he.type;if(!Xe.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-k&&W>=0&&W<=A.height-F&&D.readPixels(U,W,k,F,Ve.convert(xe),Ve.convert(Ce),te)}finally{const he=T!==null?Re.get(T).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(A,U,W,k,F,te,fe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){ge.bindFramebuffer(D.FRAMEBUFFER,ve);try{const he=A.texture,xe=he.format,Ce=he.type;if(!Xe.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-k&&W>=0&&W<=A.height-F){const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),D.readPixels(U,W,k,F,Ve.convert(xe),Ve.convert(Ce),0),D.flush();const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Jg(D,at,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te)}finally{D.deleteBuffer(De),D.deleteSync(at)}return te}}finally{const he=T!==null?Re.get(T).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,he)}}},this.copyFramebufferToTexture=function(A,U=null,W=0){A.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const k=Math.pow(2,-W),F=Math.floor(A.image.width*k),te=Math.floor(A.image.height*k),fe=U!==null?U.x:0,ve=U!==null?U.y:0;Be.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,fe,ve,F,te),ge.unbindTexture()},this.copyTextureToTexture=function(A,U,W=null,k=null,F=0){A.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1],U=arguments[2],F=arguments[3]||0,W=null);let te,fe,ve,he,xe,Ce;W!==null?(te=W.max.x-W.min.x,fe=W.max.y-W.min.y,ve=W.min.x,he=W.min.y):(te=A.image.width,fe=A.image.height,ve=0,he=0),k!==null?(xe=k.x,Ce=k.y):(xe=0,Ce=0);const De=Ve.convert(U.format),at=Ve.convert(U.type);Be.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const _t=D.getParameter(D.UNPACK_ROW_LENGTH),lt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kt=D.getParameter(D.UNPACK_SKIP_PIXELS),nt=D.getParameter(D.UNPACK_SKIP_ROWS),ye=D.getParameter(D.UNPACK_SKIP_IMAGES),Qt=A.isCompressedTexture?A.mipmaps[F]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Qt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,he),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,xe,Ce,te,fe,De,at,Qt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,xe,Ce,Qt.width,Qt.height,De,Qt.data):D.texSubImage2D(D.TEXTURE_2D,F,xe,Ce,te,fe,De,at,Qt),D.pixelStorei(D.UNPACK_ROW_LENGTH,_t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ye),F===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(A,U,W=null,k=null,F=0){A.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,k=arguments[1]||null,A=arguments[2],U=arguments[3],F=arguments[4]||0);let te,fe,ve,he,xe,Ce,De,at,_t;const lt=A.isCompressedTexture?A.mipmaps[F]:A.image;W!==null?(te=W.max.x-W.min.x,fe=W.max.y-W.min.y,ve=W.max.z-W.min.z,he=W.min.x,xe=W.min.y,Ce=W.min.z):(te=lt.width,fe=lt.height,ve=lt.depth,he=0,xe=0,Ce=0),k!==null?(De=k.x,at=k.y,_t=k.z):(De=0,at=0,_t=0);const kt=Ve.convert(U.format),nt=Ve.convert(U.type);let ye;if(U.isData3DTexture)Be.setTexture3D(U,0),ye=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Be.setTexture2DArray(U,0),ye=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=D.getParameter(D.UNPACK_ROW_LENGTH),dt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),oi=D.getParameter(D.UNPACK_SKIP_PIXELS),Qr=D.getParameter(D.UNPACK_SKIP_ROWS),Ln=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,he),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ye,F,De,at,_t,te,fe,ve,kt,nt,lt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,F,De,at,_t,te,fe,ve,kt,lt.data):D.texSubImage3D(ye,F,De,at,_t,te,fe,ve,kt,nt,lt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Qt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,oi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ln),F===0&&U.generateMipmaps&&D.generateMipmap(ye),ge.unbindTexture()},this.initRenderTarget=function(A){Re.get(A).__webglFramebuffer===void 0&&Be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Be.setTextureCube(A,0):A.isData3DTexture?Be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Be.setTexture2DArray(A,0):Be.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){w=0,b=0,T=null,ge.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vf?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Gl?"display-p3":"srgb"}}class Sl extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bf extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const El=new V,Tl=new V,od=new Et,lo=new Wl,Pa=new ra,Rc=new V,ad=new V;class Du extends Xt{constructor(e=new Rn,t=new bf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)El.fromBufferAttribute(t,i-1),Tl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=El.distanceTo(Tl);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;od.copy(i).invert(),lo.copy(e.ray).applyMatrix4(od);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let m=h,p=g-1;m<p;m+=c){const _=u.getX(m),y=u.getX(m+1),v=La(this,e,lo,l,_,y);v&&t.push(v)}if(this.isLineLoop){const m=u.getX(g-1),p=u.getX(h),_=La(this,e,lo,l,m,p);_&&t.push(_)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let m=h,p=g-1;m<p;m+=c){const _=La(this,e,lo,l,m,m+1);_&&t.push(_)}if(this.isLineLoop){const m=La(this,e,lo,l,g-1,h);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function La(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(El.fromBufferAttribute(o,i),Tl.fromBufferAttribute(o,s),t.distanceSqToSegment(El,Tl,Rc,ad)>n)return;Rc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Rc);if(!(l<e.near||l>e.far))return{distance:l,point:ad.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const ld=new V,cd=new V;class aS extends Du{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ld.fromBufferAttribute(t,i),cd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ld.distanceTo(cd);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xp extends to{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ud=new Et,Iu=new Wl,Da=new ra,Ia=new V;class lS extends Xt{constructor(e=new Rn,t=new Xp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=s,e.ray.intersectsSphere(Da)===!1)return;ud.copy(i).invert(),Iu.copy(e.ray).applyMatrix4(ud);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,m=h;g<m;g++){const p=c.getX(g);Ia.fromBufferAttribute(f,p),fd(Ia,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,m=h;g<m;g++)Ia.fromBufferAttribute(f,g),fd(Ia,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fd(r,e,t,n,i,s,o){const a=Iu.distanceSqToPoint(r);if(a<t){const l=new V;Iu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Cc extends tn{constructor(e,t,n,i,s,o,a,l,c,u,f,d){super(null,o,a,l,c,u,i,s,f,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class cS extends tn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Af extends Rn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new V,d=new V,h=[],g=[],m=[],p=[];for(let _=0;_<=n;_++){const y=[],v=_/n;let x=0;_===0&&o===0?x=.5/t:_===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const b=w/t;f.x=-e*Math.cos(i+b*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(i+b*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),m.push(d.x,d.y,d.z),p.push(b+x,1-v),y.push(c++)}u.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const v=u[_][y+1],x=u[_][y],w=u[_+1][y],b=u[_+1][y+1];(_!==0||o>0)&&h.push(v,x,b),(_!==n-1||l<Math.PI)&&h.push(x,w,b)}this.setIndex(h),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(m,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const hd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class uS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const fS=new uS;class wf{constructor(e){this.manager=e!==void 0?e:fS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wf.DEFAULT_MATERIAL_NAME="__DEFAULT";class hS extends wf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Xo("img");function l(){u(),hd.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class dS extends wf{constructor(e){super(e)}load(e,t,n,i){const s=new tn,o=new hS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class pS extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Pc=new Et,dd=new V,pd=new V;class mS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _S extends mS{constructor(){super(new Bp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gS extends pS{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new _S}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rf="\\[\\]\\.:\\/",xS=new RegExp("["+Rf+"]","g"),Cf="[^"+Rf+"]",vS="[^"+Rf.replace("\\.","")+"]",MS=/((?:WC+[\/:])*)/.source.replace("WC",Cf),yS=/(WCOD+)?/.source.replace("WCOD",vS),SS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cf),ES=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cf),TS=new RegExp("^"+MS+yS+SS+ES+"$"),bS=["material","materials","bones","map"];class AS{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xS,"")}static parseTrackName(e){const t=TS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);bS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=AS;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pf{constructor(e){this.value=e}clone(){return new Pf(this.value.clone===void 0?this.value:this.value.clone())}}const md=new Et;class wS{constructor(e,t,n=0,i=1/0){this.ray=new Wl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,n=[]){return Uu(e,this,n,t),n.sort(_d),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Uu(e[i],this,n,t);return n.sort(_d),n}}function _d(r,e){return r.distance-e.distance}function Uu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Uu(s[o],e,t,!0)}}const gd=new V,Ua=new V,xd=new V;class RS extends Xt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Rn;i.setAttribute("position",new ln([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new bf({fog:!1,toneMapped:!1});this.lightPlane=new Du(i,s),this.add(this.lightPlane),i=new Rn,i.setAttribute("position",new ln([0,0,0,0,0,1],3)),this.targetLine=new Du(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),gd.setFromMatrixPosition(this.light.matrixWorld),Ua.setFromMatrixPosition(this.light.target.matrixWorld),xd.subVectors(Ua,gd),this.lightPlane.lookAt(Ua),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ua),this.targetLine.scale.z=xd.length()}}class CS extends aS{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Rn;i.setAttribute("position",new ln(t,3)),i.setAttribute("color",new ln(n,3));const s=new bf({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new rt,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);let co,Lc,gs,Na;function Dc(r,e=1/0,t=null){Lc||(Lc=new oa(2,2,1,1)),gs||(gs=new Gi({uniforms:{blitTexture:new Pf(r)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = sRGBTransferOETF( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),gs.uniforms.blitTexture.value=r,gs.defines.IS_SRGB=r.colorSpace==$n,gs.needsUpdate=!0,Na||(Na=new ei(Lc,gs),Na.frustumCulled=!1);const n=new Fn,i=new Sl;i.add(Na),t===null&&(t=co=new Wp({antialias:!1}));const s=Math.min(r.image.width,e),o=Math.min(r.image.height,e);t.setSize(s,o),t.clear(),t.render(i,n);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=s,a.height=o,l.drawImage(t.domElement,0,0,s,o);const c=new cS(a);return c.minFilter=r.minFilter,c.magFilter=r.magFilter,c.wrapS=r.wrapS,c.wrapT=r.wrapT,c.name=r.name,co&&(co.forceContextLoss(),co.dispose(),co=null),c}const vd={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Lf{constructor(){this.pluginCallbacks=[],this.register(function(e){return new zS(e)}),this.register(function(e){return new kS(e)}),this.register(function(e){return new WS(e)}),this.register(function(e){return new XS(e)}),this.register(function(e){return new YS(e)}),this.register(function(e){return new qS(e)}),this.register(function(e){return new VS(e)}),this.register(function(e){return new HS(e)}),this.register(function(e){return new GS(e)}),this.register(function(e){return new $S(e)}),this.register(function(e){return new KS(e)}),this.register(function(e){return new jS(e)}),this.register(function(e){return new ZS(e)}),this.register(function(e){return new JS(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){const s=new BS,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](s));s.setPlugins(o),s.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,i,s,t)})}}const Je={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Ic="KHR_mesh_quantization",Vn={};Vn[kn]=Je.NEAREST;Vn[gp]=Je.NEAREST_MIPMAP_NEAREST;Vn[mo]=Je.NEAREST_MIPMAP_LINEAR;Vn[Jn]=Je.LINEAR;Vn[Za]=Je.LINEAR_MIPMAP_NEAREST;Vn[nr]=Je.LINEAR_MIPMAP_LINEAR;Vn[tr]=Je.CLAMP_TO_EDGE;Vn[_l]=Je.REPEAT;Vn[gl]=Je.MIRRORED_REPEAT;const Md={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},PS=new rt,yd=12,LS=1179937895,DS=2,Sd=8,IS=1313821514,US=5130562;function go(r,e){return r.length===e.length&&r.every(function(t,n){return t===e[n]})}function NS(r){return new TextEncoder().encode(r).buffer}function OS(r){return go(r.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function FS(r,e,t){const n={min:new Array(r.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(r.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let s=0;s<r.itemSize;s++){let o;r.itemSize>4?o=r.array[i*r.itemSize+s]:(s===0?o=r.getX(i):s===1?o=r.getY(i):s===2?o=r.getZ(i):s===3&&(o=r.getW(i)),r.normalized===!0&&(o=Pu.normalize(o,r.array))),n.min[s]=Math.min(n.min[s],o),n.max[s]=Math.max(n.max[s],o)}return n}function Yp(r){return Math.ceil(r/4)*4}function Uc(r,e=0){const t=Yp(r.byteLength);if(t!==r.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(r)),e!==0)for(let i=r.byteLength;i<t;i++)n[i]=e;return n.buffer}return r}function Ed(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Td(r,e){if(r.toBlob!==void 0)return new Promise(n=>r.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),r.convertToBlob({type:e,quality:t})}class BS{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Vl}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,s=i.buffers,o=i.json;n=i.options;const a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(s,{type:"application/octet-stream"}),u=Object.keys(a),f=Object.keys(l);if(u.length>0&&(o.extensionsUsed=u),f.length>0&&(o.extensionsRequired=f),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const h=Uc(d.result),g=new DataView(new ArrayBuffer(Sd));g.setUint32(0,h.byteLength,!0),g.setUint32(4,US,!0);const m=Uc(NS(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Sd));p.setUint32(0,m.byteLength,!0),p.setUint32(4,IS,!0);const _=new ArrayBuffer(yd),y=new DataView(_);y.setUint32(0,LS,!0),y.setUint32(4,DS,!0);const v=yd+p.byteLength+m.byteLength+g.byteLength+h.byteLength;y.setUint32(8,v,!0);const x=new Blob([_,p,m,g,h],{type:"application/octet-stream"}),w=new FileReader;w.readAsArrayBuffer(x),w.onloadend=function(){t(w.result)}}}else if(o.buffers&&o.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const h=d.result;o.buffers[0].uri=h,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&s.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in s.gltfExtensions)t.extensions[o]=s.gltfExtensions[o],i[o]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new V;for(let i=0,s=e.count;i<s;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new V;for(let s=0,o=n.count;s<o;s++)i.fromBufferAttribute(n,s),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(s,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(h){return h.colorSpace===$n?function(m){return m<.04045?m*.0773993808:Math.pow(m*.9478672986+.0521327014,2.4)}:function(m){return m}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof Cc&&(e=Dc(e)),t instanceof Cc&&(t=Dc(t));const i=e?e.image:null,s=t?t.image:null,o=Math.max(i?i.width:0,s?s.width:0),a=Math.max(i?i.height:0,s?s.height:0),l=Ed();l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const u=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);const h=n(e),g=c.getImageData(0,0,o,a).data;for(let m=2;m<g.length;m+=4)u.data[m]=h(g[m]/256)*256}if(s){c.drawImage(s,0,0,o,a);const h=n(t),g=c.getImageData(0,0,o,a).data;for(let m=1;m<g.length;m+=4)u.data[m]=h(g[m]/256)*256}c.putImageData(u,0,0);const d=(e||t).clone();return d.source=new yf(l),d.colorSpace=Ii,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),d}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,s){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case Je.BYTE:case Je.UNSIGNED_BYTE:a=1;break;case Je.SHORT:case Je.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;s===Je.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Yp(i*l),u=new DataView(new ArrayBuffer(c));let f=0;for(let g=n;g<n+i;g++){for(let m=0;m<e.itemSize;m++){let p;e.itemSize>4?p=e.array[g*e.itemSize+m]:(m===0?p=e.getX(g):m===1?p=e.getY(g):m===2?p=e.getZ(g):m===3&&(p=e.getW(g)),e.normalized===!0&&(p=Pu.normalize(p,e.array))),t===Je.FLOAT?u.setFloat32(f,p,!0):t===Je.INT?u.setInt32(f,p,!0):t===Je.UNSIGNED_INT?u.setUint32(f,p,!0):t===Je.SHORT?u.setInt16(f,p,!0):t===Je.UNSIGNED_SHORT?u.setUint16(f,p,!0):t===Je.BYTE?u.setInt8(f,p):t===Je.UNSIGNED_BYTE&&u.setUint8(f,p),f+=a}f%l!==0&&(f+=l-f%l)}const d={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:c};return s!==void 0&&(d.target=s),s===Je.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){const o=Uc(s.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){const s=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=Je.FLOAT;else if(e.array.constructor===Int32Array)a=Je.INT;else if(e.array.constructor===Uint32Array)a=Je.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=Je.SHORT;else if(e.array.constructor===Uint16Array)a=Je.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=Je.BYTE;else if(e.array.constructor===Uint8Array)a=Je.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const l=FS(e,n,i);let c;t!==void 0&&(c=e===t.index?Je.ELEMENT_ARRAY_BUFFER:Je.ARRAY_BUFFER);const u=this.processBufferView(e,a,n,i,c),f={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(f.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(f)-1}processImage(e,t,n,i="image/png"){if(e!==null){const s=this,o=s.cache,a=s.json,l=s.options,c=s.pending;o.images.has(e)||o.images.set(e,{});const u=o.images.get(e),f=i+":flipY/"+n.toString();if(u[f]!==void 0)return u[f];a.images||(a.images=[]);const d={mimeType:i},h=Ed();h.width=Math.min(e.width,l.maxTextureSize),h.height=Math.min(e.height,l.maxTextureSize);const g=h.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,h.height),g.scale(1,-1)),e.data!==void 0){t!==Qn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const p=new Uint8ClampedArray(e.height*e.width*4);for(let _=0;_<p.length;_+=4)p[_+0]=e.data[_+0],p[_+1]=e.data[_+1],p[_+2]=e.data[_+2],p[_+3]=e.data[_+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,h.width,h.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(Td(h,i).then(p=>s.processBufferViewImage(p)).then(p=>{d.bufferView=p})):h.toDataURL!==void 0?d.uri=h.toDataURL(i):c.push(Td(h,i).then(p=>new FileReader().readAsDataURL(p)).then(p=>{d.uri=p}));const m=a.images.push(d)-1;return u[f]=m,m}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Vn[e.magFilter],minFilter:Vn[e.minFilter],wrapS:Vn[e.wrapS],wrapT:Vn[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const n=this.options,i=this.cache,s=this.json;if(i.textures.has(e))return i.textures.get(e);s.textures||(s.textures=[]),e instanceof Cc&&(e=Dc(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),this._invokeAll(function(c){c.writeTexture&&c.writeTexture(e,a)});const l=s.textures.push(a)-1;return i.textures.set(e,l),l}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(go(s,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const a=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(a),channel:a.channel};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const a={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){const a={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===gi&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(a){a.writeMaterial&&a.writeMaterial(e,i)});const o=n.materials.push(i)-1;return t.materials.set(e,o),o}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,w=e.material.length;x<w;x++)i.push(e.material[x].uuid);else i.push(e.material.uuid);const s=i.join(":");if(t.meshes.has(s))return t.meshes.get(s);const o=e.geometry;let a;e.isLineSegments?a=Je.LINES:e.isLineLoop?a=Je.LINE_LOOP:e.isLine?a=Je.LINE_STRIP:e.isPoints?a=Je.POINTS:a=e.material.wireframe?Je.LINES:Je.TRIANGLES;const l={},c={},u=[],f=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},h=o.getAttribute("normal");h!==void 0&&!this.isNormalizedNormalAttribute(h)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(h)));let g=null;for(let x in o.attributes){if(x.slice(0,5)==="morph")continue;const w=o.attributes[x];if(x=d[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),t.attributes.has(this.getUID(w))){c[x]=t.attributes.get(this.getUID(w));continue}g=null;const T=w.array;x==="JOINTS_0"&&!(T instanceof Uint16Array)&&!(T instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Wt(new Uint16Array(T),w.itemSize,w.normalized));const R=this.processAccessor(g||w,o);R!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,w),c[x]=R,t.attributes.set(this.getUID(w),R))}if(h!==void 0&&o.setAttribute("normal",h),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],w=[],b={};if(e.morphTargetDictionary!==void 0)for(const T in e.morphTargetDictionary)b[e.morphTargetDictionary[T]]=T;for(let T=0;T<e.morphTargetInfluences.length;++T){const R={};let S=!1;for(const M in o.morphAttributes){if(M!=="position"&&M!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}const C=o.morphAttributes[M][T],I=M.toUpperCase(),O=o.attributes[M];if(t.attributes.has(this.getUID(C,!0))){R[I]=t.attributes.get(this.getUID(C,!0));continue}const z=C.clone();if(!o.morphTargetsRelative)for(let H=0,B=C.count;H<B;H++)for(let Y=0;Y<C.itemSize;Y++)Y===0&&z.setX(H,C.getX(H)-O.getX(H)),Y===1&&z.setY(H,C.getY(H)-O.getY(H)),Y===2&&z.setZ(H,C.getZ(H)-O.getZ(H)),Y===3&&z.setW(H,C.getW(H)-O.getW(H));R[I]=this.processAccessor(z,o),t.attributes.set(this.getUID(O,!0),R[I])}f.push(R),x.push(e.morphTargetInfluences[T]),e.morphTargetDictionary!==void 0&&w.push(b[T])}l.weights=x,w.length>0&&(l.extras={},l.extras.targetNames=w)}const m=Array.isArray(e.material);if(m&&o.groups.length===0)return null;let p=!1;if(m&&o.index===null){const x=[];for(let w=0,b=o.attributes.position.count;w<b;w++)x[w]=w;o.setIndex(x),p=!0}const _=m?e.material:[e.material],y=m?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,w=y.length;x<w;x++){const b={mode:a,attributes:c};if(this.serializeUserData(o,b),f.length>0&&(b.targets=f),o.index!==null){let R=this.getUID(o.index);(y[x].start!==void 0||y[x].count!==void 0)&&(R+=":"+y[x].start+":"+y[x].count),t.attributes.has(R)?b.indices=t.attributes.get(R):(b.indices=this.processAccessor(o.index,o,y[x].start,y[x].count),t.attributes.set(R,b.indices)),b.indices===null&&delete b.indices}const T=this.processMaterial(_[y[x].materialIndex]);T!==null&&(b.material=T),u.push(b)}p===!0&&o.setIndex(null),l.primitives=u,n.meshes||(n.meshes=[]),this._invokeAll(function(x){x.writeMesh&&x.writeMesh(e,l)});const v=n.meshes.push(l)-1;return t.meshes.set(s,v),v}detectMeshQuantization(e,t){if(this.extensionsUsed[Ic])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];vd[i]&&vd[i].includes(n)&&(this.extensionsUsed[Ic]=!0,this.extensionsRequired[Ic]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Pu.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Lf.Utils.mergeMorphTargetTracks(e.clone(),t);const s=e.tracks,o=[],a=[];for(let l=0;l<s.length;++l){const c=s[l],u=ut.parseTrackName(c.name);let f=ut.findNode(t,u.nodeName);const d=Md[u.propertyName];if(u.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(u.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const h=1;let g=c.values.length/c.times.length;d===Md.morphTargetInfluences&&(g/=f.morphTargetInfluences.length);let m;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",g/=3):c.getInterpolation()===Sg?m="STEP":m="LINEAR",a.push({input:this.processAccessor(new Wt(c.times,h)),output:this.processAccessor(new Wt(c.values,g)),interpolation:m}),o.push({sampler:a.length-1,target:{node:i.get(f),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],s=e.skeleton;if(s===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(s.bones.length*16),c=new Et;for(let f=0;f<s.bones.length;++f)a.push(n.get(s.bones[f])),c.copy(s.boneInverses[f]),c.multiply(e.bindMatrix).toArray(l,f*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Wt(l,16)),joints:a,skeleton:n.get(o)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const s={};if(n.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();go(a,[0,0,0,1])||(s.rotation=a),go(l,[0,0,0])||(s.translation=l),go(c,[1,1,1])||(s.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),OS(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const a=this.processMesh(e);a!==null&&(s.mesh=a)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const u=e.children[l];if(u.visible||n.onlyVisible===!1){const f=this.processNode(u);f!==null&&a.push(f)}}a.length>0&&(s.children=a)}this._invokeAll(function(a){a.writeNode&&a.writeNode(e,s)});const o=t.nodes.push(s)-1;return i.set(e,o),o}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const s=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&s.push(c)}}s.length>0&&(i.nodes=s),this.serializeUserData(e,i)}processObjects(e){const t=new Sl;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof Sl?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class zS{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,s=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},s[this.name]=!0);const a=i.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class kS{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class VS{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),s.clearcoatTexture=o}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),s.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class HS{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,s={};s.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class GS{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),s.iridescenceTexture=o}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class WS{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){const o={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),s.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class XS{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){const o={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),s.thicknessTexture=o}s.attenuationDistance=e.attenuationDistance,s.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class YS{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,s={};s.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class qS{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(PS)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,s={};if(e.specularIntensityMap){const o={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),s.specularTexture=o}if(e.specularColorMap){const o={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),s.specularColorTexture=o}s.specularFactor=e.specularIntensity,s.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class $S{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,s={};if(e.sheenRoughnessMap){const o={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),s.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),s.sheenColorTexture=o}s.sheenRoughnessFactor=e.sheenRoughness,s.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class KS{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,s={};if(e.anisotropyMap){const o={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),s.anisotropyTexture=o}s.anisotropyStrength=e.anisotropy,s.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class jS{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,s={};s.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class ZS{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,s={};if(e.bumpMap){const o={index:n.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),s.bumpTexture=o}s.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=s,i[this.name]=!0}}class JS{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,s=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),l=new Et,c=new V,u=new eo,f=new V;for(let h=0;h<i.count;h++)i.getMatrixAt(h,l),l.decompose(c,u,f),c.toArray(s,h*3),u.toArray(o,h*4),f.toArray(a,h*3);const d={TRANSLATION:n.processAccessor(new Wt(s,3)),ROTATION:n.processAccessor(new Wt(o,4)),SCALE:n.processAccessor(new Wt(a,3))};i.instanceColor&&(d._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Lf.Utils={insertKeyframe:function(r,e){const n=r.getValueSize(),i=new r.TimeBufferType(r.times.length+1),s=new r.ValueBufferType(r.values.length+n),o=r.createInterpolant(new r.ValueBufferType(n));let a;if(r.times.length===0){i[0]=e;for(let l=0;l<n;l++)s[l]=0;a=0}else if(e<r.times[0]){if(Math.abs(r.times[0]-e)<.001)return 0;i[0]=e,i.set(r.times,1),s.set(o.evaluate(e),0),s.set(r.values,n),a=0}else if(e>r.times[r.times.length-1]){if(Math.abs(r.times[r.times.length-1]-e)<.001)return r.times.length-1;i[i.length-1]=e,i.set(r.times,0),s.set(r.values,0),s.set(o.evaluate(e),r.values.length),a=i.length-1}else for(let l=0;l<r.times.length;l++){if(Math.abs(r.times[l]-e)<.001)return l;if(r.times[l]<e&&r.times[l+1]>e){i.set(r.times.slice(0,l+1),0),i[l+1]=e,i.set(r.times.slice(l+1),l+2),s.set(r.values.slice(0,(l+1)*n),0),s.set(o.evaluate(e),(l+1)*n),s.set(r.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return r.times=i,r.values=s,a},mergeMorphTargetTracks:function(r,e){const t=[],n={},i=r.tracks;for(let s=0;s<i.length;++s){let o=i[s];const a=ut.parseTrackName(o.name),l=ut.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Eg)}const c=l.morphTargetInfluences.length,u=l.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let f;if(n[l.uuid]===void 0){f=o.clone();const h=new f.ValueBufferType(c*f.times.length);for(let g=0;g<f.times.length;g++)h[g*c+u]=f.values[g];f.name=(a.nodeName||"")+".morphTargetInfluences",f.values=h,n[l.uuid]=f,t.push(f);continue}const d=o.createInterpolant(new o.ValueBufferType(1));f=n[l.uuid];for(let h=0;h<f.times.length;h++)f.values[h*c+u]=d.evaluate(f.times[h]);for(let h=0;h<o.times.length;h++){const g=this.insertKeyframe(f,o.times[h]);f.values[g*c+u]=o.values[h]}}return r.tracks=t,r}};function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ys={duration:.5,overwrite:!1,delay:0},Df,cn,wt,ti=1e8,St=1/ti,Nu=Math.PI*2,QS=Nu/4,eE=0,$p=Math.sqrt,tE=Math.cos,nE=Math.sin,Jt=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},Wi=function(e){return typeof e=="number"},If=function(e){return typeof e>"u"},Ti=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},Uf=function(){return typeof window<"u"},Oa=function(e){return Dt(e)||Jt(e)},Kp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,Ou=/(?:-?\.?\d|\.)+/gi,jp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zp=/[+-]=-?[.\d]+/,Jp=/[^,'"\[\]\s]+/gi,iE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,pi,Fu,Nf,Wn={},bl={},Qp,em=function(e){return(bl=qr(e,Wn))&&Cn},Of=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yo=function(e,t){return!t&&console.warn(e)},tm=function(e,t){return e&&(Wn[e]=t)&&bl&&(bl[e]=t)||Wn},qo=function(){return 0},rE={suppressEvents:!0,isStart:!0,kill:!1},rl={suppressEvents:!0,kill:!1},sE={suppressEvents:!0},Ff={},ur=[],Bu={},nm,On={},Oc={},bd=30,sl=[],Bf="",zf=function(e){var t=e[0],n,i;if(Ti(t)||Dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=sl.length;i--&&!sl[i].targetTest(t););n=sl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Am(e[i],n)))||e.splice(i,1);return e},Or=function(e){return e._gsap||zf(ni(e))[0]._gsap},im=function(e,t,n){return(n=e[t])&&Dt(n)?e[t]():If(n)&&e.getAttribute&&e.getAttribute(t)||n},bn=function(e,t){return(e=e.split(",")).forEach(t)||e},It=function(e){return Math.round(e*1e5)/1e5||0},Zt=function(e){return Math.round(e*1e7)/1e7||0},Is=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},oE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Al=function(){var e=ur.length,t=ur.slice(0),n,i;for(Bu={},ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rm=function(e,t,n,i){ur.length&&!cn&&Al(),e.render(t,n,cn&&t<0&&(e._initted||e._startAt)),ur.length&&!cn&&Al()},sm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jp).length<2?t:Jt(e)?e.trim():e},om=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},aE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},qr=function(e,t){for(var n in t)e[n]=t[n];return e},Ad=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ti(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},wl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Po=function(e){var t=e.parent||Pt,n=e.keyframes?aE(un(e.keyframes)):si;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},lE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},am=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ql=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},pr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},cE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zu=function(e,t,n,i){return e._startAt&&(cn?e._startAt.revert(rl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},uE=function r(e){return!e||e._ts&&r(e.parent)},wd=function(e){return e._repeat?qs(e._tTime,e=e.duration()+e._rDelay)*e:0},qs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Rl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$l=function(e){return e._end=Zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},Kl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$l(e),n._dirty||Fr(n,e)),e},lm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Rl(e.rawTime(),t),(!t._dur||aa(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),Fr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},vi=function(e,t,n,i){return t.parent&&pr(t),t._start=Zt((Wi(n)?n:n||e!==Pt?qn(e,n,t):e._time)+t._delay),t._end=Zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),am(e,t,"_first","_last",e._sort?"_start":0),ku(t)||(e._recent=t),i||lm(e,t),e._ts<0&&Kl(e,e._tTime),e},cm=function(e,t){return(Wn.ScrollTrigger||Of("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},um=function(e,t,n,i,s){if(Vf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&nm!==Bn.frame)return ur.push(e),e._lazy=[s,i],1},fE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ku=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hE=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&fE(e)&&!(!e._initted&&ku(e))||(e._ts<0||e._dp._ts<0)&&!ku(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=aa(0,e._tDur,t),u=qs(l,a),e._yoyo&&u&1&&(o=1-o),u!==qs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||cn||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&um(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&zu(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&pr(e,1),!n&&!cn&&(Hn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$s=function(e,t,n,i){var s=e._repeat,o=Zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Kl(e,e._tTime=e._tDur*a),e.parent&&$l(e),n||Fr(e.parent,e),e},Rd=function(e){return e instanceof vn?Fr(e):$s(e,e._dur)},pE={_start:0,endTime:qo,totalDuration:qo},qn=function r(e,t,n){var i=e.labels,s=e._recent||pE,o=e.duration()>=ti?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Lo=function(e,t,n){var i=Wi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Bt(t[0],o,t[s+1])},xr=function(e,t){return e||e===0?t(e):t},aa=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!Jt(e)||!(t=iE.exec(e))?"":t[1]},mE=function(e,t,n){return xr(n,function(i){return aa(e,t,i)})},Vu=[].slice,fm=function(e,t){return e&&Ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ti(e[0]))&&!e.nodeType&&e!==pi},_E=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Jt(i)&&!t||fm(i,1)?(s=n).push.apply(s,ni(i)):n.push(i)})||n},ni=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):Jt(e)&&!n&&(Fu||!Ks())?Vu.call((t||Nf).querySelectorAll(e),0):un(e)?_E(e,n):fm(e)?Vu.call(e,0):e?[e]:[]},Hu=function(e){return e=ni(e)[0]||Yo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ni(t,n.querySelectorAll?n:n===e?Yo("Invalid scope")||Nf.createElement("div"):e)}},hm=function(e){return e.sort(function(){return .5-Math.random()})},dm=function(e){if(Dt(e))return e;var t=Ti(e)?e:{each:e},n=Br(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Jt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(d,h,g){var m=(g||t).length,p=o[m],_,y,v,x,w,b,T,R,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,ti])[1],!S){for(T=-ti;T<(T=g[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(p=o[m]=[],_=l?Math.min(S,m)*u-.5:i%S,y=S===ti?0:l?m*f/S-.5:i/S|0,T=0,R=ti,b=0;b<m;b++)v=b%S-_,x=y-(b/S|0),p[b]=w=c?Math.abs(c==="y"?x:v):$p(v*v+x*x),w>T&&(T=w),w<R&&(R=w);i==="random"&&hm(p),p.max=T-R,p.min=R,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:c?c==="y"?m/S:S:Math.max(S,m/S))||0)*(i==="edges"?-1:1),p.b=m<0?s-m:s,p.u=an(t.amount||t.each)||0,n=n&&m<0?Em(n):n}return m=(p[d]-p.min)/p.max||0,Zt(p.b+(n?n(m):m)*p.v)+p.u}},Gu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wi(n)?0:an(n))}},pm=function(e,t){var n=un(e),i,s;return!n&&Ti(e)&&(i=n=e.radius||ti,e.values?(e=ni(e.values),(s=!Wi(e[0]))&&(i*=i)):e=Gu(e.increment)),xr(t,n?Dt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ti,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Wi(o)?u:u+an(o)}:Gu(e))},mm=function(e,t,n,i){return xr(un(e)?!t:n===!0?!!(n=0):!i,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},gE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},xE=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},vE=function(e,t,n){return gm(e,t,0,1,n)},_m=function(e,t,n){return xr(n,function(i){return e[~~t(i)]})},ME=function r(e,t,n){var i=t-e;return un(e)?_m(e,r(0,e.length),t):xr(n,function(s){return(i+(s-e)%i)%i+e})},yE=function r(e,t,n){var i=t-e,s=i*2;return un(e)?_m(e,r(0,e.length-1),t):xr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},$o=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Jp:Ou),n+=e.substr(t,i-t)+mm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},gm=function(e,t,n,i,s){var o=t-e,a=i-n;return xr(s,function(l){return n+((l-e)/o*a||0)})},SE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Jt(e),a={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var m=Math.min(d,~~g);return u[m](g-m)},n=t}else i||(e=qr(un(e)?[]:{},e));if(!u){for(l in t)kf.call(a,e,l,"get",t[l]);s=function(g){return Wf(g,a)||(o?e.p:e)}}}return xr(n,s)},Cd=function(e,t,n){var i=e.labels,s=ti,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Hn=function(e,t,n){var i=e.vars,s=i[t],o=wt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ur.length&&Al(),a&&(wt=a),u=l?s.apply(c,l):s.call(c),wt=o,u},xo=function(e){return pr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&Hn(e,"onInterrupt"),e},ws,xm=[],vm=function(e){if(e)if(e=!e.name&&e.default||e,Uf()||e.headless){var t=e.name,n=Dt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qo,render:Wf,add:kf,kill:BE,modifier:FE,rawVars:0},o={targetTest:0,get:0,getSetter:Gf,aliases:{},register:0};if(Ks(),e!==i){if(On[t])return;si(i,si(wl(e,s),o)),qr(i.prototype,qr(s,wl(e,o))),On[i.prop=t]=i,e.targetTest&&(sl.push(i),Ff[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}tm(t,i),e.register&&e.register(Cn,i,An)}else xm.push(e)},vt=255,vo={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},Fc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vt+.5|0},Mm=function(e,t,n){var i=e?Wi(e)?[e>>16,e>>8&vt,e&vt]:0:vo.black,s,o,a,l,c,u,f,d,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vo[e])i=vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&vt,i&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ou),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Fc(l+1/3,s,o),i[1]=Fc(l,s,o),i[2]=Fc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(jp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ou)||vo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/vt,o=i[1]/vt,a=i[2]/vt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ym=function(e){var t=[],n=[],i=-1;return e.split(fr).forEach(function(s){var o=s.match(As)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Pd=function(e,t,n){var i="",s=(e+i).match(fr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Mm(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=ym(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(fr,"1").split(As),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(fr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},fr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),EE=/hsl[a]?\(/,Sm=function(e){var t=e.join(" "),n;if(fr.lastIndex=0,fr.test(t))return n=EE.test(t),e[1]=Pd(e[1],n),e[0]=Pd(e[0],n,ym(e[1])),!0},Ko,Bn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,d,h,g=function m(p){var _=r()-i,y=p===!0,v,x,w,b;if((_>e||_<0)&&(n+=_-t),i+=_,w=i-n,v=w-o,(v>0||y)&&(b=++f.frame,d=w-f.time*1e3,f.time=w=w/1e3,o+=v+(v>=s?4:s-v),x=1),y||(l=c(m)),x)for(h=0;h<a.length;h++)a[h](w,d,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Qp&&(!Fu&&Uf()&&(pi=Fu=window,Nf=pi.document||{},Wn.gsap=Cn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Cn.version),em(bl||pi.GreenSockGlobals||!pi.gsap&&pi||{}),xm.forEach(vm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Ko=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ko=0,c=qo},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,_,y){var v=_?function(x,w,b,T){p(x,w,b,T),f.remove(v)}:p;return f.remove(p),a[y?"unshift":"push"](v),Ks(),v},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&h>=_&&h--},_listeners:a},f}(),Ks=function(){return!Ko&&Bn.wake()},st={},TE=/^[\d.\-M][\d.\-,\s]/,bE=/["']/g,AE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(bE,"").trim():+c,i=l.substr(a+1).trim();return t},wE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},RE=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[AE(t[1])]:wE(e).split(",").map(sm)):st._CE&&TE.test(e)?st._CE("",e):n},Em=function(e){return function(t){return 1-e(1-t)}},Tm=function r(e,t){for(var n=e._first,i;n;)n instanceof vn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Br=function(e,t){return e&&(Dt(e)?e:st[e]||RE(e))||t},Jr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return bn(e,function(a){st[a]=Wn[a]=s,st[o=a.toLowerCase()]=n;for(var l in s)st[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=st[a+"."+l]=s[l]}),s},bm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Nu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*nE((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:bm(a);return s=Nu/s,l.config=function(c,u){return r(e,c,u)},l},zc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:bm(n);return i.config=function(s){return r(e,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Jr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;Jr("Elastic",Bc("in"),Bc("out"),Bc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Jr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Jr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Jr("Circ",function(r){return-($p(1-r*r)-1)});Jr("Sine",function(r){return r===1?1:-tE(r*QS)+1});Jr("Back",zc("in"),zc("out"),zc());st.SteppedEase=st.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((i*aa(0,o,a)|0)+s)*n}}};Ys.ease=st["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Bf+=r+","+r+"Params,"});var Am=function(e,t){this.id=eE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:im,this.set=t?t.getSetter:Gf},jo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$s(this,+t.duration,1,1),this.data=t.data,wt&&(this._ctx=wt,wt.data.push(this)),Ko||Bn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$s(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Kl(this,n),!s._dp||s.parent||lm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?qs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(aa(-Math.abs(this._delay),this._tDur,s),i!==!1),$l(this),cE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sE);var i=cn;return cn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qn(this,n),Tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-St)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Dt(n)?n:om,a=function(){var c=i.then;i.then=null,Dt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){xo(this)},r}();si(jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var vn=function(r){qp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Tn(n.sortChildren),Pt&&vi(n.parent||Pt,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&cm(Li(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Lo(0,arguments,this),this},t.from=function(i,s,o){return Lo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Lo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Po(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Bt(i,s,qn(this,o),1),this},t.call=function(i,s,o){return vi(this,Bt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Bt(i,o,qn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Po(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Po(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Zt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,m,p,_,y,v,x,w,b,T;if(this!==Pt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,v=this._ts,_=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=Zt(u%p),u===l?(m=this._repeat,d=c):(m=~~(u/p),m&&m===u/p&&(d=c,m--),d>c&&(d=c)),w=qs(this._tTime,p),!a&&this._tTime&&w!==m&&this._tTime-w*p-this._dur<=0&&(w=m),b&&m&1&&(d=c-d,T=1),m!==w&&!this._lock){var R=b&&w&1,S=R===(b&&m&1);if(m<w&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Zt(m*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Tm(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=dE(this,Zt(a),Zt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!m&&(Hn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-St);break}}h=g}else{h=this._last;for(var M=i<0?i:d;h;){if(g=h._prev,(h._act||M<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(M-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(M-h._start)*h._ts,s,o||cn&&(h._initted||h._startAt)),d!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=M?-St:St);break}}h=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-St)._zTime=d>=a?1:-1,this._ts))return this._start=x,$l(this),this.render(i,s,o);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&pr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Wi(s)||(s=qn(this,s,i)),!(i instanceof jo)){if(un(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Jt(i))return this.addLabel(i,s);if(Dt(i))i=Bt.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Bt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Dt(i)?this.killTweensOf(i):(ql(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Zt(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Bt.delayedCall(0,s||qo,o);return a.data="isPause",this._hasPause=1,vi(this,a,qn(this,i))},t.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&pr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ir!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ni(i),l=this._first,c=Wi(s),u;l;)l instanceof Bt?oE(l._targets,a)&&(c?(!ir||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=qn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Bt.to(o,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&$s(g,p,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,si({startAt:{time:qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Cd(this,qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Cd(this,qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Fr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ti,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;$s(o,o===Pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Pt._ts&&(rm(Pt,Rl(i,Pt)),nm=Bn.frame),Bn.frame>=bd){bd+=Gn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&Gn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e}(jo);si(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var CE=function(e,t,n,i,s,o,a){var l=new An(this._pt,e,t,0,1,Dm,null,s),c=0,u=0,f,d,h,g,m,p,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=$o(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),d=n.match(Nc)||[];f=Nc.exec(i);)g=f[0],m=i.substring(c,f.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:p,c:g.charAt(1)==="="?Is(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},c=Nc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Zp.test(i)||_)&&(l.e=0),this._pt=l,l},kf=function(e,t,n,i,s,o,a,l,c,u){Dt(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Dt(f)?c?e[t.indexOf("set")||!Dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Dt(f)?c?UE:Pm:Hf,g;if(Jt(i)&&(~i.indexOf("random(")&&(i=$o(i)),i.charAt(1)==="="&&(g=Is(d,i)+(an(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Wu)return!isNaN(d*i)&&i!==""?(g=new An(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?OE:Lm,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Of(t,i),CE.call(this,e,t,d,i,h,l||Gn.stringFilter,c))},PE=function(e,t,n,i,s){if(Dt(e)&&(e=Do(e,s,t,n,i)),!Ti(e)||e.style&&e.nodeType||un(e)||Kp(e))return Jt(e)?Do(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Do(e[a],s,t,n,i);return o},wm=function(e,t,n,i,s,o){var a,l,c,u;if(On[e]&&(a=new On[e]).init(s,a.rawVars?t[e]:PE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new An(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ws))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ir,Wu,Vf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=e._dur,m=e._startAt,p=e._targets,_=e.parent,y=_&&_.data==="nested"?_.vars.targets:p,v=e._overwrite==="auto"&&!Df,x=e.timeline,w,b,T,R,S,M,C,I,O,z,H,B,Y;if(x&&(!d||!s)&&(s="none"),e._ease=Br(s,Ys.ease),e._yEase=f?Em(Br(f===!0?s:f,Ys.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(I=p[0]?Or(p[0]).harness:0,B=I&&i[I.prop],w=wl(i,Ff),m&&(m._zTime<0&&m.progress(1),t<0&&u&&a&&!h?m.render(-1,!0):m.revert(u&&g?rl:rE),m._lazy=0),o){if(pr(e._startAt=Bt.set(p,si({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!m&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!a&&!h)&&e._startAt.revert(rl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!m){if(t&&(a=!1),T=si({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Tn(l),immediateRender:a,stagger:0,parent:_},w),B&&(T[I.prop]=B),pr(e._startAt=Bt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(rl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Tn(l)||l&&!g,b=0;b<p.length;b++){if(S=p[b],C=S._gsap||zf(p)[b]._gsap,e._ptLookup[b]=z={},Bu[C.id]&&ur.length&&Al(),H=y===p?b:y.indexOf(S),I&&(O=new I).init(S,B||w,e,H,y)!==!1&&(e._pt=R=new An(e._pt,S,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(G){z[G]=R}),O.priority&&(M=1)),!I||B)for(T in w)On[T]&&(O=wm(T,w,e,H,S,y))?O.priority&&(M=1):z[T]=R=kf.call(e,S,T,"get",w[T],H,y,0,i.stringFilter);e._op&&e._op[b]&&e.kill(S,e._op[b]),v&&e._pt&&(ir=e,Pt.killTweensOf(S,z,e.globalTime(t)),Y=!e.parent,ir=0),e._pt&&l&&(Bu[C.id]=1)}M&&Im(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&x.render(ti,!0,!0)},LE=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Wu=1,e.vars[t]="+=0",Vf(e,a),Wu=0,l?Yo(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=It(n)+an(f.e)),f.b&&(f.b=u.s+an(f.b))},DE=function(e,t){var n=e[0]?Or(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=qr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},IE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(un(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Do=function(e,t,n,i,s){return Dt(e)?e.call(t,n,i,s):Jt(e)&&~e.indexOf("random(")?$o(e):e},Rm=Bf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cm={};bn(Rm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Cm[r]=1});var Bt=function(r){qp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Po(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,m=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,y=i.parent||Pt,v=(un(n)||Kp(n)?Wi(n[0]):"length"in i)?[n]:ni(n),x,w,b,T,R,S,M,C;if(a._targets=v.length?zf(v):Yo("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||Oa(c)||Oa(u)){if(i=a.vars,x=a.timeline=new vn({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=Li(a),x._start=0,d||Oa(c)||Oa(u)){if(T=v.length,M=d&&dm(d),Ti(d))for(R in d)~Rm.indexOf(R)&&(C||(C={}),C[R]=d[R]);for(w=0;w<T;w++)b=wl(i,Cm),b.stagger=0,_&&(b.yoyoEase=_),C&&qr(b,C),S=v[w],b.duration=+Do(c,Li(a),w,S,v),b.delay=(+Do(u,Li(a),w,S,v)||0)-a._delay,!d&&T===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),x.to(S,b,M?M(w,S,v):0),x._ease=st.none;x.duration()?c=u=0:a.timeline=0}else if(g){Po(si(x.vars.defaults,{ease:"none"})),x._ease=Br(g.ease||i.ease||"none");var I=0,O,z,H;if(un(g))g.forEach(function(B){return x.to(v,B,">")}),x.duration();else{b={};for(R in g)R==="ease"||R==="easeEach"||IE(R,g[R],b,g.easeEach);for(R in b)for(O=b[R].sort(function(B,Y){return B.t-Y.t}),I=0,w=0;w<O.length;w++)z=O[w],H={ease:z.e,duration:(z.t-(w?O[w-1].t:0))/100*c},H[R]=z.v,x.to(v,H,I),I+=H.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return h===!0&&!Df&&(ir=Li(a),Pt.killTweensOf(v),ir=0),vi(y,Li(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Zt(y._time)&&Tn(f)&&uE(Li(a))&&y.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-u)||0)),p&&cm(Li(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-St&&!u?l:i<St?0:i,d,h,g,m,p,_,y,v,x;if(!c)hE(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=f,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+i,s,o);if(d=Zt(f%m),f===l?(g=this._repeat,d=c):(g=~~(f/m),g&&g===Zt(f/m)&&(d=c,g--),d>c&&(d=c)),_=this._yoyo&&g&1,_&&(x=this._yEase,d=c-d),p=qs(this._tTime,m),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&Tm(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render(Zt(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(um(this,u?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!s&&!g&&(Hn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&zu(this,i,s,o),Hn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&zu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&pr(this,1),!s&&!(u&&!a)&&(f||a||_)&&(Hn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ko||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Vf(this,c),u=this._ease(c/this._dur),LE(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Kl(this,0),this.parent||am(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ir&&ir.vars.overwrite!==!0)._first||xo(this),this.parent&&o!==this.timeline.totalDuration()&&$s(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ni(i):a,c=this._ptLookup,u=this._pt,f,d,h,g,m,p,_;if((!s||s==="all")&&lE(a,l))return s==="all"&&(this._pt=0),xo(this);for(f=this._op=this._op||[],s!=="all"&&(Jt(s)&&(m={},bn(s,function(y){return m[y]=1}),s=m),s=DE(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],s==="all"?(f[_]=s,g=d,h={}):(h=f[_]=f[_]||{},g=s);for(m in g)p=d&&d[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&ql(this,p,"_pt"),delete d[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&u&&xo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Lo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Pt.killTweensOf(i,s,o)},e}(jo);si(Bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){Bt[r]=function(){var e=new vn,t=Vu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Hf=function(e,t,n){return e[t]=n},Pm=function(e,t,n){return e[t](n)},UE=function(e,t,n,i){return e[t](i.fp,n)},NE=function(e,t,n){return e.setAttribute(t,n)},Gf=function(e,t){return Dt(e[t])?Pm:If(e[t])&&e.setAttribute?NE:Hf},Lm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},OE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Dm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Wf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},FE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},BE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ql(this,t,"_pt"):t.dep||(n=1),t=i;return!n},zE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Im=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},An=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Lm,this.d=l||this,this.set=c||Hf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=zE,this.m=n,this.mt=s,this.tween=i},r}();bn(Bf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ff[r]=1});Wn.TweenMax=Wn.TweenLite=Bt;Wn.TimelineLite=Wn.TimelineMax=vn;Pt=new vn({sortChildren:!1,defaults:Ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=Sm;var zr=[],ol={},kE=[],Ld=0,VE=0,kc=function(e){return(ol[e]||kE).map(function(t){return t()})},Xu=function(){var e=Date.now(),t=[];e-Ld>2&&(kc("matchMediaInit"),zr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),kc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ld=e,kc("matchMedia"))},Um=function(){function r(t,n){this.selector=n&&Hu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=VE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Dt(n)&&(s=i,i=n,n=Dt);var o=this,a=function(){var c=wt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Hu(s)),wt=o,f=i.apply(o,arguments),Dt(f)&&o._r.push(f),wt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Dt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=wt;wt=null,n(this),wt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Bt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Bt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=zr.length;o--;)zr[o].id===this.id&&zr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),HE=function(){function r(t){this.contexts=[],this.scope=t,wt&&wt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ti(n)||(n={matches:n});var o=new Um(0,s||this.scope),a=o.conditions={},l,c,u;wt&&!o.selector&&(o.selector=wt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(zr.indexOf(o)<0&&zr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Xu):l.addEventListener("change",Xu)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return vm(i)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=ni(e)[0]);var s=Or(e||{}).get,o=n?om:sm;return n==="native"&&(n=""),e&&(t?o((On[t]&&On[t].get||s)(e,t,n,i)):function(a,l,c){return o((On[a]&&On[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ni(e),e.length>1){var i=e.map(function(u){return Cn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=On[t],a=Or(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ws._pt=0,f.init(e,n?u+n:u,ws,0,[e]),f.render(1,f),ws._pt&&Wf(1,ws)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Cn.to(e,qr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Br(e.ease,Ys.ease)),Ad(Ys,e||{})},config:function(e){return Ad(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!On[a]&&!Wn[a]&&Yo(t+" effect requires "+a+" plugin.")}),Oc[t]=function(a,l,c){return n(ni(a),si(l||{},s),c)},o&&(vn.prototype[t]=function(a,l,c){return this.add(Oc[t](a,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){st[e]=Br(t)},parseEase:function(e,t){return arguments.length?Br(e,t):st},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),i,s;for(n.smoothChildTiming=Tn(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Bt&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(Pt,n,0),n},context:function(e,t){return e?new Um(e,t):wt},matchMedia:function(e){return new HE(e)},matchMediaRefresh:function(){return zr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xu()},addEventListener:function(e,t){var n=ol[e]||(ol[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ol[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ME,wrapYoyo:yE,distribute:dm,random:mm,snap:pm,normalize:vE,getUnit:an,clamp:mE,splitColor:Mm,toArray:ni,selector:Hu,mapRange:gm,pipe:gE,unitize:xE,interpolate:SE,shuffle:hm},install:em,effects:Oc,ticker:Bn,updateRoot:vn.updateRoot,plugins:On,globalTimeline:Pt,core:{PropTween:An,globals:tm,Tween:Bt,Timeline:vn,Animation:jo,getCache:Or,_removeLinkedListItem:ql,reverting:function(){return cn},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return Df=e}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Cl[r]=Bt[r]});Bn.add(vn.updateRoot);ws=Cl.to({},{duration:0});var GE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},WE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=GE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Vc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}WE(a,s)}}}},Cn=Cl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vc("roundProps",Gu),Vc("modifiers"),Vc("snap",pm))||Cl;Bt.version=vn.version=Cn.version="3.12.5";Qp=1;Uf()&&Ks();st.Power0;st.Power1;st.Power2;st.Power3;st.Power4;st.Linear;st.Quad;st.Cubic;st.Quart;st.Quint;st.Strong;st.Elastic;st.Back;st.SteppedEase;st.Bounce;st.Sine;st.Expo;st.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Dd,rr,Us,Xf,Ur,Id,Yf,XE=function(){return typeof window<"u"},Xi={},Cr=180/Math.PI,Ns=Math.PI/180,xs=Math.atan2,Ud=1e8,qf=/([A-Z])/g,YE=/(left|right|width|margin|padding|x)/i,qE=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$E=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Nm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Om=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ZE=function(e,t,n){return e.style[t]=n},JE=function(e,t,n){return e.style.setProperty(t,n)},QE=function(e,t,n){return e._gsap[t]=n},eT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},tT=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},nT=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Lt="transform",wn=Lt+"Origin",iT=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Xi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Di(i,a)}):this.tfm[e]=o.x?o[e]:Di(i,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return Mi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Lt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Lt}(s||t)&&this.props.push(e,t,s[e])},Fm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yf(),(!s||!s.isStart)&&!n[Lt]&&(Fm(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bm=function(e,t){var n={target:e,props:[],revert:rT,save:iT};return e._gsap||Cn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},zm,qu=function(e,t){var n=rr.createElementNS?rr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):rr.createElement(e);return n&&n.style?n:rr.createElement(e)},Si=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,js(t)||t,1)||""},Nd="O,Moz,ms,Ms,Webkit".split(","),js=function(e,t,n){var i=t||Ur,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Nd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Nd[o]:"")+e},$u=function(){XE()&&window.document&&(Dd=window,rr=Dd.document,Us=rr.documentElement,Ur=qu("div")||{style:{}},qu("div"),Lt=js(Lt),wn=Lt+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zm=!!js("perspective"),Yf=Cn.core.reverting,Xf=1)},Hc=function r(e){var t=qu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Us.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Us.removeChild(t),this.style.cssText=s,o},Od=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},km=function(e){var t;try{t=e.getBBox()}catch{t=Hc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Hc||(t=Hc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Od(e,["x","cx","x1"])||0,y:+Od(e,["y","cy","y1"])||0,width:0,height:0}:t},Vm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&km(e))},$r=function(e,t){if(t){var n=e.style,i;t in Xi&&t!==wn&&(t=Lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(qf,"-$1").toLowerCase())):n.removeAttribute(t)}},sr=function(e,t,n,i,s,o){var a=new An(e._pt,t,n,0,1,o?Om:Nm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Fd={deg:1,rad:1,turn:1},sT={grid:1,flex:1},mr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ur.style,l=YE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,m,p,_;if(i===o||!s||Fd[i]||Fd[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),_=e.getCTM&&Vm(e),(h||o==="%")&&(Xi[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],It(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===rr||!m.appendChild)&&(m=rr.body),p=m._gsap,p&&h&&p.width&&l&&p.time===Bn.time&&!p.uncache)return It(s/p.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[u],y?e.style[t]=y:$r(e,t)}else(h||o==="%")&&!sT[Si(m,"display")]&&(a.position=Si(e,"position")),m===e&&(a.position="static"),m.appendChild(Ur),g=Ur[u],m.removeChild(Ur),a.position="absolute";return l&&h&&(p=Or(m),p.time=Bn.time,p.width=m[u]),It(d?g*s/f:g&&s?f/g*s:0)},Di=function(e,t,n,i){var s;return Xf||$u(),t in Mi&&t!=="transform"&&(t=Mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xi[t]&&t!=="transform"?(s=Jo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ll(Si(e,wn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Pl[t]&&Pl[t](e,t,n)||Si(e,t)||im(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?mr(e,t,s,n)+n:s},oT=function(e,t,n,i){if(!n||n==="none"){var s=js(t,e,1),o=s&&Si(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Si(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,Dm),l=0,c=0,u,f,d,h,g,m,p,_,y,v,x,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(m=e.style[t],e.style[t]=i,i=Si(e,t)||i,m?e.style[t]=m:$r(e,t)),u=[n,i],Sm(u),n=u[0],i=u[1],d=n.match(As)||[],w=i.match(As)||[],w.length){for(;f=As.exec(i);)p=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(m=d[c++]||"")&&(h=parseFloat(m)||0,x=m.substr((h+"").length),p.charAt(1)==="="&&(p=Is(h,p)+x),_=parseFloat(p),v=p.substr((_+"").length),l=As.lastIndex-v.length,v||(v=v||Gn.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(h=mr(e,t,m,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:h,c:_-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Om:Nm;return Zp.test(i)&&(a.e=0),this._pt=a,a},Bd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Bd[n]||n,t[1]=Bd[i]||i,t.join(" ")},lT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Xi[a]&&(l=1,a=a==="transformOrigin"?wn:Lt),$r(n,a);l&&($r(n,Lt),o&&(o.svg&&n.removeAttribute("transform"),Jo(n,1),o.uncache=1,Fm(i)))}},Pl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,lT);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Zo=[1,0,0,1,0,0],Hm={},Gm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zd=function(e){var t=Si(e,Lt);return Gm(t)?Zo:t.substr(7).match(jp).map(It)},$f=function(e,t){var n=e._gsap||Or(e),i=e.style,s=zd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zo:s):(s===Zo&&!e.offsetParent&&e!==Us&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Us.appendChild(e)),s=zd(e),l?i.display=l:$r(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Us.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ku=function(e,t,n,i,s,o){var a=e._gsap,l=s||$f(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],m=l[2],p=l[3],_=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,w=parseFloat(v[1])||0,b,T,R,S;n?l!==Zo&&(T=h*p-g*m)&&(R=x*(p/T)+w*(-m/T)+(m*y-p*_)/T,S=x*(-g/T)+w*(h/T)-(h*y-g*_)/T,x=R,w=S):(b=km(e),x=b.x+(~v[0].indexOf("%")?x/100*b.width:x),w=b.y+(~(v[1]||v[0]).indexOf("%")?w/100*b.height:w)),i||i!==!1&&a.smooth?(_=x-c,y=w-u,a.xOffset=f+(_*h+y*m)-_,a.yOffset=d+(_*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wn]="0px 0px",o&&(sr(o,a,"xOrigin",c,x),sr(o,a,"yOrigin",u,w),sr(o,a,"xOffset",f,a.xOffset),sr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Jo=function(e,t){var n=e._gsap||new Am(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Si(e,wn)||"0",u,f,d,h,g,m,p,_,y,v,x,w,b,T,R,S,M,C,I,O,z,H,B,Y,G,ie,L,oe,Ie,ze,$,Q;return u=f=d=m=p=_=y=v=x=0,h=g=1,n.svg=!!(e.getCTM&&Vm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),i.scale=i.rotate=i.translate="none"),T=$f(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Ku(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,b=n.yOrigin||0,T!==Zo&&(C=T[0],I=T[1],O=T[2],z=T[3],u=H=T[4],f=B=T[5],T.length===6?(h=Math.sqrt(C*C+I*I),g=Math.sqrt(z*z+O*O),m=C||I?xs(I,C)*Cr:0,y=O||z?xs(O,z)*Cr+m:0,y&&(g*=Math.abs(Math.cos(y*Ns))),n.svg&&(u-=w-(w*C+b*O),f-=b-(w*I+b*z))):(Q=T[6],ze=T[7],L=T[8],oe=T[9],Ie=T[10],$=T[11],u=T[12],f=T[13],d=T[14],R=xs(Q,Ie),p=R*Cr,R&&(S=Math.cos(-R),M=Math.sin(-R),Y=H*S+L*M,G=B*S+oe*M,ie=Q*S+Ie*M,L=H*-M+L*S,oe=B*-M+oe*S,Ie=Q*-M+Ie*S,$=ze*-M+$*S,H=Y,B=G,Q=ie),R=xs(-O,Ie),_=R*Cr,R&&(S=Math.cos(-R),M=Math.sin(-R),Y=C*S-L*M,G=I*S-oe*M,ie=O*S-Ie*M,$=z*M+$*S,C=Y,I=G,O=ie),R=xs(I,C),m=R*Cr,R&&(S=Math.cos(R),M=Math.sin(R),Y=C*S+I*M,G=H*S+B*M,I=I*S-C*M,B=B*S-H*M,C=Y,H=G),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,_=180-_),h=It(Math.sqrt(C*C+I*I+O*O)),g=It(Math.sqrt(B*B+Q*Q)),R=xs(H,B),y=Math.abs(R)>2e-4?R*Cr:0,x=$?1/($<0?-$:$):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gm(Si(e,Lt)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=It(h),n.scaleY=It(g),n.rotation=It(m)+a,n.rotationX=It(p)+a,n.rotationY=It(_)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=Ll(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?uT:zm?Wm:cT,n.uncache=0,n},Ll=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gc=function(e,t,n){var i=an(t);return It(parseFloat(t)+parseFloat(mr(e,"x",n+"px",i)))+i},cT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Wm(e,t)},br="0deg",uo="0px",Ar=") ",Wm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,m=n.scaleY,p=n.transformPerspective,_=n.force3D,y=n.target,v=n.zOrigin,x="",w=_==="auto"&&e&&e!==1||_===!0;if(v&&(f!==br||u!==br)){var b=parseFloat(u)*Ns,T=Math.sin(b),R=Math.cos(b),S;b=parseFloat(f)*Ns,S=Math.cos(b),o=Gc(y,o,T*S*-v),a=Gc(y,a,-Math.sin(b)*-v),l=Gc(y,l,R*S*-v+v)}p!==uo&&(x+="perspective("+p+Ar),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||o!==uo||a!==uo||l!==uo)&&(x+=l!==uo||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ar),c!==br&&(x+="rotate("+c+Ar),u!==br&&(x+="rotateY("+u+Ar),f!==br&&(x+="rotateX("+f+Ar),(d!==br||h!==br)&&(x+="skew("+d+", "+h+Ar),(g!==1||m!==1)&&(x+="scale("+g+", "+m+Ar),y.style[Lt]=x||"translate(0, 0)"},uT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,m=n.yOrigin,p=n.xOffset,_=n.yOffset,y=n.forceCSS,v=parseFloat(o),x=parseFloat(a),w,b,T,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ns,c*=Ns,w=Math.cos(l)*f,b=Math.sin(l)*f,T=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Ns,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,b*=S)),w=It(w),b=It(b),T=It(T),R=It(R)):(w=f,R=d,b=T=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=mr(h,"x",o,"px"),x=mr(h,"y",a,"px")),(g||m||p||_)&&(v=It(v+g-(g*w+m*T)+p),x=It(x+m-(g*b+m*R)+_)),(i||s)&&(S=h.getBBox(),v=It(v+i/100*S.width),x=It(x+s/100*S.height)),S="matrix("+w+","+b+","+T+","+R+","+v+","+x+")",h.setAttribute("transform",S),y&&(h.style[Lt]=S)},fT=function(e,t,n,i,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cr:1),c=l-i,u=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Ud)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ud)%o-~~(c/o)*o)),e._pt=d=new An(e._pt,t,n,i,c,$E),d.e=u,d.u="deg",e._props.push(n),d},kd=function(e,t){for(var n in t)e[n]=t[n];return e},hT=function(e,t,n){var i=kd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Lt]=t,a=Jo(n,1),$r(n,Lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Lt],o[Lt]=t,a=Jo(n,1),o[Lt]=c);for(l in Xi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=an(c),g=an(u),f=h!==g?mr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new An(e._pt,a,l,f,d-f,Yu),e._pt.u=g||0,e._props.push(l));kd(a,i)};bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Pl[e>1?"border"+r:r]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return Di(a,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(g,m){return h[g]=d[m]=d[m]||d[(m-1)/2|0]}),a.init(l,h,f)}});var Xm={name:"css",register:$u,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,h,g,m,p,_,y,v,x,w,b,T,R;Xf||$u(),this.styles=this.styles||Bm(e),R=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(On[m]&&wm(m,t,n,i,e,s)))){if(h=typeof u,g=Pl[m],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=$o(u)),g)g(this,e,m,u,n)&&(T=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",fr.lastIndex=0,fr.test(c)||(p=an(c),_=an(u)),_?p!==_&&(c=mr(e,m,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,m),o.push(m),R.push(m,0,a[m]);else if(h!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,e,s):l[m],Jt(c)&&~c.indexOf("random(")&&(c=$o(c)),an(c+"")||c==="auto"||(c+=Gn.units[m]||an(Di(e,m))||""),(c+"").charAt(1)==="="&&(c=Di(e,m))):c=Di(e,m),d=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),m in Mi&&(m==="autoAlpha"&&(d===1&&Di(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),sr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Mi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Xi,v){if(this.styles.save(m),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Jo(e,t.parseTransform),b=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new An(this._pt,a,Lt,0,1,w.renderTransform,w,0,-1),x.dep=1),m==="scale")this._pt=new An(this._pt,w,"scaleY",w.scaleY,(y?Is(w.scaleY,y+f):f)-w.scaleY||0,Yu),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){R.push(wn,0,a[wn]),u=aT(u),w.svg?Ku(e,u,0,b,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==w.zOrigin&&sr(this,w,"zOrigin",w.zOrigin,_),sr(this,a,m,Ll(c),Ll(u)));continue}else if(m==="svgOrigin"){Ku(e,u,1,b,0,this);continue}else if(m in Hm){fT(this,w,m,d,y?Is(d,y+u):u);continue}else if(m==="smoothOrigin"){sr(this,w,"smooth",w.smooth,u);continue}else if(m==="force3D"){w[m]=u;continue}else if(m==="transform"){hT(this,u,e);continue}}else m in a||(m=js(m)||m);if(v||(f||f===0)&&(d||d===0)&&!qE.test(u)&&m in a)p=(c+"").substr((d+"").length),f||(f=0),_=an(u)||(m in Gn.units?Gn.units[m]:p),p!==_&&(d=mr(e,m,c,_)),this._pt=new An(this._pt,v?w:a,m,d,(y?Is(d,y+f):f)-d,!v&&(_==="px"||m==="zIndex")&&t.autoRound!==!1?jE:Yu),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=KE);else if(m in a)oT.call(this,e,m,c,y?y+u:u);else if(m in e)this.add(e,m,c||e[m],y?y+u:u,i,s);else if(m!=="parseTransform"){Of(m,u);continue}v||(m in a?R.push(m,0,a[m]):R.push(m,1,c||e[m])),o.push(m)}}T&&Im(this)},render:function(e,t){if(t.tween._time||!Yf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Di,aliases:Mi,getSetter:function(e,t,n){var i=Mi[t];return i&&i.indexOf(",")<0&&(t=i),t in Xi&&t!==wn&&(e._gsap.x||Di(e,"x"))?n&&Id===n?t==="scale"?eT:QE:(Id=n||{})&&(t==="scale"?tT:nT):e.style&&!If(e.style[t])?ZE:~t.indexOf("-")?JE:Gf(e,t)},core:{_removeProperty:$r,_getMatrix:$f}};Cn.utils.checkPrefix=js;Cn.core.getStyleSaver=Bm;(function(r,e,t,n){var i=bn(r+","+e+","+t,function(s){Xi[s]=1});bn(e,function(s){Gn.units[s]="deg",Hm[s]=1}),Mi[i[13]]=r+","+e,bn(n,function(s){var o=s.split(":");Mi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"});Cn.registerPlugin(Xm);var Kf=Cn.registerPlugin(Xm)||Cn;Kf.core.Tween;function dT(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function pT(r,e,t){return e&&dT(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var en,al,zn,or,ar,Os,Ym,Pr,Io,qm,Bi,ui,$m,Km=function(){return en||typeof window<"u"&&(en=window.gsap)&&en.registerPlugin&&en},jm=1,Rs=[],Qe=[],Ei=[],Uo=Date.now,ju=function(e,t){return t},mT=function(){var e=Io.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,Ei),Qe=n,Ei=i,ju=function(o,a){return t[o](a)}},hr=function(e,t){return~Ei.indexOf(e)&&Ei[Ei.indexOf(e)+1][t]},No=function(e){return!!~qm.indexOf(e)},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Fa="scrollLeft",Ba="scrollTop",Zu=function(){return Bi&&Bi.isPressed||Qe.cache++},Dl=function(e,t){var n=function i(s){if(s||s===0){jm&&(zn.history.scrollRestoration="manual");var o=Bi&&Bi.isPressed;s=i.v=Math.round(s)||(Bi&&Bi.iOS?1:0),e(s),i.cacheID=Qe.cache,o&&ju("ss",s)}else(t||Qe.cache!==i.cacheID||ju("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Mn={s:Fa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Dl(function(r){return arguments.length?zn.scrollTo(r,Ht.sc()):zn.pageXOffset||or[Fa]||ar[Fa]||Os[Fa]||0})},Ht={s:Ba,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mn,sc:Dl(function(r){return arguments.length?zn.scrollTo(Mn.sc(),r):zn.pageYOffset||or[Ba]||ar[Ba]||Os[Ba]||0})},Sn=function(e,t){return(t&&t._ctx&&t._ctx.selector||en.utils.toArray)(e)[0]||(typeof e=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},_r=function(e,t){var n=t.s,i=t.sc;No(e)&&(e=or.scrollingElement||ar);var s=Qe.indexOf(e),o=i===Ht.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+o]||dn(e,"scroll",Zu);var a=Qe[s+o],l=a||(Qe[s+o]=Dl(hr(e,n),!0)||(No(e)?i:Dl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=en.getProperty(e,"scrollBehavior")==="smooth"),l},Ju=function(e,t,n){var i=e,s=e,o=Uo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,m){var p=Uo();m||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var m=a,p=s,_=Uo();return(g||g===0)&&g!==i&&u(g),o===a||_-a>c?0:(i+(n?p:-p))/((n?_:o)-m)*1e3};return{update:u,reset:f,getVelocity:d}},fo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Vd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Zm=function(){Io=en.core.globals().ScrollTrigger,Io&&Io.core&&mT()},Jm=function(e){return en=e||Km(),!al&&en&&typeof document<"u"&&document.body&&(zn=window,or=document,ar=or.documentElement,Os=or.body,qm=[zn,or,ar,Os],en.utils.clamp,$m=en.core.context||function(){},Pr="onpointerenter"in Os?"pointer":"mouse",Ym=Ut.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ui=Ut.eventTypes=("ontouchstart"in ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jm=0},500),Zm(),al=1),al};Mn.op=Ht;Qe.cache=0;var Ut=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){al||Jm(en)||console.warn("Please gsap.registerPlugin(Observer)"),Io||Zm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,m=n.event,p=n.onDragStart,_=n.onDragEnd,y=n.onDrag,v=n.onPress,x=n.onRelease,w=n.onRight,b=n.onLeft,T=n.onUp,R=n.onDown,S=n.onChangeX,M=n.onChangeY,C=n.onChange,I=n.onToggleX,O=n.onToggleY,z=n.onHover,H=n.onHoverEnd,B=n.onMove,Y=n.ignoreCheck,G=n.isNormalizer,ie=n.onGestureStart,L=n.onGestureEnd,oe=n.onWheel,Ie=n.onEnable,ze=n.onDisable,$=n.onClick,Q=n.scrollSpeed,ue=n.capture,le=n.allowClicks,Ee=n.lockAxis,we=n.onLockAxis;this.target=a=Sn(a)||ar,this.vars=n,h&&(h=en.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(Os).lineHeight)||22);var Te,Ke,D,Ue,Fe,Xe,ge,X=this,Re=0,Be=0,P=n.passive||!u,E=_r(a,Mn),q=_r(a,Ht),ee=E(),ne=q(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ui[0]==="pointerdown",be=No(a),re=a.ownerDocument||or,de=[0,0,0],Ne=[0,0,0],se=0,_e=function(){return se=Uo()},Pe=function(Se,ot){return(X.event=Se)&&h&&~h.indexOf(Se.target)||ot&&j&&Se.pointerType!=="touch"||Y&&Y(Se,ot)},ke=function(){X._vx.reset(),X._vy.reset(),Ke.pause(),f&&f(X)},me=function(){var Se=X.deltaX=Vd(de),ot=X.deltaY=Vd(Ne),ce=Math.abs(Se)>=i,He=Math.abs(ot)>=i;C&&(ce||He)&&C(X,Se,ot,de,Ne),ce&&(w&&X.deltaX>0&&w(X),b&&X.deltaX<0&&b(X),S&&S(X),I&&X.deltaX<0!=Re<0&&I(X),Re=X.deltaX,de[0]=de[1]=de[2]=0),He&&(R&&X.deltaY>0&&R(X),T&&X.deltaY<0&&T(X),M&&M(X),O&&X.deltaY<0!=Be<0&&O(X),Be=X.deltaY,Ne[0]=Ne[1]=Ne[2]=0),(Ue||D)&&(B&&B(X),D&&(y(X),D=!1),Ue=!1),Xe&&!(Xe=!1)&&we&&we(X),Fe&&(oe(X),Fe=!1),Te=0},Ve=function(Se,ot,ce){de[ce]+=Se,Ne[ce]+=ot,X._vx.update(Se),X._vy.update(ot),c?Te||(Te=requestAnimationFrame(me)):me()},We=function(Se,ot){Ee&&!ge&&(X.axis=ge=Math.abs(Se)>Math.abs(ot)?"x":"y",Xe=!0),ge!=="y"&&(de[2]+=Se,X._vx.update(Se,!0)),ge!=="x"&&(Ne[2]+=ot,X._vy.update(ot,!0)),c?Te||(Te=requestAnimationFrame(me)):me()},ct=function(Se){if(!Pe(Se,1)){Se=fo(Se,u);var ot=Se.clientX,ce=Se.clientY,He=ot-X.x,Le=ce-X.y,Ge=X.isDragging;X.x=ot,X.y=ce,(Ge||Math.abs(X.startX-ot)>=s||Math.abs(X.startY-ce)>=s)&&(y&&(D=!0),Ge||(X.isDragging=!0),We(He,Le),Ge||p&&p(X))}},N=X.onPress=function(Oe){Pe(Oe,1)||Oe&&Oe.button||(X.axis=ge=null,Ke.pause(),X.isPressed=!0,Oe=fo(Oe),Re=Be=0,X.startX=X.x=Oe.clientX,X.startY=X.y=Oe.clientY,X._vx.reset(),X._vy.reset(),dn(G?a:re,ui[1],ct,P,!0),X.deltaX=X.deltaY=0,v&&v(X))},K=X.onRelease=function(Oe){if(!Pe(Oe,1)){fn(G?a:re,ui[1],ct,!0);var Se=!isNaN(X.y-X.startY),ot=X.isDragging,ce=ot&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),He=fo(Oe);!ce&&Se&&(X._vx.reset(),X._vy.reset(),u&&le&&en.delayedCall(.08,function(){if(Uo()-se>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(re.createEvent){var Le=re.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,zn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(Le)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,f&&ot&&!G&&Ke.restart(!0),_&&ot&&_(X),x&&x(X,ce)}},Z=function(Se){return Se.touches&&Se.touches.length>1&&(X.isGesturing=!0)&&ie(Se,X.isDragging)},J=function(){return(X.isGesturing=!1)||L(X)},ae=function(Se){if(!Pe(Se)){var ot=E(),ce=q();Ve((ot-ee)*Q,(ce-ne)*Q,1),ee=ot,ne=ce,f&&Ke.restart(!0)}},Ae=function(Se){if(!Pe(Se)){Se=fo(Se,u),oe&&(Fe=!0);var ot=(Se.deltaMode===1?l:Se.deltaMode===2?zn.innerHeight:1)*g;Ve(Se.deltaX*ot,Se.deltaY*ot,0),f&&!G&&Ke.restart(!0)}},Ye=function(Se){if(!Pe(Se)){var ot=Se.clientX,ce=Se.clientY,He=ot-X.x,Le=ce-X.y;X.x=ot,X.y=ce,Ue=!0,f&&Ke.restart(!0),(He||Le)&&We(He,Le)}},gt=function(Se){X.event=Se,z(X)},xt=function(Se){X.event=Se,H(X)},et=function(Se){return Pe(Se)||fo(Se,u)&&$(X)};Ke=X._dc=en.delayedCall(d||.25,ke).pause(),X.deltaX=X.deltaY=0,X._vx=Ju(0,50,!0),X._vy=Ju(0,50,!0),X.scrollX=E,X.scrollY=q,X.isDragging=X.isGesturing=X.isPressed=!1,$m(this),X.enable=function(Oe){return X.isEnabled||(dn(be?re:a,"scroll",Zu),o.indexOf("scroll")>=0&&dn(be?re:a,"scroll",ae,P,ue),o.indexOf("wheel")>=0&&dn(a,"wheel",Ae,P,ue),(o.indexOf("touch")>=0&&Ym||o.indexOf("pointer")>=0)&&(dn(a,ui[0],N,P,ue),dn(re,ui[2],K),dn(re,ui[3],K),le&&dn(a,"click",_e,!0,!0),$&&dn(a,"click",et),ie&&dn(re,"gesturestart",Z),L&&dn(re,"gestureend",J),z&&dn(a,Pr+"enter",gt),H&&dn(a,Pr+"leave",xt),B&&dn(a,Pr+"move",Ye)),X.isEnabled=!0,Oe&&Oe.type&&N(Oe),Ie&&Ie(X)),X},X.disable=function(){X.isEnabled&&(Rs.filter(function(Oe){return Oe!==X&&No(Oe.target)}).length||fn(be?re:a,"scroll",Zu),X.isPressed&&(X._vx.reset(),X._vy.reset(),fn(G?a:re,ui[1],ct,!0)),fn(be?re:a,"scroll",ae,ue),fn(a,"wheel",Ae,ue),fn(a,ui[0],N,ue),fn(re,ui[2],K),fn(re,ui[3],K),fn(a,"click",_e,!0),fn(a,"click",et),fn(re,"gesturestart",Z),fn(re,"gestureend",J),fn(a,Pr+"enter",gt),fn(a,Pr+"leave",xt),fn(a,Pr+"move",Ye),X.isEnabled=X.isPressed=X.isDragging=!1,ze&&ze(X))},X.kill=X.revert=function(){X.disable();var Oe=Rs.indexOf(X);Oe>=0&&Rs.splice(Oe,1),Bi===X&&(Bi=0)},Rs.push(X),G&&No(a)&&(Bi=X),X.enable(m)},pT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ut.version="3.12.5";Ut.create=function(r){return new Ut(r)};Ut.register=Jm;Ut.getAll=function(){return Rs.slice()};Ut.getById=function(r){return Rs.filter(function(e){return e.vars.id===r})[0]};Km()&&en.registerPlugin(Ut);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Me,Ss,it,Ct,fi,At,Qm,Il,Qo,Oo,Mo,za,sn,jl,Qu,_n,Hd,Gd,Es,e_,Wc,t_,mn,ef,n_,i_,er,tf,jf,Fs,Zf,Ul,nf,Xc,ka=1,on=Date.now,Yc=on(),ri=0,yo=0,Wd=function(e,t,n){var i=Nn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Xd=function(e,t){return t&&(!Nn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},_T=function r(){return yo&&requestAnimationFrame(r)},Yd=function(){return jl=1},qd=function(){return jl=0},mi=function(e){return e},So=function(e){return Math.round(e*1e5)/1e5||0},r_=function(){return typeof window<"u"},s_=function(){return Me||r_()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Kr=function(e){return!!~Qm.indexOf(e)},o_=function(e){return(e==="Height"?Zf:it["inner"+e])||fi["client"+e]||At["client"+e]},a_=function(e){return hr(e,"getBoundingClientRect")||(Kr(e)?function(){return hl.width=it.innerWidth,hl.height=Zf,hl}:function(){return Ui(e)})},gT=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=hr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?o_(s):e["client"+s])||0}},xT=function(e,t){return!t||~Ei.indexOf(e)?a_(e):function(){return hl}},yi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=hr(e,n))?o()-a_(e)()[s]:Kr(e)?(fi[n]||At[n])-o_(i):e[n]-e["offset"+i])},Va=function(e,t){for(var n=0;n<Es.length;n+=3)(!t||~t.indexOf(Es[n+1]))&&e(Es[n],Es[n+1],Es[n+2])},Nn=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},Eo=function(e){return typeof e=="number"},Lr=function(e){return typeof e=="object"},ho=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},qc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},vs=Math.abs,l_="left",c_="top",Jf="right",Qf="bottom",kr="width",Vr="height",Fo="Right",Bo="Left",zo="Top",ko="Bottom",Ft="padding",Kn="margin",Zs="Width",eh="Height",Vt="px",jn=function(e){return it.getComputedStyle(e)},vT=function(e){var t=jn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$d=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ui=function(e,t){var n=t&&jn(e)[Qu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Nl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},u_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},MT=function(e){return function(t){return Me.utils.snap(u_(e),t)}},th=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},yT=function(e){return function(t,n){return th(u_(e))(t,n.direction)}},Ha=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},jt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Kt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ga=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wa={toggleActions:"play",anticipatePin:0},Ol={top:0,left:0,center:.5,bottom:1,right:1},ll=function(e,t){if(Nn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ol?Ol[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Xa=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Ct.createElement("div"),m=Kr(n)||hr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=m?At:n,y=e.indexOf("start")!==-1,v=y?c:u,x="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&m?"fixed;":"absolute;"),(p||l||!m)&&(x+=(i===Ht?Jf:Qf)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],cl(g,0,i,y),g},cl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Zs]=1,s["border"+a+Zs]=0,s[n.p]=t+"px",Me.set(e,s)},Ze=[],rf={},ea,jd=function(){return on()-ri>34&&(ea||(ea=requestAnimationFrame(ki)))},Ms=function(){(!mn||!mn.isPressed||mn.startX>At.clientWidth)&&(Qe.cache++,mn?ea||(ea=requestAnimationFrame(ki)):ki(),ri||Zr("scrollStart"),ri=on())},$c=function(){i_=it.innerWidth,n_=it.innerHeight},To=function(){Qe.cache++,!sn&&!t_&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!ef||i_!==it.innerWidth||Math.abs(it.innerHeight-n_)>it.innerHeight*.25)&&Il.restart(!0)},jr={},ST=[],f_=function r(){return Kt(tt,"scrollEnd",r)||Nr(!0)},Zr=function(e){return jr[e]&&jr[e].map(function(t){return t()})||ST},Un=[],h_=function(e){for(var t=0;t<Un.length;t+=5)(!e||Un[t+4]&&Un[t+4].query===e)&&(Un[t].style.cssText=Un[t+1],Un[t].getBBox&&Un[t].setAttribute("transform",Un[t+2]||""),Un[t+3].uncache=1)},nh=function(e,t){var n;for(_n=0;_n<Ze.length;_n++)n=Ze[_n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ul=!0,t&&h_(t),t||Zr("revert")},d_=function(e,t){Qe.cache++,(t||!gn)&&Qe.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),Nn(e)&&(it.history.scrollRestoration=jf=e)},gn,Hr=0,Zd,ET=function(){if(Zd!==Hr){var e=Zd=Hr;requestAnimationFrame(function(){return e===Hr&&Nr(!0)})}},p_=function(){At.appendChild(Fs),Zf=!mn&&Fs.offsetHeight||it.innerHeight,At.removeChild(Fs)},Jd=function(e){return Qo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Nr=function(e,t){if(ri&&!e&&!Ul){jt(tt,"scrollEnd",f_);return}p_(),gn=tt.isRefreshing=!0,Qe.forEach(function(i){return yn(i)&&++i.cacheID&&(i.rec=i())});var n=Zr("refreshInit");e_&&tt.sort(),t||nh(),Qe.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ze.slice(0).forEach(function(i){return i.refresh()}),Ul=!1,Ze.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),nf=1,Jd(!0),Ze.forEach(function(i){var s=yi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Jd(!1),nf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),d_(jf,1),Il.pause(),Hr++,gn=2,ki(2),Ze.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),gn=tt.isRefreshing=!1,Zr("refresh")},sf=0,ul=1,Vo,ki=function(e){if(e===2||!gn&&!Ul){tt.isUpdating=!0,Vo&&Vo.update(0);var t=Ze.length,n=on(),i=n-Yc>=50,s=t&&Ze[0].scroll();if(ul=sf>s?-1:1,gn||(sf=s),i&&(ri&&!jl&&n-ri>200&&(ri=0,Zr("scrollEnd")),Mo=Yc,Yc=n),ul<0){for(_n=t;_n-- >0;)Ze[_n]&&Ze[_n].update(0,i);ul=1}else for(_n=0;_n<t;_n++)Ze[_n]&&Ze[_n].update(0,i);tt.isUpdating=!1}ea=0},of=[l_,c_,Qf,Jf,Kn+ko,Kn+Fo,Kn+zo,Kn+Bo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],fl=of.concat([kr,Vr,"boxSizing","max"+Zs,"max"+eh,"position",Kn,Ft,Ft+zo,Ft+Fo,Ft+ko,Ft+Bo]),TT=function(e,t,n){Bs(n);var i=e._gsap;if(i.spacerIsNative)Bs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Kc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=of.length,o=t.style,a=e.style,l;s--;)l=of[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Qf]=a[Jf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[kr]=Nl(e,Mn)+Vt,o[Vr]=Nl(e,Ht)+Vt,o[Ft]=a[Kn]=a[c_]=a[l_]="0",Bs(i),a[kr]=a["max"+Zs]=n[kr],a[Vr]=a["max"+eh]=n[Vr],a[Ft]=n[Ft],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},bT=/([A-Z])/g,Bs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(bT,"-$1").toLowerCase())}},Ya=function(e){for(var t=fl.length,n=e.style,i=[],s=0;s<t;s++)i.push(fl[s],n[fl[s]]);return i.t=e,i},AT=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},hl={left:0,top:0},Qd=function(e,t,n,i,s,o,a,l,c,u,f,d,h,g){yn(e)&&(e=e(l)),Nn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ll("0"+e.substr(3),n):0));var m=h?h.time():0,p,_,y;if(h&&h.seek(0),isNaN(e)||(e=+e),Eo(e))h&&(e=Me.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&cl(a,n,i,!0);else{yn(t)&&(t=t(l));var v=(e||"0").split(" "),x,w,b,T;y=Sn(t,l)||At,x=Ui(y)||{},(!x||!x.left&&!x.top)&&jn(y).display==="none"&&(T=y.style.display,y.style.display="block",x=Ui(y),T?y.style.display=T:y.style.removeProperty("display")),w=ll(v[0],x[i.d]),b=ll(v[1]||"0",n),e=x[i.p]-c[i.p]-u+w+s-b,a&&cl(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,S=o._isStart;p="scroll"+i.d2,cl(o,R,i,S&&R>20||!S&&(f?Math.max(At[p],fi[p]):o.parentNode[p])<=R+1),f&&(c=Ui(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Vt))}return h&&y&&(p=Ui(y),h.seek(d),_=Ui(y),h._caScrollDist=p[i.p]-_[i.p],e=e/h._caScrollDist*d),h&&h.seek(m),h?e:Math.round(e)},wT=/(webkit|moz|length|cssText|inset)/i,ep=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===At){e._stOrig=s.cssText,a=jn(e);for(o in a)!+o&&!wT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},m_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},qa=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},tp=function(e,t){var n=_r(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,g={};c=c||n();var m=m_(n,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return m(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){Qe.cache++,o.tween&&ki()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Me.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},jt(e,"wheel",n.wheelHandler),tt.isTouch&&jt(e,"touchmove",n.wheelHandler),s},tt=function(){function r(t,n){Ss||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),tf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!yo){this.update=this.refresh=this.kill=mi;return}n=$d(Nn(n)||Eo(n)||n.nodeType?{trigger:n}:n,Wa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,m=s.invalidateOnRefresh,p=s.anticipatePin,_=s.onScrubComplete,y=s.onSnapComplete,v=s.once,x=s.snap,w=s.pinReparent,b=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Mn:Ht,C=!f&&f!==0,I=Sn(n.scroller||it),O=Me.core.getCache(I),z=Kr(I),H=("pinType"in n?n.pinType:hr(I,"pinType")||z&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=C&&n.toggleActions.split(" "),G="markers"in n?n.markers:Wa.markers,ie=z?0:parseFloat(jn(I)["border"+M.p2+Zs])||0,L=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ie=gT(I,z,M),ze=xT(I,z),$=0,Q=0,ue=0,le=_r(I,M),Ee,we,Te,Ke,D,Ue,Fe,Xe,ge,X,Re,Be,P,E,q,ee,ne,j,be,re,de,Ne,se,_e,Pe,ke,me,Ve,We,ct,N,K,Z,J,ae,Ae,Ye,gt,xt;if(L._startClamp=L._endClamp=!1,L._dir=M,p*=45,L.scroller=I,L.scroll=T?T.time.bind(T):le,Ke=le(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(e_=1,n.refreshPriority===-9999&&(Vo=L)),O.tweenScroll=O.tweenScroll||{top:tp(I,Ht),left:tp(I,Mn)},L.tweenTo=Ee=O.tweenScroll[M.p],L.scrubDuration=function(ce){Z=Eo(ce)&&ce,Z?K?K.duration(ce):K=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Z,paused:!0,onComplete:function(){return _&&_(L)}}):(K&&K.progress(1).kill(),K=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),ct=0,l||(l=i.vars.id)),x&&((!Lr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in At.style&&Me.set(z?[At,fi]:I,{scrollBehavior:"auto"}),Qe.forEach(function(ce){return yn(ce)&&ce.target===(z?Ct.scrollingElement||fi:I)&&(ce.smooth=!1)}),Te=yn(x.snapTo)?x.snapTo:x.snapTo==="labels"?MT(i):x.snapTo==="labelsDirectional"?yT(i):x.directional!==!1?function(ce,He){return th(x.snapTo)(ce,on()-Q<500?0:He.direction)}:Me.utils.snap(x.snapTo),J=x.duration||{min:.1,max:2},J=Lr(J)?Oo(J.min,J.max):Oo(J,J),ae=Me.delayedCall(x.delay||Z/2||.1,function(){var ce=le(),He=on()-Q<500,Le=Ee.tween;if((He||Math.abs(L.getVelocity())<10)&&!Le&&!jl&&$!==ce){var Ge=(ce-Ue)/E,Rt=i&&!C?i.totalProgress():Ge,je=He?0:(Rt-N)/(on()-Mo)*1e3||0,Mt=Me.utils.clamp(-Ge,1-Ge,vs(je/2)*je/.185),zt=Ge+(x.inertia===!1?0:Mt),Tt,yt,mt=x,Pn=mt.onStart,A=mt.onInterrupt,U=mt.onComplete;if(Tt=Te(zt,L),Eo(Tt)||(Tt=zt),yt=Math.round(Ue+Tt*E),ce<=Fe&&ce>=Ue&&yt!==ce){if(Le&&!Le._initted&&Le.data<=vs(yt-ce))return;x.inertia===!1&&(Mt=Tt-Ge),Ee(yt,{duration:J(vs(Math.max(vs(zt-Rt),vs(Tt-Rt))*.185/je/.05||0)),ease:x.ease||"power3",data:vs(yt-ce),onInterrupt:function(){return ae.restart(!0)&&A&&A(L)},onComplete:function(){L.update(),$=le(),i&&(K?K.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),ct=N=i&&!C?i.totalProgress():L.progress,y&&y(L),U&&U(L)}},ce,Mt*E,yt-ce-Mt*E),Pn&&Pn(L,Ee.tween)}}else L.isActive&&$!==ce&&ae.restart(!0)}).pause()),l&&(rf[l]=L),d=L.trigger=Sn(d||h!==!0&&h),xt=d&&d._gsap&&d._gsap.stRevert,xt&&(xt=xt(L)),h=h===!0?d:Sn(h),Nn(a)&&(a={targets:d,className:a}),h&&(g===!1||g===Kn||(g=!g&&h.parentNode&&h.parentNode.style&&jn(h.parentNode).display==="flex"?!1:Ft),L.pin=h,we=Me.core.getCache(h),we.spacer?q=we.pinState:(b&&(b=Sn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),we.spacerIsNative=!!b,b&&(we.spacerState=Ya(b))),we.spacer=j=b||Ct.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),we.pinState=q=Ya(h)),n.force3D!==!1&&Me.set(h,{force3D:!0}),L.spacer=j=we.spacer,We=jn(h),_e=We[g+M.os2],re=Me.getProperty(h),de=Me.quickSetter(h,M.a,Vt),Kc(h,j,We),ne=Ya(h)),G){Be=Lr(G)?$d(G,Kd):Kd,X=Xa("scroller-start",l,I,M,Be,0),Re=Xa("scroller-end",l,I,M,Be,0,X),be=X["offset"+M.op.d2];var et=Sn(hr(I,"content")||I);Xe=this.markerStart=Xa("start",l,et,M,Be,be,0,T),ge=this.markerEnd=Xa("end",l,et,M,Be,be,0,T),T&&(gt=Me.quickSetter([Xe,ge],M.a,Vt)),!H&&!(Ei.length&&hr(I,"fixedMarkers")===!0)&&(vT(z?At:I),Me.set([X,Re],{force3D:!0}),ke=Me.quickSetter(X,M.a,Vt),Ve=Me.quickSetter(Re,M.a,Vt))}if(T){var Oe=T.vars.onUpdate,Se=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),Oe&&Oe.apply(T,Se||[])})}if(L.previous=function(){return Ze[Ze.indexOf(L)-1]},L.next=function(){return Ze[Ze.indexOf(L)+1]},L.revert=function(ce,He){if(!He)return L.kill(!0);var Le=ce!==!1||!L.enabled,Ge=sn;Le!==L.isReverted&&(Le&&(Ae=Math.max(le(),L.scroll.rec||0),ue=L.progress,Ye=i&&i.progress()),Xe&&[Xe,ge,X,Re].forEach(function(Rt){return Rt.style.display=Le?"none":"block"}),Le&&(sn=L,L.update(Le)),h&&(!w||!L.isActive)&&(Le?TT(h,j,q):Kc(h,j,jn(h),Pe)),Le||L.update(Le),sn=Ge,L.isReverted=Le)},L.refresh=function(ce,He,Le,Ge){if(!((sn||!L.enabled)&&!He)){if(h&&ce&&ri){jt(r,"scrollEnd",f_);return}!gn&&oe&&oe(L),sn=L,Ee.tween&&!Le&&(Ee.tween.kill(),Ee.tween=0),K&&K.pause(),m&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Rt=Ie(),je=ze(),Mt=T?T.duration():yi(I,M),zt=E<=.01,Tt=0,yt=Ge||0,mt=Lr(Le)?Le.end:n.end,Pn=n.endTrigger||d,A=Lr(Le)?Le.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),U=L.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,L),W=d&&Math.max(0,Ze.indexOf(L))||0,k=W,F,te,fe,ve,he,xe,Ce,De,at,_t,lt,kt,nt;for(G&&Lr(Le)&&(kt=Me.getProperty(X,M.p),nt=Me.getProperty(Re,M.p));k--;)xe=Ze[k],xe.end||xe.refresh(0,1)||(sn=L),Ce=xe.pin,Ce&&(Ce===d||Ce===h||Ce===U)&&!xe.isReverted&&(_t||(_t=[]),_t.unshift(xe),xe.revert(!0,!0)),xe!==Ze[k]&&(W--,k--);for(yn(A)&&(A=A(L)),A=Wd(A,"start",L),Ue=Qd(A,d,Rt,M,le(),Xe,X,L,je,ie,H,Mt,T,L._startClamp&&"_startClamp")||(h?-.001:0),yn(mt)&&(mt=mt(L)),Nn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Nn(A)?A.split(" ")[0]:"")+mt:(Tt=ll(mt.substr(2),Rt),mt=Nn(A)?A:(T?Me.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Ue):Ue)+Tt,Pn=d)),mt=Wd(mt,"end",L),Fe=Math.max(Ue,Qd(mt||(Pn?"100% 0":Mt),Pn,Rt,M,le()+Tt,ge,Re,L,je,ie,H,Mt,T,L._endClamp&&"_endClamp"))||-.001,Tt=0,k=W;k--;)xe=Ze[k],Ce=xe.pin,Ce&&xe.start-xe._pinPush<=Ue&&!T&&xe.end>0&&(F=xe.end-(L._startClamp?Math.max(0,xe.start):xe.start),(Ce===d&&xe.start-xe._pinPush<Ue||Ce===U)&&isNaN(A)&&(Tt+=F*(1-xe.progress)),Ce===h&&(yt+=F));if(Ue+=Tt,Fe+=Tt,L._startClamp&&(L._startClamp+=Tt),L._endClamp&&!gn&&(L._endClamp=Fe||-.001,Fe=Math.min(Fe,yi(I,M))),E=Fe-Ue||(Ue-=.01)&&.001,zt&&(ue=Me.utils.clamp(0,1,Me.utils.normalize(Ue,Fe,Ae))),L._pinPush=yt,Xe&&Tt&&(F={},F[M.a]="+="+Tt,U&&(F[M.p]="-="+le()),Me.set([Xe,ge],F)),h&&!(nf&&L.end>=yi(I,M)))F=jn(h),ve=M===Ht,fe=le(),Ne=parseFloat(re(M.a))+yt,!Mt&&Fe>1&&(lt=(z?Ct.scrollingElement||fi:I).style,lt={style:lt,value:lt["overflow"+M.a.toUpperCase()]},z&&jn(At)["overflow"+M.a.toUpperCase()]!=="scroll"&&(lt.style["overflow"+M.a.toUpperCase()]="scroll")),Kc(h,j,F),ne=Ya(h),te=Ui(h,!0),De=H&&_r(I,ve?Mn:Ht)(),g?(Pe=[g+M.os2,E+yt+Vt],Pe.t=j,k=g===Ft?Nl(h,M)+E+yt:0,k&&(Pe.push(M.d,k+Vt),j.style.flexBasis!=="auto"&&(j.style.flexBasis=k+Vt)),Bs(Pe),U&&Ze.forEach(function(ye){ye.pin===U&&ye.vars.pinSpacing!==!1&&(ye._subPinOffset=!0)}),H&&le(Ae)):(k=Nl(h,M),k&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=k+Vt)),H&&(he={top:te.top+(ve?fe-Ue:De)+Vt,left:te.left+(ve?De:fe-Ue)+Vt,boxSizing:"border-box",position:"fixed"},he[kr]=he["max"+Zs]=Math.ceil(te.width)+Vt,he[Vr]=he["max"+eh]=Math.ceil(te.height)+Vt,he[Kn]=he[Kn+zo]=he[Kn+Fo]=he[Kn+ko]=he[Kn+Bo]="0",he[Ft]=F[Ft],he[Ft+zo]=F[Ft+zo],he[Ft+Fo]=F[Ft+Fo],he[Ft+ko]=F[Ft+ko],he[Ft+Bo]=F[Ft+Bo],ee=AT(q,he,w),gn&&le(0)),i?(at=i._initted,Wc(1),i.render(i.duration(),!0,!0),se=re(M.a)-Ne+E+yt,me=Math.abs(E-se)>1,H&&me&&ee.splice(ee.length-2,2),i.render(0,!0,!0),at||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Wc(0)):se=E,lt&&(lt.value?lt.style["overflow"+M.a.toUpperCase()]=lt.value:lt.style.removeProperty("overflow-"+M.a));else if(d&&le()&&!T)for(te=d.parentNode;te&&te!==At;)te._pinOffset&&(Ue-=te._pinOffset,Fe-=te._pinOffset),te=te.parentNode;_t&&_t.forEach(function(ye){return ye.revert(!1,!0)}),L.start=Ue,L.end=Fe,Ke=D=gn?Ae:le(),!T&&!gn&&(Ke<Ae&&le(Ae),L.scroll.rec=0),L.revert(!1,!0),Q=on(),ae&&($=-1,ae.restart(!0)),sn=0,i&&C&&(i._initted||Ye)&&i.progress()!==Ye&&i.progress(Ye||0,!0).render(i.time(),!0,!0),(zt||ue!==L.progress||T||m)&&(i&&!C&&i.totalProgress(T&&Ue<-.001&&!ue?Me.utils.normalize(Ue,Fe,0):ue,!0),L.progress=zt||(Ke-Ue)/E===ue?0:ue),h&&g&&(j._pinOffset=Math.round(L.progress*se)),K&&K.invalidate(),isNaN(kt)||(kt-=Me.getProperty(X,M.p),nt-=Me.getProperty(Re,M.p),qa(X,M,kt),qa(Xe,M,kt-(Ge||0)),qa(Re,M,nt),qa(ge,M,nt-(Ge||0))),zt&&!gn&&L.update(),u&&!gn&&!P&&(P=!0,u(L),P=!1)}},L.getVelocity=function(){return(le()-D)/(on()-Mo)*1e3||0},L.endAnimation=function(){ho(L.callbackAnimation),i&&(K?K.progress(1):i.paused()?C||ho(i,L.direction<0,1):ho(i,i.reversed()))},L.labelToScroll=function(ce){return i&&i.labels&&(Ue||L.refresh()||Ue)+i.labels[ce]/i.duration()*E||0},L.getTrailing=function(ce){var He=Ze.indexOf(L),Le=L.direction>0?Ze.slice(0,He).reverse():Ze.slice(He+1);return(Nn(ce)?Le.filter(function(Ge){return Ge.vars.preventOverlaps===ce}):Le).filter(function(Ge){return L.direction>0?Ge.end<=Ue:Ge.start>=Fe})},L.update=function(ce,He,Le){if(!(T&&!Le&&!ce)){var Ge=gn===!0?Ae:L.scroll(),Rt=ce?0:(Ge-Ue)/E,je=Rt<0?0:Rt>1?1:Rt||0,Mt=L.progress,zt,Tt,yt,mt,Pn,A,U,W;if(He&&(D=Ke,Ke=T?le():Ge,x&&(N=ct,ct=i&&!C?i.totalProgress():je)),p&&h&&!sn&&!ka&&ri&&(!je&&Ue<Ge+(Ge-D)/(on()-Mo)*p?je=1e-4:je===1&&Fe>Ge+(Ge-D)/(on()-Mo)*p&&(je=.9999)),je!==Mt&&L.enabled){if(zt=L.isActive=!!je&&je<1,Tt=!!Mt&&Mt<1,A=zt!==Tt,Pn=A||!!je!=!!Mt,L.direction=je>Mt?1:-1,L.progress=je,Pn&&!sn&&(yt=je&&!Mt?0:je===1?1:Mt===1?2:3,C&&(mt=!A&&Y[yt+1]!=="none"&&Y[yt+1]||Y[yt],W=i&&(mt==="complete"||mt==="reset"||mt in i))),S&&(A||W)&&(W||f||!i)&&(yn(S)?S(L):L.getTrailing(S).forEach(function(fe){return fe.endAnimation()})),C||(K&&!sn&&!ka?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",je,i._tTime/i._tDur):(K.vars.totalProgress=je,K.invalidate().restart())):i&&i.totalProgress(je,!!(sn&&(Q||ce)))),h){if(ce&&g&&(j.style[g+M.os2]=_e),!H)de(So(Ne+se*je));else if(Pn){if(U=!ce&&je>Mt&&Fe+1>Ge&&Ge+1>=yi(I,M),w)if(!ce&&(zt||U)){var k=Ui(h,!0),F=Ge-Ue;ep(h,At,k.top+(M===Ht?F:0)+Vt,k.left+(M===Ht?0:F)+Vt)}else ep(h,j);Bs(zt||U?ee:ne),me&&je<1&&zt||de(Ne+(je===1&&!U?se:0))}}x&&!Ee.tween&&!sn&&!ka&&ae.restart(!0),a&&(A||v&&je&&(je<1||!Xc))&&Qo(a.targets).forEach(function(fe){return fe.classList[zt||v?"add":"remove"](a.className)}),o&&!C&&!ce&&o(L),Pn&&!sn?(C&&(W&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(L)),(A||!Xc)&&(c&&A&&qc(L,c),B[yt]&&qc(L,B[yt]),v&&(je===1?L.kill(!1,1):B[yt]=0),A||(yt=je===1?1:3,B[yt]&&qc(L,B[yt]))),R&&!zt&&Math.abs(L.getVelocity())>(Eo(R)?R:2500)&&(ho(L.callbackAnimation),K?K.progress(1):ho(i,mt==="reverse"?1:!je,1))):C&&o&&!sn&&o(L)}if(Ve){var te=T?Ge/T.duration()*(T._caScrollDist||0):Ge;ke(te+(X._isFlipped?1:0)),Ve(te)}gt&&gt(-Ge/T.duration()*(T._caScrollDist||0))}},L.enable=function(ce,He){L.enabled||(L.enabled=!0,jt(I,"resize",To),z||jt(I,"scroll",Ms),oe&&jt(r,"refreshInit",oe),ce!==!1&&(L.progress=ue=0,Ke=D=$=le()),He!==!1&&L.refresh())},L.getTween=function(ce){return ce&&Ee?Ee.tween:K},L.setPositions=function(ce,He,Le,Ge){if(T){var Rt=T.scrollTrigger,je=T.duration(),Mt=Rt.end-Rt.start;ce=Rt.start+Mt*ce/je,He=Rt.start+Mt*He/je}L.refresh(!1,!1,{start:Xd(ce,Le&&!!L._startClamp),end:Xd(He,Le&&!!L._endClamp)},Ge),L.update()},L.adjustPinSpacing=function(ce){if(Pe&&ce){var He=Pe.indexOf(M.d)+1;Pe[He]=parseFloat(Pe[He])+ce+Vt,Pe[1]=parseFloat(Pe[1])+ce+Vt,Bs(Pe)}},L.disable=function(ce,He){if(L.enabled&&(ce!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,He||K&&K.pause(),Ae=0,we&&(we.uncache=1),oe&&Kt(r,"refreshInit",oe),ae&&(ae.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!z)){for(var Le=Ze.length;Le--;)if(Ze[Le].scroller===I&&Ze[Le]!==L)return;Kt(I,"resize",To),z||Kt(I,"scroll",Ms)}},L.kill=function(ce,He){L.disable(ce,He),K&&!He&&K.kill(),l&&delete rf[l];var Le=Ze.indexOf(L);Le>=0&&Ze.splice(Le,1),Le===_n&&ul>0&&_n--,Le=0,Ze.forEach(function(Ge){return Ge.scroller===L.scroller&&(Le=1)}),Le||gn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ce&&i.revert({kill:!1}),He||i.kill()),Xe&&[Xe,ge,X,Re].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),Vo===L&&(Vo=0),h&&(we&&(we.uncache=1),Le=0,Ze.forEach(function(Ge){return Ge.pin===h&&Le++}),Le||(we.spacer=0)),n.onKill&&n.onKill(L)},Ze.push(L),L.enable(!1,!1),xt&&xt(L),i&&i.add&&!E){var ot=L.update;L.update=function(){L.update=ot,Ue||Fe||L.refresh()},Me.delayedCall(.01,L.update),E=.01,Ue=Fe=0}else L.refresh();h&&ET()},r.register=function(n){return Ss||(Me=n||s_(),r_()&&window.document&&r.enable(),Ss=yo),Ss},r.defaults=function(n){if(n)for(var i in n)Wa[i]=n[i];return Wa},r.disable=function(n,i){yo=0,Ze.forEach(function(o){return o[i?"kill":"disable"](n)}),Kt(it,"wheel",Ms),Kt(Ct,"scroll",Ms),clearInterval(za),Kt(Ct,"touchcancel",mi),Kt(At,"touchstart",mi),Ha(Kt,Ct,"pointerdown,touchstart,mousedown",Yd),Ha(Kt,Ct,"pointerup,touchend,mouseup",qd),Il.kill(),Va(Kt);for(var s=0;s<Qe.length;s+=3)Ga(Kt,Qe[s],Qe[s+1]),Ga(Kt,Qe[s],Qe[s+2])},r.enable=function(){if(it=window,Ct=document,fi=Ct.documentElement,At=Ct.body,Me&&(Qo=Me.utils.toArray,Oo=Me.utils.clamp,tf=Me.core.context||mi,Wc=Me.core.suppressOverwrites||mi,jf=it.history.scrollRestoration||"auto",sf=it.pageYOffset,Me.core.globals("ScrollTrigger",r),At)){yo=1,Fs=document.createElement("div"),Fs.style.height="100vh",Fs.style.position="absolute",p_(),_T(),Ut.register(Me),r.isTouch=Ut.isTouch,er=Ut.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ef=Ut.isTouch===1,jt(it,"wheel",Ms),Qm=[it,Ct,fi,At],Me.matchMedia?(r.matchMedia=function(l){var c=Me.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Me.addEventListener("matchMediaInit",function(){return nh()}),Me.addEventListener("matchMediaRevert",function(){return h_()}),Me.addEventListener("matchMedia",function(){Nr(0,1),Zr("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return $c(),$c})):console.warn("Requires GSAP 3.11.0 or later"),$c(),jt(Ct,"scroll",Ms);var n=At.style,i=n.borderTopStyle,s=Me.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ui(At),Ht.m=Math.round(o.top+Ht.sc())||0,Mn.m=Math.round(o.left+Mn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),za=setInterval(jd,250),Me.delayedCall(.5,function(){return ka=0}),jt(Ct,"touchcancel",mi),jt(At,"touchstart",mi),Ha(jt,Ct,"pointerdown,touchstart,mousedown",Yd),Ha(jt,Ct,"pointerup,touchend,mouseup",qd),Qu=Me.utils.checkPrefix("transform"),fl.push(Qu),Ss=on(),Il=Me.delayedCall(.2,Nr).pause(),Es=[Ct,"visibilitychange",function(){var l=it.innerWidth,c=it.innerHeight;Ct.hidden?(Hd=l,Gd=c):(Hd!==l||Gd!==c)&&To()},Ct,"DOMContentLoaded",Nr,it,"load",Nr,it,"resize",To],Va(jt),Ze.forEach(function(l){return l.enable(0,1)}),a=0;a<Qe.length;a+=3)Ga(Kt,Qe[a],Qe[a+1]),Ga(Kt,Qe[a],Qe[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Xc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(za)||(za=i)&&setInterval(jd,i),"ignoreMobileResize"in n&&(ef=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Va(Kt)||Va(jt,n.autoRefreshEvents||"none"),t_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Sn(n),o=Qe.indexOf(s),a=Kr(s);~o&&Qe.splice(o,a?6:2),i&&(a?Ei.unshift(it,i,At,i,fi,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){Ze.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Nn(n)?Sn(n):n).getBoundingClientRect(),a=o[s?kr:Vr]*i||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},r.positionInViewport=function(n,i,s){Nn(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[s?kr:Vr],l=i==null?a/2:i in Ol?Ol[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},r.killAll=function(n){if(Ze.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=jr.killAll||[];jr={},i.forEach(function(s){return s()})}},r}();tt.version="3.12.5";tt.saveStyles=function(r){return r?Qo(r).forEach(function(e){if(e&&e.style){var t=Un.indexOf(e);t>=0&&Un.splice(t,5),Un.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),tf())}}):Un};tt.revert=function(r,e){return nh(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?To():(Ss||tt.register())&&Nr(!0)};tt.update=function(r){return++Qe.cache&&ki(r===!0?2:0)};tt.clearScrollMemory=d_;tt.maxScroll=function(r,e){return yi(r,e?Mn:Ht)};tt.getScrollFunc=function(r,e){return _r(Sn(r),e?Mn:Ht)};tt.getById=function(r){return rf[r]};tt.getAll=function(){return Ze.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!ri};tt.snapDirectional=th;tt.addEventListener=function(r,e){var t=jr[r]||(jr[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=jr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Me.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return yn(s)&&(s=s(),jt(tt,"refresh",function(){return s=e.batchMax()})),Qo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var np=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},jc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ut.isTouch?" pinch-zoom":""):"none",e===fi&&r(At,t)},$a={auto:1,scroll:1},RT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=on(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==At&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($a[(l=jn(s)).overflowY]||$a[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Kr(s)&&($a[(l=jn(s)).overflowY]||$a[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},__=function(e,t,n,i){return Ut.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&RT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&jt(Ct,Ut.eventTypes[0],rp,!1,!0)},onDisable:function(){return Kt(Ct,Ut.eventTypes[0],rp,!0)}})},CT=/(input|label|select|textarea)/i,ip,rp=function(e){var t=CT.test(e.target.tagName);(t||ip)&&(e._gsapAllow=!0,ip=t)},PT=function(e){Lr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Sn(e.target)||fi,u=Me.core.globals().ScrollSmoother,f=u&&u.get(),d=er&&(e.content&&Sn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=_r(c,Ht),g=_r(c,Mn),m=1,p=(Ut.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,_=0,y=yn(i)?function(){return i(a)}:function(){return i||2.8},v,x,w=__(c,e.type,!0,s),b=function(){return x=!1},T=mi,R=mi,S=function(){l=yi(c,Ht),R=Oo(er?1:0,l),n&&(T=Oo(0,yi(c,Mn))),v=Hr},M=function(){d._gsap.y=So(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},C=function(){if(x){requestAnimationFrame(b);var G=So(a.deltaY/2),ie=R(h.v-G);if(d&&ie!==h.v+h.offset){h.offset=ie-h.v;var L=So((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",h.cacheID=Qe.cache,ki()}return!0}h.offset&&M(),x=!0},I,O,z,H,B=function(){S(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return d&&Me.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return er&&Y.type==="touchmove"&&C()||m>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){x=!1;var Y=m;m=So((it.visualViewport&&it.visualViewport.scale||1)/p),I.pause(),Y!==m&&jc(c,m>1.01?!0:n?!1:"x"),O=g(),z=h(),S(),v=Hr},e.onRelease=e.onGestureStart=function(Y,G){if(h.offset&&M(),!G)H.restart(!0);else{Qe.cache++;var ie=y(),L,oe;n&&(L=g(),oe=L+ie*.05*-Y.velocityX/.227,ie*=np(g,L,oe,yi(c,Mn)),I.vars.scrollX=T(oe)),L=h(),oe=L+ie*.05*-Y.velocityY/.227,ie*=np(h,L,oe,yi(c,Ht)),I.vars.scrollY=R(oe),I.invalidate().duration(ie).play(.01),(er&&I.vars.scrollY>=l||L>=l-1)&&Me.to({},{onUpdate:B,duration:ie})}o&&o(Y)},e.onWheel=function(){I._ts&&I.pause(),on()-_>1e3&&(v=0,_=on())},e.onChange=function(Y,G,ie,L,oe){if(Hr!==v&&S(),G&&n&&g(T(L[2]===G?O+(Y.startX-Y.x):g()+G-L[1])),ie){h.offset&&M();var Ie=oe[2]===ie,ze=Ie?z+Y.startY-Y.y:h()+ie-oe[1],$=R(ze);Ie&&ze!==$&&(z+=$-ze),h($)}(ie||G)&&ki()},e.onEnable=function(){jc(c,n?!1:"x"),tt.addEventListener("refresh",B),jt(it,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){jc(c,!0),Kt(it,"resize",B),tt.removeEventListener("refresh",B),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ut(e),a.iOS=er,er&&!h()&&h(1),er&&Me.ticker.add(mi),H=a._dc,I=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:m_(h,h(),function(){return I.pause()})},onUpdate:ki,onComplete:H.vars.onComplete}),a};tt.sort=function(r){return Ze.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Ut(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return mn;if(r===!0&&mn)return mn.enable();if(r===!1){mn&&mn.kill(),mn=r;return}var e=r instanceof Ut?r:PT(r);return mn&&mn.target===e.target&&mn.kill(),Kr(e.target)&&(mn=e),e};tt.core={_getVelocityProp:Ju,_inputObserver:__,_scrollers:Qe,_proxies:Ei,bridge:{ss:function(){ri||Zr("scrollStart"),ri=on()},ref:function(){return sn}}};s_()&&Me.registerPlugin(tt);/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var LT=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,DT=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,IT=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,UT=/(^[#\.][a-z]|[a-y][a-z])/i,NT=Math.PI/180,OT=180/Math.PI,Ka=Math.sin,ja=Math.cos,ii=Math.abs,Ni=Math.sqrt,FT=Math.atan2,af=1e8,sp=function(e){return typeof e=="string"},g_=function(e){return typeof e=="number"},BT=function(e){return typeof e>"u"},zT={},kT={},Fl=1e5,x_=function(e){return Math.round((e+af)%1*Fl)/Fl||(e<0?0:1)},ht=function(e){return Math.round(e*Fl)/Fl||0},op=function(e){return Math.round(e*1e10)/1e10||0},ap=function(e,t,n,i){var s=e[t],o=i===1?6:lf(s,n,i);if((o||!i)&&o+n+2<s.length)return e.splice(t,0,s.slice(0,n+o+2)),s.splice(0,n+o),1},v_=function(e,t,n){var i=e.length,s=~~(n*i);if(e[s]>t){for(;--s&&e[s]>t;);s<0&&(s=0)}else for(;e[++s]<t&&s<i;);return s<i?s:i-1},VT=function(e,t){var n=e.length;for(e.reverse();n--;)e[n].reversed||WT(e[n])},lp=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},HT=function(e,t){var n=e.length,i=e[n-1]||[],s=i.length;n&&t[0]===i[s-2]&&t[1]===i[s-1]&&(t=i.concat(t.slice(2)),n--),e[n]=t};function dl(r){r=sp(r)&&UT.test(r)&&document.querySelector(r)||r;var e=r.getAttribute?r:0,t;return e&&(r=r.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[r],t&&!t._dirty?t:e._gsPath[r]=Bl(r)):r?sp(r)?Bl(r):g_(r[0])?[r]:r:console.warn("Expecting a <path> element or an SVG path data string")}function GT(r){for(var e=[],t=0;t<r.length;t++)e[t]=lp(r[t],r[t].slice(0));return lp(r,e)}function WT(r){var e=0,t;for(r.reverse();e<r.length;e+=2)t=r[e],r[e]=r[e+1],r[e+1]=t;r.reversed=!r.reversed}var XT=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(e.attributes),s=i.length,o;for(t=","+t+",";--s>-1;)o=i[s].nodeName.toLowerCase(),t.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,i[s].nodeValue);return n},YT={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},qT=function(e,t){for(var n=t?t.split(","):[],i={},s=n.length;--s>-1;)i[n[s]]=+e.getAttribute(n[s])||0;return i};function $T(r,e){var t=r.tagName.toLowerCase(),n=.552284749831,i,s,o,a,l,c,u,f,d,h,g,m,p,_,y,v,x,w,b,T,R,S;return t==="path"||!r.getBBox?r:(c=XT(r,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),S=qT(r,YT[t]),t==="rect"?(a=S.rx,l=S.ry||a,s=S.x,o=S.y,h=S.width-a*2,g=S.height-l*2,a||l?(m=s+a*(1-n),p=s+a,_=p+h,y=_+a*n,v=_+a,x=o+l*(1-n),w=o+l,b=w+g,T=b+l*n,R=b+l,i="M"+v+","+w+" V"+b+" C"+[v,T,y,R,_,R,_-(_-p)/3,R,p+(_-p)/3,R,p,R,m,R,s,T,s,b,s,b-(b-w)/3,s,w+(b-w)/3,s,w,s,x,m,o,p,o,p+(_-p)/3,o,_-(_-p)/3,o,_,o,y,o,v,x,v,w].join(",")+"z"):i="M"+(s+h)+","+o+" v"+g+" h"+-h+" v"+-g+" h"+h+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(a=l=S.r,f=a*n):(a=S.rx,l=S.ry,f=l*n),s=S.cx,o=S.cy,u=a*n,i="M"+(s+a)+","+o+" C"+[s+a,o+f,s+u,o+l,s,o+l,s-u,o+l,s-a,o+f,s-a,o,s-a,o-f,s-u,o-l,s,o-l,s+u,o-l,s+a,o-f,s+a,o].join(",")+"z"):t==="line"?i="M"+S.x1+","+S.y1+" L"+S.x2+","+S.y2:(t==="polyline"||t==="polygon")&&(d=(r.getAttribute("points")+"").match(DT)||[],s=d.shift(),o=d.shift(),i="M"+s+","+o+" L"+d.join(","),t==="polygon"&&(i+=","+s+","+o+"z")),c.setAttribute("d",S_(c._gsRawPath=Bl(i))),e&&r.parentNode&&(r.parentNode.insertBefore(c,r),r.parentNode.removeChild(r)),c)}function M_(r,e,t){var n=r[e],i=r[e+2],s=r[e+4],o;return n+=(i-n)*t,i+=(s-i)*t,n+=(i-n)*t,o=i+(s+(r[e+6]-s)*t-i)*t-n,n=r[e+1],i=r[e+3],s=r[e+5],n+=(i-n)*t,i+=(s-i)*t,n+=(i-n)*t,ht(FT(i+(s+(r[e+7]-s)*t-i)*t-n,o)*OT)}function y_(r,e,t){t=BT(t)?1:op(t)||0,e=op(e)||0;var n=Math.max(0,~~(ii(t-e)-1e-8)),i=GT(r);if(e>t&&(e=1-e,t=1-t,VT(i),i.totalLength=0),e<0||t<0){var s=Math.abs(~~Math.min(e,t))+1;e+=s,t+=s}i.totalLength||Gr(i);var o=t>1,a=cp(i,e,zT,!0),l=cp(i,t,kT),c=l.segment,u=a.segment,f=l.segIndex,d=a.segIndex,h=l.i,g=a.i,m=d===f,p=h===g&&m,_,y,v,x,w,b,T,R;if(o||n){for(_=f<d||m&&h<g||p&&l.t<a.t,ap(i,d,g,a.t)&&(d++,_||(f++,p?(l.t=(l.t-a.t)/(1-a.t),h=0):m&&(h-=g))),Math.abs(1-(t-e))<1e-5?f=d-1:!l.t&&f?f--:ap(i,f,h,l.t)&&_&&d++,a.t===1&&(d=(d+1)%i.length),w=[],b=i.length,T=1+b*n,R=d,T+=(b-d+f)%b,x=0;x<T;x++)HT(w,i[R++%b]);i=w}else if(v=l.t===1?6:lf(c,h,l.t),e!==t)for(y=lf(u,g,p?a.t/l.t:a.t),m&&(v+=y),c.splice(h+v+2),(y||g)&&u.splice(0,g+y),x=i.length;x--;)(x<d||x>f)&&i.splice(x,1);else c.angle=M_(c,h+v,0),h+=v,a=c[h],l=c[h+1],c.length=c.totalLength=0,c.totalPoints=i.totalPoints=8,c.push(a,l,a,l,a,l,a,l);return i.totalLength=0,i}function KT(r,e,t){e=e||0,r.samples||(r.samples=[],r.lookup=[]);var n=~~r.resolution||12,i=1/n,s=r.length,o=r[e],a=r[e+1],l=e?e/6*n:0,c=r.samples,u=r.lookup,f=(e?r.minLength:af)||af,d=c[l+t*n-1],h=e?c[l-1]:0,g,m,p,_,y,v,x,w,b,T,R,S,M,C,I,O,z;for(c.length=u.length=0,m=e+2;m<s;m+=6){if(p=r[m+4]-o,_=r[m+2]-o,y=r[m]-o,w=r[m+5]-a,b=r[m+3]-a,T=r[m+1]-a,v=x=R=S=0,ii(p)<.01&&ii(w)<.01&&ii(y)+ii(T)<.01)r.length>8&&(r.splice(m,6),m-=6,s-=6);else for(g=1;g<=n;g++)C=i*g,M=1-C,v=x-(x=(C*C*p+3*M*(C*_+M*y))*C),R=S-(S=(C*C*w+3*M*(C*b+M*T))*C),O=Ni(R*R+v*v),O<f&&(f=O),h+=O,c[l++]=h;o+=p,a+=w}if(d)for(d-=h;l<c.length;l++)c[l]+=d;if(c.length&&f){if(r.totalLength=z=c[c.length-1]||0,r.minLength=f,z/f<9999)for(O=I=0,g=0;g<z;g+=f)u[O++]=c[I]<g?++I:I}else r.totalLength=c[0]=0;return e?h-c[e/2-1]:h}function Gr(r,e){var t,n,i;for(i=t=n=0;i<r.length;i++)r[i].resolution=~~e||12,n+=r[i].length,t+=KT(r[i]);return r.totalPoints=n,r.totalLength=t,r}function lf(r,e,t){if(t<=0||t>=1)return 0;var n=r[e],i=r[e+1],s=r[e+2],o=r[e+3],a=r[e+4],l=r[e+5],c=r[e+6],u=r[e+7],f=n+(s-n)*t,d=s+(a-s)*t,h=i+(o-i)*t,g=o+(l-o)*t,m=f+(d-f)*t,p=h+(g-h)*t,_=a+(c-a)*t,y=l+(u-l)*t;return d+=(_-d)*t,g+=(y-g)*t,r.splice(e+2,4,ht(f),ht(h),ht(m),ht(p),ht(m+(d-m)*t),ht(p+(g-p)*t),ht(d),ht(g),ht(_),ht(y)),r.samples&&r.samples.splice(e/6*r.resolution|0,0,0,0,0,0,0,0),6}function cp(r,e,t,n){t=t||{},r.totalLength||Gr(r),(e<0||e>1)&&(e=x_(e));var i=0,s=r[0],o,a,l,c,u,f,d;if(!e)d=f=i=0,s=r[0];else if(e===1)d=1,i=r.length-1,s=r[i],f=s.length-8;else{if(r.length>1){for(l=r.totalLength*e,u=f=0;(u+=r[f++].totalLength)<l;)i=f;s=r[i],c=u-s.totalLength,e=(l-c)/(u-c)||0}o=s.samples,a=s.resolution,l=s.totalLength*e,f=s.lookup.length?s.lookup[~~(l/s.minLength)]||0:v_(o,l,e),c=f?o[f-1]:0,u=o[f],u<l&&(c=u,u=o[++f]),d=1/a*((l-c)/(u-c)+f%a),f=~~(f/a)*6,n&&d===1&&(f+6<s.length?(f+=6,d=0):i+1<r.length&&(f=d=0,s=r[++i]))}return t.t=d,t.i=f,t.path=r,t.segment=s,t.segIndex=i,t}function up(r,e,t,n){var i=r[0],s=n||{},o,a,l,c,u,f,d,h,g;if((e<0||e>1)&&(e=x_(e)),i.lookup||Gr(r),r.length>1){for(l=r.totalLength*e,u=f=0;(u+=r[f++].totalLength)<l;)i=r[f];c=u-i.totalLength,e=(l-c)/(u-c)||0}return o=i.samples,a=i.resolution,l=i.totalLength*e,f=i.lookup.length?i.lookup[e<1?~~(l/i.minLength):i.lookup.length-1]||0:v_(o,l,e),c=f?o[f-1]:0,u=o[f],u<l&&(c=u,u=o[++f]),d=1/a*((l-c)/(u-c)+f%a)||0,g=1-d,f=~~(f/a)*6,h=i[f],s.x=ht((d*d*(i[f+6]-h)+3*g*(d*(i[f+4]-h)+g*(i[f+2]-h)))*d+h),s.y=ht((d*d*(i[f+7]-(h=i[f+1]))+3*g*(d*(i[f+5]-h)+g*(i[f+3]-h)))*d+h),t&&(s.angle=i.totalLength?M_(i,f,d>=1?1-1e-9:d||1e-9):i.angle||0),s}function bo(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,f,d;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)f=l[u],d=l[u+1],l[u]=f*e+d*n+s,l[u+1]=f*t+d*i+o;return r._dirty=1,r}function jT(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=ii(t),n=ii(n);var c=i%360*NT,u=ja(c),f=Ka(c),d=Math.PI,h=d*2,g=(r-a)/2,m=(e-l)/2,p=u*g+f*m,_=-f*g+u*m,y=p*p,v=_*_,x=y/(t*t)+v/(n*n);x>1&&(t=Ni(x)*t,n=Ni(x)*n);var w=t*t,b=n*n,T=(w*b-w*v-b*y)/(w*v+b*y);T<0&&(T=0);var R=(s===o?-1:1)*Ni(T),S=R*(t*_/n),M=R*-(n*p/t),C=(r+a)/2,I=(e+l)/2,O=C+(u*S-f*M),z=I+(f*S+u*M),H=(p-S)/t,B=(_-M)/n,Y=(-p-S)/t,G=(-_-M)/n,ie=H*H+B*B,L=(B<0?-1:1)*Math.acos(H/Ni(ie)),oe=(H*G-B*Y<0?-1:1)*Math.acos((H*Y+B*G)/Ni(ie*(Y*Y+G*G)));isNaN(oe)&&(oe=d),!o&&oe>0?oe-=h:o&&oe<0&&(oe+=h),L%=h,oe%=h;var Ie=Math.ceil(ii(oe)/(h/4)),ze=[],$=oe/Ie,Q=4/3*Ka($/2)/(1+ja($/2)),ue=u*t,le=f*t,Ee=f*-n,we=u*n,Te;for(Te=0;Te<Ie;Te++)i=L+Te*$,p=ja(i),_=Ka(i),H=ja(i+=$),B=Ka(i),ze.push(p-Q*_,_+Q*p,H+Q*B,B-Q*H,H,B);for(Te=0;Te<ze.length;Te+=2)p=ze[Te],_=ze[Te+1],ze[Te]=p*ue+_*Ee+O,ze[Te+1]=p*le+_*we+z;return ze[Te-2]=a,ze[Te-1]=l,ze}}function Bl(r){var e=(r+"").replace(IT,function(S){var M=+S;return M<1e-4&&M>-1e-4?0:M}).match(LT)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,f,d,h,g,m,p,_,y,v,x,w,b,T,R=function(M,C,I,O){y=(I-M)/3,v=(O-C)/3,m.push(M+y,C+v,I-y,O-v,I,O)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(w=h,isNaN(e[c])?(h=e[c].toUpperCase(),g=h!==e[c]):c--,f=+e[c+1],d=+e[c+2],g&&(f+=n,d+=i),c||(p=f,_=d),h==="M")m&&(m.length<8?t.length-=1:a+=m.length),n=p=f,i=_=d,m=[f,d],t.push(m),c+=2,h="L";else if(h==="C")m||(m=[0,0]),g||(n=i=0),m.push(f,d,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(h==="S")y=n,v=i,(w==="C"||w==="S")&&(y+=n-m[m.length-4],v+=i-m[m.length-3]),g||(n=i=0),m.push(y,v,f,d,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(h==="Q")y=n+(f-n)*s,v=i+(d-i)*s,g||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,m.push(y,v,n+(f-n)*s,i+(d-i)*s,n,i),c+=4;else if(h==="T")y=n-m[m.length-4],v=i-m[m.length-3],m.push(n+y,i+v,f+(n+y*1.5-f)*s,d+(i+v*1.5-d)*s,n=f,i=d),c+=2;else if(h==="H")R(n,i,n=f,i),c+=1;else if(h==="V")R(n,i,n,i=f+(g?i-n:0)),c+=1;else if(h==="L"||h==="Z")h==="Z"&&(f=p,d=_,m.closed=!0),(h==="L"||ii(n-f)>.5||ii(i-d)>.5)&&(R(n,i,f,d),h==="L"&&(c+=2)),n=f,i=d;else if(h==="A"){if(b=e[c+4],T=e[c+5],y=e[c+6],v=e[c+7],u=7,b.length>1&&(b.length<3?(v=y,y=T,u--):(v=T,y=b.substr(2),u-=2),T=b.charAt(1),b=b.charAt(0)),x=jT(n,i,+e[c+1],+e[c+2],+e[c+3],+b,+T,(g?n:0)+y*1,(g?i:0)+v*1),c+=u,x)for(u=0;u<x.length;u++)m.push(x[u]);n=m[m.length-2],i=m[m.length-1]}else console.log(l);return c=m.length,c<6?(t.pop(),c=0):m[0]===m[c-2]&&m[1]===m[c-1]&&(m.closed=!0),t.totalPoints=a+c,t}function ZT(r,e){e===void 0&&(e=1);for(var t=r[0],n=0,i=[t,n],s=2;s<r.length;s+=2)i.push(t,n,r[s],n=(r[s]-t)*e/2,t=r[s],-n);return i}function cf(r,e){ii(r[0]-r[2])<1e-4&&ii(r[1]-r[3])<1e-4&&(r=r.slice(2));var t=r.length-2,n=+r[0],i=+r[1],s=+r[2],o=+r[3],a=[n,i,n,i],l=s-n,c=o-i,u=Math.abs(r[t]-n)<.001&&Math.abs(r[t+1]-i)<.001,f,d,h,g,m,p,_,y,v,x,w,b,T,R,S;for(u&&(r.push(s,o),s=n,o=i,n=r[t-2],i=r[t-1],r.unshift(n,i),t+=4),e=e||e===0?+e:1,h=2;h<t;h+=2)f=n,d=i,n=s,i=o,s=+r[h+2],o=+r[h+3],!(n===s&&i===o)&&(g=l,m=c,l=s-n,c=o-i,p=Ni(g*g+m*m),_=Ni(l*l+c*c),y=Ni(Math.pow(l/_+g/p,2)+Math.pow(c/_+m/p,2)),v=(p+_)*e*.25/y,x=n-(n-f)*(p?v/p:0),w=n+(s-n)*(_?v/_:0),b=n-(x+((w-x)*(p*3/(p+_)+.5)/4||0)),T=i-(i-d)*(p?v/p:0),R=i+(o-i)*(_?v/_:0),S=i-(T+((R-T)*(p*3/(p+_)+.5)/4||0)),(n!==f||i!==d)&&a.push(ht(x+b),ht(T+S),ht(n),ht(i),ht(w+b),ht(R+S)));return n!==s||i!==o||a.length<4?a.push(ht(s),ht(o),ht(s),ht(o)):a.length-=2,a.length===2?a.push(n,i,n,i,n,i):u&&(a.splice(0,6),a.length=a.length-6),a}function S_(r){g_(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+ht(o[0])+","+ht(o[1])+" C",n=o.length,s=2;s<n;s++)e+=ht(o[s++])+","+ht(o[s++])+" "+ht(o[s++])+","+ht(o[s++])+" "+ht(o[s++])+","+ht(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zi,Wr,ih,Zl,Ao,pl,zl,Ho,hi="transform",uf=hi+"Origin",E_,T_=function(e){var t=e.ownerDocument||e;for(!(hi in e.style)&&("msTransform"in e.style)&&(hi="msTransform",uf=hi+"Origin");t.parentNode&&(t=t.parentNode););if(Wr=window,zl=new ta,t){zi=t,ih=t.documentElement,Zl=t.body,Ho=zi.createElementNS("http://www.w3.org/2000/svg","g"),Ho.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),E_=i.offsetParent!==n,s.removeChild(n))}return t},JT=function(e){for(var t,n;e&&e!==Zl;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},b_=[],A_=[],QT=function(){return Wr.pageYOffset||zi.scrollTop||ih.scrollTop||Zl.scrollTop||0},eb=function(){return Wr.pageXOffset||zi.scrollLeft||ih.scrollLeft||Zl.scrollLeft||0},rh=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},tb=function r(e){if(Wr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Zc=function r(e,t){if(e.parentNode&&(zi||T_(e))){var n=rh(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=zi.createElementNS?zi.createElementNS(i.replace(/^https/,"http"),s):zi.createElement(s);return t&&(n?(pl||(pl=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),pl.appendChild(c)):(Ao||(Ao=r(e),Ao.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",Ao.appendChild(c))),c}throw"Need document and parent."},nb=function(e){for(var t=new ta,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},ib=function(e){var t=e.getCTM(),n;return t||(n=e.style[hi],e.style[hi]="none",e.appendChild(Ho),t=Ho.getCTM(),e.removeChild(Ho),n?e.style[hi]=n:e.style.removeProperty(hi.replace(/([A-Z])/g,"-$1").toLowerCase())),t||zl.clone()},rb=function(e,t){var n=rh(e),i=e===n,s=n?b_:A_,o=e.parentNode,a,l,c,u,f,d;if(e===Wr)return e;if(s.length||s.push(Zc(e,1),Zc(e,2),Zc(e,3)),a=n?pl:Ao,n)i?(c=ib(e),u=-c.e/c.a,f=-c.f/c.d,l=zl):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?nb(l):l.getItem(0).matrix:zl,u=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new ta,u=f=0),t&&e.tagName.toLowerCase()==="g"&&(u=f=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+u)+","+(l.f+f)+")");else{if(u=f=0,E_)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Wr.getComputedStyle(c)[hi]+"").length>4&&(u=c.offsetLeft,f=c.offsetTop,c=0);if(d=Wr.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)u+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-f+"px",c.left=e.offsetLeft-u+"px",c[hi]=d[hi],c[uf]=d[uf],c.position=d.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},Jc=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},ta=function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),Jc(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return Jc(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=n.a,f=n.c,d=n.b,h=n.d,g=n.e,m=n.f;return Jc(this,u*i+d*o,u*s+d*a,f*i+h*o,f*s+h*a,l+g*i+m*o,c+g*s+m*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,u=this.d,f=this.e,d=this.f;return i.x=s*a+o*c+f||0,i.y=s*l+o*u+d||0,i},r}();function zs(r,e,t,n){if(!r||!r.parentNode||(zi||T_(r)).documentElement===r)return new ta;var i=JT(r),s=rh(r),o=s?b_:A_,a=rb(r,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),f=a.parentNode,d=!n&&tb(r),h=new ta((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(d?0:eb()),l.top+(d?0:QT()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?h.inverse():h}/*!
 * MotionPathPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sb="x,translateX,left,marginLeft,xPercent".split(","),ob="y,translateY,top,marginTop,yPercent".split(","),ab=Math.PI/180,Zn,w_,Ts,ff,Qc,fp,lb=function(){return Zn||typeof window<"u"&&(Zn=window.gsap)&&Zn.registerPlugin&&Zn},po=function(e,t,n,i){for(var s=t.length,o=i===2?0:i,a=0;a<s;a++)e[o]=parseFloat(t[a][n]),i===2&&(e[o+1]=0),o+=2;return e},Cs=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},R_=function(e){var t=e[0],n=e[1],i;for(i=2;i<e.length;i+=2)t=e[i]+=t,n=e[i+1]+=n},hp=function(e,t,n,i,s,o,a,l,c){if(a.type==="cubic")t=[t];else{a.fromCurrent!==!1&&t.unshift(Cs(n,i,l),s?Cs(n,s,c):0),a.relative&&R_(t);var u=s?cf:ZT;t=[u(t,a.curviness)]}return t=o(C_(t,n,a)),kl(e,n,i,t,"x",l),s&&kl(e,n,s,t,"y",c),Gr(t,a.resolution||(a.curviness===0?20:12))},cb=function(e){return e},ub=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,dp=function(e,t,n){var i=zs(e),s=0,o=0,a;return(e.tagName+"").toLowerCase()==="svg"?(a=e.viewBox.baseVal,a.width||(a={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):a=t&&e.getBBox&&e.getBBox(),t&&t!=="auto"&&(s=t.push?t[0]*(a?a.width:e.offsetWidth||0):t.x,o=t.push?t[1]*(a?a.height:e.offsetHeight||0):t.y),n.apply(s||o?i.apply({x:s,y:o}):{x:i.e,y:i.f})},hf=function(e,t,n,i){var s=zs(e.parentNode,!0,!0),o=s.clone().multiply(zs(t)),a=dp(e,n,s),l=dp(t,i,s),c=l.x,u=l.y,f;return o.e=o.f=0,i==="auto"&&t.getTotalLength&&t.tagName.toLowerCase()==="path"&&(f=t.getAttribute("d").match(ub)||[],f=o.apply({x:+f[0],y:+f[1]}),c+=f.x,u+=f.y),f&&(f=o.apply(t.getBBox()),c-=f.x,u-=f.y),o.e=c-a.x,o.f=u-a.y,o},C_=function(e,t,n){var i=n.align,s=n.matrix,o=n.offsetX,a=n.offsetY,l=n.alignOrigin,c=e[0][0],u=e[0][1],f=Cs(t,"x"),d=Cs(t,"y"),h,g,m;return!e||!e.length?dl("M0,0L0,0"):(i&&(i==="self"||(h=ff(i)[0]||t)===t?bo(e,1,0,0,1,f-c,d-u):(l&&l[2]!==!1?Zn.set(t,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[Cs(t,"xPercent")/-100,Cs(t,"yPercent")/-100],g=hf(t,h,l,"auto"),m=g.apply({x:c,y:u}),bo(e,g.a,g.b,g.c,g.d,f+g.e-(m.x-g.e),d+g.f-(m.y-g.f)))),s?bo(e,s.a,s.b,s.c,s.d,s.e,s.f):(o||a)&&bo(e,1,0,0,1,o||0,a||0),e)},kl=function(e,t,n,i,s,o){var a=t._gsap,l=a.harness,c=l&&l.aliases&&l.aliases[n],u=c&&c.indexOf(",")<0?c:n,f=e._pt=new w_(e._pt,t,u,0,0,cb,0,a.set(t,u,e));f.u=Ts(a.get(t,u,o))||0,f.path=i,f.pp=s,e._props.push(u)},fb=function(e,t){return function(n){return e||t!==1?y_(n,e,t):n}},P_={version:"3.12.5",name:"motionPath",register:function(e,t,n){Zn=e,Ts=Zn.utils.getUnit,ff=Zn.utils.toArray,Qc=Zn.core.getStyleSaver,fp=Zn.core.reverting||function(){},w_=n},init:function(e,t,n){if(!Zn)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof t=="object"&&!t.style)||!t.path)&&(t={path:t});var i=[],s=t,o=s.path,a=s.autoRotate,l=s.unitX,c=s.unitY,u=s.x,f=s.y,d=o[0],h=fb(t.start,"end"in t?t.end:1),g,m;if(this.rawPaths=i,this.target=e,this.tween=n,this.styles=Qc&&Qc(e,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=Ts(e._gsap.get(e,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof d!="number"){for(m in d)!u&&~sb.indexOf(m)?u=m:!f&&~ob.indexOf(m)&&(f=m);u&&f?i.push(hp(this,po(po([],o,u,0),o,f,1),e,u,f,h,t,l||Ts(o[0][u]),c||Ts(o[0][f]))):u=f=0;for(m in d)m!==u&&m!==f&&i.push(hp(this,po([],o,m,2),e,m,0,h,t,Ts(o[0][m])))}else g=h(C_(dl(t.path),e,t)),Gr(g,t.resolution),i.push(g),kl(this,e,t.x||"x",g,"x",t.unitX||"px"),kl(this,e,t.y||"y",g,"y",t.unitY||"px")},render:function(e,t){var n=t.rawPaths,i=n.length,s=t._pt;if(t.tween._time||!fp()){for(e>1?e=1:e<0&&(e=0);i--;)up(n[i],e,!i&&t.rotate,n[i]);for(;s;)s.set(s.t,s.p,s.path[s.pp]+s.u,s.d,e),s=s._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?ab:1)+t.rOffset+t.ru,t,e)}else t.styles.revert()},getLength:function(e){return Gr(dl(e)).totalLength},sliceRawPath:y_,getRawPath:dl,pointsToSegment:cf,stringToRawPath:Bl,rawPathToString:S_,transformRawPath:bo,getGlobalMatrix:zs,getPositionOnPath:up,cacheRawPathMeasurements:Gr,convertToPath:function(e,t){return ff(e).map(function(n){return $T(n,t!==!1)})},convertCoordinates:function(e,t,n){var i=zs(t,!0,!0).multiply(zs(e));return n?i.apply(n):i},getAlignMatrix:hf,getRelativePosition:function(e,t,n,i){var s=hf(e,t,n,i);return{x:s.e,y:s.f}},arrayToRawPath:function(e,t){t=t||{};var n=po(po([],e,t.x||"x",0),e,t.y||"y",1);return t.relative&&R_(n),[t.type==="cubic"?n:cf(n,t.curviness)]}};lb()&&Zn.registerPlugin(P_);const hb=Math.PI/180;function ks(r){return r*hb}const db=""+new URL("earth-Dbac-G85.jpg",import.meta.url).href,pb=""+new URL("mars-IPSXQqAB.png",import.meta.url).href;Kf.registerPlugin(tt,P_);const Yi=new Sl,Jl=new Wp({alpha:!0,antialias:!1}),di=new Fn(50,window.innerWidth/window.innerHeight,.01,1e3);di.position.set(2.238,2.147,-1.64);di.rotation.set(ks(-127.37),ks(39.63),ks(140.13));Yi.background=new rt("#000");Jl.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Jl.domElement);new CS(2);Yi.add(di);const L_=new dS,D_=new Af(1,32,16),mb=L_.load(db),_b=new Xl({map:mb}),I_=new ei(D_,_b);Yi.add(I_);const gb=L_.load(pb),xb=new Xl({map:gb}),sh=new ei(D_,xb);sh.position.set(-3.463,2.224,-2.864);Yi.add(sh);const U_=new gS("red",.95),vb=new RS(U_,.5);Yi.add(vb);Yi.add(U_);const oh=new Rn,Ql=new Xp;Ql.size=.01;Ql.sizeAttenuation=!0;Ql.color=new rt("yellow");const ah=1100,N_=new Float32Array(ah*3),O_=new Float32Array(ah*3);for(let r=0;r<ah;r++)O_[r]=(Math.random()-.5)*100,N_[r]=Math.random()*5;oh.setAttribute("position",new Wt(O_,3));oh.setAttribute("size",new Wt(N_,3));const Mb=new lS(oh,Ql);Yi.add(Mb);new wS;var yb=Kf.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:3},repeat:!1});yb.to(di.position,{motionPath:{path:[{x:5.454,y:5.234,z:-3.997}]}},"<").to(di.rotation,{x:ks(-90),y:ks(88.57),z:ks(90)},"<").to(di.position,{motionPath:{path:[{x:-.663,y:2.224,z:-2.846}],autoRotate:!1}});function F_(){requestAnimationFrame(F_),Jl.render(Yi,di),I_.rotation.y+=.008,sh.rotation.y+=.008}F_();window.addEventListener("mousemove",r=>{const e=-r.movementY*Math.PI*.008/180,t=-r.movementX*Math.PI*.008/180;di.rotateX(e),di.rotateY(t)});window.addEventListener("resize",()=>{di.aspect=window.innerWidth/window.innerHeight,di.updateProjectionMatrix(),Jl.setSize(window.innerWidth,window.innerHeight)});function Sb(){new Lf().parse(Yi,function(e){console.log(e),downloadJSON(e)},function(e){console.log(e)},{})}document.getElementById("download").addEventListener("click",Sb());
