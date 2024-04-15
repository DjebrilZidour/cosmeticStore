const About = () => {
  return (
    <section className=" flex-col justify-center items-center gap-4 m-4 p-4   md:flex-reverse">

      <div className="w-full flex justify-center items-center md:w-1/2">
        <img
          className="rounded-full w-1/2"
          src="https://i.ibb.co/Mp4BBHb/logo-Djazirat-El-Marra-1.png"
          alt=""
        />
      </div>

      <div className="flex justify-center items-start flex-col w-full p-8 gap-8 lg:w-1/2">
        <h1 className="text-3xl text-red-500 capitalize">why chose us</h1>
        <p className="w-full">
          Bienvenue sur Djazirat El Marra, votre destination ultime pour les
          produits de soins de la peau de qualité supérieure en Algérie. Chez
          Djazirat El Marra, nous croyons au pouvoir des soins de la peau pour
          transformer et sublimer votre beauté naturelle. Notre sélection
          soigneusement élaborée de produits de soins de la peau de haute
          qualité provenant de marques renommées telles que The Ordinary, La
          Roche-Posay, Cerave et Avene est conçue pour répondre à tous vos
          besoins en matière de soins de la peau. Avec un engagement envers
          l'excellence, nous nous efforçons de fournir à nos clients les
          meilleures solutions de soins de la peau adaptées à leurs
          préoccupations individuelles. Que vous cherchiez à combattre l'acné, à
          hydrater la peau sèche ou à obtenir un teint éclatant, nous avons ce
          qu'il vous faut. Chez Djazirat El Marra, la satisfaction du client est
          notre priorité absolue. Nous proposons une livraison rapide et fiable
          dans les 58 wilayas d'Algérie, garantissant que vous recevez vos
          produits de soins de la peau de manière pratique et sans tracas. Notre
          équipe est dévouée à fournir un service client exceptionnel et à vous
          assister à chaque étape du processus. Rejoignez-nous dans un voyage
          vers une peau plus saine et plus heureuse avec Djazirat El Marra.
          Explorez notre large gamme de produits de soins de la peau, découvrez
          votre routine de soins de la peau parfaite et lancez-vous sur le
          chemin d'une peau éclatante dès aujourd'hui
        </p>
        <button className="border-2 p-4">Back to shop</button>
      </div>
     
    </section>
  );
};
export default About;
