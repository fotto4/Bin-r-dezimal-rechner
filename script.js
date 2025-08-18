  function convertBinaryToDecimal() {
            const binaryInput = document.getElementById('binaryInput');
            const resultDiv = document.getElementById('binaryToDecimalResult');
            const binary = binaryInput.value.trim();

            if (!/^[01]+$/.test(binary)) {
                resultDiv.textContent = 'Bitte geben Sie eine gültige Binärzahl ein (nur 0 und 1).';
                showResult(resultDiv);
                return;
            }

            const decimal = parseInt(binary, 2);
            resultDiv.textContent = `Dezimal: ${decimal}`;
            showResult(resultDiv);
        }

        function convertDecimalToBinary() {
            const decimalInput = document.getElementById('decimalInput');
            const resultDiv = document.getElementById('decimalToBinaryResult');
            const decimal = parseInt(decimalInput.value);

            if (isNaN(decimal) || decimal < 0) {
                resultDiv.textContent = 'Bitte geben Sie eine gültige positive Dezimalzahl ein.';
                showResult(resultDiv);
                return;
            }

            const binary = decimal.toString(2);
            resultDiv.textContent = `Binär: ${binary}`;
            showResult(resultDiv);
        }

        function showResult(element) {
            element.classList.remove('show');
            void element.offsetWidth; // Trigger reflow
            element.classList.add('show');
        }

        // Event-Listener für die Enter-Taste
        document.getElementById('binaryInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                convertBinaryToDecimal();
            }
        });

        document.getElementById('decimalInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                convertDecimalToBinary();
            }
        });