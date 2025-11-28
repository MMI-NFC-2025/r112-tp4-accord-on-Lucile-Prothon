// *** ACCORDEON ***
document.addEventListener('DOMContentLoaded', () => {
    const summaries = document.querySelectorAll('details > summary');})

    function toggleDetails(summary) {
        const details = summary.closest('details');
        const allDetails = document.querySelectorAll('details');

        // fermer les autres
        allDetails.forEach(d => {
            if (d !== details) d.open = false;
        });
    

        // basculer celui cliqué
        details.open = !details.open;
    }

    summaries.forEach(summary => {
        summary.addEventListener('click', (e) => {
            e.preventDefault(); // on gère l'ouverture nous-mêmes
            toggleDetails(e.currentTarget);
        });
    })