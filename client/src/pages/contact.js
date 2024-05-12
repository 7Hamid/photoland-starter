import React from 'react';

const Contact = () => {
    return (
      <div className="max-w-lg mx-auto">
        <h2 className="text-center text-2xl font-bold mb-4">Contact Us</h2>
        <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nom"
              type="text"
              placeholder="Votre nom"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prenom">
              Prénom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="prenom"
              type="text"
              placeholder="Votre prénom"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Votre email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Numéro de téléphone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Votre numéro de téléphone"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sujet">
            Sujet
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sujet"
            type="text"
            placeholder="Sujet de votre message"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Décrivez votre projet"
            rows="4"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Envoyer
          </button>
        </div>
      </form>
      </div>
    );
  };

export default Contact;
