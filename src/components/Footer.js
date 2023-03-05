import React from 'react'
import { useRef } from 'react'
import emailjs from "emailjs-com"
import "./sass/Footer.scss"
import { menuList } from '../List/menuList'


export default function Footer() {
   const form = useRef()
  const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });


  }
  return (
    <div className="footerPage">
      <div className="form">
      <div className="formInner">
        <h5>Feedback</h5>
       <form ref={form} submit={sendEmail}>
       <input type="text" name="user_name" placeholder="Enter Full Name" required/><br/><br/>
       <input type="email" name="user_email" placeholder="Enter email" require/><br/><br/>
       <textarea  name="message"/><br/><br/>
       <input type="submit" value="send" className="submitBtn"/>
      </form>
      </div>
    </div>

    <div className="contentItem">
        <div className="footerLogo">
         <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="64px" height="64px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" fill="#000000">
         <g id="SVGRepo_bgCarrier" strokeWidth={0} />
         <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
         <g id="SVGRepo_iconCarrier"> <g id="cook_book"> <g> <rect x="46.816" y="460.34" fill="#F4F6F9" width="422.508" height="36.562" /> </g> <path fill="#E5E8EC" d="M458.668,479.996c0,5.906,4.766,10.672,10.656,10.672V469.34 C463.434,469.34,458.668,474.121,458.668,479.996z" /> <g> <path fill="#EC5564" d="M62.535,469.449h406.789c5.89,0,10.671-4.766,10.671-10.672V10.677c0-5.891-4.781-10.672-10.671-10.672 H74.676c-23.562,0-42.671,19.109-42.671,42.671v0.016v394.867v21.219v21.219c0,17.687,14.327,31.999,31.999,31.999h405.32l0,0 c5.89,0,10.671-4.781,10.671-10.656c0-5.906-4.781-10.671-10.671-10.671h-0.016H64.004c-5.875,0-10.672-4.781-10.672-10.672 C53.332,474.621,57.348,470.168,62.535,469.449z" /> </g> <path fill="#E5E8EC" d="M170.783,362.67V250.953l-6.562-2.734c-25.171-10.5-41.452-34.921-41.452-62.187 c0-37.14,30.218-67.358,67.358-67.358c23.249,0,23.624-16.531,36.062,3.156l24.827-12l14.172,2.344 c12.437-19.703,33.718,6.5,56.968,6.5c37.14,0,67.342,30.218,67.342,67.358c0,27.266-16.266,51.687-41.437,62.187l-6.562,2.734 V362.67H170.783z" /> <g> <path fill="#CBD0D8" d="M322.155,108.003c-7.359,0-14.469,1.031-21.219,2.938c-12.484-9.375-27.984-14.938-44.796-14.938 s-32.327,5.562-44.796,14.938c-6.75-1.906-13.859-2.938-21.218-2.938c-43.094,0-78.015,34.937-78.015,78.029 c0,32.453,19.812,60.265,47.999,72.03v115.279h192.043V258.062c28.202-11.766,48.015-39.578,48.015-72.03 C400.169,142.939,365.248,108.003,322.155,108.003z M343.952,238.375l-13.125,5.469v14.219v93.936h-0.016 c0-5.875-4.781-10.656-10.672-10.656s-10.672,4.781-10.672,10.656h-10.656c0-5.875-4.781-10.656-10.672-10.656 s-10.672,4.781-10.672,10.656h-10.655c0-5.875-4.781-10.656-10.672-10.656s-10.672,4.781-10.672,10.656h-10.655 c0-5.875-4.781-10.656-10.672-10.656s-10.672,4.781-10.672,10.656h-10.656c0-5.875-4.781-10.656-10.672-10.656 c-5.89,0-10.671,4.781-10.671,10.656h-0.016v-93.936v-14.219l-13.125-5.469c-21.188-8.843-34.89-29.39-34.89-52.343 c0-31.265,25.421-56.687,56.687-56.687c1.25,0,2.499,0.047,3.733,0.125c-7.515,11.344-12.015,24.859-12.358,39.421 c-0.109,0.578-0.172,1.172-0.172,1.781c0,5.891,4.781,10.671,10.671,10.671c5.891,0,10.672-4.781,10.672-10.671h0.141 c0-29.406,23.922-53.327,53.327-53.327c28.937,0,52.546,23.156,53.296,51.921c-0.062,0.469-0.109,0.922-0.109,1.406 c0,5.891,4.781,10.671,10.672,10.671s10.672-4.781,10.672-10.671h0.141c0-15.234-4.578-29.39-12.406-41.203 c1.25-0.078,2.484-0.125,3.75-0.125c31.249,0,56.686,25.422,56.686,56.687C378.841,208.985,365.139,229.532,343.952,238.375z" /> <path fill="#CBD0D8" d="M224.001,224c0-5.891-4.781-10.656-10.672-10.656S202.673,218.11,202.673,224v0.016v53.328l0,0 c0,5.89,4.766,10.655,10.656,10.655s10.672-4.766,10.672-10.655l0,0v-53.328V224z" /> <path fill="#CBD0D8" d="M266.672,224c0-5.891-4.781-10.656-10.672-10.656S245.328,218.11,245.328,224v0.016v53.328l0,0 c0,5.89,4.781,10.655,10.672,10.655s10.672-4.766,10.672-10.655l0,0v-53.328V224z" /> <path fill="#CBD0D8" d="M309.327,224c0-5.891-4.766-10.656-10.656-10.656S287.999,218.11,287.999,224v0.016v53.328l0,0 c0,5.89,4.781,10.655,10.672,10.655s10.656-4.766,10.656-10.655l0,0v-53.328V224z" /> </g> </g> </g>
         </svg>
        </div>

      <div className="footContent">
        <div className="footList">
       <ul>
        {menuList.map((menuLIsts , index ) =>{
        return (
        <li key={index}><a href={menuLIsts.url}>{menuLIsts.title}</a></li>
        )})}
    </ul>
 </div>

{/* Developer Contact */}
  <div className="contact">
  <a href="/" > <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style={{enableBackground: 'new 0 0 32 32'}} xmlSpace="preserve">
  <g><path d="M17.303,14.365c0.012-0.015,0.023-0.031,0.031-0.048v0.048H17.303z M32,0v32H0V0H32L32,0z M9.925,12.285H5.153v14.354
		h4.772V12.285z M10.237,7.847c-0.03-1.41-1.035-2.482-2.668-2.482c-1.631,0-2.698,1.072-2.698,2.482
		c0,1.375,1.035,2.479,2.636,2.479h0.031C9.202,10.326,10.237,9.222,10.237,7.847z M27.129,18.408c0-4.408-2.355-6.459-5.494-6.459
		c-2.531,0-3.664,1.391-4.301,2.368v-2.032h-4.77c0.061,1.346,0,14.354,0,14.354h4.77v-8.016c0-0.434,0.031-0.855,0.157-1.164
		c0.346-0.854,1.132-1.746,2.448-1.746c1.729,0,2.418,1.314,2.418,3.246v7.68h4.771L27.129,18.408L27.129,18.408z" />
    </g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
 </a>
 
 <a href="/">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30.667px" height="30.667px" viewBox="0 0 30.667 30.667" style={{enableBackground: 'new 0 0 30.667 30.667'}} xmlSpace="preserve">
  <g><path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
		c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
		c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
		c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
		c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
		c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
		c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
		c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
		c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
		c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
		C23.307,19.268,23.307,18.533,23.214,18.38z" />
  </g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
</a>

  <a href="/">  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034-.786.417-1.569.703-2.351.861-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078-.715.717-1.076 1.588-1.076 2.605 0 .309.039.585.117.819-3.076-.105-5.622-1.381-7.628-3.837-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388.549.676 1.254 1.107 2.115 1.291-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841.625.472 1.344.721 2.152.743-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038 1.697 1.102 3.586 1.649 5.676 1.649 2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974.784-1.564 1.172-3.192 1.172-4.892v-.468c.758-.57 1.371-1.212 1.84-1.921-.68.293-1.383.492-2.11.593z"/></svg></a>
     </div>
     </div>
   </div>
</div>
  )
}
