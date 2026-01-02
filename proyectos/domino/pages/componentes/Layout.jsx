
import Head from "next/head"
export default function Layout({children,title}){
    
    
    return <div>
<Head     >
<title>{title}</title>
</Head>

        {children}

        <h2>Layout</h2>
    </div>
}