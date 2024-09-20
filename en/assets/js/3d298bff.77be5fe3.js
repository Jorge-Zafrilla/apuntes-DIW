"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3179],{8976:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=r(4848),a=r(8453);const o={sidebar_label:"Formularios",sidebar_position:1},i="Formularios",l={id:"Apuntes/Tema 9/Tema 9 Formularios",title:"Formularios",description:"Tabla de Contenidos",source:"@site/docs/Apuntes/Tema 9/Tema 9 Formularios.md",sourceDirName:"Apuntes/Tema 9",slug:"/Apuntes/Tema 9/Tema 9 Formularios",permalink:"/apuntes-DIW/en/docs/Apuntes/Tema 9/Tema 9 Formularios",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Formularios",sidebar_position:1},sidebar:"apuntesSidebar",previous:{title:"R.A. 9 Contenido interactivo, formularios y jQuery",permalink:"/apuntes-DIW/en/docs/category/ra-9-contenido-interactivo-formularios-y-jquery"},next:{title:"jQuery",permalink:"/apuntes-DIW/en/docs/Apuntes/Tema 9/Tema 9 JQuery"}},t={},d=[{value:"Tabla de Contenidos",id:"tabla-de-contenidos",level:2},{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Atributos de la etiqueta <code>&lt;form&gt;</code>",id:"atributos-de-la-etiqueta-form",level:3},{value:"Ejemplo:",id:"ejemplo",level:4},{value:"Agrupaci\xf3n de Campos",id:"agrupaci\xf3n-de-campos",level:2},{value:"Ejemplo:",id:"ejemplo-1",level:4},{value:"Tipos de Campos <code>&lt;input&gt;</code>",id:"tipos-de-campos-input",level:2},{value:"Ejemplo:",id:"ejemplo-2",level:4},{value:"Nuevos Campos en HTML5",id:"nuevos-campos-en-html5",level:2},{value:"Fechas:",id:"fechas",level:3},{value:"Ejemplo:",id:"ejemplo-3",level:4},{value:"N\xfameros:",id:"n\xfameros",level:3},{value:"Ejemplo:",id:"ejemplo-4",level:4},{value:"Otros tipos:",id:"otros-tipos",level:3},{value:"Ejemplo:",id:"ejemplo-5",level:4},{value:"Otros Elementos Importantes",id:"otros-elementos-importantes",level:2},{value:"Ejemplo:",id:"ejemplo-6",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"formularios",children:"Formularios"}),"\n",(0,s.jsx)(n.h2,{id:"tabla-de-contenidos",children:"Tabla de Contenidos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#introducci%C3%B3n",children:"Introducci\xf3n"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#agrupaci%C3%B3n-de-campos",children:"Agrupaci\xf3n de Campos"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#tipos-de-campos-input",children:["Tipos de Campos ",(0,s.jsx)(n.code,{children:"<input>"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#nuevos-campos-en-html5",children:"Nuevos Campos en HTML5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#otros-elementos-importantes",children:"Otros Elementos Importantes"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"Los formularios son una parte esencial de la interacci\xf3n en sitios web. Permiten a los usuarios enviar datos a un servidor, donde ser\xe1n procesados para diferentes prop\xf3sitos, como registrarse, iniciar sesi\xf3n o realizar una b\xfasqueda."}),"\n",(0,s.jsxs)(n.p,{children:["Un formulario se define entre las etiquetas ",(0,s.jsx)(n.code,{children:"<form></form>"}),", y dentro de \xe9l se incluyen diferentes elementos de entrada de datos."]}),"\n",(0,s.jsxs)(n.h3,{id:"atributos-de-la-etiqueta-form",children:["Atributos de la etiqueta ",(0,s.jsx)(n.code,{children:"<form>"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"action"}),": Define la URL a la que se enviar\xe1n los datos del formulario. Si no se especifica, se env\xeda a la misma p\xe1gina."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"method"}),": Puede ser ",(0,s.jsx)(n.code,{children:"GET"})," o ",(0,s.jsx)(n.code,{children:"POST"}),". ",(0,s.jsx)(n.code,{children:"GET"})," env\xeda los datos en la URL, mientras que ",(0,s.jsx)(n.code,{children:"POST"})," los env\xeda en el cuerpo de la solicitud, siendo m\xe1s seguro para datos sensibles."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<form action="procesar.php" method="POST">\r\n  \x3c!-- Campos del formulario --\x3e\r\n</form>\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"agrupaci\xf3n-de-campos",children:"Agrupaci\xf3n de Campos"}),"\n",(0,s.jsxs)(n.p,{children:["Para organizar los formularios, se puede usar la etiqueta ",(0,s.jsx)(n.code,{children:"<fieldset>"})," para agrupar varios campos, a\xf1adiendo un t\xedtulo descriptivo con ",(0,s.jsx)(n.code,{children:"<legend>"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<fieldset>\r\n  <legend>Informaci\xf3n Personal</legend>\r\n  <label for="nombre">Nombre:</label>\r\n  <input type="text" id="nombre" name="nombre">\r\n</fieldset>\n'})}),"\n",(0,s.jsxs)("fieldset",{children:[(0,s.jsx)("legend",{children:"Informaci\xf3n Personal"}),(0,s.jsx)("label",{for:"nombre",children:"Nombre:"}),(0,s.jsx)("input",{type:"text",id:"nombre",name:"nombre"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h2,{id:"tipos-de-campos-input",children:["Tipos de Campos ",(0,s.jsx)(n.code,{children:"<input>"})]}),"\n",(0,s.jsxs)(n.p,{children:["La etiqueta ",(0,s.jsx)(n.code,{children:"<input>"})," define diferentes tipos de entradas. Algunos ejemplos comunes incluyen:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"text"}),": Entrada de texto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"password"}),": Texto oculto (generalmente para contrase\xf1as)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"submit"}),": Bot\xf3n para enviar el formulario."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"reset"}),": Bot\xf3n para resetear los valores del formulario."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"radio"}),": Bot\xf3n de opci\xf3n exclusiva (debe compartir el mismo name para que solo se seleccione uno)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"checkbox"}),": Selecci\xf3n m\xfaltiple."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"button"}),": Bot\xf3n sin comportamiento definido (requiere JavaScript)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<label for="nombre">Nombre:</label>\r\n<input type="text" name="usuario">\r\n<label for="password">Contrase\xf1a:</label>\r\n<input type="password" name="clave">\r\n<input type="submit" value="Enviar">\r\n<input type="reset" value="Limpiar">\n'})}),"\n",(0,s.jsx)("label",{for:"nombre",children:"Nombre:"}),"\n",(0,s.jsx)("input",{type:"text",name:"usuario"}),"\n",(0,s.jsx)("label",{for:"password",children:"Contrase\xf1a:"}),"\n",(0,s.jsx)("input",{type:"password",name:"clave"}),"\n",(0,s.jsx)("input",{type:"submit",value:"Enviar"}),"\n",(0,s.jsx)("input",{type:"reset",value:"Limpiar"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"nuevos-campos-en-html5",children:"Nuevos Campos en HTML5"}),"\n",(0,s.jsx)(n.p,{children:"Con la llegada de HTML5, se introdujeron nuevos tipos de entrada que facilitan la creaci\xf3n de formularios avanzados sin necesidad de scripts adicionales."}),"\n",(0,s.jsx)(n.h3,{id:"fechas",children:"Fechas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"date"}),": Calendario para seleccionar fecha."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"datetime-local"}),": Selecci\xf3n de fecha y hora."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"month"}),", ",(0,s.jsx)(n.strong,{children:"week"}),", ",(0,s.jsx)(n.strong,{children:"time"}),": Selecci\xf3n de mes, semana o hora."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<input type="date" name="fecha_nacimiento">\r\n<input type="time" name="hora_cita">\n'})}),"\n",(0,s.jsx)("input",{type:"date",name:"fecha_nacimiento"}),"\n",(0,s.jsx)("input",{type:"time",name:"hora_cita"}),"\n",(0,s.jsx)(n.h3,{id:"n\xfameros",children:"N\xfameros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"number"}),": Entrada con flechas para incrementar o reducir."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"range"}),": Selector deslizante."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<input type="number" name="cantidad" min="1" max="10">\r\n<input type="range" name="volumen" min="0" max="100">\n'})}),"\n",(0,s.jsx)("input",{type:"number",name:"cantidad",min:"1",max:"10"}),"\n",(0,s.jsx)("input",{type:"range",name:"volumen",min:"0",max:"100"}),"\n",(0,s.jsx)(n.h3,{id:"otros-tipos",children:"Otros tipos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"email"}),": Entrada validada para correos electr\xf3nicos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tel"}),": Entrada para n\xfameros de tel\xe9fono (teclado num\xe9rico en m\xf3viles)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"url"}),": Validaci\xf3n para URLs."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<label for="email">Email:</label>\r\n<input type="email" name="correo" required>\r\n<label for="page">P\xe1gina:</label>\r\n<input type="url" name="pagina">\r\n<label for="tlf">Tel\xe9fono:</label>\r\n<input type="tel" name="telefono">\n'})}),"\n",(0,s.jsx)("label",{for:"email",children:"Email:"}),"\n",(0,s.jsx)("input",{type:"email",name:"correo",required:!0}),"\n",(0,s.jsx)("label",{for:"page",children:"P\xe1gina:"}),"\n",(0,s.jsx)("input",{type:"url",name:"pagina"}),"\n",(0,s.jsx)("label",{for:"tlf",children:"Tel\xe9fono:"}),"\n",(0,s.jsx)("input",{type:"tel",name:"telefono"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"otros-elementos-importantes",children:"Otros Elementos Importantes"}),"\n",(0,s.jsx)(n.p,{children:"Adem\xe1s de los inputs, existen otros elementos esenciales para formularios:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<select>"}),": Desplegable de opciones con ",(0,s.jsx)(n.code,{children:"<option>"}),".\r\n",(0,s.jsx)(n.code,{children:"<textarea>"}),": \xc1rea de texto para entradas largas.\r\n",(0,s.jsx)(n.code,{children:"<datalist>"}),": Lista de sugerencias para un campo de texto."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<label for="country">Pa\xeds:</label>\r\n<select name="pais">\r\n  <option value="es">Espa\xf1a</option>\r\n  <option value="fr">Francia</option>\r\n  <option value="pt">Portugal</option>\r\n  <option value="it">Italia</option>\r\n</select>\r\n\r\n<label for="comments">Comentarios:</label>\r\n<textarea name="comentarios" rows="5" cols="30"></textarea>\r\n\r\n<label for="browser">Navegador:</label>\r\n<input list="navegadores" name="navegador">\r\n<datalist id="navegadores">\r\n  <option value="Chrome">\r\n  <option value="Firefox">\r\n  <option value="Safari">\r\n</datalist>\n'})}),"\n",(0,s.jsx)("label",{for:"country",children:"Pa\xeds:"}),"\n",(0,s.jsxs)("select",{name:"pais",children:[(0,s.jsx)("option",{value:"es",children:"Espa\xf1a"}),(0,s.jsx)("option",{value:"fr",children:"Francia"}),(0,s.jsx)("option",{value:"pt",children:"Portugal"}),(0,s.jsx)("option",{value:"it",children:"Italia"})]}),"\n",(0,s.jsx)("label",{for:"comments",children:"Comentarios:"}),"\n",(0,s.jsx)("textarea",{name:"comentarios",rows:"5",cols:"30"}),"\n",(0,s.jsx)("label",{for:"browser",children:"Navegador:"}),"\n",(0,s.jsx)("input",{list:"navegadores",name:"navegador"}),"\n",(0,s.jsxs)("datalist",{id:"navegadores",children:[(0,s.jsx)("option",{value:"Chrome"}),(0,s.jsx)("option",{value:"Firefox"}),(0,s.jsx)("option",{value:"Safari"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);