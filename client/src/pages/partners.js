import React from 'react';
import Img from '../img/img.png';
import Ocp from '../img/ocp.png';
import Fabrica from '../img/fabrica.png';
import Soyadiv from '../img/soyadiv.jpeg';
import Jesa  from '../img/jesa.webp';
import Solprisol from '../img/solprisol.jpeg';
const Partners = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Partners</h2>
        <div className=" gap-24 flex flex-row border border-accent justify-center
        lg-flex-col items-center">
          <a href='https://www.ocpgroup.ma/fr' target='blank'>
            <img className="w-40 h-40" src={Ocp} alt="Partner 1" />
          </a>
          <img className="w-40 h-40 rounded-full" src={Fabrica} alt="Partner 2" />
          <img className="w-40 h-40 rounded-full" src={Soyadiv} alt="Partner 3" />
          <a href='https://www.jesagroup.com/' target='blank'>
            <img className="w-40 h-40 rounded-full" src={Jesa} alt="Partner 4" />
          </a>
          <img className="w-40 h-40 rounded-full" src={Solprisol} alt="Partner 4" />
        </div>
      </div>
      <div className="container mx-auto py-8 flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <div className="px-4">
            <p className="text-lg text-gray-700 mb-4">
            Nous avons plusieurs références à OCP (office chérifiens des phosphates) au Maroc, et avec plusieurs d’autres partenaires Internationales comme Jacobs Engineering, FURNACE FABRICA,.. et Nationales comme PROTECOR,SOLPRISOL,SEDRIC,…
            </p>
            <p className="text-lg text-gray-700 mb-4">
            Notre Entreprise intervient également en maintenance Mécanique sur site.
Elle conçoit et réalise des ensembles et sous-ensembles de maintenance préventive et corrective des machines Industrielles(Pompe,turbine,ventilateur,godets,alternateur, broyeurs….) .
            </p>
            <p className="text-lg text-gray-700 mb-4">
            Nous sommes spécialisés dans la conception, et l’automate programmable des Portes automatiques,Bâches de Navires,…
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We value your trust and are committed to protecting your privacy and data. We use secure payment gateways and adhere to industry best practices to safeguard your information.
            </p>
            <p className="text-lg text-gray-700 mb-4">
            Nous intervenons sur tout le territoire Marocaine.
            </p>
            <p className="text-lg text-gray-700 mb-4">
            Nous avons plusieurs références à OCP (office chérifiens des phosphates) au Maroc, et avec plusieurs d’autres partenaires Internationales comme Jacobs Engineering, FURNACE FABRICA,.. et Nationales comme PROTECOR,SOLPRISOL,SEDRIC,…
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img className="w-full h-auto rounded-full" src={Img} alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default Partners;

