export default function Navbar(){
  return(
    <>
    <div className="navbar flex w-full h-20 p-2 items-center justify-between">
      <div className="logoarea ml-8 text-3xl">
        <span>The<span className="text-violet-600">Whey</span> </span>
        </div>
      <div className="searchbar items-center text-center">
        <input type="text" className="h-6 w-[20rem]"/></div>
      <div className="rightarea ">
        <ul className="flex flex-row items-center mr-8">
          <li className="ml-2"><a href="">  
              <span>Entrar</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>      
            </a>
          </li>
          <li className="ml-3">
            <a href="">
              <span>Carrinho</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </a>
          </li>
          <li className=""><a href=""></a></li>  
        </ul>
      </div>
    </div>
    </>
  );
}