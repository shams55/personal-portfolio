import NavBar from "./NavBar";


export default function Layout({ children }){
   return(
    <>
        <NavBar />
        <main>
            <div>
                {children}
            </div>
        </main>
    </>
   )
}