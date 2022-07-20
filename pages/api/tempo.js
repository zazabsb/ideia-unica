async function  tempo(request, response){
    const dynamicDate = new Date();
    const apiSecret = process.env.VARIAVEL_SECRET

    //const subscribersResponse = await fetch("https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa21TNHdjUEN3azN1bTFtYUxXVTRZdHlvaFRNZ3xBQ3Jtc0tsSmFlOFl0bXB3Rms1R0l1bVRYQnY0aVpJbmFiTERlZ29KYjhWUGJrOVdPeUc5NTBnMFJEVkc3UnRWYzU1VWtNcGdaV2lXaXYweHl0ZmFEcjJtblpxa29OdmJRSnpvNkNfazUwS2Q2OEI2bXA5a1Y4TQ&q=https%3A%2F%2Ffilipedeschamps.com.br%2Fnewsletter&v=f7JWDLFhR_c")
    //const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = 130;// subscribersResponseJson.total_subscribers;
    //inscritos = 130
    // adicionando cache de 10 segundos vercel
    response.setHeader('Cache-Control','s-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos : inscritos,
        variavelSecret : apiSecret
    })
}

export default tempo;