export const formatarURLs = (lista) => {
    console.log('Chamando formatarURLs');
    return lista.map(item => {
      return {
        ...item,
        Url: truncarURL(item.Url),
      };
    });
  };
  
  const truncarURL = (url) => {
    console.log('Chamando truncarURL');
    const comprimentoMaximo = 50;
    return url.length > comprimentoMaximo ? url.slice(0, comprimentoMaximo) + '...' : url;
  };
  