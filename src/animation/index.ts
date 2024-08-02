export const animeProps = {
    initial: {opacity: 0, x: -100},
    whileInView: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
  }

  export const animePropsCard = {
    initial: { opacity: 0, y: 100 }, // Vindo de baixo
    whileInView: { opacity: 1, y: 0 }, // No lugar
    exit: { opacity: 0, y: 100 }, // Indo para baixo
  };
  
  export const animePropsImg = {
    initial: { opacity: 0, y: 100, scale: 0.5 }, // Vindo de baixo e começando pequeno
    whileInView: { opacity: 1, y: 0, scale: 1 }, // No lugar e tamanho normal
    exit: { opacity: 0, y: 100, scale: 0.5 }, // Indo para baixo e diminuindo
  };

    export const animePropsRigth = {
      initial: { opacity: 0, x: 100, scale: 0.5 }, // Vindo do lado direito e começando pequeno
      whileInView: { opacity: 1, x: 0, scale: 1 }, // No lugar e tamanho normal
      exit: { opacity: 0, x: 100, scale: 0.5 }, // Indo para o lado direito e diminuindo
    };
    
  export const animePropsImgGalery = {
    initial: { opacity: 0, scale: 0.5 }, // Vindo de baixo e começando pequeno
    animate: { opacity: 1, scale: 1 }, // No lugar e tamanho normal
    exit: { opacity: 1, scale: 1 }, // Manter as propriedades finais ao sair
  };

  export const animePropsWidth = {
    initial: { width: 0 }, 
    animate: { width: "100%" }, 
    exit: { width: 0 },
  };
  