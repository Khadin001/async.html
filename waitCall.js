async function waitCall() {
    // Simuler un appel API avec une promesse qui se résout après 2 secondes
    const fetchData = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Données simulées de l\'API' });
        }, 2000);
    });

    try {
        // Attendre la réponse de l'API simulée
        const response = await fetchData();
        // Enregistrer les données
        console.log('Données reçues:', response.data);
    } catch (error) {
        console.error('Erreur lors de l\'obtention des données:', error);
    }
}

// Appeler la fonction waitCall
waitCall();