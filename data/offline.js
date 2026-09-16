window.__cityAssets=Object.create(null);
window.__cityAsset=key=>{const url=window.__cityAssets[key];if(!url)throw new Error('缺少游戏资源：'+key);return url;};
window.__cityRegister=(key,type,chunks)=>{const parts=chunks.map(chunk=>{const s=atob(chunk),bytes=new Uint8Array(s.length);for(let i=0;i<s.length;i++)bytes[i]=s.charCodeAt(i);return bytes;});window.__cityAssets[key]=URL.createObjectURL(new Blob(parts,{type}));};
window.addEventListener('error',event=>{const e=document.getElementById('boot-error');if(e){e.hidden=false;e.textContent='启动失败：'+(event.message||'资源未能加载，请完整解压后打开 index.html。');}});
