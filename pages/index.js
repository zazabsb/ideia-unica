import Link from 'next/link';

function Home(){
    return( 
        <div>            
            <h1>Home 3</h1>
            <Link href="/sobre">
                <a>Acessar página Sobre</a>            
            </Link>            

            <Link href="/tempo">
                <a>Acessar página Tempo</a>            
            </Link>            

        </div>    
    )
}

export default Home;