/**
 * TinyMCE version 6.1.0 (2022-06-29)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.Env");const t=e=>a=>a.options.get(e),r=t("pagebreak_separator"),n=t("pagebreak_split_block"),o="mce-pagebreak",s=e=>{const t=`<img src="${a.transparentSrc}" class="mce-pagebreak" data-mce-resize="false" data-mce-placeholder />`;return e?`<p>${t}</p>`:t};e.add("pagebreak",(e=>{(e=>{const a=e.options.register;a("pagebreak_separator",{processor:"string",default:"\x3c!-- pagebreak --\x3e"}),a("pagebreak_split_block",{processor:"boolean",default:!1})})(e),(e=>{e.addCommand("mcePageBreak",(()=>{e.insertContent(s(n(e)))}))})(e),(e=>{const a=()=>e.execCommand("mcePageBreak");e.ui.registry.addButton("pagebreak",{icon:"page-break",tooltip:"Page break",onAction:a}),e.ui.registry.addMenuItem("pagebreak",{text:"Page break",icon:"page-break",onAction:a})})(e),(e=>{const a=r(e),t=()=>n(e),c=new RegExp(a.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,(e=>"\\"+e)),"gi");e.on("BeforeSetContent",(e=>{e.content=e.content.replace(c,s(t()))})),e.on("PreInit",(()=>{e.serializer.addNodeFilter("img",(r=>{let n,s,c=r.length;for(;c--;)if(n=r[c],s=n.attr("class"),s&&-1!==s.indexOf(o)){const r=n.parent;if(e.schema.getBlockElements()[r.name]&&t()){r.type=3,r.value=a,r.raw=!0,n.remove();continue}n.type=3,n.value=a,n.raw=!0}}))}))})(e),(e=>{e.on("ResolveName",(a=>{"IMG"===a.target.nodeName&&e.dom.hasClass(a.target,o)&&(a.name="pagebreak")}))})(e)}))}();