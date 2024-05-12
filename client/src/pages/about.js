import React from 'react';
import Img from '../img/img.png';
import Video from '../img/video.mp4';
const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <div className="px-4">
            <h1 className="text-3xl font-bold mb-4 text-black text-center">About Us</h1>
            <p className="text-lg text-gray-700 mb-4 border border-accent-hover">
               <span className='text-2xl font-semibold'>2IMG:</span> est une entreprise Marocaine spécialiste de l’Isolation Thermique Froid et Chaud par l’Extérieur et intérieur en utilisant plusieurs matériaux (Polyuréthane, Laine de roche,Coquille,Calcium Silicate ....) et dans plusieurs milieux Industriels.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Nous proposons des solutions complètes d’Isolation Thermique par l’Extérieur et Intérieur, de qualité, pour le neuf et la rénovation énergétique, adaptées aux besoins des particuliers et des professionnels.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              En utilisant la projection ou l’injection d’une mousse de polyuréthane dans le cas d’Isolation thermique dans les milieux qui nécessitent la présence d’une basse température comme le cas des bacs de stockage d’ammoniac, les Bâtiments, domaine d’aviculture,…
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Et en Utilisant la laine de roche, coquille ou bien calcium silicate dans le cas d’isolation thermique des Equipement qui nécessitent de sauvegarder une haute température comme le cas des Bacs de stockage sulfurique, phosphoriques, produits industriels,…..
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Comme le montre la vidéo ci-dessous:
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img className="w-full h-full rounded-full" src={Img} alt="About Us" />
        </div>
        <div className="container mx-auto py-8">
          <video className="w-full" controls>
            <source src={Video} type="video/mp4" />
               Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
