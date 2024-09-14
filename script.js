function calculateCost() {
    const mileage = parseFloat(document.getElementById('mileage').value);
    const petrolPrice = parseFloat(document.getElementById('petrolPrice').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const persons = parseInt(document.getElementById('persons').value);

    if (isNaN(mileage) || isNaN(petrolPrice) || isNaN(distance) || isNaN(persons) || persons <= 0) {
        alert("Please enter valid values!");
        return;
    }

    // Show loading
    document.getElementById('loading').classList.add('show');
    
    // Simulate a calculation delay
    setTimeout(() => {
        const fuelRequired = distance / mileage;
        const totalCost = fuelRequired * petrolPrice;
        const costPerPerson = totalCost / persons;

        // Hide loading
        document.getElementById('loading').classList.remove('show');

        document.getElementById('totalCost').innerHTML = `Total Fuel Cost: ₹${totalCost.toFixed(2)}`;
        document.getElementById('costPerPerson').innerHTML = `Cost Per Person: ₹${costPerPerson.toFixed(2)}`;

        // Show fuel efficiency tips based on mileage
        let fuelTip = '';
        if (mileage < 30) {
            fuelTip = "Your bike has low fuel efficiency. Consider upgrading or optimizing your ride.";
        } else if (mileage >= 30 && mileage <= 50) {
            fuelTip = "Your bike has decent fuel efficiency.";
        } else {
            fuelTip = "Your bike has excellent fuel efficiency!";
        }
        document.getElementById('fuelTip').innerHTML = fuelTip;

    }, 1000);  // 1 second delay to simulate loading time
}

function resetForm() {
    document.getElementById('mileage').value = '';
    document.getElementById('petrolPrice').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('persons').value = '';
    document.getElementById('totalCost').innerHTML = '';
    document.getElementById('costPerPerson').innerHTML = '';
    document.getElementById('fuelTip').innerHTML = '';
}
