document.getElementById('exchangeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    // Simple exchange rate logic (for demonstration purposes)
    const exchangeRates = {
        BTC: { USD: 50000, EUR: 42000, GBP: 36000 },
        ETH: { USD: 4000, EUR: 3400, GBP: 2900 },
        LTC: { USD: 200, EUR: 170, GBP: 150 }
    };

    const result = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `You will get ${result} ${toCurrency}`;
});
